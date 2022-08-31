/* tslint:disable */
/* eslint-disable */
/**
 * DotNetAssessmentExam.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GetUsersResult
 */
export interface GetUsersResult {
    /**
     * 
     * @type {Array<UserModel>}
     * @memberof GetUsersResult
     */
    'users'?: Array<UserModel> | null;
}
/**
 * 
 * @export
 * @interface RegisterUserCommand
 */
export interface RegisterUserCommand {
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'password'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'givenName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'middleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'surname'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserCommand
     */
    'email'?: string | null;
}
/**
 * 
 * @export
 * @interface UserModel
 */
export interface UserModel {
    /**
     * 
     * @type {number}
     * @memberof UserModel
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    'givenName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    'middleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    'surname'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    'username'?: string | null;
}

/**
 * RolesApi - axios parameter creator
 * @export
 */
export const RolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiRolesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Roles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RolesApi - functional programming interface
 * @export
 */
export const RolesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RolesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiRolesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiRolesGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RolesApi - factory interface
 * @export
 */
export const RolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RolesApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiRolesGet(options?: any): AxiosPromise<void> {
            return localVarFp.apiRolesGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export class RolesApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public apiRolesGet(options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).apiRolesGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterUserCommand} [registerUserCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersPost: async (registerUserCommand?: RegisterUserCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerUserCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [count] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersSeedRandomUsersGet: async (count?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Users/SeedRandomUsers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUsersResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterUserCommand} [registerUserCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersPost(registerUserCommand?: RegisterUserCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersPost(registerUserCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [count] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersSeedRandomUsersGet(count?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersSeedRandomUsersGet(count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersGet(options?: any): AxiosPromise<GetUsersResult> {
            return localVarFp.apiUsersGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterUserCommand} [registerUserCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersPost(registerUserCommand?: RegisterUserCommand, options?: any): AxiosPromise<void> {
            return localVarFp.apiUsersPost(registerUserCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [count] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersSeedRandomUsersGet(count?: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiUsersSeedRandomUsersGet(count, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersGet(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterUserCommand} [registerUserCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersPost(registerUserCommand?: RegisterUserCommand, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersPost(registerUserCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [count] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersSeedRandomUsersGet(count?: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersSeedRandomUsersGet(count, options).then((request) => request(this.axios, this.basePath));
    }
}


