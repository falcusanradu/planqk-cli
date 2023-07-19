import {ux} from '@oclif/core'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import YAML from 'yaml'
import {AbstractCommand} from '../../model/command'
import ManagedServiceConfig, {GpuType, Runtime} from '../../model/managed-service-config'
import {writeServiceConfig} from '../../service/service-config-service'
import {randomName} from '../../helper/random-name'
import {downloadArchive, extractTemplate, getReadmeTemplate, getTemplateVariables} from '../../helper/coding-template'
import AdmZip from 'adm-zip'

export default class Init extends AbstractCommand {
  static description = 'Initialize a PlanQK project.'

  static examples = [
    '$ planqk init',
  ]

  async run(): Promise<void> {
    let name = randomName()
    const responses: any = await inquirer.prompt([
      {
        name: 'name',
        message: `Service name (${name}):`,
        type: 'input',
      },
      {
        name: 'description',
        message: 'Description (optional):',
        type: 'input',
      },
      {
        name: 'template',
        message: 'Choose a coding template',
        type: 'list',
        choices: [
          {
            name: 'Qiskit Starter (Simulator)',
            value: {path: 'python/python-starter-qiskit', runtime: Runtime.PYTHON_TEMPLATE},
          },
          {
            name: 'IonQ Starter (Premium Tier)',
            value: {path: 'python/python-starter-ionq', runtime: Runtime.PYTHON_TEMPLATE},
          },
          {
            name: 'D-Wave Leap Starter (own access token required)',
            value: {path: 'python/python-starter-dwave', runtime: Runtime.PYTHON_TEMPLATE},
          },
          {
            name: 'Docker Go Starter',
            value: {path: 'docker/docker-go', runtime: Runtime.DOCKER},
          },
          {
            name: 'Docker Node Starter',
            value: {path: 'docker/docker-node', runtime: Runtime.DOCKER},
          },
          {
            name: 'Docker Python Starter',
            value: {path: 'docker/docker-python', runtime: Runtime.DOCKER}
            ,
          },
          {
            name: 'Docker GPU Starter (Python/Qiskit)',
            value: {path: 'docker/docker-gpu-qiskit', runtime: Runtime.DOCKER},
          },
          {name: 'None (Creates planqk.json only)', value: undefined},
        ],
      },
      {
        name: 'cpu',
        message: 'Choose your vCPU configuration',
        type: 'list',
        choices: [
          {name: '0.5 vCPU', value: 0.5},
          {name: '1 vCPU', value: 1},
          {name: '2 vCPU (Premium Tier)', value: 2},
          {name: '4 vCPU (Premium Tier)', value: 4},
          {name: '6 vCPU (Premium Tier)', value: 6},
          {name: '8 vCPU (Premium Tier)', value: 8},
          {name: '10 vCPU (Premium Tier)', value: 10},
          {name: '12 vCPU (Premium Tier)', value: 12},
          {name: '14 vCPU (Premium Tier)', value: 14},
          {name: '16 vCPU (Premium Tier)', value: 16},
          {name: '18 vCPU (Premium Tier)', value: 18},
          {name: '20 vCPU (Premium Tier)', value: 20},
        ],
      },
      {
        name: 'memory',
        message: 'Choose your memory configuration',
        type: 'list',
        choices: [
          {name: '1 GB', value: 1},
          {name: '2 GB', value: 2},
          {name: '3 GB', value: 3},
          {name: '4 GB', value: 4},
          {name: '6 GB (Premium Tier)', value: 6},
          {name: '8 GB (Premium Tier)', value: 8},
          {name: '10 GB (Premium Tier)', value: 10},
          {name: '12 GB (Premium Tier)', value: 12},
          {name: '14 GB (Premium Tier)', value: 14},
          {name: '16 GB (Premium Tier)', value: 16},
          {name: '18 GB (Premium Tier)', value: 18},
          {name: '20 GB (Premium Tier)', value: 20},
          {name: '22 GB (Premium Tier)', value: 22},
          {name: '24 GB (Premium Tier)', value: 24},
          {name: '28 GB (Premium Tier)', value: 28},
          {name: '30 GB (Premium Tier)', value: 30},
          {name: '32 GB (Premium Tier)', value: 32},
        ],
      },
      {
        name: 'gpu',
        message: 'Choose your GPU configuration',
        type: 'list',
        choices: [
          {name: 'No GPU support', value: undefined},
          {name: 'NVIDIA® T4 (Premium Tier)', value: GpuType.NVIDIA_TESLA_T4},
          {name: 'NVIDIA® V100 (Premium Tier)', value: GpuType.NVIDIA_TESLA_V100},
        ],
      },
    ])

    name = responses.name || name
    const destination = path.join(process.cwd(), name)

    if (fs.existsSync(destination)) {
      ux.error(`Destination ${destination} already exists. Please choose another name.`)
    }

    const serviceConfig: ManagedServiceConfig = {
      name: name,
      description: responses.description,
      resources: {
        cpu: responses.cpu,
        memory: responses.memory,
      },
      runtime: responses.template ? responses.template.runtime : Runtime.PYTHON_TEMPLATE,
    }

    if (responses.gpu) {
      serviceConfig!.resources!.gpu = {
        type: responses.gpu,
        count: 1,
      }
    }

    fs.mkdirSync(destination)

    writeServiceConfig(destination, serviceConfig)

    // load template from GitHub
    if (responses.template) {
      const zip = await downloadArchive()
      extractTemplate(zip, responses.template.path, destination)

      this.updateEnvironmentYaml(name)
      this.updateReadme(zip, responses.template.path, name)
    }

    this.log('\u{1F389} Initialized project. Happy hacking!')

    this.log('\n Next steps:')
    this.log(`  \u{2022} cd ${name}`)
    this.log('  \u{2022} planqk up   (deploys your code as a service to the PlanQK platform)')
    this.log('  \u{2022} planqk run  (executes your service using the data from the input directory)')
    this.log('')
  }

  updateEnvironmentYaml(serviceName: string): void {
    const destination = path.join(process.cwd(), serviceName, 'environment.yml')
    // skip if there is no environment.yml
    if (!fs.existsSync(destination)) {
      return
    }

    const data = fs.readFileSync(destination, 'utf8')
    const yamlObject = YAML.parseDocument(data)

    yamlObject.set('name', serviceName)

    const updatedContent = YAML.stringify(yamlObject)
    fs.writeFileSync(destination, updatedContent)
  }

  updateReadme(zip: AdmZip, templatePath: string, projectName: string): void {
    const readmeFileLocation = path.join(process.cwd(), projectName, 'README.md')
    // skip if there is a README.md
    if (fs.existsSync(readmeFileLocation)) {
      return
    }

    let readmeContent = getReadmeTemplate(zip, templatePath)

    const variables = getTemplateVariables(zip, templatePath)
    // skip if there are no variables
    if (!variables) {
      return
    }

    // replace variables
    for (const variable of variables) {
      readmeContent = readmeContent.replace(new RegExp('\\${' + variable.name + '}', 'g'), variable.value)
    }

    // replace global variables
    readmeContent = readmeContent.replace(/\${PROJECT_NAME}/g, projectName)

    fs.writeFileSync(readmeFileLocation, readmeContent)
  }
}
