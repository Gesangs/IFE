let getSingle = function(fn){
    let instance;
    return function (obj){
        return instance || (instance = new fn(obj));
    };
};

let createRestaurant = getSingle(Restaurant);
let createCook = getSingle(Cook);
let createWaiter = getSingle(Waiter);
let createMenu = getSingle(Menu);

let restaurant = createRestaurant({
    cash: 1000000,
    seats: 1,
    staff: []
});

let cook = createCook({
    id: 1,
    name: "cook",
    wage: 10000
})

restaurant.hire(cook);

let waiter = createWaiter({
    id: 2,
    name: "waiter",
    wage: 8000
})

restaurant.hire(waiter);

let menu = createMenu([
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
        name: "粽子",
        cost: 50,
        price: 60
    },
    {
        name: "粽子",
        cost: 50,
        price: 60
    },
    {
        name: "粽子",
        cost: 50,
        price: 60
    },
    {
        name: "粽子",
        cost: 50,
        price: 60
    },
    {
        name: "粽子",
        cost: 50,
        price: 60
    }
]) 
