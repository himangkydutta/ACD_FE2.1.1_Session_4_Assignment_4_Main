/*
 * Creating class using abstract.
*/
abstract class Department{
      public name:string;
      constructor(newName:string){
          this.name=newName;
      }
      printName():void{
          console.log(`Department name is ${this.name}`);
      }
      abstract printMeeting():void;
}
class AccountingDepart extends Department{

        printMeeting():void{
            console.log(`AccountingDepart name is ${this.name}`);
        }
}
class SavingDepart extends Department{

        printDept():void{
            console.log(`SavingDepart name is ${this.name}`);
        }
        printMeeting():void{
            console.log(`SavingDepart name is from inherited class`);
        }
}
let dept = new AccountingDepart('FA001');
dept.printName();
dept.printMeeting();
let sadept = new SavingDepart('DA001');
sadept.printMeeting();
sadept.printDept();
sadept.printName();



