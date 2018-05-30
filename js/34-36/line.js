

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");


function drawLine(data) {
    let xLen = 350,
    yLen = 700,
    pointR = 4,
    pointColor = "#18b7f5",
    lineColor = "#38ba72",
    lineWidth = 2,
    init = 50,
    space = 50,
    max = Math.max.apply(Math, data),  
    scale = (xLen - 20)/max;
    
    ctx.clearRect(0,0,1000,500);
    // 绘制横轴及纵轴
    ctx.beginPath();
    ctx.moveTo(init,10);
    ctx.lineTo(init,xLen);
    ctx.lineTo(yLen + init,xLen);
    ctx.stroke()

    // 绘制刻度
    max = getInt(max);
        let noun = max - max/5;
        while(noun >= 0) {
            ctx.beginPath()
            ctx.strokeText(noun, init - 30, xLen - noun*scale + 3)
            ctx.closePath()

            ctx.beginPath();
            ctx.moveTo(init-3, xLen - noun*scale);
            ctx.lineTo(init, xLen - noun*scale);
            ctx.stroke()
            
            noun -= max/5;
    }

    let lastX, lastY;
    data.map((item, index) => {
        // 计算将要绘制数据点的坐标
        let x = ((index + 1) * space + init);
        let y = xLen - item * scale;
        // 绘制数据点
        drawPoint(x, y, pointR, pointColor)

        // 绘制月份
        ctx.beginPath()
        ctx.strokeText(`${index+1}月`, x, xLen + 20)
        ctx.closePath()


        // 不是第一个点
        if(index !== 0) {
            // 绘制这个数据点和上一个数据点的连线
            ctx.beginPath()
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke()
        }
        // 记录下当前数据点的数据用于下一个点时绘制连线
        lastX = x;
        lastY = y;
    })

}

function drawPoint(x, y, r, c){
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fillStyle = c;
    ctx.fill()
}

drawLine()