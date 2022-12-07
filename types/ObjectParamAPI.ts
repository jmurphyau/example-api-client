import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ProblemDetails } from '../models/ProblemDetails';
import { TodoItem } from '../models/TodoItem';

import { ObservableTodoApi } from "./ObservableAPI";
import { TodoApiRequestFactory, TodoApiResponseProcessor} from "../apis/TodoApi";

export interface TodoApiApiTodoGetRequest {
}

export interface TodoApiApiTodoIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof TodoApiapiTodoIdDelete
     */
    id: number
}

export interface TodoApiApiTodoIdGetRequest {
    /**
     * 
     * @type number
     * @memberof TodoApiapiTodoIdGet
     */
    id: number
}

export interface TodoApiApiTodoPostRequest {
    /**
     * 
     * @type TodoItem
     * @memberof TodoApiapiTodoPost
     */
    todoItem?: TodoItem
}

export class ObjectTodoApi {
    private api: ObservableTodoApi

    public constructor(configuration: Configuration, requestFactory?: TodoApiRequestFactory, responseProcessor?: TodoApiResponseProcessor) {
        this.api = new ObservableTodoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiTodoGet(param: TodoApiApiTodoGetRequest = {}, options?: Configuration): Promise<Array<TodoItem>> {
        return this.api.apiTodoGet( options).toPromise();
    }

    /**
     * Deletes a specific TodoItem.
     * @param param the request object
     */
    public apiTodoIdDelete(param: TodoApiApiTodoIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiTodoIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTodoIdGet(param: TodoApiApiTodoIdGetRequest, options?: Configuration): Promise<TodoItem> {
        return this.api.apiTodoIdGet(param.id,  options).toPromise();
    }

    /**
     * Sample request:                    POST /Todo      {         \"id\": 1,         \"name\": \"Item #1\",         \"isComplete\": true      }
     * Creates a TodoItem.
     * @param param the request object
     */
    public apiTodoPost(param: TodoApiApiTodoPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiTodoPost(param.todoItem,  options).toPromise();
    }

}
