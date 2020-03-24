import { useState, useEffect } from 'react';
import moment from 'moment';
import API from '../api/index';

export function useData(apiURL) {
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
                if (resultAPI.status === 200) {
                    setData(resultAPI.data);
                    setError(false);
                } else {
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
    return { data, error, loading };
}

export function useDataDaily(apiURL) {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            setError(false);
            setLoading(true);
            let resultAPI;
            let mapData = [];
            let yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 2);
            for (let d = new Date(2020, 0, 22); d < yesterday; d.setDate(d.getDate() + 1)) {
                const dateFormat = moment(d).format('YYYY-MM-DD');

                try {
                    resultAPI = await API.get(`${apiURL}/${dateFormat}`);

                    if (resultAPI.status === 200) {

                        mapData.push(resultAPI.data)
                        setError(false);
                    } else {
                        setError(true);
                    }
                } catch (error) {
                    setError(true);
                    setData(error.response.data.error)
                }
            }

            setData(mapData);

            setLoading(false);
        };

        fetchAPI();

    }, [apiURL]);
    return { data, error, loading };
}