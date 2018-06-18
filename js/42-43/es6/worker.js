class Worker {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.wage = obj.wage;
    }

    work() {
        console.log("请分配工作！");
    }
}