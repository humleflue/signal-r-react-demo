/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDto } from '../models/MessageDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatHubService {

    /**
     * @param message
     * @returns void
     * @throws ApiError
     */
    public static postHubsChatHubSendMessage(
        message?: MessageDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hubs/ChatHub/SendMessage',
            query: {
                'message': message,
            },
        });
    }

}
