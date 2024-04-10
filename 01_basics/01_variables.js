const accountId = 21022748
let accountEmail = "shubhyuvrajsharma@gmail.com"
var accountPass = "123"
let accountState;

//accountmail;//this is not allowed
accountmail=2;//this is allowed

/*prefer not to use "var" because
of issue in block & functional scope */

accountCity="Dehradun"

// accountId=2  not allowed

accountEmail="khushi@gmail.com"
accountPass="123444"

accountCity="Kashi"
//console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState,accountmail])
