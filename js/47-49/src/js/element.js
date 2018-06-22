export class Element {
    constructor(obj) {
        if (new.target === Element) {
            throw new Error('本类不能实例化');
        }
        this.x = obj.x;
        this.y = obj.y;
        this.width = obj.width;
        this.height = obj.height;
    }
}