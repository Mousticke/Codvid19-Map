import {useState, useEffect} from 'react';
import API from '../api/index';

export default function useData(apiURL){
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            setError(false);
            setLoading(true);
            let resultAPI
            try {
                resultAPI = await API.get(apiURL);
                if(resultAPI.status === 200){
                    setData(resultAPI.data);
                    setError(false);
                }else{
                    setError(true); 
                }
            } catch (error) {
                setError(true); 
                setData(error.response.data.error)
            }
            setLoading(false);
        };
        
        fetchAPI();
        
    }, [apiURL]);
    return {data, error, loading};
}