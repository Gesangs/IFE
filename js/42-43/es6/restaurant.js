class Restaurant {
    constructor(obj) {
        this.cash = obj.cash;
        this.seats = obj.seats;
        this.staff = obj.staff;
    }

    // 聘用
    hire(worker) {
        // 在职工表中查找该员工
        let hasStaff = false;
        this.staff.map((item) => {
            if(item.id === worker.id) {
                hasStaff = true;
            }
        })
        // 若不存在就聘用
        if(!hasStaff) {
            this.staff.push(worker);
        } else {
            console.log("该员工已经聘用过了！")
        }
    }

    // 解雇
    fire(worker) {
        this.staff.map((item, index) => {
            if(item.id === worker.id) {
                this.staff.splice(index, 1);
            }
        })
    }
}