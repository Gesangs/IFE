import { Restaurant } from "./restaurant"
import { Cook } from "./cook"
import { Waiter } from "./waiter"
import { Menu } from "./menu"

const getSingle = function(fn){
    let instance = null;
    return function (obj){
        return instance || (instance = new fn(obj));
    };
};

export const createRestaurant = getSingle(Restaurant);
export const createCook = getSingle(Cook);
export const createWaiter = getSingle(Waiter);
export const createMenu = getSingle(Menu);