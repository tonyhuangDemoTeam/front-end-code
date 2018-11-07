import Mock from 'mockjs';

import issueJson from './issue.json';

const LoginUsers = [
  {
    id: 1,
    username: 'manager',
    password: '123456',
    avatar: '',
    meta: 'manager', 
    name: 'katherine pierce'
  },
  {
    id: 2,
    username: 'rm',
    password: '123456',
    avatar: '',
    meta: 'rm',
    name: 'Daniel Gillies'
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
    avatar: '',
    meta: 'admin',
    name: 'Daniel Gillies'
  }

];

const Users = [];

for (let i = 0; i < 60; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

const Customers = [];

for (let i = 0; i < 60; i++) {
  Customers.push(Mock.mock({
    id: Mock.Random.guid(),
    customerNumber: Mock.Random.natural(1000000000, 9000000000),
    customerName: Mock.Random.name(),
    customerType: Mock.Random.integer(0, 1),
    homeCountry: Mock.mock('@county(true)'),
    bookingCenter: Mock.mock('@county(true)'),
    rmCode: 'HKRM'+Mock.Random.natural(1000, 9000),
    dateOfBirth: Mock.Random.date()
  }));
}

const getShareIssue = issueJson;

const getSharePosition = [{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 1","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"},{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 12","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"},{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 13","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"}];



const dailyJson = [{"id":1,"type":"P","rmCode":"rm1","remarks":"TODO: action 1","createDate":"2018-11-11T16:00:00.000+0000"},{"id":2,"type":"P","rmCode":"rm1","remarks":"TODO: action 2","createDate":"2018-11-11T16:00:00.000+0000"},{"id":3,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-11T16:00:00.000+0000"},{"id":4,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-11T16:00:00.000+0000"},{"id":5,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-10T16:00:00.000+0000"},{"id":6,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-10T16:00:00.000+0000"},{"id":7,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-10T16:00:00.000+0000"},{"id":8,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-10T16:00:00.000+0000"},{"id":9,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-10T16:00:00.000+0000"},{"id":10,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-09T16:00:00.000+0000"},{"id":11,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-09T16:00:00.000+0000"},{"id":12,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-09T16:00:00.000+0000"},{"id":13,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-09T16:00:00.000+0000"},{"id":14,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-08T16:00:00.000+0000"},{"id":15,"type":"P","rmCode":"rm1","remarks":"TODO: action 3","createDate":"2018-11-08T16:00:00.000+0000"}];

export { LoginUsers, Users, Customers, getShareIssue, getSharePosition, dailyJson };
