import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ProblemDetails } from '../models/ProblemDetails';
import { TodoItem } from '../models/TodoItem';

import { TodoApiRequestFactory, TodoApiResponseProcessor} from "../apis/TodoApi";
export class ObservableTodoApi {
    private requestFactory: TodoApiRequestFactory;
    private responseProcessor: TodoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoApiRequestFactory,
        responseProcessor?: TodoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TodoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TodoApiResponseProcessor();
    }

    /**
     */
    public apiTodoGet(_options?: Configuration): Observable<Array<TodoItem>> {
        const requestContextPromise = this.requestFactory.apiTodoGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTodoGet(rsp)));
            }));
    }

    /**
     * Deletes a specific TodoItem.
     * @param id 
     */
    public apiTodoIdDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiTodoIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTodoIdDelete(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public apiTodoIdGet(id: number, _options?: Configuration): Observable<TodoItem> {
        const requestContextPromise = this.requestFactory.apiTodoIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTodoIdGet(rsp)));
            }));
    }

    /**
     * Sample request:                    POST /Todo      {         \"id\": 1,         \"name\": \"Item #1\",         \"isComplete\": true      }
     * Creates a TodoItem.
     * @param todoItem 
     */
    public apiTodoPost(todoItem?: TodoItem, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiTodoPost(todoItem, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTodoPost(rsp)));
            }));
    }

}
