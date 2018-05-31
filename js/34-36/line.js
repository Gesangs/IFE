let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let colorArr = [
    "#ff0000",
    "#f6941d",
    "#61acfc",
    "#99cc33",
    "#219167",
    "#24998d",
    "#0080ff",
    "#3366cc",
    "#bd2158"
]

function getMax(arr) {
    let maxArr = [];
    arr.map((item) => {
        maxArr.push(Math.max.apply(Math, item.sale))
    })
    return Math.max.apply(Math, maxArr);
}

function drawPoint(x, y, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(data = []) {
    let xLen = 350,
        yLen = 700,
        pointR = 5,
        init = 50,
        space = 50,
        max = getMax(data),
        scale = (xLen - 10) / max;

    ctx.clearRect(0, 0, 1000, 500);

    // 绘制x轴及y轴
    ctx.beginPath();
    ctx.moveTo(init, 0);
    ctx.lineTo(init, xLen);
    ctx.lineTo(yLen + init, xLen);
    ctx.stroke()

    // 绘制轴线刻度
    // 获取y轴最大值，并换算成整十整百
    max = getInt(max);
    // 刻度间隔
    let once = max / 5;
    while (max >= 0) {
        // 刻度值
        ctx.beginPath()
        ctx.strokeText(max, init - 30, xLen - max * scale + 3)
        ctx.closePath()

        // 0零刻度不需要绘制
        if(max != 0) {
            // 刻度标记
            ctx.beginPath();
            ctx.moveTo(init - 3, xLen - max * scale);
            ctx.lineTo(init, xLen - max * scale);
            ctx.stroke()
    
            // 参考线
            ctx.beginPath()
            ctx.moveTo(init, xLen - max * scale);
            ctx.lineTo(yLen, xLen - max * scale);
            ctx.strokeStyle = "#e8e8e8";
            ctx.stroke()
            ctx.closePath()
            ctx.strokeStyle = "#000000";
        }

        max -= once;
    }

    let lastX, lastY;
    
    data.map((item, index) => {
        item.sale.map((i,d) => {
            // 计算将要绘制数据点的坐标
            let x = ((d + 1) * space + init);
            let y = xLen - i * scale;
            // 绘制数据点
            drawPoint(x, y, pointR, colorArr[index])

            // 绘制月份，绘制一次就可以了
            if(index == 0) {
                ctx.beginPath()
                ctx.strokeText(`${d + 1}月`, x - 5, xLen + 20)
                ctx.closePath()
            }
            
            // 不是第一个点
            if (d !== 0) {
                // 绘制这个数据点和上一个数据点的连线
                ctx.beginPath()
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = colorArr[index];
                ctx.stroke()
                ctx.strokeStyle = "#000000";
            }
            // 记录下当前数据点的数据用于下一个点时绘制连线
            lastX = x;
            lastY = y;
        }) 
    })
}


