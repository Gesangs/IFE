let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let colorArr = [
    "#ff0000",
    "#f6941d",
    "#ffff00",
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

function drawLine(data = []) {
    let xLen = 350,
        yLen = 700,
        pointR = 4,
        lineWidth = 2,
        init = 50,
        space = 50,
        max = getMax(data),
        scale = (xLen - 20) / max;

    ctx.clearRect(0, 0, 1000, 500);
    // 绘制横轴及纵轴
    ctx.beginPath();
    ctx.moveTo(init, 10);
    ctx.lineTo(init, xLen);
    ctx.lineTo(yLen + init, xLen);
    ctx.stroke()

    // 绘制刻度
    max = getInt(max);
    let noun = max - max / 5;
    while (noun >= 0) {
        // 刻度值
        ctx.beginPath()
        ctx.strokeText(noun, init - 30, xLen - noun * scale + 3)
        ctx.closePath()

        // 刻度标记
        ctx.beginPath();
        ctx.moveTo(init - 3, xLen - noun * scale);
        ctx.lineTo(init, xLen - noun * scale);
        ctx.stroke()

        // 参考线
        ctx.beginPath()
        ctx.moveTo(init, xLen - noun * scale);
        ctx.lineTo(yLen, xLen - noun * scale);
        ctx.strokeStyle = "#e8e8e8";
        ctx.stroke()
        ctx.closePath()
        ctx.strokeStyle = "#000000";

        noun -= max / 5;
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
                ctx.strokeText(`${d + 1}月`, x, xLen + 20)
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

function drawPoint(x, y, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = color;
    ctx.fill()
}

drawLine()