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

/**
 *
 * @export
 * @interface CreateJobRequest
 */
export interface CreateJobRequest {
    /**
     *
     * @type {string}
     * @memberof CreateJobRequest
     */
    inputData?: string;
    /**
     *
     * @type {DataPoolRef}
     * @memberof CreateJobRequest
     */
    inputDataRef?: DataPoolRef;
    /**
     *
     * @type {string}
     * @memberof CreateJobRequest
     */
    parameters?: string;
    /**
     *
     * @type {DataPoolRef}
     * @memberof CreateJobRequest
     */
    parametersRef?: DataPoolRef;
    /**
     *
     * @type {boolean}
     * @memberof CreateJobRequest
     */
    persistResult?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateJobRequest
     */
    serviceDefinitionId: string;
}

/**
 * Check if a given object implements the CreateJobRequest interface.
 */
export function instanceOfCreateJobRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serviceDefinitionId" in value;

    return isInstance;
}

export function CreateJobRequestFromJSON(json: any): CreateJobRequest {
    return CreateJobRequestFromJSONTyped(json, false);
}

export function CreateJobRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateJobRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'inputData': !exists(json, 'inputData') ? undefined : json['inputData'],
        'inputDataRef': !exists(json, 'inputDataRef') ? undefined : DataPoolRefFromJSON(json['inputDataRef']),
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'parametersRef': !exists(json, 'parametersRef') ? undefined : DataPoolRefFromJSON(json['parametersRef']),
        'persistResult': !exists(json, 'persistResult') ? undefined : json['persistResult'],
        'serviceDefinitionId': json['serviceDefinitionId'],
    };
}

export function CreateJobRequestToJSON(value?: CreateJobRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'inputData': value.inputData,
        'inputDataRef': DataPoolRefToJSON(value.inputDataRef),
        'parameters': value.parameters,
        'parametersRef': DataPoolRefToJSON(value.parametersRef),
        'persistResult': value.persistResult,
        'serviceDefinitionId': value.serviceDefinitionId,
    };
}

