var Customer = function() {
    console.log("来客人了")
}

Customer.prototype.order = function() {
    console.log("点菜");
    return new Food({
        name: "粽子"
    })
}

Customer.prototype.eat = function() {
    console.log("吃完了");
}


