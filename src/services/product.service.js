//https://fakestoreapi.com/products.

import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';
export const getProducts = async (callback) => {
    await axios
        .get(baseUrl)
        .then((res) => {
            callback(res.data);
            console.log(res);
        })
        .catch((err) => console.log(err));
    // return response;
};
