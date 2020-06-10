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
    const dailyData = {
        "deaths":[58,72,72,86,99,136,150,178,226,246,288,331,358,393,405,448,486,521,559,592,645,681,721,780,825,881,939,1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294,2415,2551,2649,2753,2871,3025,3156,3302,3434,3584,3726,3868,4024,4172,4344,4534,4711,4980,5185,5408,5608,5829,6088,6363,6649,6946,7207,7473,7750],
        "recovered":[148,191,192,229,229,375,421,506,620,774,969,1080,1181,1359,1432,1768,2041,2463,2854,3273,3975,4370,5012,5498,5939,6523,7137,7747,8437,9068,10007,10819,11775,12847,14142,15331,16776,17887,19301,20969,22549,24420,26400,27969,30258,34224,36795,39233,42309,45422,48553,51824,54385,57692,60706,64277,67749,70920,82627,86936,91852,95754,100285,104071,108450,113233,118695,123848,129095,134670],
        "confirmed":[1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698,100328,106475,112028,118226,124794,131423,138536,144950,150793,158086,165386,173491,181827,190609,198370,207191,216824,226713,236184,246622,257486,265928,276146],
        "dates":[[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[5,17],[5,18],[5,19],[5,20],[5,21],[5,22],[5,23],[5,24],[5,25],[5,26],[5,27],[5,28],[5,29],[5,30],[5,31],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9]],
    }
    console.log(dailyData);
    
    const widthStep = canWidAvailable/dailyData['dates'].length;
    const heightFactor = 150000;
    const countriesFactor = 250;
    const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 100;
    // const countNum = [8,52,67,76,82];
    // const countText = ['','100+','1000+','5000+','10000+']
    const countNum =[]
    function makeGraph(counter){
        if(counter<dailyData['dates'].length){
            $('.legendContainer').addClass('active')
            // console.log(dailyData['dates'][counter][1])
            if(dailyData['dates'][counter][1]>9){
                $('.date').text(dailyData['dates'][counter][1])
            }else{
                $('.date').text('0'+dailyData['dates'][counter][1])
            }
            if(dailyData['dates'][counter][0] == 2){
                $('.month').text('Feb')
            }else if(dailyData['dates'][counter][0] == 3){
                $('.month').text('Mar')
            }else if(dailyData['dates'][counter][0] == 4){
                $('.month').text('April')
            }else if(dailyData['dates'][counter][0] == 5){
                $('.month').text('May')
            }else if(dailyData['dates'][counter][0] == 6){
                $('.month').text('June')
            }
            $('.stateName').addClass('active')
            let dateLabel = dailyData['dates'][counter][1]>9?dailyData['dates'][counter][1]:'0'+dailyData['dates'][counter][1]
            if(counter==0 || (dailyData['dates'][counter][1] == 1)){
                $('.bottomDates').append("<span class='active counter"+(counter)+"' style='left:"+widthStep*counter+"px;'>"+dateLabel+"/0"+dailyData['dates'][counter][0]+"</span>")
            }
            let confNum;
            let country;
            let dethNum;
            let recvNum;
            
            if((dailyData['confirmed'][counter]-dailyData['recovered'][counter]-dailyData['deaths'][counter])>1000){
                confNum = parseFloat((dailyData['confirmed'][counter]-dailyData['recovered'][counter]-dailyData['deaths'][counter])/1000).toFixed(1)+'K'
            }else{
                confNum = (dailyData['confirmed'][counter]-dailyData['recovered'][counter]-dailyData['deaths'][counter])
            }
            $('.confirmedData').text(confNum)
            if(dailyData['recovered'][counter]>1000){
                recvNum = parseFloat(dailyData['recovered'][counter]/1000).toFixed(1)+'K'
            }else{
                recvNum = dailyData['recovered'][counter]
            }
            $('.recoveredData').text(recvNum)
            
            
            if(counter>0){
                ctx.beginPath();
                ctx.strokeStyle = confirmedColorSwitch;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-((dailyData['confirmed'][counter-1]-dailyData['recovered'][counter-1]-dailyData['deaths'][counter-1])/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-((dailyData['confirmed'][counter]-dailyData['recovered'][counter]-dailyData['deaths'][counter])/heightFactor))))
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = recoveredColor;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(dailyData['recovered'][counter-1]/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(dailyData['recovered'][counter]/heightFactor))))
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
        for (let counter = 0; counter < 150; counter+=10) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%50 === 0 && counter!==0){
                ctx.fillText(counter+'K', canWidAvailable + 30, 6+(canHgt*(1-(counter*1000/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+'K', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%50 === 0?
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