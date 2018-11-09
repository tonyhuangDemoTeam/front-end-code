import axios from 'axios';

// let base = 'http://134.175.84.92:18000';
// let base = 'http://219.136.163.131:8000';
 let base = '';
 
// export const requestLogin = params => { return axios.post(`${base}/sa/user/authenticate`, params).then(res => res.data); };
export const requestLogin = params => { return axios.get(`${base}/sa/user/authenticate`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getCustomerList = params => { return axios.get(`${base}/customer/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const testUrl = (url, params) => { return axios.get(url, { params: params }); };

export const requestTransaction = (url, params) => { return axios.post(base + url, { params: params }).then(res => res.data); };

export const getDataUrl = (url, params) => { return axios.get(base + url, { params: params }); };

// manager
export const getManagerOSList = params => { return axios.get(`${base}/fos/team/get`, { params: params }); };
