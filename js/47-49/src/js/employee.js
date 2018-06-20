import { Handler } from "./handler";

export class Employee extends Handler {
    constructor(obj) {
        super(obj)
        if (new.target === Employee) {
            throw new Error('本类不能实例化');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.wage = obj.wage;
    }

    work() {
        console.log("请分配工作！");
    }
}