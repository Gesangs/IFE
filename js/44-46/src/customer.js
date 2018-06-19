export const Customer = function() {
}

Customer.prototype.order = function(menu) {
    console.log("小二请上菜！")
    return menu.order();
}

Customer.prototype.eat = function(food) {
    console.log(food.name + "很美味");
}


