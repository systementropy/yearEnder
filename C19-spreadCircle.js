$(document).ready(function(){
    const canvas = document.getElementById("canvas");
    const canHgt = 800;
    const canWid = Math.min(window.innerWidth-50,930);
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 1;
    ctx.strokeColor = '#000';
    const dailyData = {
        // 'country':[6,8,9,11,14,16,16,18,20,24,25,25,25,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,28,28,30,30,30,35,39,46,50,56,60,65,72,76,80,84,93,98,102,105,108,114,116,122,135,139,144,147,150,154,161,163,168,169,171,173,174,175,175,175,176,178,178,179],
        'deaths':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,160],
        'recovered':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,13,13,14,14,15,20,23,27,27,40,43,45,73,84,95,102,123,148,191,192,229,229,375,421,468],
        'dates':[[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8]],
        'confirmed':[1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5356],
    };
    console.log(dailyData);
    let circleArray = []
    let secs = 100;
    const countNum = [41,59,62,67];
    const countText = ['','','25+','50+','100+'];
    let globalCounter = 0;
    colorArray =['rgba(0, 51, 68, 0.5)','rgba(221, 34, 34, 0.5)','rgba(255, 119, 0, 0.5)','rgba(255, 187, 68, 0.5)','rgba(34, 187, 255, 0.5)','rgba(102, 17, 153, 0.5)','rgba(0, 136, 136, 0.5)','rgba(220,220,220,0.5)','rgba(221, 34, 34, 1)'];
    function getColor(){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
	}
    function Circle (x,y,r,color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.rStroke = r+Math.random()*15;
        this.dr = 0;
        this.color = color;
        this.lineWidth = 2.1;
        this.changeStatus = function(){
            this.color ='#F00';
            let rand = Math.random()*3;
            this.r = 1;
            this.dr = 0.1*rand;
            // this.rStroke = 5;
            this.lineWidth = 2+rand;
            this.update();
        }
        this.update = function(){

            if(this.lineWidth<2 || this.lineWidth>5){
                this.dr = -this.dr
            }

            let time = new Date().getTime() +(Math.random()*1000);
            this.x = this.x + (Math.sin(time) *Math.random()*5)
            this.y = this.y + (Math.cos(time) *Math.random()*5)

            this.lineWidth += this.dr
            this.draw();
        }
        this.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.strokeStyle = this.color+'7';
            ctx.lineWidth = this.lineWidth;
            ctx.arc(this.x, this.y, this.r+this.lineWidth, 0, 2*Math.PI)
            ctx.stroke();
            ctx.closePath();
        }
        this.update();
    }
    function makeGraph(counter){
        console.log(counter,Math.pow(counter,2) ,circleArray.length)
        if(counter<50){
           for (let index = 0; index < Math.min(Math.pow(counter,2),circleArray.length); index++) {
               circleArray[index].changeStatus()
           }
            setTimeout(()=>{
                makeGraph(counter+1)
            },secs)
            
        }
    }
    setTimeout(function () {
        for (let index = 0; index < 2000; index++) {
            circleArray.push(new Circle(
                canWid*Math.random(),
                canHgt*Math.random(),
                1,
                '#CCC'
                // getColor()
            ))
        }
        console.log(circleArray);
        moveCircles()
        // makeGraph(0);
    }, 2000)
    function moveCircles(){
        ctx.clearRect(0,0,canWid,canHgt);
        for (let index = 0; index < circleArray.length; index++) {
            // if(index <= globalCounter){
                circleArray[index].update(1);
            // }else{
            //     circleArray[index].update();
            // }
            
        }
        // globalCounter++;
        requestAnimationFrame(moveCircles)
    }
    
})