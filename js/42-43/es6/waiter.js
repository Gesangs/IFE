class Waiter extends Worker{
    constructor(obj) {
        super(obj)
    }

    work(foods) {
        if(Array.isArray(foods)) {
            this._order(foods);
        } else {
            this._serving(foods);
        }
    }

    _order(foods) {
        foods.map((item) => {
            console.log(item.name);
        })
    }

    _serving(food) {
        console.log(food.name);
    }
}