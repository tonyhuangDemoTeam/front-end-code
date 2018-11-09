import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { LoginUsers, Users, Customers, getShareIssue, getSharePosition, dailyJson, cusPosition } from './data/user';
import { Relationship, typeAll, positionInfo, assetInfo } from './data/manager';


let _Users = Users;
let _Customers = Customers;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onGet('/sa/user/authenticate').reply(config => {
      let {id, password} = config.params;
      // console.log(config.params)
      return new Promise((resolve, reject) => {
        let users = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.id === id && u.password === password) {
              users = JSON.parse(JSON.stringify(u));
              users.password = undefined;
              return true;
            }
          });

          // console.log(234, users)


          if (hasUser) {
            resolve([200, users]);
          } else {
            resolve([500, { status: 500, statusText: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });


    //获取用户列表
    mock.onGet('/customer/list').reply(config => {
      let {name} = config.params;
      let mockUsers = Customers.filter(customer => {
        if (name && customer.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            customers: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

    /**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/team/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, Relationship]);
        }, 200);
      });
    });


    /**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/cust/get').reply(config => {

      let { type } = config.params;
      let returnData;

      if (type == 'all') {
          returnData = typeAll;
      }else{
          returnData = cusPosition;
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, returnData]);
        }, 300);
      });
    });

/**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/share/issue/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, getShareIssue]);
        }, 300);
      });
    });


/**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/share/position/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, getSharePosition]);
        }, 300);
      });
    });


/**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/action/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, dailyJson]);
        }, 300);
      });
    });

/**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/acct/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, positionInfo]);
        }, 300);
      });
    });

/**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/asset/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, assetInfo]);
        }, 300);
      });
    });


  }
};