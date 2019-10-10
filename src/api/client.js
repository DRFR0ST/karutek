import axios from 'axios';

const BASE_URL = "http://localhost:3002"

export const fetchPosts = () => new Promise((resolve, reject) => {
    const url = `${BASE_URL}/posts`

    axios.get(url)
        .then(res => {
            switch(res.status) {
                case 200: 
                    resolve(res.data) 
                    break;
                default:
                    reject("An error occurred while fetching data.");
            }
            resolve(res);
        })
        .catch(err => {
            reject(err);
            console.log(err);
        });
});

export const fetchPost = (id) => new Promise((resolve, reject) => {
    const url = `${BASE_URL}/posts/${id}`

    axios.get(url)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
            console.log(err);
        });
});