import { Employee } from "./employee"

export const Waiter = function(obj = {}) {
    Employee.call(this, obj);
}

Waiter.prototype = new Employee();

Waiter.prototype.work = function(foods) {
    if(Object.prototype.toString.call(foods) === "[object Array]") {
        //  点菜
        this._order(foods);
    } else {
        //  上菜
        this._serving(foods);
    }
}

Waiter.prototype._order = function(foods) {
    foods.map((item) => {
        console.log("一份" + item.name);
    })
}

Waiter.prototype._serving = function(food) {
    console.log(food.name + "做好咯");
}