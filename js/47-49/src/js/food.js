export class Food {
    constructor(obj) {
        // 菜名
        this.name = obj.name;
        // 利润
        this.profit = obj.price - obj.cost;
        // 状态（还未上(null)、正在吃（还有多久吃完）(1,2,3)、已吃完(0) ）
        this.state = null;
        this.time = obj.time;
    }

    // 开始吃，启动计时器
    start(){

    }
}