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

const getShareIssue = {"issue 20":{"shareIssueCode":"issue 20","shareIssueName":"Share Issue 20(SGD)","shareCountry":"SG","issueCode":"Issuer  20","sharePrice":20.00,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 10":{"shareIssueCode":"issue 10","shareIssueName":"Share Issue 10(GBP)","shareCountry":"EU","issueCode":"Issuer  10","sharePrice":20.00,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 11":{"shareIssueCode":"issue 11","shareIssueName":"Share Issue 11(USD)","shareCountry":"US","issueCode":"Issuer  11","sharePrice":100.00,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 9":{"shareIssueCode":"issue 9","shareIssueName":"Share Issue 9(HKD)","shareCountry":"HK","issueCode":"Issuer  9","sharePrice":40.00,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 7":{"shareIssueCode":"issue 7","shareIssueName":"Share Issue 7(USD)","shareCountry":"US","issueCode":"Issuer  7","sharePrice":80.00,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 8":{"shareIssueCode":"issue 8","shareIssueName":"Share Issue 8(SGD)","shareCountry":"SG","issueCode":"Issuer  8","sharePrice":60.00,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 16":{"shareIssueCode":"issue 16","shareIssueName":"Share Issue 16(SGD)","shareCountry":"SG","issueCode":"Issuer  16","sharePrice":100.00,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 17":{"shareIssueCode":"issue 17","shareIssueName":"Share Issue 17(HKD)","shareCountry":"HK","issueCode":"Issuer  17","sharePrice":80.00,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 18":{"shareIssueCode":"issue 18","shareIssueName":"Share Issue 18(GBP)","shareCountry":"EU","issueCode":"Issuer  18","sharePrice":60.00,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 19":{"shareIssueCode":"issue 19","shareIssueName":"Share Issue 19(USD)","shareCountry":"US","issueCode":"Issuer  19","sharePrice":40.00,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 12":{"shareIssueCode":"issue 12","shareIssueName":"Share Issue 12(SGD)","shareCountry":"SG","issueCode":"Issuer  12","sharePrice":80.00,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 13":{"shareIssueCode":"issue 13","shareIssueName":"Share Issue 13(HKD)","shareCountry":"HK","issueCode":"Issuer  13","sharePrice":60.00,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 14":{"shareIssueCode":"issue 14","shareIssueName":"Share Issue 14(GBP)","shareCountry":"EU","issueCode":"Issuer  14","sharePrice":40.00,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 15":{"shareIssueCode":"issue 15","shareIssueName":"Share Issue 15(USD)","shareCountry":"US","issueCode":"Issuer  15","sharePrice":20.00,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 5":{"shareIssueCode":"issue 5","shareIssueName":"Share Issue 5(HKD)","shareCountry":"HK","issueCode":"Issuer  5","sharePrice":20.00,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 6":{"shareIssueCode":"issue 6","shareIssueName":"Share Issue 6(GBP)","shareCountry":"EU","issueCode":"Issuer  6","sharePrice":100.00,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 3":{"shareIssueCode":"issue 3","shareIssueName":"Share Issue 3(USD)","shareCountry":"US","issueCode":"Issuer  3","sharePrice":60.00,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 4":{"shareIssueCode":"issue 4","shareIssueName":"Share Issue 4(SGD)","shareCountry":"SG","issueCode":"Issuer  4","sharePrice":40.00,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 1":{"shareIssueCode":"issue 1","shareIssueName":"Share Issue 1(HKD)","shareCountry":"HK","issueCode":"Issuer  1","sharePrice":100.00,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 2":{"shareIssueCode":"issue 2","shareIssueName":"Share Issue 2(GBP)","shareCountry":"EU","issueCode":"Issuer  2","sharePrice":80.00,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"}};

const getSharePosition = [{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 1","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"},{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 12","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"},{"id":1,"customerNumber":1,"accountNumber":1,"shareIssueCode":"issue 13","shareCurrency":"HKD","averagePrice":110.00,"holdingQuantity":1800.00,"considerationAmount":0.00,"position":"22968.00"}];

export { LoginUsers, Users, Customers, getShareIssue, getSharePosition };
