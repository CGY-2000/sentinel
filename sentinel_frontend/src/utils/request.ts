// interface BaseResponse<T> {
//     code: number
//     errMsg: string
//     data: T | null

import axios from "axios";
import { METHODS } from "http";

// }
type BaseResponse<T> = {
    code: number
    errMsg: string
    data: T | null
}

type METHODS = 'GET' | 'POST';

type SuccessResponse<T> = BaseResponse<T> & {
    code: 0
}

type ErrorResponse = BaseResponse<null> & {
    code: number
}

type Response<T> = SuccessResponse<T> | ErrorResponse;

type RequestParams = {
    method?: METHODS
    url: string
    params?: object
    data?: object
    token?: string
    timeout?: number
}

const request = <T>(data: RequestParams) => new Promise<T>((resolve, reject) => {
    axios<Response<T>>({
        method: data.method || 'GET',
        url: data.url,
        params: data.params,
        data: data.data,
        headers: {
            'Authorization': data.token || ''
        }
    }).then(response => {
        if(response.status === 200) {
            if (response.data.code === 0) resolve(response.data.data)
            else reject(response.data)
        } else {
            console.error(response.data)
            reject(response.data)
        }
    }).catch(error => {
        reject(error)
    })
})

export default request;