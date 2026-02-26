const accountId = 1232123
let accountEmail = "shahzjn@gmail"
var accountPassword = 6552617
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mkdjsjd"
accountPassword = 982791
accountCity = "UP"

console.log(accountId);

/*
Prefer not to use var
becouse of issu in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])