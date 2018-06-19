export const Menu = function(arr) {
    this.innerMenu = arr;
    this.outMenu = [];

    this.createOutMenu();
} 

// 生成菜单
Menu.prototype.createOutMenu = function() {
    this.innerMenu.map((item) => {
        this.outMenu.push({
            name: item.name,
            price: item.price
        })
    })
}

// 点菜，返回一个数组
Menu.prototype.order = function() {
    let len = this.outMenu.length;
    let index = Math.floor(Math.random() * (len - 1));
    return [this.outMenu[index]];
}