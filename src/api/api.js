import axios from 'axios';

let base = '';

//登录
export const requestLogin = (params) => {
        return axios.post(`${base}/login`, { params }).then(res => res.data);
    }
    // 获取用户列表
export const getUserListPage = (params) => {
    return axios.get(`${base}/user/listpage`, { params });
}

//新增用户
export const addUsers = params => {
    return axios.get(`${base}/user/add`, { params });
}

//删除用户
export const removeUser = params => {
    return axios.get(`${base}/user/remove`, { params });
}

//编辑用户
export const editUser = params => {
    return axios.get(`${base}/user/edit`, { params });
}