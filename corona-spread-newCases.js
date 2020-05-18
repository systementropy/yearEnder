$(document).ready(function(){
    const canvas = document.getElementById("canvas");
    const canHgt = 750;
    const canWid = 930;
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
    let confirmedColorSwitch ='#E60000';
    let confirmedColor ='#AFB6D0';
    let recoveredColor ='#2cb62c';
    let deathColor ='#ca9828';
    const dailyData = {
        // 'country':[6,8,9,11,14,16,16,18,20,24,25,25,25,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,28,28,30,30,30,35,39,46,50,56,60,65,72,76,80,84,93,98,102,105,108,114,116,122,135,139,144,147,150,154,161,163,168,169,171,173,174,175,175,175,176,178,178,179],
        'deaths':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,178,226,246,288,331,358,393,405,448,486,521,559,592,645,681,721,780,825,881,939,1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294,2415,2551,2649,2753,2871,3025],
        'recovered':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,13,13,14,14,15,20,23,27,27,40,43,45,73,84,95,102,123,148,191,192,229,229,375,421,506,620,774,969,1080,1181,1359,1432,1768,2041,2463,2854,3273,3975,4370,5012,5498,5939,6523,7137,7747,8437,9068,10007,10819,11775,12847,14142,15331,16776,17887,19301,20969,22549,24420,26400,27969,30258,34224,36795],
        'dates':[[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[5,17],[5,18]],
        'confirmed':[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698,100000],
    };
    console.log(dailyData)
    const widthStep = canWid/dailyData['dates'].length;
    const heightFactor = 103000;
    const countriesFactor = 250;
    const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 100;
    const countNum = [8,76,82,90,102,113,117];
    const countText = ['','5K+','10K+','20K+','40K+','80K+','1L+']
    function makeGraph(counter){
        if(counter<dailyData['dates'].length){
            $('.legendContainer').addClass('active')
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
                $('.month').text('Apr')
            }else if(dailyData['dates'][counter][0] == 5){
                $('.month').text('May')
            }
            $('.stateName').addClass('active')
            let dateLabel = dailyData['dates'][counter][1]>9?dailyData['dates'][counter][1]:'0'+dailyData['dates'][counter][1]
            if(counter%15 == 0){
                $('.bottomDates').append("<span class='active counter"+(counter)+"' style='left:"+widthStep*counter+"px;'>"+dateLabel+"/0"+dailyData['dates'][counter][0]+"</span>")
            }
            
            ctx.beginPath();
            const hgtRect = dailyData['confirmed'][counter];
            
            if(countNum.indexOf(counter)>-1){
                if(countNum.indexOf(counter)>1){
                    secs += 10	
                }
                
                const eltIndex = countNum.indexOf(counter)
                $('.change'+eltIndex).css({
                    left : +((widthStep*counter)+2)+'px',
                    top : (canHgt*(1-(hgtRect/heightFactor)))+'px',
                    opacity : 1
                })

                $('.change'+eltIndex).children('.dateImp').html(countText[eltIndex]);
                if(counter-counterPrev>1){
                    $('.change'+eltIndex).children('.daysImp').html((counter-counterPrev)+' Days');
                }else{
                    $('.change'+eltIndex).children('.daysImp').html((counter-counterPrev)+' Day');
                }
                if(eltIndex == 0){
                    $('.change'+eltIndex).html('<p class="daysImp">1st confirmed case</p>');
                    // $('.change'+eltIndex).children('.dateImp').html('(approx 45 cases)');

                }
                counterPrev = counter;
                // ctx.fillStyle = '#E6000099';
                ctx.fillStyle = confirmedColorSwitch+'99';
            }else{
                ctx.fillStyle = confirmedColor+'99';
                // ctx.fillStyle = '#AFB6D0';
            }
            
            ctx.closePath();
            if(counter>0){
                ctx.lineWidth =1;
                ctx.beginPath();
                const newCases = dailyData['confirmed'][counter] - dailyData['confirmed'][counter-1];
                ctx.strokeStyle = '#8896ca';
                ctx.fillStyle = confirmedColor+'77';
                ctx.rect(widthStep*counter,(canHgt*(1-(newCases*10/heightFactor))),widthStep,(canHgt*newCases*10)/heightFactor);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                console.log(dailyData['dates'][counter],newCases)
                
                ctx.lineWidth =5;
                ctx.beginPath();
                ctx.strokeStyle = confirmedColorSwitch+'AA';
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(dailyData['confirmed'][counter-1]/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(dailyData['confirmed'][counter]/heightFactor))))
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = recoveredColor+'CC';
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(dailyData['recovered'][counter-1]/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(dailyData['recovered'][counter]/heightFactor))))
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = deathColor+'CC';
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(dailyData['deaths'][counter-1]/heightFactor))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(dailyData['deaths'][counter]/heightFactor))))
                ctx.stroke();
                ctx.closePath();

                
            }
            ctx.beginPath();
            ctx.fillStyle = confirmedColor;
            ctx.arc((widthStep*counter),(canHgt*(1-(dailyData['confirmed'][counter]/heightFactor))), 1, 0, 2*Math.PI)
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = recoveredColor;
            ctx.arc((widthStep*counter),(canHgt*(1-(dailyData['recovered'][counter]/heightFactor))), 1, 0, 2*Math.PI)
            ctx.fill();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.fillStyle = deathColor;
            ctx.arc((widthStep*counter),(canHgt*(1-(dailyData['deaths'][counter]/heightFactor))), 1, 0, 2*Math.PI)
            ctx.fill();
            ctx.closePath();
            

            setTimeout(()=>{
                makeGraph(counter+1)
            },secs)
            
        }
    }
    setTimeout(function () {
        for (let counter = 0; counter < 110; counter+=5) {
            ctx.beginPath();
            ctx.setLineDash([3,5])
            ctx.lineWidth =1;
            ctx.strokeStyle = '#9997';
            ctx.fillStyle = '#9997';
            if(counter % 10 === 0){
                ctx.strokeStyle = '#D00A';
                ctx.fillStyle = '#D00A';
            }
            
            ctx.moveTo(0,(canHgt*(1-(counter*1000/heightFactor))));
            ctx.lineTo(canWid,(canHgt*(1-(counter*1000/heightFactor))));
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = '500 20px monty'
            if(counter % 10 === 0){
                ctx.textAlign = 'left';
                ctx.fillText(counter+'K', 10, (canHgt*(1-(counter*1000/heightFactor))));
                ctx.textAlign = 'right';
                ctx.fillStyle ="#282e4477"
                ctx.font = '300 20px monty'
                ctx.fillText((counter/10)+'K', canWid - 10, (canHgt*(1-(counter*1000/heightFactor))));
                ctx.fill();
            }
            
            ctx.closePath();
            ctx.setLineDash([])
            ctx.lineWidth =5;
        }
        makeGraph(0);
    }, 2000)
    
})