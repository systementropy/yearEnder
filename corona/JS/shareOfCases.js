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
        dailyconfirmed: "",
        dailydeceased: "",
        dailyrecovered: "",
        date: "23 August",
        totalconfirmed: "3044940",
        totaldeceased: "56706",
        totalrecovered: "2280566",
    }]
    console.log(todayData);
    
    // const widthStep = canWidAvailable/todayData['dates'].length;
    // const heightFactor = 2550000;
    const countriesFactor = 250;
    // const heightStep = canHgt/heightFactor;
    let counterPrev  = 1;
    let secs = 100;
    // const countNum = [8,52,67,76,82];
    // const countText = ['','100+','1000+','5000+','10000+']
    const countNum =[]
    var json = JSON.parse($.ajax({'url': "/data/data.json", 'async': false}).responseText);
    let dailyCumulative = [
		[555,654,941,1434,2118,2927,5578,6166,8234,9926,12038,16787,19887,23898,27643,30802,34395,37129,40159,42768,44810,45228,60381,66908,69050,71234,73269,75151,75651,76211,76840,78601,78981,79545,80398,81375,82735,84120,86013,88395,90373,92958,95273,98030,102025,106036,109994,113950,118965,126679,132481,146825,157857,169014,183683,199562,219214,247116,276706,309026,342393,384630,425787,476680,539549,604085,671663,731267,795997,872475,948663,1030010,1113203,1193711,1265377,1338067,1415186,1498895,1585483,1672988,1749872,1846819,1916464,1986284,2067245,2163941,2251672,2325556,2405885,2479307,2554750,2631576,2720583,2807495,2892296,2965076,3034072,3109425,3186589,3270117,3357276,3438689,3516333,3592506,3672660,3762727,3851894,3943470,4029169,4105292,4181640,4265367,4350206,4447281,4543711,4639021,4717335,4805823,4902461,5005574,5111869,5218664,5323977,5419242,5506311,5598982,5701734,5821183,5942378,6080002,6187396,6282981,6403944,6522099,6649014,6779972,6915760,7027674,7130092,7254608,7389151,7527086,7656149,7791901,7925110,8044663,8186473,8328685,8468705,8648774,8806595,8935273,9073260,9238052,9409498,9587195,9778566,9957498,10119644,10275992,10449832,10666930,10874417,11077903,11271954,11454850,11620802,11831641,12043466,12271553,12503942,12720381,12913142,13105192,13326971,13557898,13810459,14052261,14290096,14504853,14710995,14944726,15225164,15507881,15789074,16044757,16258079,16484206,16736727,17025889,17306523,17596559,17847574,18076718,18278778,18537524,18808754,19093901,19374812,19634542,19858792,20086280,20341107,20618174,20904123,21208474,21456826,21669376,21878471,22134679,22408212,22675329,22946050,23200536,23417487,23643821,23885837,24173588,24452689,24734448,24996456,25222709],
		[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698,100328,106475,112028,118226,124794,131423,138536,144950,150793,158086,165386,173491,181827,190609,198370,207191,216824,226713,236184,246622,257486,265928,276146,286605,297535,308993,320922,332424,343091,354065,366946,380532,395048,410451,425282,440215,456183,473105,490401,508953,528859,548318,566840,585481,604641,625544,648315,673165,697413,719664,742417,767296,793802,820916,849522,878254,906752,936181,968857,1003832,1039084,1077781,1118206,1155338,1193078,1238798,1288108,1337024,1385635,1435616,1480073,1531669,1581963,1634746,1695988,1750723,1803695,1855745,1908254,1964536,2027074,2088611,2153010,2215074,2268675,2329638,2396637,2461190,2525922,2589952,2647663,2702681,2767253,2836925,2905825,2975701,3044940,3106348,3167323,3224547,3310234,3387500,3463972,3542733,3621245],
		[['Jan',22,20],['Jan',23,20],['Jan',24,20],['Jan',25,20],['Jan',26,20],['Jan',27,20],['Jan',28,20],['Jan',29,20],['Jan',30,20],['Jan',31,20],['Feb',1,20],['Feb',2,20],['Feb',3,20],['Feb',4,20],['Feb',5,20],['Feb',6,20],['Feb',7,20],['Feb',8,20],['Feb',9,20],['Feb',10,20],['Feb',11,20],['Feb',12,20],['Feb',13,20],['Feb',14,20],['Feb',15,20],['Feb',16,20],['Feb',17,20],['Feb',18,20],['Feb',19,20],['Feb',20,20],['Feb',21,20],['Feb',22,20],['Feb',23,20],['Feb',24,20],['Feb',25,20],['Feb',26,20],['Feb',27,20],['Feb',28,20],['Feb',29,20],['Mar',1,20],['Mar',2,20],['Mar',3,20],['Mar',4,20],['Mar',5,20],['Mar',6,20],['Mar',7,20],['Mar',8,20],['Mar',9,20],['Mar',10,20],['Mar',11,20],['Mar',12,20],['Mar',13,20],['Mar',14,20],['Mar',15,20],['Mar',16,20],['Mar',17,20],['Mar',18,20],['Mar',19,20],['Mar',20,20],['Mar',21,20],['Mar',22,20],['Mar',23,20],['Mar',24,20],['Mar',25,20],['Mar',26,20],['Mar',27,20],['Mar',28,20],['Mar',29,20],['Mar',30,20],['Mar',31,20],['Apr',1,20],['Apr',2,20],['Apr',3,20],['Apr',4,20],['Apr',5,20],['Apr',6,20],['Apr',7,20],['Apr',8,20],['Apr',9,20],['Apr',10,20],['Apr',11,20],['Apr',12,20],['Apr',13,20],['Apr',14,20],['Apr',15,20],['Apr',16,20],['Apr',17,20],['Apr',18,20],['Apr',19,20],['Apr',20,20],['Apr',21,20],['Apr',22,20],['Apr',23,20],['Apr',24,20],['Apr',25,20],['Apr',26,20],['Apr',27,20],['Apr',28,20],['Apr',29,20],['Apr',30,20],['May',1,20],['May',2,20],['May',3,20],['May',4,20],['May',5,20],['May',6,20],['May',7,20],['May',8,20],['May',9,20],['May',10,20],['May',11,20],['May',12,20],['May',13,20],['May',14,20],['May',15,20],['May',16,20],['May',17,20],['May',18,20],['May',19,20],['May',20,20],['May',21,20],['May',22,20],['May',23,20],['May',24,20],['May',25,20],['May',26,20],['May',27,20],['May',28,20],['May',29,20],['May',30,20],['May',31,20],['Jun',1,20],['Jun',2,20],['Jun',3,20],['Jun',4,20],['Jun',5,20],['Jun',6,20],['Jun',7,20],['Jun',8,20],['Jun',9,20],['Jun',10,20],['Jun',11,20],['Jun',12,20],['Jun',13,20],['Jun',14,20],['Jun',15,20],['Jun',16,20],['Jun',17,20],['Jun',18,20],['Jun',19,20],['Jun',20,20],['Jun',21,20],['Jun',22,20],['Jun',23,20],['Jun',24,20],['Jun',25,20],['Jun',26,20],['Jun',27,20],['Jun',28,20],['Jun',29,20],['Jun',30,20],['Jul',1,20],['Jul',2,20],['Jul',3,20],['Jul',4,20],['Jul',5,20],['Jul',6,20],['Jul',7,20],['Jul',8,20],['Jul',9,20],['Jul',10,20],['Jul',11,20],['Jul',12,20],['Jul',13,20],['Jul',14,20],['Jul',15,20],['Jul',16,20],['Jul',17,20],['Jul',18,20],['Jul',19,20],['Jul',20,20],['Jul',21,20],['Jul',22,20],['Jul',23,20],['Jul',24,20],['Jul',25,20],['Jul',26,20],['Jul',27,20],['Jul',28,20],['Jul',29,20],['Jul',30,20],['Jul',31,20],['Aug',1,20],['Aug',2,20],['Aug',3,20],['Aug',4,20],['Aug',5,20],['Aug',6,20],['Aug',7,20],['Aug',8,20],['Aug',9,20],['Aug',10,20],['Aug',11,20],['Aug',12,20],['Aug',13,20],['Aug',14,20],['Aug',15,20],['Aug',16,20],['Aug',17,20],['Aug',18,20],['Aug',19,20],['Aug',20,20],['Aug',21,20],['Aug',22,20],['Aug',23,20],['Aug',24,20],['Aug',25,20],['Aug',26,20],['Aug',27,20],['Aug',28,20],['Aug',29,20],['Aug',30,20]]
	]
    // dailyCumulative = dailyCumulative.slice(62)
    console.log(dailyCumulative);
    const widthStep = canWidAvailable/dailyCumulative[0].length;
    function makeGraph(counter){
        if(counter<dailyCumulative[0].length){
            $('.legendContainer').addClass('active')
            let heightFactor = dailyCumulative[0][counter]
            const thisDateElement = dailyCumulative[counter];
            
            const dateString = dailyCumulative[2][counter]
            $('.month').text(dateString[0])
            $('.date').text(dateString[1])
            
            let activeNum = (dailyCumulative[1][counter]/dailyCumulative[0][counter])*4;
            
            // activeNum>=1000?$('.confirmedData').text((activeNum/1000).toFixed(1)+'K'):$('.confirmedData').text(activeNum)
            $('.confirmedData').text(((dailyCumulative[1][counter]/dailyCumulative[0][counter])*100).toFixed(2)+'%')
            dailyCumulative[0][counter]>=100000
				?$('.recoveredData').text((dailyCumulative[0][counter]/100000).toFixed(1)+'L')
				:dailyCumulative[0][counter]>=1000?$('.recoveredData').text((dailyCumulative[0][counter]/1000).toFixed(1)+'K'):$('.recoveredData').text(dailyCumulative[0][counter])
            if(counter>0){
                const prevDateElement = dailyCumulative[counter-1];
                let activePrevNum = (dailyCumulative[1][counter-1]/dailyCumulative[0][counter-1])*4;
                
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.strokeStyle = confirmedColorSwitch;
                ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-((activePrevNum)))));
                ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-((activeNum)))))
                ctx.stroke();
                ctx.closePath();

                // ctx.beginPath();
                // ctx.strokeStyle = recoveredColor;
                // ctx.moveTo((widthStep/2)+(widthStep*(counter-1)),(canHgt*(1-(recvPrevNum)/heightFactor)));
                // ctx.lineTo((widthStep/2)+(widthStep*counter),(canHgt*(1-(recvNum)/heightFactor)))
                // ctx.stroke();
                // ctx.closePath();
                
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
        for (let counter = 0; counter <= 100; counter+=5) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter===0){
                ctx.fillText(counter+'%', canWidAvailable + 30, canHgt);
            }else if(counter===25){
                ctx.fillText(counter+'%', canWidAvailable + 30, 13+(canHgt*(1-(counter/25))));
            }else{
                ctx.fillText(counter+'%', canWidAvailable + 30, 6+(canHgt*(1-(counter/25))));
                // ctx.fill();
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%5 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter/25))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter/25))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =5;
        }
        makeGraph(0);
    }, 2000)
    
})