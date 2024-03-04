const baseUrl = 'https://fakestoreapi.com/auth';

import axios from 'axios';

export const login = async (data, callback) => {
    await axios
        .post(`${baseUrl}/login`, data)
        .then((res) => {
            callback(true, res.token);
            console.log(res);
        })
        .catch((err) => {
            callback(false, err.response.data);
            // console.log(err);
        });
};
