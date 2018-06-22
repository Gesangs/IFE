import { Element } from "./element"

export class Handler extends Element {
    constructor(obj){
        super(obj)
        if (new.target === Handler) {
            throw new Error('本类不能实例化');
        }

        this.next = null;
    }


    setNext(_handler) {
        this.next = _handler;    
    }

    handleRequest() {

    }
}