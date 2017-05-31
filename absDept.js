var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * Creating class using abstract.
*/
var Department = (function () {
    function Department(newName) {
        this.name = newName;
    }
    Department.prototype.printName = function () {
        console.log("Department name is " + this.name);
    };
    return Department;
}());
var AccountingDepart = (function (_super) {
    __extends(AccountingDepart, _super);
    function AccountingDepart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountingDepart.prototype.printMeeting = function () {
        console.log("AccountingDepart name is " + this.name);
    };
    return AccountingDepart;
}(Department));
var SavingDepart = (function (_super) {
    __extends(SavingDepart, _super);
    function SavingDepart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingDepart.prototype.printDept = function () {
        console.log("SavingDepart name is " + this.name);
    };
    SavingDepart.prototype.printMeeting = function () {
        console.log("SavingDepart name is from inherited class");
    };
    return SavingDepart;
}(Department));
var dept = new AccountingDepart('FA001');
dept.printName();
dept.printMeeting();
var sadept = new SavingDepart('DA001');
sadept.printMeeting();
sadept.printDept();
sadept.printName();
