import Mock from 'mockjs';
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

export { LoginUsers, Users, Customers };
