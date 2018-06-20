import { Customer } from "./customer";
import { Restaurant } from "./restaurant";
import { Cook } from "./cook";
import { Waiter } from "./waiter";

const restaurant = new Restaurant({
    cash: 1000000,
    seats: 1,
    staff: []
})

const cook = new Cook({
    id: 1,
    name: "cook",
    wage: 10000
})

const waiter = new Waiter({
    id: 2,
    name: "waiter",
    wage: 8000
})

restaurant.hire(cook);
restaurant.hire(waiter);


const xiaoming = new Customer("xiaoming");

xiaoming.setNext(waiter);
waiter.setNext(cook);
cook.setNext(waiter);

xiaoming.order()

