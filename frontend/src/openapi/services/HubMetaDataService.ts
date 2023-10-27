/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatHubTypesDto } from '../models/ChatHubTypesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HubMetaDataService {

    /**
     * @returns ChatHubTypesDto Success
     * @throws ApiError
     */
    public static getHubMetaDataChatHub(): CancelablePromise<ChatHubTypesDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/HubMetaData/ChatHub',
        });
    }

}
