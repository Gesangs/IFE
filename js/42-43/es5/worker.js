var Worker = function(obj = {}) {
    this.id = obj.id;
    this.name = obj.name;
    this.wage = obj.wage;
}

Worker.prototype.work = function() {
    console.log("请分配工作");
}