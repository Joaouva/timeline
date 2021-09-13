import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const ApiService = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getData = () => {
        axios
            .get('/posts')
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return { response, error, loading };
};

export default ApiService;