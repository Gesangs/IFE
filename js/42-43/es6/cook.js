class Cook extends Worker {
    constructor(obj) {
        super(obj)
    }

    work(foods) {
        let len = foods.length;
        for(let i = 0; i < len; i++) {
            setTimeout(() => {
                console.log(foods.name);
            }, i * 1000)
        }
    }
}