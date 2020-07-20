$(document).ready(function(){

	
	
	
	let databyDate = {
		"confirmed":[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698,100328,106475,112028,118226,124794,131423,138536,144950,150793,158086,165386,173491,181827,190609,198370,207191,216824,226713,236184,246622,257486,265928,276146,286605,297535,308993,320922,332424,343091,354065,366946,380532,395048,410451,425282,440215,456183,473105,490401,508953,528859,548318,566840,585481,604641,625544,648315,673165,697413,719664,742417,767296,793802,820916,849522,878254,906752],
		"death":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,178,226,246,288,331,358,393,405,448,486,521,559,592,645,681,721,780,825,881,939,1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294,2415,2551,2649,2753,2871,3025,3156,3302,3434,3584,3726,3868,4024,4172,4344,4534,4711,4980,5185,5408,5608,5829,6088,6363,6649,6946,7207,7473,7750,8102,8498,8884,9195,9520,9900,11903,12237,12573,12948,13254,13699,14011,14476,14894,15301,15685,16095,16475,16893,17400,17834,18213,18655,19268,19693,20159,20642,21129,21604,22123,22673,23174,23727],
		"recovered":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,13,13,14,14,15,20,23,27,27,40,43,45,73,84,95,102,123,148,191,192,229,229,375,421,506,620,774,969,1080,1181,1359,1432,1768,2041,2463,2854,3273,3975,4370,5012,5498,5939,6523,7137,7747,8437,9068,10007,10819,11775,12847,14142,15331,16776,17887,19301,20969,22549,24420,26400,27969,30258,34224,36795,39233,42309,45422,48553,51824,54385,57692,60706,64277,67749,70920,82627,86936,91852,95754,100285,104071,108450,113233,118695,123848,129095,134670,135206,147195,154330,162379,169798,180013,186935,194325,204711,213831,227728,237196,248190,258685,271697,285637,295881,309713,321723,334822,347912,359860,379892,394227,409083,424433,439934,456831,476378,495513,515386,534618,553471,571460]
	}
	const dates = [
		['Jan',22,2020],['Jan',23,2020],['Jan',24,2020],['Jan',25,2020],['Jan',26,2020],['Jan',27,2020],['Jan',28,2020],['Jan',29,2020],['Jan',30,2020],['Jan',31,2020],['Feb',1,2020],['Feb',2,2020],['Feb',3,2020],['Feb',4,2020],['Feb',5,2020],['Feb',6,2020],['Feb',7,2020],['Feb',8,2020],['Feb',9,2020],['Feb',10,2020],['Feb',11,2020],['Feb',12,2020],['Feb',13,2020],['Feb',14,2020],['Feb',15,2020],['Feb',16,2020],['Feb',17,2020],['Feb',18,2020],['Feb',19,2020],['Feb',20,2020],['Feb',21,2020],['Feb',22,2020],['Feb',23,2020],['Feb',24,2020],['Feb',25,2020],['Feb',26,2020],['Feb',27,2020],['Feb',28,2020],['Feb',29,2020],['Mar',1,2020],['Mar',2,2020],['Mar',3,2020],['Mar',4,2020],['Mar',5,2020],['Mar',6,2020],['Mar',7,2020],['Mar',8,2020],['Mar',9,2020],['Mar',10,2020],['Mar',11,2020],['Mar',12,2020],['Mar',13,2020],['Mar',14,2020],['Mar',15,2020],['Mar',16,2020],['Mar',17,2020],['Mar',18,2020],['Mar',19,2020],['Mar',20,2020],['Mar',21,2020],['Mar',22,2020],['Mar',23,2020],['Mar',24,2020],['Mar',25,2020],['Mar',26,2020],['Mar',27,2020],['Mar',28,2020],['Mar',29,2020],['Mar',30,2020],['Mar',31,2020],['Apr',1,2020],['Apr',2,2020],['Apr',3,2020],['Apr',4,2020],['Apr',5,2020],['Apr',6,2020],['Apr',7,2020],['Apr',8,2020],['Apr',9,2020],['Apr',10,2020],['Apr',11,2020],['Apr',12,2020],['Apr',13,2020],['Apr',14,2020],['Apr',15,2020],['Apr',16,2020],['Apr',17,2020],['Apr',18,2020],['Apr',19,2020],['Apr',20,2020],['Apr',21,2020],['Apr',22,2020],['Apr',23,2020],['Apr',24,2020],['Apr',25,2020],['Apr',26,2020],['Apr',27,2020],['Apr',28,2020],['Apr',29,2020],['Apr',30,2020],['May',1,2020],['May',2,2020],['May',3,2020],['May',4,2020],['May',5,2020],['May',6,2020],['May',7,2020],['May',8,2020],['May',9,2020],['May',10,2020],['May',11,2020],['May',12,2020],['May',13,2020],['May',14,2020],['May',15,2020],['May',16,2020],['May',17,2020],['May',18,2020],['May',19,2020],['May',20,2020],['May',21,2020],['May',22,2020],['May',23,2020],['May',24,2020],['May',25,2020],['May',26,2020],['May',27,2020],['May',28,2020],['May',29,2020],['May',30,2020],['May',31,2020],['Jun',1,2020],['Jun',2,2020],['Jun',3,2020],['Jun',4,2020],['Jun',5,2020],['Jun',6,2020],['Jun',7,2020],['Jun',8,2020],['Jun',9,2020],['Jun',10,2020],['Jun',11,2020],['Jun',12,2020],['Jun',13,2020],['Jun',14,2020],['Jun',15,2020],['Jun',16,2020],['Jun',17,2020],['Jun',18,2020],['Jun',19,2020],['Jun',20,2020],['Jun',21,2020],['Jun',22,2020],['Jun',23,2020],['Jun',24,2020],['Jun',25,2020],['Jun',26,2020],['Jun',27,2020],['Jun',28,2020],['Jun',29,2020],['Jun',30,2020],['Jul',1,2020],['Jul',2,2020],['Jul',3,2020],['Jul',4,2020],['Jul',5,2020],['Jul',6,2020],['Jul',7,2020],['Jul',8,2020],['Jul',9,2020],['Jul',10,2020],['Jul',11,2020],['Jul',12,2020],['Jul',13,2020]

	]
	const canvas = document.getElementById("canvas");
	const canHgt = 450;
	const canWid = 750;
	const canWidAvailable = 680;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	const ctx = canvas.getContext("2d");
	ctx.scale(2,2);
	ctx.lineWidth = 5;
	ctx.strokeColor = '#000'
		
	const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#FF9933','#92C24C','#4cc292','#99FF33','#9933FF'];
	let slideIndex;
	let counter = 0;
	let circleArray = [];
	const widthStep = canWidAvailable/(dates.length);
	const heightFactor = 920000;
	let secs = 100;

	let data, options, chart, counterCountry = 0, dataPlace, optionsPlace, chartPlace, counterPlace = 0; 
	let indexCounterPrev = 0;
	let indexCounterCurr = 0;
	function drawRegionsMap(counter) {
		$('.stateName').addClass('active');
		
		dates[counter][1]>9?$('.date').text(`${dates[counter][1]},`):$('.date').text(`0${dates[counter][1]},`)
		$('.month').text(dates[counter][0])
		$('.year').text(dates[counter][2])

		ctx.beginPath();
		const confRect = databyDate['confirmed'][counter];
		ctx.fillStyle = '#FBE8E8';
		ctx.rect(
			(widthStep*counter)+1,
			(canHgt*(1-(confRect/heightFactor))),
			widthStep-2,
			(canHgt*(confRect/heightFactor))
		);
		ctx.fill();
		ctx.closePath();

		if(counter>0){
			ctx.beginPath();
			ctx.strokeStyle = '#8C1919';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['confirmed'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['confirmed'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.strokeStyle = '#F86E6E';
			ctx.strokeStyle = '#198C19';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['recovered'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['recovered'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.strokeStyle = '#525252';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['death'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['death'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();

			indexCounterCurr = counter
			if(Math.floor(databyDate['confirmed'][counter]/100000) === Math.floor(databyDate['confirmed'][counter-1]/100000)){
				// $('.inner').css({'top':Math.floor(databyDate['confirmed'][counter]/100000)*40+'px'})
			}else{
				secs += 50
				$('.infoBox').addClass('active')
				ctx.beginPath();
				ctx.fillStyle = '#FFF';
				ctx.lineCap = "round";
				ctx.moveTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['confirmed'][counter]/heightFactor))));
				ctx.arc((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['confirmed'][counter]/heightFactor))), widthStep, 0, 2*Math.PI)
				ctx.fill();
				ctx.closePath();
				console.log(indexCounterCurr,indexCounterPrev, indexCounterCurr - indexCounterPrev)
				indexCounterPrev = counter
				$('.inner').css({'top':(-1 + Math.floor(databyDate['confirmed'][counter]/100000))*-40+'px'})
			}
		}

		let confNum;
		let country;
		let dethNum;
		let recvNum;


		confNum = databyDate['confirmed'][counter]
		confNum>100000
			?confNum = (confNum/100000).toFixed(2)+'L'
			:confNum>1000
				?confNum = (confNum/1000).toFixed(1)+'K'
				:confNum = confNum
		$('.confirmedData').text(confNum)

		recvNum = databyDate['recovered'][counter]
		recvNum>100000
			?recvNum = (recvNum/100000).toFixed(2)+'L'
			:recvNum>1000
				?recvNum = (recvNum/1000).toFixed(1)+'K'
				:recvNum = recvNum
		$('.recoveredData').text(recvNum)

		dethNum = databyDate['death'][counter]
		dethNum>100000
			?dethNum = (dethNum/100000).toFixed(2)+'L'
			:dethNum>1000
				?dethNum = (dethNum/1000).toFixed(1)+'K'
				:dethNum = dethNum
		$('.deathsData').text(dethNum)

	}
	function init(label){
		
		
		if(!label){

			setTimeout(function(){
				init(1);
			},2000);
		}else if(label<=dates.length){
			setTimeout(function(){
				drawRegionsMap(label-1);
				if(dates[label-1]){
						console.log('stop');
						init(label+1);
				}else{
					init(label+1);
				}
			},secs)
		}else{
		}
	}
	setTimeout(function(){
		ctx.beginPath();
        ctx.setLineDash([])
        ctx.lineWidth =1;
        ctx.strokeStyle = '#707070';
        ctx.fillStyle = '#707070';
        ctx.rect(canWidAvailable,0,1,canHgt);
        ctx.rect(0,canHgt-1,canWidAvailable,1);
        ctx.fill();
        ctx.closePath();
        for (let counter = 0; counter < 1000; counter+=50) {
            ctx.lineWidth =1;
            ctx.beginPath();
            ctx.font = '500 18px Montserrat'
            ctx.textAlign = 'left';
            if(counter%100 === 0 && counter!==0){
                ctx.fillText(counter/100+'L', canWidAvailable + 30, 6+(canHgt*(1-(counter*1000/heightFactor))));
                // ctx.fill();
            }else if(counter===0){
                ctx.fillText(counter/100+'L', canWidAvailable + 30, canHgt);
            }
            ctx.closePath();
            

            ctx.beginPath();
            counter%100 === 0?
                ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),20,1)
                :ctx.rect(canWidAvailable,(canHgt*(1-(counter*1000/heightFactor))),10,1);
            ctx.fill();
            ctx.closePath()

            ctx.setLineDash([])
            ctx.lineWidth =5;
        }
		init(1);
	},2000);
});