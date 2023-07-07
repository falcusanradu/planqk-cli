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

import * as runtime from '../runtime'
import type {TaxonomyElement} from '../models'
import {TaxonomyElementFromJSON} from '../models'

/**
 *
 */
export class TaxonomiesApi extends runtime.BaseAPI {

    /**
     * Returns the taxonomy about application areas of algorithms and implementations.
     */
    async getApplicationAreasRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/application-areas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about application areas of algorithms and implementations.
     */
    async getApplicationAreas(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getApplicationAreasRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy of certain file formats for data pools.
     */
    async getDatapoolFormatsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/data-pool-formats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy of certain file formats for data pools.
     */
    async getDatapoolFormats(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getDatapoolFormatsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the industry taxonomy.
     */
    async getIndustriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/industries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the industry taxonomy.
     */
    async getIndustries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getIndustriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about learning methods of algorithms.
     */
    async getLearningMethodsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/learning-methods`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about learning methods of algorithms.
     */
    async getLearningMethods(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getLearningMethodsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about software licenses.
     */
    async getLicensesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/licenses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about software licenses.
     */
    async getLicenses(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getLicensesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about problem types of algorithms and implementations.
     */
    async getProblemTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/problem-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about problem types of algorithms and implementations.
     */
    async getProblemTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getProblemTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about programming languages.
     */
    async getProgrammingLanguagesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/programming-languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about programming languages.
     */
    async getProgrammingLanguages(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getProgrammingLanguagesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about quantum computation models.
     */
    async getQuantumComputationModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/quantum-computation-models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about quantum computation models.
     */
    async getQuantumComputationModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getQuantumComputationModelsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the taxonomy about software tools.
     */
    async getSoftwareToolsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxonomyElement>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Auth-Token"] = this.configuration.apiKey("X-Auth-Token"); // apiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/taxonomies/software-tools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxonomyElementFromJSON));
    }

    /**
     * Returns the taxonomy about software tools.
     */
    async getSoftwareTools(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxonomyElement>> {
        const response = await this.getSoftwareToolsRaw(initOverrides);
        return await response.value();
    }

}
