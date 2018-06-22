// 时间单位为1秒
export const timeUnit = 1000;

// 吃每个菜的时间
export const eatTime = 2 * timeUnit; 

// 服务员移动时间
export const moveTime = 0.5 * timeUnit;

// 菜单
export const menu = [
    {
        name: "糖醋排骨",
        cost: 20,
        price: 50,
        time: 2 * timeUnit
    },
    {
        name: "醋溜山药",
        cost: 10,
        price: 30,
        time: 4 * timeUnit
    },
    {
        name: "茄子烧豆角",
        cost: 10,
        price: 30,
        time: 1 * timeUnit
    },
    {
        name: "香辣小龙虾",
        cost: 80,
        price: 160,
        time: 6 * timeUnit
    },
    {
        name: "鱿鱼炖排骨",
        cost: 30,
        price: 60,
        time: 5 * timeUnit
    },
    {
        name: "猪肉粽子",
        cost: 20,
        price: 40,
        time: 3 * timeUnit
    },
    {
        name: "香菜拌豆干",
        cost: 5,
        price: 20,
        time: 2 * timeUnit
    },
    {
        name: "榴莲班戟",
        cost: 30,
        price: 80,
        time: 5 * timeUnit
    }
]

// 延时函数
export function delay(time, any) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => { resolve(any) }, time)
    })
} 

export class TextBox {
    constructor(obj) {
        this.left = obj.left;
        this.top = obj.top;
        this.img = obj.img;
        this.class = obj.class;
        this.box = null;
        this.text = null;
        this.createBox()
    }

    createBox() {
        let $div = document.createElement("div");
        $div.className = this.class;
        this.text = document.createElement("p");
        $div.appendChild(this.text);
        $div.appendChild(this.img)
        document.getElementById("app").appendChild($div);
        $div.style = `left:${this.left}px; top:${this.top}px;`;
        this.box = $div;
    }

    moveTo(x, y) {
        this.box.style = `left:${x}px; top:${y}px;`;
    }

    setText(text) {
        this.text.innerHTML = "";
        if(Array.isArray(text)) {
            text.map((item) => {
                let eatState = item.eatState;
                let cookState = item.cookState;
                switch(this.class) {
                    case "cook":
                        cookState = typeof cookState === "object" ? "待做" : cookState === 0 ? "做好了" : "还剩" + cookState + "s做好";
                        this.text.innerHTML += `${item.name}: ${cookState} <br />`;
                    break;
                    case "customer":
                        eatState = typeof eatState === "object" ? "还没上" : eatState === 0 ? "吃完了" : "还剩" + eatState + "s吃完";
                        this.text.innerHTML += `${item.name}: ${eatState} <br />`;
                    break;
                }
            })
        } else {
            this.text.innerHTML = text;
        }
    }
}