import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'hsbc-admin',
    password: '123456',
    avatar: '',
    meta: 'admin',
    name: 'katherine pierce'
  },
  {
    id: 2,
    username: 'hsbc-user',
    password: '123456',
    avatar: '',
    meta: 'user',
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

// "customerNumber" : 8000123456,
// "customerName" : "Tony HUANG",
// "customerType" : "Individual", Entity
// "homeCountry" : "CN",
// "bookingCenter" :"HK",
// "rmCode" : "HKRM01",
// "dateOfBirth" : "1983-01-01"

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

export { LoginUsers, Users, Customers };
