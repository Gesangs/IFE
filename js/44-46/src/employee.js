export const Employee = function(obj = {}) {
    this.id = obj.id;
    this.name = obj.name;
    this.wage = obj.wage;
}

Employee.prototype.work = function() {
    console.log("请分配工作");
}