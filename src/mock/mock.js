var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
import { LoginUsers, Users } from './user/user';
let _Users = Users;

export default {
    bootstrap: function() {
        let mock = new MockAdapter(axios);
        //获取用户列表（分页）
        mock.onGet('/user/listpage').reply(config => {
            let { page, name } = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            let total = mockUsers.length;
            mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([200, {
                        total: total,
                        users: mockUsers
                    }]);
                }, 1000);
            });
        });

        //登录
        mock.onPost('/login').reply(config => {

            let { username, password } = JSON.parse(config.data);
            // let {username, password} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    console.log(LoginUsers);
                    let hasUser = LoginUsers.some(u => {
                        if (u.username === username && u.password === password) {
                            user = JSON.parse(JSON.stringify(u));
                            user.password = undefined;
                            return true;
                        }
                    });
                    console.log(u);
                    if (hasUser) {
                        resolve([200, { code: 200, msg: '请求成功', user }]);
                    } else {
                        resolve([200, { code: 500, msg: '账号或密码错误' }]);
                    }
                }, 1000);
            });
        });
    }
}