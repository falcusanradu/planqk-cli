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
 * @interface ProductDto
 */
export interface ProductDto {
    /**
     *
     * @type {string}
     * @memberof ProductDto
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof ProductDto
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ProductDto
     */
    unitLabel?: string;
    /**
     *
     * @type {number}
     * @memberof ProductDto
     */
    amountMajor?: number;
    /**
     *
     * @type {string}
     * @memberof ProductDto
     */
    currency?: string;
    /**
     *
     * @type {string}
     * @memberof ProductDto
     */
    type?: ProductDtoTypeEnum;
}


/**
 * @export
 */
export const ProductDtoTypeEnum = {
    Api: 'API',
    Cpu: 'CPU',
    Memory: 'MEMORY',
    Ionq1GateShot: 'IONQ_1_GATE_SHOT',
    Ionq2GateShot: 'IONQ_2_GATE_SHOT',
    BracketSv1: 'BRACKET_SV1',
    BracketDm1: 'BRACKET_DM1',
    BracketTn1: 'BRACKET_TN1',
    Custom: 'CUSTOM',
    GpuNvidiaT4: 'GPU_NVIDIA_T4',
    GpuNvidiaV100: 'GPU_NVIDIA_V100'
} as const;
export type ProductDtoTypeEnum = typeof ProductDtoTypeEnum[keyof typeof ProductDtoTypeEnum];


/**
 * Check if a given object implements the ProductDto interface.
 */
export function instanceOfProductDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductDtoFromJSON(json: any): ProductDto {
    return ProductDtoFromJSONTyped(json, false);
}

export function ProductDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unitLabel': !exists(json, 'unitLabel') ? undefined : json['unitLabel'],
        'amountMajor': !exists(json, 'amountMajor') ? undefined : json['amountMajor'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ProductDtoToJSON(value?: ProductDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'name': value.name,
        'unitLabel': value.unitLabel,
        'amountMajor': value.amountMajor,
        'currency': value.currency,
        'type': value.type,
    };
}
