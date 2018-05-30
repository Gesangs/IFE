class Table {
    constructor(obj){
        this.data = obj.data
        this.container = obj.container || document.getElementById("table-wrapper")
    }

    createTable() {
        this.container.innerHTML = "";
        let $table = document.createElement("table");
        $table.border = 1;
        $table.cellSpacing = 0;

        let $th = this.createTableTh(this.data.shift())
        $table.appendChild($th)

        this.data.map((item) => {
            let $tr = this.createTableTd(item);
            $table.appendChild($tr);
        })
        this.container.appendChild($table);

        return $table;
    }

    //  表头数据
    createTableTh(data) {
        let $tr = document.createElement("tr");
        data.map((item) => {
            let $th = document.createElement("th");
            $th.innerHTML = item;
            $tr.appendChild($th);
        }) 
        return $tr;
    }

    // 表内容
    createTableTd(data){
        let $warp = document.createDocumentFragment();
        let $tr;
        data.map((item, index) => { 
            $tr = document.createElement("tr");
            item.map((i, d) => {
                let $td = document.createElement("td");  
                $td.innerHTML = i;
                if(index == 0 && d == 0) $td.rowSpan = data.length;
                $tr.appendChild($td);  
            })
            if(index == 0) {
                $tr.setAttribute("data-source", `${item[0]},${item[1]}`)
            } else {
                $tr.setAttribute("data-source", `${data[0][0]},${item[0]}`);
            }
            $warp.appendChild($tr);
        })
        return $warp;        
    }
}
