var Customer = function() {
    console.log("来客人了")
}

Customer.prototype.order = function(menu, waiter) {
    let food = menu.order();
    waiter.work(food);
}

Customer.prototype.eat = function() {
    console.log("吃完了");
}


