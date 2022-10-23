import axios from 'axios'
import useStateContext from "../Hooks/useStateContext";

export const BASE_URL = 'http://localhost:55617/api/';

export const END_POINT = {
    loginAPi: 'Accounts/login',
    getAllProducts: 'Product/getall',
    getProductById: 'Product/getById',
    addProduct:'Product/create-Product'
}
const context = JSON.parse(localStorage.getItem('context'))
export const config = {
    headers: { Authorization: `Bearer ${context?.token}` }
};
export const createAPIEndpoint = endpoint => {


    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url, config),
        fetchById: id => axios.post(url, id, config),
        login: newRecord => axios.post(url, newRecord),
        post: newRecord => axios.post(url, newRecord,config),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}