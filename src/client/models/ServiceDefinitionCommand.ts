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

/**
 *
 * @export
 * @interface ServiceDefinitionCommand
 */
export interface ServiceDefinitionCommand {
    /**
     *
     * @type {string}
     * @memberof ServiceDefinitionCommand
     */
    type?: ServiceDefinitionCommandTypeEnum;
}


/**
 * @export
 */
export const ServiceDefinitionCommandTypeEnum = {
    Unpublish: 'UNPUBLISH',
    UnpublishForce: 'UNPUBLISH_FORCE'
} as const;
export type ServiceDefinitionCommandTypeEnum = typeof ServiceDefinitionCommandTypeEnum[keyof typeof ServiceDefinitionCommandTypeEnum];


/**
 * Check if a given object implements the ServiceDefinitionCommand interface.
 */
export function instanceOfServiceDefinitionCommand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceDefinitionCommandFromJSON(json: any): ServiceDefinitionCommand {
    return ServiceDefinitionCommandFromJSONTyped(json, false);
}

export function ServiceDefinitionCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceDefinitionCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ServiceDefinitionCommandToJSON(value?: ServiceDefinitionCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'type': value.type,
    };
}
