import httpClient from '../http-common';
const updateCustomer=(data)=>{
    return httpClient.put('',data);
};
const createCustomer=(data)=>{
    return httpClient.post('',data);
};
const getCustomer=(id)=>{
    return httpClient.get('${id}');
};
export default {updateCustomer ,createCustomer,getCustomer};