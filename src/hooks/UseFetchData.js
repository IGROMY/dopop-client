import {useEffect, useState} from "react";
import {fetchData} from "../helpers/fetchData.js";

export const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetchData(url)
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    },[url])
return {
        data, loading, error
}
}