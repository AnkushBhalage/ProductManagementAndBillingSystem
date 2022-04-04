import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/customer");
};

const create = (data) => {
  return httpClient.post("/api/customer", data);
};

const get = (id) => {
  return httpClient.get(`/api/customer/${id}`);
};

const update = (data) => {
  return httpClient.put("/api/customer", data);
};

const remove = (id) => {
  return httpClient.delete(`/api/customer/${id}`);
};
//vendor services
const createVendor = (data) => {
  return httpClient.post("/api/vendors", data);
};
const getAllVendors = () => {
  return httpClient.get("/api/vendors");
};

const getVendor = (id) => {
  return httpClient.get(`/api/vendors/${id}`);
};
const getVendorByName=(name)=>{
return httpClient.get(`/api/vendors/name/${name}`);
};
const updateVendor = (data) => {
  return httpClient.put("/api/vendors", data);
};

const removeVendor = (id) => {
  return httpClient.delete(`/api/vendors/${id}`);
};
const getCustomerByName = (name) => {
  return httpClient.get(`/api/customer/name/${name}`);
};
const authenticate = (email, password) => {
  return httpClient.get(`/api/user/${email}/${password}`);
};
const getAllProducts = () => {
  return httpClient.get("/api/product");
};
const removeProduct = (id) => {
  return httpClient.delete(`/api/product/${id}`);
};
const addProduct = (data) => {
  return httpClient.post("/api/product", data);
};
const getProduct=(id)=>{
  return httpClient.get(`/api/product/${id}`);
};
const updateProduct = (data) => {
  return httpClient.put("/api/product", data);
};
const getProductByName=(name)=>{
  return httpClient.get(`/api/product/name/${name}`);
};
const addBill=(data)=>{
  return httpClient.post(`/api/bill/`,data);
}
const addSellOrder=(inputFields,id,date)=>{
  
  return httpClient.post(`/api/sellorder/${id}/${date}`,inputFields);
}
const findProductsByDate=(date)=>{
  return httpClient.get(`/api/sellorder/money/${date}`);
}
export default {
  getAll,
  create,
  get,
  update,
  remove,
  createVendor,
  removeVendor,
  updateVendor,
  getAllVendors,
  getVendor,
  getCustomerByName,
  authenticate,
  getAllProducts,
  removeProduct,
  addProduct,
  getProduct,updateProduct,
  getVendorByName,
  getProductByName,addBill,
  addSellOrder,
  findProductsByDate
};
