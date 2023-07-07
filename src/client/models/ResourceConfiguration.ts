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
import {
  CpuConfigurationFromJSONTyped,
  GpuConfigurationFromJSONTyped,
  MemoryConfigurationFromJSONTyped,
  PlatformManagedConfigurationFromJSONTyped,
} from './'

/**
 *
 * @export
 * @interface ResourceConfiguration
 */
export interface ResourceConfiguration {
    /**
     *
     * @type {string}
     * @memberof ResourceConfiguration
     */
    type?: string;
}

/**
 * Check if a given object implements the ResourceConfiguration interface.
 */
export function instanceOfResourceConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResourceConfigurationFromJSON(json: any): ResourceConfiguration {
    return ResourceConfigurationFromJSONTyped(json, false);
}

export function ResourceConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'CpuConfiguration') {
            return CpuConfigurationFromJSONTyped(json, true);
        }
        if (json['type'] === 'GpuConfiguration') {
            return GpuConfigurationFromJSONTyped(json, true);
        }
        if (json['type'] === 'MemoryConfiguration') {
            return MemoryConfigurationFromJSONTyped(json, true);
        }
        if (json['type'] === 'PlatformManagedConfiguration') {
            return PlatformManagedConfigurationFromJSONTyped(json, true);
        }
    }
    return {

        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ResourceConfigurationToJSON(value?: ResourceConfiguration | null): any {
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

