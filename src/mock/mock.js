var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
import { Users } from './user/user';
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
    }
}