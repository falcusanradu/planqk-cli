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
 * @interface CreateInternalSubscriptionRequest
 */
export interface CreateInternalSubscriptionRequest {
    /**
     *
     * @type {string}
     * @memberof CreateInternalSubscriptionRequest
     */
    applicationId?: string;
    /**
     *
     * @type {string}
     * @memberof CreateInternalSubscriptionRequest
     */
    serviceId?: string;
}

/**
 * Check if a given object implements the CreateInternalSubscriptionRequest interface.
 */
export function instanceOfCreateInternalSubscriptionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateInternalSubscriptionRequestFromJSON(json: any): CreateInternalSubscriptionRequest {
    return CreateInternalSubscriptionRequestFromJSONTyped(json, false);
}

export function CreateInternalSubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInternalSubscriptionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'serviceId': !exists(json, 'serviceId') ? undefined : json['serviceId'],
    };
}

export function CreateInternalSubscriptionRequestToJSON(value?: CreateInternalSubscriptionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'applicationId': value.applicationId,
        'serviceId': value.serviceId,
    };
}
