/**
 * ToDo API
 * An ASP.NET Core Web API for managing ToDo items
 *
 * OpenAPI spec version: v2.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TodoItem {
    'id'?: number;
    'name': string;
    'isComplete'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isComplete",
            "baseName": "isComplete",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TodoItem.attributeTypeMap;
    }

    public constructor() {
    }
}

