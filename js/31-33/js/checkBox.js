class CheckBox {
    constructor(obj) {
        this.name = obj.name
        this.arr = obj.arr
        this.container = obj.container || document.getElementById(`${obj.name}-radio-wrapper`)
        
        // 除全选外的所有box
        this.$allCheckBox
        // 全选按钮
        this.$all
        // 选中的
        this.$selected
               
    }

    init(){
        this.createCheckBox()
        this.addEvent()

        return this;
    }

    createCheckBox(){
        let data = this.arr;
        let $div = this.container;
        let $input, $text;
        data.map((item, index) => {
            // 生成checkBox
            $input = document.createElement("input");
            $input.type = "checkbox";
            $input.value = item;
            $input.name = this.name;
            // 默认选中第一个
            index == 0 ? $input.checked = "true" : "";
            $div.appendChild($input);
            // 生成选项描述
            $text = document.createTextNode(item);
            $div.appendChild($text);
        })

        // 添加全选框
        $input = document.createElement("input");
        $input.type = "checkbox";
        $input.name = "all";
        $div.appendChild($input);
        $text = document.createTextNode("全选");
        $div.appendChild($text);

        this.$allCheckBox = $div.querySelectorAll(`input[name=${this.name}]`);
        this.$all = $div.querySelector("input[name='all']");
        this.$selected = $div.querySelectorAll(`input[name=${this.name}]:checked`);        
    }

    addEvent(){
        this.container.addEventListener("click", (e) => {
            this.clickEvent(e)
        }, false)
    }

    clickEvent(e) {
        this.refresh()            
        let $target = e.target || e;
        if($target.name === "all") {
            this.selectAll()
        } else if($target.name === this.name) {
            this.selectOne($target)
        }
        this.refresh()
    }

    refresh(){
        this.$selected = this.container.querySelectorAll(`input[name=${this.name}]:checked`);                    
    }

    // 点击全选按钮
    selectAll(){
        [...this.$allCheckBox].map((item) => {
            item.checked = "true";
        })
        this.$all.checked = true;
    }

    // 点击其他按钮
    selectOne($target){
        // 如果被选中且唯一，则再次选中
        if(this.$selected.length == 0) {
            $target.checked = "true"
        } else if(this.$selected.length === this.$allCheckBox.length) {
            // 如果满足全选状态，就选中全选按钮
            this.$all.checked = true;
        } else if(this.$selected.length !== this.$allCheckBox.length && this.$all.checked) {
            // 如果已经不满足全选状态，就取消选中全选按钮
            this.$all.checked = false;    
        }
    }

    getValue(){
        let result = [];
        [...this.$selected].map((item) => {
            result.push(item.value);
        })
        return result;
    }

}