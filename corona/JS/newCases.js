$(document).ready(function(){
	$('.nameLabel').html('Daily New Case');
    $('.legendVertical').text('Daily New Case');
    $('.after').text('Oct 18');
    $('.strap.strapCap').text('DAILY NEW CASES')
    const counterMultiplier = 1000;
    const heightFactor = 101900;
    const counterLabel = 'K'
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
    let deathColor ='#a01e1e';
    const todayData = [{
        dailyconfirmed: "",
        dailydeceased: "",
        dailyrecovered: "",
        date: "19 October",
        totalconfirmed: "7550273",
        totaldeceased: "114610",
        totalrecovered: "6663608",
    }]
    console.log(todayData);
    
    // const widthStep = canWidAvailable/todayData['dates'].length;
    
    const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 60;
    // const countNum = [8,52,67,76,82];
    // const countText = ['','100+','1000+','5000+','10000+']
    const countNum =[]
    var json = JSON.parse($.ajax({'url': "/data/data.json", 'async': false}).responseText);
    let dailyCumulative = json['cases_time_series'];
    console.log(dailyCumulative)
    dailyCumulative = dailyCumulative.slice(61)
    // dailyCumulative.push(todayData[0])
    // dailyCumulative.push(todayData[1])
    // dailyCumulative.push(todayData[1])
    console.log(dailyCumulative)
    const widthStep = canWidAvailable/dailyCumulative.length;
    function makeGraph(counter){
        if(counter<dailyCumulative.length){
            $('.legendContainer').addClass('active')
            
            const thisDateElement = dailyCumulative[counter];
            
            const dateString = thisDateElement['date'].split(' ')
            $('.month').text(dateString[1])
            $('.date').text(dateString[0])
			
			// 
            // let activeNum = thisDateElement['totalconfirmed']-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let activeNum = thisDateElement['totalconfirmed'];
            let recvNum = thisDateElement['totalrecovered'];
            let deathNum = thisDateElement['totaldeceased'];
			const prevDateElement = dailyCumulative[counter-1];
			let activePrevNum = prevDateElement['totalconfirmed'];
			let recvPrevNum = prevDateElement['totalrecovered'];
			let deathPrevNum = prevDateElement['totaldeceased'];
            
            
            (activeNum-activePrevNum)>=1000?$('.confirmedData').text(((activeNum-activePrevNum)/1000).toFixed(1)+counterLabel):$('.confirmedData').text((activeNum-activePrevNum))
            // recvNum>=1000?$('.recoveredData').text((recvNum/1000).toFixed(1)+counterLabel):$('.recoveredData').text(recvNum)
            
			
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.fillStyle = deathColor;
			ctx.rect(widthStep*(counter-0.5),canHgt,widthStep,-((activeNum-activePrevNum)*canHgt)/heightFactor)
			ctx.fill();
			ctx.closePath();
            
            setTimeout(()=>{
                makeGraph(counter+1)
            },secs)
            
        }else{
			$('.showAfter').html('Total Cases (Oct 19) : <span>75.5L</span>').addClass('active')
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
        for (let counter = 0; counter < 1100; counter+=5) {
            console.log(counter);
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%25 === 0 && counter!==0){
                ctx.fillText(counter+counterLabel, canWidAvailable + 30, 6+(canHgt*(1-(counter*counterMultiplier/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+counterLabel, canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%25 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter*counterMultiplier/heightFactor))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter*counterMultiplier/heightFactor))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =5;
        }
        makeGraph(1);
    }, 2000)
    
})