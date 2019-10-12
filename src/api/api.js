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