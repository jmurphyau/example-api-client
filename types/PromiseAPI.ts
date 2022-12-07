import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ProblemDetails } from '../models/ProblemDetails';
import { TodoItem } from '../models/TodoItem';
import { ObservableTodoApi } from './ObservableAPI';

import { TodoApiRequestFactory, TodoApiResponseProcessor} from "../apis/TodoApi";
export class PromiseTodoApi {
    private api: ObservableTodoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoApiRequestFactory,
        responseProcessor?: TodoApiResponseProcessor
    ) {
        this.api = new ObservableTodoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiTodoGet(_options?: Configuration): Promise<Array<TodoItem>> {
        const result = this.api.apiTodoGet(_options);
        return result.toPromise();
    }

    /**
     * Deletes a specific TodoItem.
     * @param id 
     */
    public apiTodoIdDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiTodoIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public apiTodoIdGet(id: number, _options?: Configuration): Promise<TodoItem> {
        const result = this.api.apiTodoIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Sample request:                    POST /Todo      {         \"id\": 1,         \"name\": \"Item #1\",         \"isComplete\": true      }
     * Creates a TodoItem.
     * @param todoItem 
     */
    public apiTodoPost(todoItem?: TodoItem, _options?: Configuration): Promise<void> {
        const result = this.api.apiTodoPost(todoItem, _options);
        return result.toPromise();
    }


}



