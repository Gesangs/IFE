import { TextBox } from "./config"
export class Element {
    constructor(obj) {
        if (new.target === Element) {
            throw new Error('本类不能实例化');
        }
        this.x = obj.x;
        this.y = obj.y;
        this.width = obj.width;
        this.height = obj.height;
        this.node = null;
    }

    draw(role) {
        let image = new Image(this.width, this.height);
        image.src = `../src/image/${role}.jpeg`;
        image.onload = () => {
            let box = new TextBox({left: this.x, top: this.y, img: image, class: role})
            this.node = box;
        }
    }
}