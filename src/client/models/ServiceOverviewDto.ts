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
 * @interface ServiceOverviewDto
 */
export interface ServiceOverviewDto {
    /**
     * The access permission role for this entity of the current user
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    readonly currentUserPermission?: ServiceOverviewDtoCurrentUserPermissionEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    serviceDefinitionId?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    type?: ServiceOverviewDtoTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    quantumBackend?: ServiceOverviewDtoQuantumBackendEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    lifecycle?: ServiceOverviewDtoLifecycleEnum;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    logoUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceOverviewDto
     */
    buildStatus?: ServiceOverviewDtoBuildStatusEnum;
}


/**
 * @export
 */
export const ServiceOverviewDtoCurrentUserPermissionEnum = {
    Viewer: 'VIEWER',
    Maintainer: 'MAINTAINER',
    Owner: 'OWNER'
} as const;
export type ServiceOverviewDtoCurrentUserPermissionEnum = typeof ServiceOverviewDtoCurrentUserPermissionEnum[keyof typeof ServiceOverviewDtoCurrentUserPermissionEnum];

/**
 * @export
 */
export const ServiceOverviewDtoTypeEnum = {
    Managed: 'MANAGED',
    External: 'EXTERNAL'
} as const;
export type ServiceOverviewDtoTypeEnum = typeof ServiceOverviewDtoTypeEnum[keyof typeof ServiceOverviewDtoTypeEnum];

/**
 * @export
 */
export const ServiceOverviewDtoQuantumBackendEnum = {
    Ibm: 'IBM',
    Ionq: 'IONQ',
    Dwave: 'DWAVE',
    None: 'NONE'
} as const;
export type ServiceOverviewDtoQuantumBackendEnum = typeof ServiceOverviewDtoQuantumBackendEnum[keyof typeof ServiceOverviewDtoQuantumBackendEnum];

/**
 * @export
 */
export const ServiceOverviewDtoLifecycleEnum = {
    Created: 'CREATED',
    Accessible: 'ACCESSIBLE',
    Published: 'PUBLISHED'
} as const;
export type ServiceOverviewDtoLifecycleEnum = typeof ServiceOverviewDtoLifecycleEnum[keyof typeof ServiceOverviewDtoLifecycleEnum];

/**
 * @export
 */
export const ServiceOverviewDtoBuildStatusEnum = {
    Working: 'WORKING',
    Success: 'SUCCESS',
    Failure: 'FAILURE'
} as const;
export type ServiceOverviewDtoBuildStatusEnum = typeof ServiceOverviewDtoBuildStatusEnum[keyof typeof ServiceOverviewDtoBuildStatusEnum];


/**
 * Check if a given object implements the ServiceOverviewDto interface.
 */
export function instanceOfServiceOverviewDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceOverviewDtoFromJSON(json: any): ServiceOverviewDto {
    return ServiceOverviewDtoFromJSONTyped(json, false);
}

export function ServiceOverviewDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceOverviewDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'currentUserPermission': !exists(json, 'currentUserPermission') ? undefined : json['currentUserPermission'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'serviceDefinitionId': !exists(json, 'serviceDefinitionId') ? undefined : json['serviceDefinitionId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'quantumBackend': !exists(json, 'quantumBackend') ? undefined : json['quantumBackend'],
        'lifecycle': !exists(json, 'lifecycle') ? undefined : json['lifecycle'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'logoUrl': !exists(json, 'logoUrl') ? undefined : json['logoUrl'],
        'buildStatus': !exists(json, 'buildStatus') ? undefined : json['buildStatus'],
    };
}

export function ServiceOverviewDtoToJSON(value?: ServiceOverviewDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'serviceDefinitionId': value.serviceDefinitionId,
        'name': value.name,
        'type': value.type,
        'quantumBackend': value.quantumBackend,
        'lifecycle': value.lifecycle,
        'createdAt': value.createdAt,
        'logoUrl': value.logoUrl,
        'buildStatus': value.buildStatus,
    };
}

