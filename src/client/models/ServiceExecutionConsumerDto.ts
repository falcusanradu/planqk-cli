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
 * @interface ServiceExecutionConsumerDto
 */
export interface ServiceExecutionConsumerDto {
  /**
   *
   * @type {string}
   * @memberof ServiceExecutionConsumerDto
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ServiceExecutionConsumerDto
   */
  createdAt?: string;
  /**
   *
   * @type {string}
   * @memberof ServiceExecutionConsumerDto
   */
  startedAt?: string;
  /**
   *
   * @type {string}
   * @memberof ServiceExecutionConsumerDto
   */
  endedAt?: string;
  /**
   *
   * @type {string}
   * @memberof ServiceExecutionConsumerDto
   */
  status?: ServiceExecutionConsumerDtoStatusEnum;
}

/**
 * @export
 */
export const ServiceExecutionConsumerDtoStatusEnum = {
  Unknown: 'UNKNOWN',
  Pending: 'PENDING',
  Running: 'RUNNING',
  Succeeded: 'SUCCEEDED',
  Failed: 'FAILED',
  Cancelled: 'CANCELLED',
} as const
export type ServiceExecutionConsumerDtoStatusEnum = typeof ServiceExecutionConsumerDtoStatusEnum[keyof typeof ServiceExecutionConsumerDtoStatusEnum];

/**
 * Check if a given object implements the ServiceExecutionConsumerDto interface.
 */
export function instanceOfServiceExecutionConsumerDto(value: object): boolean {
  let isInstance = true

  return isInstance
}

export function ServiceExecutionConsumerDtoFromJSON(json: any): ServiceExecutionConsumerDto {
  return ServiceExecutionConsumerDtoFromJSONTyped(json, false)
}

export function ServiceExecutionConsumerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceExecutionConsumerDto {
  if ((json === undefined) || (json === null)) {
    return json
  }
  return {

    'id': !exists(json, 'id') ? undefined : json['id'],
    'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    'startedAt': !exists(json, 'startedAt') ? undefined : json['startedAt'],
    'endedAt': !exists(json, 'endedAt') ? undefined : json['endedAt'],
    'status': !exists(json, 'status') ? undefined : json['status'],
  }
}

export function ServiceExecutionConsumerDtoToJSON(value?: ServiceExecutionConsumerDto | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {

    'id': value.id,
    'createdAt': value.createdAt,
    'startedAt': value.startedAt,
    'endedAt': value.endedAt,
    'status': value.status,
  }
}

