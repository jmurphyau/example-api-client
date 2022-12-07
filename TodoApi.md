# .TodoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTodoGet**](TodoApi.md#apiTodoGet) | **GET** /api/Todo | 
[**apiTodoIdDelete**](TodoApi.md#apiTodoIdDelete) | **DELETE** /api/Todo/{id} | Deletes a specific TodoItem.
[**apiTodoIdGet**](TodoApi.md#apiTodoIdGet) | **GET** /api/Todo/{id} | 
[**apiTodoPost**](TodoApi.md#apiTodoPost) | **POST** /api/Todo | Creates a TodoItem.


# **apiTodoGet**
> Array<TodoItem> apiTodoGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoApi(configuration);

let body:any = {};

apiInstance.apiTodoGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TodoItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTodoIdDelete**
> void apiTodoIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoApi(configuration);

let body:.TodoApiApiTodoIdDeleteRequest = {
  // number | 
  id: 1,
};

apiInstance.apiTodoIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTodoIdGet**
> TodoItem apiTodoIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoApi(configuration);

let body:.TodoApiApiTodoIdGetRequest = {
  // number
  id: 1,
};

apiInstance.apiTodoIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TodoItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTodoPost**
> void apiTodoPost()

Sample request:                    POST /Todo      {         \"id\": 1,         \"name\": \"Item #1\",         \"isComplete\": true      }

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoApi(configuration);

let body:.TodoApiApiTodoPostRequest = {
  // TodoItem |  (optional)
  todoItem: {
    id: 1,
    name: "name_example",
    isComplete: false,
  },
};

apiInstance.apiTodoPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoItem** | **TodoItem**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the newly created item |  -  |
**400** | If the item is null |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


