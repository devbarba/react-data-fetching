import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState<Boolean>(true);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, []);

    return { data, isFetching };
}