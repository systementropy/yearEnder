$(document).ready(function(){
    const canvas = document.getElementById("canvas");
    const canHgt = 500;
    const canWidAvailable = 650;
    const canWid = 740;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 2;
    ctx.strokeColor = '#000'
   
    const colorArray = ['#92C24C77','#C9224C77','#C2924C77','#C24C9277','#C2492C77'];
    let slideIndex;
    let counter = 0;
    let circleArray = [];
    let confirmedColorSwitch ='#E26666';
    let confirmedColor ='#E26666';
    let recoveredColor ='#55ABEA';
    let deathColor ='#525252';
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let today = new Date();
    let dateLiteral = today.getDate();
    dateLiteral>9?dateLiteral=dateLiteral:dateLiteral='0'+dateLiteral
    const todayData = [{
        dailyconfirmed: "",
        dailydeceased: "",
        dailyrecovered: "",
        date: "05 October",
        totalconfirmed: "6623815",
        totaldeceased: "102685",
        totalrecovered: "5586703",
    }]
    console.log(todayData);
    
    // const widthStep = canWidAvailable/todayData['dates'].length;
    const heightFactor = 100;
    const countriesFactor = 250;
    const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 200;
    // const countNum = [8,52,67,76,82];
    // const countText = ['','100+','1000+','5000+','10000+']
    const countNum =[]
    
    let dailyCumulative = [
		[1900,73.7],[1904,65.5],[1908,65.7],[1912,59],[1916,61.8],[1920,49.2],[1924,48.9],[1928,56.9],[1932,56.9],[1936,61],[1940,62.4],[1944,55.9],[1948,52.2],[1952,62.3],[1956,60.2],[1960,63.8],[1964,62.8],[1968,62.5],[1972,56.2],[1976,54.8],[1980,54.2],[1984,55.2],[1988,52.8],[1992,58.1],[1996,51.7],[2000,54.2],[2004,60.1],[2008,61.6],[2012,58.6],[2016,60.1],['2020*',65]
	]
    const widthStep = 20;
    function makeGraph(counter){
        if(counter<dailyCumulative.length){
            $('.legendContainer').addClass('active')
            
            const thisDateElement = dailyCumulative[counter];
            console.log(thisDateElement);
            const dateString = thisDateElement[0]
            console.log(dateString);
            $('.yearData').text(dateString)
            
            let activeNum = thisDateElement[1];
			$('.voterData').text(thisDateElement[1]+'%')
			const deathNum = thisDateElement[1];
            

            ctx.beginPath();
            ctx.strokeStyle = '#FFF'
            ctx.fillStyle = confirmedColor;
            ctx.rect(
                ((counter)*(widthStep+1)),canHgt,
                widthStep,-(canHgt*deathNum)/heightFactor
            )
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            
            setTimeout(()=>{
                makeGraph(counter+1)
            },secs)
            
        }
    }
    setTimeout(function () {
        // var arr = [0, 1000, 2000, 3000, 4000, 5000,6000,7000,8000,9000,10000,11000]
        // const arr = [0, 25, 50, 75, 100, 125, 150, 175, 200]
        ctx.beginPath();
        ctx.setLineDash([])
        ctx.lineWidth =1;
        ctx.strokeStyle = '#707070';
        ctx.fillStyle = '#707070';
        ctx.rect(canWidAvailable,0,1,canHgt);
        ctx.rect(0,canHgt-1,canWidAvailable,1);
        ctx.fill();
        ctx.closePath();
        for (let counter = 0; counter < 100; counter+=5) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%20 === 0 && counter!==0){
                ctx.fillText(counter+'%', canWidAvailable + 30, 6+(canHgt*(1-(counter*1/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+'%', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%20 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter*1/heightFactor))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter*1/heightFactor))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =0.5;
        }
        makeGraph(0);
    }, 2000)
    
})