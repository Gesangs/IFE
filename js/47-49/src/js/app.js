import { Customer } from "./customer";
import { Restaurant } from "./restaurant";
import "../style/index.css"


// 租个店面
const restaurant = new Restaurant({
    cash: 1000000,
    seats: 1,
    staff: []
})

// 找个厨子
restaurant.hire("Cook", {
    id: 1,
    name: "cook",
    wage: 10000,
    x: 200,
    y: 200,
    width: 100,
    height: 100
});

// 找个跑堂的
restaurant.hire("Waiter", {
    id: 2,
    name: "waiter",
    wage: 8000,
    x: 600,
    y: 200,
    width: 100,
    height: 100
});

// 迎接客人
for(let i = 0; i < 6; i++) {
    restaurant.setCustomerQueue(new Customer({
        name: "客人" + (i+1),
        x: 1200,
        y: 200 + 120 * i,
        width: 100,
        height: 100
    }));
}

// 开张
document.getElementById("open").onclick = () => {
    restaurant.next();
}
