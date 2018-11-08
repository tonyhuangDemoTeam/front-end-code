
let _accountInfo = {};

exports.install = function (Vue, options) {
    Vue.prototype.changeData = function() {
        alert('执行成功');
    };
    Vue.prototype.setAccountInfo = function (opt) {
    	_accountInfo = opt;
    };
    Vue.prototype.getAccountInfo = function () {
    	return _accountInfo;
    }
};