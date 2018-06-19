import { Employee } from "./employee"
export const Cook = function(obj = {}) {
    Employee.call(this, obj)
}

Cook.prototype = new Employee();

Cook.prototype.work = function(food) {
    return food[0];
}