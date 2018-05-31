function makeSVG(tag, attrs) {
    let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (let attr in attrs){
        el.setAttribute(attr, attrs[attr]);
    }
    return el;
}

// 计算y轴坐标，换算成整十整百
function getInt(num) {
    if(num > 10 && num < 100) {
        return Math.ceil(num/10) * 10;
    } else if(num > 100) {
        return Math.ceil(num/100) * 100;
    }
}

function drawBar(data) {
    let width = "750",
        height = "400",
        init = 50;
        xLen = 350,
        yLen = 700,
        wBar = 30,
        space = 20,
        barColor = "#38ba72",
        lineColor = "black";
        max = Math.max.apply(Math, data),
        scale = (xLen - 10) / max; // 像素点和数值之间的比例

        // 初始绘制区域
        let $warp = document.getElementById("wrap");
        $warp.innerHTML = ""
        $warp.appendChild(makeSVG("svg", {width, height, id: "s"}))
        let $svg = document.getElementById("s");

        // 绘制x、y轴
        let x = makeSVG("line", {x1:init, y1:0, x2: init, y2: xLen, stroke:lineColor, strokeWidth: 2});
        let y = makeSVG("line", {x1:init, y1:xLen, x2: yLen + init, y2: xLen, stroke:lineColor, strokeWidth: 2});
        $svg.appendChild(x)
        $svg.appendChild(y)    

        // 绘制刻度
        // 获取y轴最大值
        max = getInt(max);
        // 刻度间隔
        let once = max / 5;
        while(max >= 0) {
            // 绘制数值
            let text = makeSVG("text", {x: init - 40, y: xLen - max*scale + 5})
            text.innerHTML = max;
            $svg.appendChild(text)
            
            // 0刻度不绘制
            if(max != 0) {
                // 绘制刻度标记
                let line = makeSVG("line", {x1: init-3, y1: xLen - max*scale, x2: init, y2: xLen - max*scale, stroke: lineColor, strokeWidth:2})
                $svg.appendChild(line)

                // 绘制参考线
                line = makeSVG("line", {x1: init, y1: xLen - max*scale, x2: yLen, y2: xLen - max*scale, stroke: "#e8e8e8", strokeWidth: 1})
                $svg.appendChild(line);
            }

            max -= once;
        }

        // 按照数据绘制柱子
        data.map((item, index) => {
            let x = init + space + index * (wBar + space);
            let y = xLen - item * scale;
            let bar = makeSVG("rect", {width:wBar, height:item * scale, x, y, fill: barColor, stroke: barColor, strokeWidth: 1})
            $svg.appendChild(bar);
            // 绘制月份
            let text = makeSVG("text", {x, y: xLen + 20})
            text.innerHTML = index + 1 + "月";
            $svg.appendChild(text)
        })


}
