import {useState} from 'react';
import db from "../db.js";

export const useItems = (total=10) => {
    const [data, setData] = useState(db.posts);

    return [[...data], setData];
}

export const useItem = (id) => {
    const [data, setData] = useState(db.posts.find(e => e.id === id));

    return [data, setData];
}