class NewData extends Data {
    constructor(obj) {
        super(obj)

        this.localData = null;
    }

    checkLocalStorage() {
        if(!window.localStorage) {
            alert("浏览器不支持localStorage")
        } else {
            let data = localStorage.getItem("sourceData");
            this.localData = data ? JSON.parse(data) : null; 
        }
    }

    setLocalData(arr, index) {
        let data  = this.localData ? this.localData : this.sourceData;
        return (num) => {
            data.map((item) => {
                if(arr.includes(item.product) && arr.includes(item.region)){
                    item.sale[index] = num;
                    localStorage.setItem("sourceData", JSON.stringify(data))
                    return;
                }
            })
        } 
    }

    formatData() {
        if(!this.localData) {
            this.checkLocalStorage();
        } 
        let data = this.localData ? this.localData : this.sourceData;
        this.createTableData(data)
        return this;
    }

}