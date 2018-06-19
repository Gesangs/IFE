var Cook = function(obj = {}) {
    Worker.call(this, obj)
}

Cook.prototype = new Worker();

Cook.prototype.work = function(foods) {
    let len = foods.length;
    for(let i = 0; i < len; i++) {
        setTimeout(() => {
            console.log(foods.name);
        }, i * 1000)
    }
}