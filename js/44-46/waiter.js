var Waiter = function(obj = {}) {
    Worker.call(this, obj);
}

Waiter.prototype = new Worker();

Waiter.prototype.work = function(foods) {
    if(Object.prototype.toString.call(foods) === "[object Array]") {
        //  点菜
        Waiter._order(foods);
    } else {
        //  上菜
        Waiter._serving(foods);
    }
}

Waiter.prototype._order = function(foods) {
    foods.map((item) => {
        console.log(item.name);
    })
}

Waiter.prototype._serving = function(food) {
    console.log(food.name);
}