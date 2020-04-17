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
        // 'deaths':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,160],
        // 'recovered':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,13,13,14,14,15,20,23,27,27,40,43,45,73,84,95,102,123,148,191,192,229,229,375,421,468],
        'dates':[[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16]],
        'confirmed':[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430],
    };
    console.log(dailyData);
    let circleArray = []
    let secs = 1000;
    const countNum = [41,59,62,67];
    const countText = ['','','25+','50+','100+'];
    let globalCounter = 0;
    colorArray =['rgba(0, 51, 68, 0.5)','rgba(221, 34, 34, 0.5)','rgba(255, 119, 0, 0.5)','rgba(255, 187, 68, 0.5)','rgba(34, 187, 255, 0.5)','rgba(102, 17, 153, 0.5)','rgba(0, 136, 136, 0.5)','rgba(220,220,220,0.5)','rgba(221, 34, 34, 1)'];
    function getColor(){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
    }
    let canUpdate = true
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
            // let rand = Math.random()*3;
            // this.r = 2*this.r;
            this.dr = 0;
            // this.rStroke = 5;
            this.lineWidth = 1;
            this.status = 'activated';
            this.update();
        }
        this.update = function(time){
            if(this.status == 'activated' && (this.x+2+this.r>canWid || this.y+2+this.r>canHgt || this.x+2<this.r || this.y+2<this.r)){
                // canUpdate = false;
                this.x = canWid/2 + (Math.random()*100-50)*this.r
                this.y = canHgt/2 + (Math.random()*100-50)*this.r
                // this.changeStatus()
            }
            // if(this.lineWidth<2 || this.lineWidth>5){
            //     this.dr = -this.dr
            // }
            time?time=time+Math.random()*1000:time=0
            // let time = new Date().getTime() +(Math.random()*1000);
            this.x = this.x + (Math.sin(time)*2)
            this.y = this.y + (Math.cos(time)*2)

            this.lineWidth += this.dr
            this.draw();
        }
        this.draw = function(){
            var grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
            grd.addColorStop(0, "#FF0000FF");
            grd.addColorStop(1, "#FF000077");
            ctx.beginPath();
            ctx.fillStyle = grd;
            ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
            ctx.fill();
            ctx.closePath();

            // ctx.beginPath();
            // ctx.strokeStyle = this.color+'7';
            // ctx.lineWidth = this.lineWidth;
            // ctx.arc(this.x, this.y, this.r+this.lineWidth, 0, 2*Math.PI)
            // ctx.stroke();
            // ctx.closePath();
        }
        this.update();
    }
    function makeGraph(counter){
        $('.legendContainer').addClass('active')
        $('.stateName').addClass('active')
        
        if(counter<7){
            
            let index1;
            if(counter == 0){
                index1 = 0
            }else{
                index1 = dailyData['confirmed'][Math.min(dailyData['confirmed'].length-1,(counter-1)*15)]
            }
            
            let index2 = dailyData['confirmed'][Math.min(dailyData['confirmed'].length-1,counter*15)]

            // console.log(counter+':'+index1 +'===>'+ index2 +'~'+(index2)/index1)
            // console.log(dailyData['dates'][index2]);
            let dateIndex = Math.min(dailyData['dates'].length-1,counter*15)
            if(dailyData['dates'][dateIndex][1]>9){
                $('.date').text(dailyData['dates'][dateIndex][1])
            }else{
                $('.date').text('0'+dailyData['dates'][dateIndex][1])
            }
            if(dailyData['dates'][dateIndex][0] == 2){
                $('.month').text('Feb')
            }else if(dailyData['dates'][dateIndex][0] == 3){
                $('.month').text('Mar')
            }else if(dailyData['dates'][dateIndex][0] == 4){
                $('.month').text('Apr')
            }
            $('.stateName').addClass('active')
            
            if(dailyData['confirmed'][dateIndex]>1000){
                $('.red').children('i').attr("data-deaths",parseFloat(dailyData['confirmed'][dateIndex]/1000).toFixed(1)+'K')
            }else{
                $('.red').children('i').attr("data-deaths",dailyData['confirmed'][dateIndex])
            }
            let incLabel 
            ((index2/index1)>0 && (index2/index1)!==Infinity)?incLabel=parseFloat(index2/index1).toFixed(1)+'x':incLabel='-';
            
            $('.green').children('i').attr("data-deaths",incLabel)
            $('.blue').children('i').attr("data-deaths",Math.min(dailyData['confirmed'].length-1,counter*15)-Math.min(dailyData['confirmed'].length-1,(counter-1)*15))
            
            // for (let i = index1; i < index2; i++) {
            //     circleArray.push(new Circle(
            //         canWid*Math.random(),
            //         canHgt*Math.random(),
            //         1,
            //         '#999'
            //     ))
            //     circleArray[i].changeStatus()
            // }
            const diff = index2-index1;
            // const th =  Math.floor(diff/1000)
            const th =  0;
            const h =  Math.floor((diff - th*1000)/100)
            const t =  Math.floor((diff - th*1000 - h*100)/10)
            const o =  Math.floor((diff - th*1000 - h*100 - t*10))
            for (let i = 0; i < o; i++) {
                circleArray.push(new Circle(
                    canWid*Math.random(),
                    canHgt*Math.random(),
                    4,
                    '#F00'
                ))
                circleArray[i].changeStatus()
            }
            for (let i = 0; i < t; i++) {
                circleArray.push(new Circle(
                    canWid*Math.random(),
                    canHgt*Math.random(),
                    10,
                    '#F00'
                ))
                circleArray[i].changeStatus()
            }
            for (let i = 0; i < h; i++) {
                circleArray.push(new Circle(
                    canWid*Math.random(),
                    canHgt*Math.random(),
                    20,
                    '#F00'
                ))
                circleArray[i].changeStatus()
            }
            for (let i = 0; i < th; i++) {
                circleArray.push(new Circle(
                    canWid*Math.random(),
                    canHgt*Math.random(),
                    20,
                    '#F00'
                ))
                circleArray[i].changeStatus()
            }
            // console.log(th,h,t,o,circleArray.length)
            setTimeout(()=>{
                makeGraph(counter+1)
            },secs)
            
        }
    }
    setTimeout(function () {
        // for (let index = 0; index < 10000; index++) {
        //     circleArray.push(new Circle(
        //         canWid*Math.random(),
        //         canHgt*Math.random(),
        //         1,
        //         '#999'
        //         // getColor()
        //     ))
        // }
        // console.log(circleArray);
        moveCircles()
        makeGraph(0);
    }, 2000)
    function moveCircles(){
        ctx.clearRect(0,0,canWid,canHgt);
        const time = new Date().getTime()
        for (let index = 0; index < circleArray.length; index++) {
            // if(index <= globalCounter){
                circleArray[index].update(time);
            // }else{
            //     circleArray[index].update();
            // }
            
        }
        // globalCounter++;
        requestAnimationFrame(moveCircles)
    }
    
})