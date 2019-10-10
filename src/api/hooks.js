import {useState, useEffect} from 'react';
import { fetchPosts, fetchPost } from './client';

export const useItems = (total=10) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPosts().then(res => setData([...res].slice(0, total)))
    }, [total]);

    return [[...data], setData];
}

export const useItem = (id) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPost(id).then(res => setData(res.data))
    }, [id]);

    return [data, setData];
}