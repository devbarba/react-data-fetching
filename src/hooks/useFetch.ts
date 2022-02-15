import axios, { AxiosRequestConfig, Method } from "axios";
import { useQuery } from "react-query";

const api = axios.create({
    baseURL: 'https://api.github.com',
});

export function useFetch<T = unknown>(cacheQueryKey: string, method: Method, url: string, options?: Omit<AxiosRequestConfig, 'method' | 'url'>) {    
    const { data, isFetching } = useQuery<T>(cacheQueryKey, async () => {
        const response = await api(url, { method, ...options });

        return response.data;
    }, {
        staleTime: 1000 * 60, // 1 minute
    });

    return { data, isFetching };
}