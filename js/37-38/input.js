class Input {
    constructor(obj) {
        this.node = obj.node;
        this.preData = this.node.innerHTML;
        this.value;
        this.$input = document.createElement("input");
        this.$conBtn = document.createElement("button");
        this.$canBtn = document.createElement("button");
        this.fun
    }

    createInput(fun){
        this.node.innerHTML = ""
        this.$input.value = this.preData;
        this.node.appendChild(this.$input);
        this.$input.focus()
        this.$conBtn.innerHTML = "确认";
        this.node.appendChild(this.$conBtn);
        this.$canBtn.innerHTML = "取消";
        this.node.appendChild(this.$canBtn);       
        this.addEvent()         
        this.fun = fun;
    }
    

    checkNum(num){
        return !Number.isNaN(Number(num))
    }

    inputBlur(e){
        let value = this.$input.value;
        if(this.checkNum(value)) {
            this.node.innerHTML = value;
            this.fun(value)
        } else {
            console.log("请输入数字")
            alert("!!!")
            this.node.innerHTML = this.preData;
        }   
    }

    addEvent() {
        this.$conBtn.addEventListener("mousedown", this.inputBlur.bind(this),true)
        this.$canBtn.addEventListener("mousedown", (e) => {
            this.node.innerHTML = this.preData;            
        },false)
        this.$input.onblur = () => {
            this.node.innerHTML = this.preData;  
        }
    }
}