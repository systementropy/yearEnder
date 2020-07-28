$(document).ready(function(){
    const canvas = document.getElementById("canvas");
    const canHgt = 560;
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
    let confirmedColor ='#AFB6D0';
    let recoveredColor ='#55ABEA';
    let deathColor ='#ca9828';
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let today = new Date();
    let dateLiteral = today.getDate();
    dateLiteral>9?dateLiteral=dateLiteral:dateLiteral='0'+dateLiteral

    const todayData = [{
        dailyconfirmed: "424",
        dailydeceased: "6",
        dailyrecovered: "19",
        date: "28 July",
        totalconfirmed: "1483156",
        totaldeceased: "33425",
        totalrecovered: "952743",
    }]
    console.log(todayData);
    
    // const widthStep = canWidAvailable/todayData['dates'].length;
    const heightFactor = 1040000;
    const countriesFactor = 250;
    const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 100;
    // const countNum = [8,52,67,76,82];
    // const countText = ['','100+','1000+','5000+','10000+']
    const countNum =[]
    var json = JSON.parse($.ajax({'url': "/data/data.json", 'async': false}).responseText);
    let dailyCumulative = json['cases_time_series'];
    dailyCumulative = dailyCumulative.slice(62)
    for (let index = 0; index < todayData.length; index++) {
        dailyCumulative.push(todayData[index]) 
    }
    console.log(dailyCumulative)
    const widthStep = canWidAvailable/dailyCumulative.length;
    function makeGraph(counter){
        if(counter<dailyCumulative.length){
            $('.legendContainer').addClass('active')
            
            const thisDateElement = dailyCumulative[counter];
            
            const dateString = thisDateElement['date'].split(' ')
            $('.month').text(dateString[1])
            $('.date').text(dateString[0])
            
            let activeNum = thisDateElement['totalconfirmed']-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let recvNum = thisDateElement['totalrecovered'];
            let deathNum = thisDateElement['totaldeceased'];

            
            
            activeNum>=1000?$('.confirmedData').text((activeNum/1000).toFixed(1)+'K'):$('.confirmedData').text(activeNum)
            recvNum>=1000?$('.recoveredData').text((recvNum/1000).toFixed(1)+'K'):$('.recoveredData').text(recvNum)
            
            if(counter>0){
                const prevDateElement = dailyCumulative[counter-1];
                let activePrevNum = prevDateElement['totalconfirmed']-prevDateElement['totalrecovered']-prevDateElement['totaldeceased'];
                let recvPrevNum = prevDateElement['totalrecovered'];
                let deathPrevNum = prevDateElement['totaldeceased'];
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.strokeStyle = confirmedColorSwitch;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-((activePrevNum)/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-((activeNum)/heightFactor))))
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = recoveredColor;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(recvPrevNum)/heightFactor)));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(recvNum)/heightFactor)))
                ctx.stroke();
                ctx.closePath();
                
            }
            
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
        for (let counter = 0; counter < 1200; counter+=50) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%250 === 0 && counter!==0){
                ctx.fillText(counter+'K', canWidAvailable + 30, 6+(canHgt*(1-(counter*1000/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+'K', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%250 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =5;
        }
        makeGraph(0);
    }, 2000)
    
})