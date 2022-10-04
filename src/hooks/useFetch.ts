import type { AxiosRequestHeaders } from 'axios'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../utils/axios/axiosInstance'

export enum HTTPMETHOD {
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}

export default function useFetch<T extends object>(method:HTTPMETHOD = HTTPMETHOD.get ,body: any = null, headers?: AxiosRequestHeaders | undefined){
    const [response,setResponse] = useState<T>()
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<any>(null)

    useEffect(()=>{
        const fetching = async () =>{
            const controller = new AbortController();
            try{
                const response = await axiosInstance({
                    signal: controller.signal,
                    method: method,
                    data: body,
                    headers, 
                })
                setResponse(response.data)
                setLoading(false)
    
            }catch(err){
                controller.abort()
                setError(err)
            }
        }
        fetching()
    },[headers,body,method])

    return { response, loading, error }
}