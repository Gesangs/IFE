class NewData extends Data {
    constructor(obj) {
        super(obj)
        this.localData = null;
    }

    // 查询本地数据
    checkLocalStorage() {
        if(!window.localStorage) {
            alert("浏览器不支持localStorage")
        } else {
            let data = localStorage.getItem("sourceData");
            this.localData = data ? JSON.parse(data) : null; 
        }
    }

    // 根据input所在位置生成保存数据的方法
    setLocalData(arr, index) {
        let data  = this.localData ? this.localData : this.sourceData;
        return (num) => {
            data.map((item) => {
                if(arr.includes(item.product) && arr.includes(item.region)){
                    if(item.sale[index] == num) return
                    item.sale[index] = num;
                    localStorage.setItem("sourceData", JSON.stringify(data))
                    return;
                }
            })
        } 
    }

    filterData(){
        let data = this.localData ? this.localData : this.sourceData;        
        return data.filter((item) =>{
            if(this.product.includes(item.product) && this.region.includes(item.region)) {
                return true;
            }
        })
    }

    // 重写父级方法，加入查询本地数据
    formatData() {
        if(!this.localData) {
            this.checkLocalStorage();
        } 
        let data = this.localData ? this.localData : this.sourceData;
        this.createTableData(data)
        return this;
    }

}