import { Employee } from "./employee"
import { delay } from "./config";
export class Cook extends Employee {
    constructor(obj) {
        super(obj)

        this.cooking = this.cooking.bind(this)
    }

    async cooking(foods) {
        let foodQueue = [...foods]; 
        let food;
        while(food = foodQueue.shift()) {
            await delay(food.time, food).then(this.next.work);
        }            
    }
}