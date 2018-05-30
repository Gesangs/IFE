class Data {
    constructor(data) {
        this.sourceData = data.sourceData
        this.product = data.product
        this.region = data.region
        this.first = this.region.length == 1 && this.product.length != 1 ? "region" : "product";
        this.two = this.first === "region" ? "product" : "region";

        this.result = []
    }

    // 生成表内容
    createTableData(sourceData) {
        let first = this[this.first];
        
        first.map((p) => {
            this.result.push([p]);
        })
        sourceData.map((item) => {
            this.result.map((re) => {
                if(re[0] == item[this.first] && this[this.two].includes(item[this.two])) {
                    let s = [];
                    s.push(item[this.two]);
                    re.push(s.concat(item.sale))
                }
            })
        })
        this.result.map((item) => {
            let one = item.shift();
            item[0].unshift(one);
        })
        this.formatTh()
    }

    filterData(){
        return sourceData.filter((item) =>{
            if(this.product.includes(item.product) && this.region.includes(item.region)) {
                return true;
            }
        })
    }

    // 生成表头数据
    formatTh(){
        let mouths = [this.first, this.two];
        for(let i = 1; i <= 12; i++) {
            mouths.push(`${i}月`);
        }
        this.result.unshift(mouths);
    }

    formatData() {
        this.createTableData(this.sourceData)
        return this
    }
}

// 数据模版
let data = [
    ["product", "region", 1,2,3,4,5,6,7,8,9,10,11,12],
    [
        ["手机", "华北", 1,2,3,4,5,6,7,8,9,10,11,12],
                ["华南", 1,2,3,4,5,6,7,8,9,10,11,12]
    ],
    [
        ["笔记本", "华北", 1,2,3,4,5,6,7,8,9,10,11,12],
                 ["华南", 1,2,3,4,5,6,7,8,9,10,11,12]
    ]
]