/* tslint:disable */
/* eslint-disable */
/**
 * PlanQK Platform OpenAPI definition
 * OpenAPI definition for the Platform and Ecosystem for Quantum-assisted Artificial Intelligence Platform
 *
 * The version of the OpenAPI document: v1
 * Contact: info@stoneone.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {exists} from '../runtime'
import type {DataPoolRef} from './DataPoolRef'
import {DataPoolRefFromJSON, DataPoolRefToJSON} from './DataPoolRef'
import type {ServiceDefinitionDto} from './ServiceDefinitionDto'
import {ServiceDefinitionDtoFromJSON, ServiceDefinitionDtoToJSON} from './ServiceDefinitionDto'

/**
 *
 * @export
 * @interface JobDto
 */
export interface JobDto {
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    status?: JobDtoStatusEnum;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    inputData?: string;
    /**
     *
     * @type {DataPoolRef}
     * @memberof JobDto
     */
    inputDataRef?: DataPoolRef;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    parameters?: string;
    /**
     *
     * @type {DataPoolRef}
     * @memberof JobDto
     */
    parametersRef?: DataPoolRef;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    result?: string;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    startedAt?: string;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    endedAt?: string;
    /**
     *
     * @type {boolean}
     * @memberof JobDto
     */
    persistResult?: boolean;
    /**
     *
     * @type {string}
     * @memberof JobDto
     */
    resultDataPoolId?: string;
    /**
     *
     * @type {ServiceDefinitionDto}
     * @memberof JobDto
     */
    serviceDefinition?: ServiceDefinitionDto;
}


/**
 * @export
 */
export const JobDtoStatusEnum = {
    Unknown: 'UNKNOWN',
    Pending: 'PENDING',
    Running: 'RUNNING',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Cancelled: 'CANCELLED'
} as const;
export type JobDtoStatusEnum = typeof JobDtoStatusEnum[keyof typeof JobDtoStatusEnum];


/**
 * Check if a given object implements the JobDto interface.
 */
export function instanceOfJobDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JobDtoFromJSON(json: any): JobDto {
    return JobDtoFromJSONTyped(json, false);
}

export function JobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'inputData': !exists(json, 'inputData') ? undefined : json['inputData'],
        'inputDataRef': !exists(json, 'inputDataRef') ? undefined : DataPoolRefFromJSON(json['inputDataRef']),
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'parametersRef': !exists(json, 'parametersRef') ? undefined : DataPoolRefFromJSON(json['parametersRef']),
        'result': !exists(json, 'result') ? undefined : json['result'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'startedAt': !exists(json, 'startedAt') ? undefined : json['startedAt'],
        'endedAt': !exists(json, 'endedAt') ? undefined : json['endedAt'],
        'persistResult': !exists(json, 'persistResult') ? undefined : json['persistResult'],
        'resultDataPoolId': !exists(json, 'resultDataPoolId') ? undefined : json['resultDataPoolId'],
        'serviceDefinition': !exists(json, 'serviceDefinition') ? undefined : ServiceDefinitionDtoFromJSON(json['serviceDefinition']),
    };
}

export function JobDtoToJSON(value?: JobDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'status': value.status,
        'inputData': value.inputData,
        'inputDataRef': DataPoolRefToJSON(value.inputDataRef),
        'parameters': value.parameters,
        'parametersRef': DataPoolRefToJSON(value.parametersRef),
        'result': value.result,
        'createdAt': value.createdAt,
        'startedAt': value.startedAt,
        'endedAt': value.endedAt,
        'persistResult': value.persistResult,
        'resultDataPoolId': value.resultDataPoolId,
        'serviceDefinition': ServiceDefinitionDtoToJSON(value.serviceDefinition),
    };
}

