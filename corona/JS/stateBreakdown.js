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
    const heightFactor = 350000;
    
    let secs = 800;
    
	dailyCumulative = [
		{"label":"Andaman and Nicobar Islands","totalactive":70,"totalrecovered":170,"totaldeceased":0,"totalconfirmed":240},
		{"label":"Andhra Pradesh","totalactive":34272,"totalrecovered":37555,"totaldeceased":884,"totalconfirmed":72711},
		{"label":"Arunachal Pradesh","totalactive":654,"totalrecovered":334,"totaldeceased":3,"totalconfirmed":991},
		{"label":"Assam","totalactive":8022,"totalrecovered":20699,"totaldeceased":70,"totalconfirmed":28791},
		{"label":"Bihar","totalactive":10994,"totalrecovered":20769,"totaldeceased":217,"totalconfirmed":31980},
		{"label":"Chandigarh","totalactive":256,"totalrecovered":531,"totaldeceased":13,"totalconfirmed":800},
		{"label":"Chhattisgarh","totalactive":1847,"totalrecovered":4377,"totaldeceased":30,"totalconfirmed":6254},
		{"label":"DNHDD","totalactive":279,"totalrecovered":489,"totaldeceased":2,"totalconfirmed":770},
		{"label":"Delhi","totalactive":14554,"totalrecovered":109065,"totaldeceased":3745,"totalconfirmed":127364},
		{"label":"Goa","totalactive":1666,"totalrecovered":2655,"totaldeceased":29,"totalconfirmed":4350},
		{"label":"Gujarat","totalactive":12247,"totalrecovered":37978,"totaldeceased":2252,"totalconfirmed":52477},
		{"label":"Haryana","totalactive":6348,"totalrecovered":22249,"totaldeceased":378,"totalconfirmed":28975},
		{"label":"Himachal Pradesh","totalactive":687,"totalrecovered":1136,"totaldeceased":11,"totalconfirmed":1834},
		{"label":"Jammu and Kashmir","totalactive":7438,"totalrecovered":8709,"totaldeceased":282,"totalconfirmed":16429},
		{"label":"Jharkhand","totalactive":3734,"totalrecovered":3174,"totaldeceased":67,"totalconfirmed":6975},
		{"label":"Karnataka","totalactive":49937,"totalrecovered":29310,"totaldeceased":1616,"totalconfirmed":80863},
		{"label":"Kerala","totalactive":9466,"totalrecovered":6594,"totaldeceased":50,"totalconfirmed":16110},
		{"label":"Ladakh","totalactive":183,"totalrecovered":1025,"totaldeceased":2,"totalconfirmed":1210},
		{"label":"Madhya Pradesh","totalactive":7335,"totalrecovered":17359,"totaldeceased":780,"totalconfirmed":25474},
		{"label":"Maharashtra","totalactive":140395,"totalrecovered":194253,"totaldeceased":12854,"totalconfirmed":347502},
		{"label":"Manipur","totalactive":649,"totalrecovered":1466,"totaldeceased":0,"totalconfirmed":2115},
		{"label":"Meghalaya","totalactive":452,"totalrecovered":78,"totaldeceased":4,"totalconfirmed":534},
		{"label":"Mizoram","totalactive":149,"totalrecovered":183,"totaldeceased":0,"totalconfirmed":332},
		{"label":"Nagaland","totalactive":644,"totalrecovered":530,"totaldeceased":0,"totalconfirmed":1174},
		{"label":"Odisha","totalactive":6592,"totalrecovered":14393,"totaldeceased":114,"totalconfirmed":21099},
		{"label":"Puducherry","totalactive":986,"totalrecovered":1400,"totaldeceased":34,"totalconfirmed":2420},
		{"label":"Punjab","totalactive":3721,"totalrecovered":7741,"totaldeceased":277,"totalconfirmed":11739},
		{"label":"Rajasthan","totalactive":8811,"totalrecovered":23815,"totaldeceased":594,"totalconfirmed":33220},
		{"label":"Sikkim","totalactive":338,"totalrecovered":122,"totaldeceased":0,"totalconfirmed":460},
		{"label":"Tamil Nadu","totalactive":52939,"totalrecovered":136793,"totaldeceased":3232,"totalconfirmed":192964},
		{"label":"Telangana","totalactive":11052,"totalrecovered":39327,"totaldeceased":447,"totalconfirmed":50826},
		{"label":"Tripura","totalactive":1574,"totalrecovered":2072,"totaldeceased":10,"totalconfirmed":3656},
		{"label":"Uttarakhand","totalactive":1986,"totalrecovered":3399,"totaldeceased":60,"totalconfirmed":5445},
		{"label":"Uttar Pradesh","totalactive":21012,"totalrecovered":35803,"totaldeceased":1289,"totalconfirmed":58104},
		{"label":"West Bengal","totalactive":18846,"totalrecovered":31656,"totaldeceased":1255,"totalconfirmed":51757}
	];
	dailyCumulative.sort(function(a,b){
        return a['totalconfirmed']-b['totalconfirmed']
    })
    
    console.log(dailyCumulative)
    const widthStep = canWidAvailable/(dailyCumulative.length);
    function makeGraph(counter){
        if(counter<dailyCumulative.length){
            $('.legendContainer').addClass('active')
            
            const thisDateElement = dailyCumulative[counter];
            
            // const dateString = thisDateElement['date'].split(' ')
            // $('.month').text(dateString[1])
            // $('.date').text(dateString[0])
            $('.month').text(thisDateElement['label'])
            // let activeNum = thisDateElement['totalconfirmed']-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let activeNum = thisDateElement['totalconfirmed']//-thisDateElement['totalrecovered']-thisDateElement['totaldeceased'];
            let recvNum = thisDateElement['totalrecovered'];
            // let recvNum = thisDateElement['totalconfirmed'];
            let deathNum = thisDateElement['totaldeceased'];

            
            
            activeNum>=1000?$('.confirmedData').text((activeNum/1000).toFixed(1)+'K'):$('.confirmedData').text(activeNum)
            recvNum>=1000?$('.recoveredData').text((recvNum/1000).toFixed(1)+'K'):$('.recoveredData').text(recvNum)
            deathNum>=1000?$('.deathData').text((deathNum/1000).toFixed(1)+'K'):$('.deathData').text(deathNum)
            
            ctx.beginPath();
            ctx.strokeStyle = confirmedColor+'77'
            ctx.fillStyle = confirmedColor;
            ctx.rect(
                (counter*widthStep),canHgt,
                widthStep,-(canHgt*activeNum)/heightFactor
            )
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.strokeStyle = deathColor+'77'
            ctx.fillStyle = deathColor;
            ctx.rect(
                (counter*widthStep),canHgt,
                widthStep,-(canHgt*deathNum)/heightFactor
            )
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.strokeStyle = recoveredColor+'77'
            ctx.fillStyle = recoveredColor;
            ctx.rect(
                (counter*widthStep),canHgt-(canHgt*deathNum)/heightFactor,
                widthStep,-(canHgt*recvNum)/heightFactor
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
        for (let counter = 0; counter < 1500; counter+=25) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%100 === 0 && counter!==0){
                ctx.fillText(counter+'K', canWidAvailable + 30, 6+(canHgt*(1-(counter*1000/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter+'K', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%100 === 0?
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