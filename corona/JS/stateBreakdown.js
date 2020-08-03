$(document).ready(function(){
	const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $('.legend1').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
    const canvas = document.getElementById("canvas");
    const canHgt = 600;
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
    const heightFactor = 22000;
    
    let secs = 40;
    var json = JSON.parse($.ajax({'url': "/data/data.json", 'async': false}).responseText);
    let tested = json['tested'];
    tested = tested.slice(70)
    
    
	let dailyCumulative = tested;
	// dailyCumulative.sort(function(a,b){
    //     return a['totalconfirmed']-b['totalconfirmed']
    // })
    var jsontest = JSON.parse($.ajax({'url': "/data/state_test_data.json", 'async': false}).responseText);
    let statetested = jsontest['states_tested_data'];
    console.log(statetested);
    let testedObj ={};
    for (let index = 0; index < statetested.length; index++) {
        const element = statetested[index];
        testedObj[element.state] = element
    }
    console.log(testedObj)
    const widthStep = canWidAvailable/(dailyCumulative.length);
    function makeGraph(counter){
        if(counter<dailyCumulative.length){
            
            $('.legendContainer').addClass('active')
            
            const thisDateElement = dailyCumulative[counter];
            // console.log(thisDateElement);
            const dateString = thisDateElement['testedasof'].split('/')
            $('.date').text(dateString[0])
            $('.month').text(monthNames[parseInt(dateString[1])-1])
            // $('.month').text(thisDateElement['label'])
            // let activeNum = thisDateElement['totalconfirmed']-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let activeNum = thisDateElement['samplereportedtoday']//-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let recvNum = thisDateElement['testspermillion'];
            // let recvNum = thisDateElement['totalconfirmed'];
            let deathNum = thisDateElement['totaldeceased'];

            
            
            activeNum>=1000?$('.confirmedData').text((activeNum/1000).toFixed(1)+'K'):$('.confirmedData').text(activeNum)
            recvNum>=1000?$('.recoveredData').text((recvNum/1000).toFixed(1)+'K'):$('.recoveredData').text(recvNum)
            deathNum>=1000?$('.deathData').text((deathNum/1000).toFixed(1)+'K'):$('.deathData').text(deathNum)
            // ctx.lineWidth =1;
            // ctx.beginPath();
            // ctx.strokeStyle = confirmedColor+'77'
            // ctx.fillStyle = confirmedColor;
            // ctx.rect(
            //     (counter*widthStep),canHgt,
            //     widthStep,-(canHgt*activeNum)/heightFactor
            // )
            // ctx.fill();
            // ctx.stroke();
            // ctx.closePath();

            if(counter>0){
                ctx.lineWidth =5;
                let recvPrevNum = dailyCumulative[counter-1]['testspermillion'];
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.strokeStyle = recoveredColor;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-((recvPrevNum)/(heightFactor)))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-((recvNum)/(heightFactor)))))
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
        for (let counter = 0; counter < 1500; counter+=1) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%5 === 0 && counter!==0){
                ctx.fillText(counter+'K', canWidAvailable + 30, 6+(canHgt*(1-(counter*1000/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+'K', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%5 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =0.5;
        }
        makeGraph(0);
    }, 2000)
    
})