var Waiter = function(obj = {}) {
    Worker.call(this, obj);
}

Waiter.prototype = new Worker();

Waiter.prototype.work = function(foods) {
    if(Object.prototype.toString.call(foods) === "[object Array]") {
        Waiter._order(foods);
    } else {
        Waiter._serving(foods);
    }
}

//  点菜
Waiter.prototype._order = function(foods) {
    foods.map((item) => {
        console.log(item.name);
    })
}

//  上菜
Waiter.prototype._serving = function(food) {
    console.log(food.name);
}