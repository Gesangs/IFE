var Restaurant = function(obj = {}) {
    this.cash = obj.cash;
    this.seats = obj.seats;
    this.staff = obj.staff;

    console.log(this.cash)
}

// 聘用
Restaurant.prototype.hire = function(worker) {
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
    }
} 

// 解雇
Restaurant.prototype.fire = function(worker) {
    this.staff.map((item, index) => {
        if(item.id === worker.id) {
            this.staff.splice(index, 1);
        }
    })
}
