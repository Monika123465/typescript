"use strict";
// let grettings:string='hello world';
// let userId:number=3345
Object.defineProperty(exports, "__esModule", { value: true });
// let isLoggedIn:boolean=false
// grettings.toLowerCase()
// console.log(grettings)
function addTow(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signup(name, email, isPaid) {
    return name;
}
var login = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return email;
};
addTow(5);
getUpper('monika');
signup('monika', 'monasingh7478@gmail.com', false);
login('monika@gmail.com', 'monika');
