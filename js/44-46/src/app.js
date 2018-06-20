import { createRestaurant, createCook, createWaiter, createMenu } from "./single"
import { Customer } from "./customer"

// 租个店面
const restaurant = createRestaurant({
    cash: 1000000,
    seats: 1,
    staff: []
});

// 招个厨师
const cook = createCook({
    id: 1,
    name: "cook",
    wage: 10000
})

restaurant.hire(cook);

//  招个服务员
const waiter = createWaiter({
    id: 2,
    name: "waiter",
    wage: 8000
})

restaurant.hire(waiter);

// 菜单
const menu = createMenu([
    {
        name: "粽子",
        cost: 50,
        price: 60
    },
    {
        name: "饺子",
        cost: 50,
        price: 60
    },
    {
        name: "果子",
        cost: 50,
        price: 60
    },
    {
        name: "青菜",
        cost: 50,
        price: 60
    },
    {
        name: "白菜",
        cost: 50,
        price: 60
    },
    {
        name: "萝卜",
        cost: 50,
        price: 60
    },
    {
        name: "香菜",
        cost: 50,
        price: 60
    },
    {
        name: "榴莲",
        cost: 50,
        price: 60
    }
]) 

// 顾客队列
const customerQueue = [
    new Customer(),
    new Customer(),
    new Customer(),
    new Customer(),
    new Customer(),
    new Customer(),
    new Customer()
]

function delay(time) {
    return new Promise((resolve, reject)=>{
        setTimeout(function () {resolve()}, time);
    })
}

async function open() {
    let person = null;
    while(customerQueue.length && (person = customerQueue.shift())) {
        restaurant.seats--;
        // 顾客点的菜
        let foods = person.order(menu);
        await delay(300)
        waiter.work(foods);
        // 厨师做好的菜
        await delay(1000)
        let food = cook.work(foods);
        waiter.work(food);
        person.eat(food);
        await delay(1000)
        console.log("欢迎下次光临")
        restaurant.seats++;
        console.log("-----------------------------------")
    }
    
}

// 开张
open()