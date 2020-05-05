$(document).ready(function(){
	const areaMap = {
		"Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4,"World":2
	}
	const dataTotalOld = {
		"China":[548,643,920,1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156,81250,81305,81435,81498,81591,81661,81782,81897,81999,82122,82198,82279,82361,82432,82511,82543,82602,82665,82718,82809,82883,82941,83014,83134,83213,83306,83356,83403,83760,83787,83805,83817,83853,83868,83884,83899,83909,83912,83918,83940,83944,83956,83959,83959,83964,83966],
		"US":[118,149,217,262,402,518,583,959,1281,1663,2179,2727,3499,4632,6421,7783,13747,19273,25600,33276,43843,53736,65778,83836,101657,121465,140909,161831,188172,213242,243622,275367,308650,336802,366317,397121,428654,462780,496535,526396,555313,580619,607670,636350,667592,699706,732197,758809,784326,811865,840351,869170,905358,938154,965785,988197,1012582,1039909,1069424,1103461,1132539,1158040,1180375],
		"Iran":[139,245,388,593,978,1501,2336,2922,3513,4747,5823,6566,7161,8042,9000,10075,11364,12729,13938,14991,16169,17361,18407,19644,20610,21638,23049,24811,27017,29406,32332,35408,38309,41495,44605,47593,50468,53183,55743,58226,60500,62589,64586,66220,68192,70029,71686,73303,74877,76389,77995,79494,80868,82211,83505,84802,85996,87026,88194,89328,90481,91472,92584,93657,94640,95646,96448,97424,98647],
		"Italy":[155,229,322,453,655,888,1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589,86498,92472,97689,101739,105792,110574,115242,119827,124632,128948,132547,135586,139422,143626,147577,152271,156363,159516,162488,165155,168941,172434,175925,178972,181228,183957,187327,189973,192994,195351,197675,199414,201505,203591,205463,207428,209328,210717,211938],
		"Japan":[105,122,147,159,170,189,214,228,241,256,274,293,331,360,420,461,502,511,581,639,639,701,773,839,839,878,889,924,963,1007,1101,1128,1193,1307,1387,1468,1693,1866,1866,1953,2178,2495,2617,3139,3139,3654,3906,4257,4667,5530,6005,6748,7370,7645,8100,8626,9787,10296,10797,10797,11135,11512,12368,12829,13231,13441,14153,13736,13895,14088,14305,14571,14877,15078],
		"South Korea":[104,204,433,602,833,977,1261,1766,2337,3150,3736,4335,5186,5621,6088,6593,7041,7314,7478,7513,7755,7869,7979,8086,8162,8236,8320,8413,8565,8652,8799,8961,8961,9037,9137,9241,9332,9478,9583,9661,9786,9887,9976,10062,10156,10237,10284,10331,10384,10423,10450,10480,10512,10537,10564,10591,10613,10635,10653,10661,10674,10683,10694,10708,10718,10728,10738,10752,10761,10765,10774,10780,10793,10801,10804],
		"Singapore":[102,106,108,110,110,117,130,138,150,150,160,178,178,200,212,226,243,266,313,345,385,432,455,509,558,631,683],
		"UK":[116,164,207,274,322,384,459,459,802,1144,1145,1551,1960,2642,2716,4014,5067,5745,6726,8164,9640,11812,14745,17312,19780,22453,25481,29865,34173,38689,42477,48436,52279,55949,61474,65872,74605,79874,85206,89570,94845,99483,104145,109769,115314,121172,125856,130172,134638,139246,144640,149569,154037,158348,162350,166441,172481,178685,183500,187842,191832],
		"India":[102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437],
		"World":[555,654,941,1434,2118,2927,5578,6166,8234,9927,12038,16787,19881,23892,27635,30794,34391,37120,40150,42762,44802,45221,60368,66885,69030,71224,73258,75136,75639,76197,76819,78572,78958,79561,80406,81388,82746,84112,86011,88369,90306,92840,95120,97886,101801,105847,109821,113590,118620,125875,128352,145219,156116,167466,181603,197113,214846,242616,272247,304555,337018,378282,418079,467723,529701,593423,660824,720285,782490,857608,932638,1013458,1095876,1176059,1249737,1321427,1396438,1480200,1565538,1657929,1736025,1835164,1905192,1975581,2055506,2151872,2239723,2317339,2400894,2471847,2549175,2624741,2708547,2795875,2881140,2955033,3023722,3097190,3172287,3256853,3343777,3427343,3506729,3583055],
		"Brazil":[151,151,162,200,321,372,621,793,1021,1546,1924,2247,2554,2985,3417,3904,4256,4579,5717,6836,8044,9056,10360,11130,12161,14034,16170,18092,19638,20727,22192,23430,25262,28320,30425,33682,36658,38654,40743,43079,45757,50036,54043,59324,63100,67446,73235,79685,87187,92202,97100,101826,108620],
		"Australia":[107,128,128,200,250,297,377,452,568,681,791,1071,1549,1682,2044,2364,2810,3143,3640,3984,4361,4559,4862,5116,5330,5550,5687,5797,5895,6010,6108,6215,6303,6315,6351,6415,6440,6462,6522,6568,6610,6623,6645,6652,6662,6677,6694,6714,6721,6744,6752,6766,6778,6799,6822,6847]
	};
	const dataTotal = {
		"China":[1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156,81250,81305,81435,81498,81591,81661,81782,81897,81999,82122,82198,82279,82361,82432,82511,82543,82602,82665,82718,82809,82883,82941,83014,83134,83213,83306,83356,83403,83760,83787,83805,83817,83853,83868,83884,83899,83909,83912,83918,83940,83944,83956,83959,83959,83964,83966],
		"US":[1281,1663,2179,2727,3499,4632,6421,7783,13747,19273,25600,33276,43843,53736,65778,83836,101657,121465,140909,161831,188172,213242,243622,275367,308650,336802,366317,397121,428654,462780,496535,526396,555313,580619,607670,636350,667592,699706,732197,758809,784326,811865,840351,869170,905358,938154,965785,988197,1012582,1039909,1069424,1103461,1132539,1158040,1180375],
		"Iran":[1501,2336,2922,3513,4747,5823,6566,7161,8042,9000,10075,11364,12729,13938,14991,16169,17361,18407,19644,20610,21638,23049,24811,27017,29406,32332,35408,38309,41495,44605,47593,50468,53183,55743,58226,60500,62589,64586,66220,68192,70029,71686,73303,74877,76389,77995,79494,80868,82211,83505,84802,85996,87026,88194,89328,90481,91472,92584,93657,94640,95646,96448,97424,98647],
		"Italy":[1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589,86498,92472,97689,101739,105792,110574,115242,119827,124632,128948,132547,135586,139422,143626,147577,152271,156363,159516,162488,165155,168941,172434,175925,178972,181228,183957,187327,189973,192994,195351,197675,199414,201505,203591,205463,207428,209328,210717,211938],
		"Japan":[1007,1101,1128,1193,1307,1387,1468,1693,1866,1866,1953,2178,2495,2617,3139,3139,3654,3906,4257,4667,5530,6005,6748,7370,7645,8100,8626,9787,10296,10797,10797,11135,11512,12368,12829,13231,13441,14153,13736,13895,14088,14305,14571,14877,15078],
		"South Korea":[1261,1766,2337,3150,3736,4335,5186,5621,6088,6593,7041,7314,7478,7513,7755,7869,7979,8086,8162,8236,8320,8413,8565,8652,8799,8961,8961,9037,9137,9241,9332,9478,9583,9661,9786,9887,9976,10062,10156,10237,10284,10331,10384,10423,10450,10480,10512,10537,10564,10591,10613,10635,10653,10661,10674,10683,10694,10708,10718,10728,10738,10752,10761,10765,10774,10780,10793,10801,10804],
		// "Singapore":[102,106,108,110,110,117,130,138,150,150,160,178,178,200,212,226,243,266,313,345,385,432,455,509,558,631,683],
		"UK":[1144,1145,1551,1960,2642,2716,4014,5067,5745,6726,8164,9640,11812,14745,17312,19780,22453,25481,29865,34173,38689,42477,48436,52279,55949,61474,65872,74605,79874,85206,89570,94845,99483,104145,109769,115314,121172,125856,130172,134638,139246,144640,149569,154037,158348,162350,166441,172481,178685,183500,187842,191832],
		"India":[1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437],
		"World":[1434,2118,2927,5578,6166,8234,9927,12038,16787,19881,23892,27635,30794,34391,37120,40150,42762,44802,45221,60368,66885,69030,71224,73258,75136,75639,76197,76819,78572,78958,79561,80406,81388,82746,84112,86011,88369,90306,92840,95120,97886,101801,105847,109821,113590,118620,125875,128352,145219,156116,167466,181603,197113,214846,242616,272247,304555,337018,378282,418079,467723,529701,593423,660824,720285,782490,857608,932638,1013458,1095876,1176059,1249737,1321427,1396438,1480200,1565538,1657929,1736025,1835164,1905192,1975581,2055506,2151872,2239723,2317339,2400894,2471847,2549175,2624741,2708547,2795875,2881140,2955033,3023722,3097190,3172287,3256853,3343777,3427343,3506729,3583055],
		"Brazil":[1021,1546,1924,2247,2554,2985,3417,3904,4256,4579,5717,6836,8044,9056,10360,11130,12161,14034,16170,18092,19638,20727,22192,23430,25262,28320,30425,33682,36658,38654,40743,43079,45757,50036,54043,59324,63100,67446,73235,79685,87187,92202,97100,101826,108620],
		"Australia":[1071,1549,1682,2044,2364,2810,3143,3640,3984,4361,4559,4862,5116,5330,5550,5687,5797,5895,6010,6108,6215,6303,6315,6351,6415,6440,6462,6522,6568,6610,6623,6645,6652,6662,6677,6694,6714,6721,6744,6752,6766,6778,6799,6822,6847]
	};
	const dates = [['Jan','22'],['Jan','23'],['Jan','24'],['Jan','25'],['Jan','26'],['Jan','27'],['Jan','28'],['Jan','29'],['Jan','30'],['Jan','31'],['Feb','1'],['Feb','2'],['Feb','3'],['Feb','4'],['Feb','5'],['Feb','6'],['Feb','7'],['Feb','8'],['Feb','9'],['Feb','10'],['Feb','11'],['Feb','12'],['Feb','13'],['Feb','14'],['Feb','15'],['Feb','16'],['Feb','17'],['Feb','18'],['Feb','19'],['Feb','20'],['Feb','21'],['Feb','22'],['Feb','23'],['Feb','24'],['Feb','25'],['Feb','26'],['Feb','27'],['Feb','28'],['Feb','29'],['Mar','1'],['Mar','2'],['Mar','3'],['Mar','4'],['Mar','5'],['Mar','6'],['Mar','7'],['Mar','8'],['Mar','9'],['Mar','10'],['Mar','11'],['Mar','12'],['Mar','13'],['Mar','14'],['Mar','15'],['Mar','16'],['Mar','17'],['Mar','18'],['Mar','19'],['Mar','20'],['Mar','21'],['Mar','22'],['Mar','23'],['Mar','24'],['Mar','25'],['Mar','26'],['Mar','27'],['Mar','28'],['Mar','29'],['Mar','30'],['Mar','31'],['Apr','1'],['Apr','2'],['Apr','3'],['Apr','4'],['Apr','5'],['Apr','6'],['Apr','7'],['Apr','8'],['Apr','9'],['Apr','10'],['Apr','11'],['Apr','12'],['Apr','13'],['Apr','14'],['Apr','15'],['Apr','16'],['Apr','17'],['Apr','18'],['Apr','19'],['Apr','20'],['Apr','21'],['Apr','22'],['Apr','23'],['Apr','24'],['Apr','25'],['Apr','26'],['Apr','27'],['Apr','28'],['Apr','29'],['Apr','30'],['May','1'],['May','2'],['May','3'],['May','4']];

	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
	var canHgt = 800;
	var canWid = 930;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	canvas.width = canWid;
	canvas.height = canHgt;
	ctx.scale(2,2)
	ctx.lineWidth = 2;
	ctx.strokeColor = '#000'
	// const widthStep = canWid/dataTotal['China'].length;
	const widthStep = canWid/dates.length;
	const heightFactor = 84000;
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	// const ticks = dataTotal['China'].length-1;
	const ticks = dates.length;
	let tick;
	
	colorArray =['rgba(0, 51, 68, 0.2)','rgba(221, 34, 34, 0.2)','rgba(255, 119, 0, 0.2)','rgba(255, 187, 68, 0.2)','rgba(34, 187, 255, 0.2)','rgba(102, 17, 153, 0.2)','rgba(0, 136, 136, 0.2)','rgba(220,220,220,0.2)','rgba(221, 34, 34, 0.5)'];
	
	let bool = 50;
	let secs = 100;
	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}
	function getColor(area){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
	}
	
	function Bar(x, y, length, dl, color, index, label, tickDisp){
		this.posX = x;
		this.width = (canHgt/maxArr)-2;
		this.posY = 2+ (y * (this.width+5));
		this.dl = dl;
		this.length = 20;
		this.color = color;
		this.index = index;
		this.label = label;
		this.dateCounter = this.dl[0];
		this.dateCounterLabel;
		this.tickDisp = tickDisp;
		this.valY;
		this.positionY;
		this.valYPrev;
		this.positionYPrev;
		if (this.label == 'India' || this.label == 'World'){
			this.lineWidth = 5;
		}else{
			this.lineWidth = 3;
		}
		this.update = function(i,dateCounter){
			this.index = i;
			this.tick = dateCounter
			this.dateCounter =this.dl[dateCounter]; 
			this.length = 5+(this.dl[dateCounter]);
			this.posY = 1+ (this.index * (this.width + 2));
			if(this.dateCounter>1000){
				this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
			}else{
				this.dateCounterLabel = this.dateCounter
			}
			this.valY = Math.log10(this.dl[this.tick]);
			this.positionY = canHgt - (this.valY-3)*(canHgt/4);
			this.draw();
		};
		this.draw = function(){
			if(this.tick>0){
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.lineWidth = this.lineWidth
				this.valYPrev = Math.log10(this.dl[this.tick-1]);
				this.positionYPrev = canHgt - (this.valYPrev-3)*(canHgt/4);

				ctx.moveTo((widthStep*(this.tick-1)),this.positionYPrev);
				ctx.lineTo((widthStep*this.tick),this.positionY)
				ctx.stroke();
				ctx.closePath();
				if(tick == this.dl.length-1){
					ctx.beginPath();
					ctx.fillStyle = '#333'
					ctx.font = '300 24px monty';
					
					if(this.label == 'World' || this.label == 'China' ){
						ctx.textAlign = 'right';
						ctx.fillText(this.label,(widthStep*this.tick),this.positionY-2);
					}else{
						ctx.textAlign = 'left';	
						ctx.fillText(this.label,(widthStep*this.tick)+5,this.positionY+7);
					}
					
					ctx.fill();
					ctx.closePath();

					ctx.beginPath();
					ctx.fillStyle = '#777';
					ctx.arc((widthStep*this.tick),this.positionY,3,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
				}
			}
			

			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc((widthStep*this.tick),this.positionY,1.5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
		};
		this.update();
	}
	
	function animateCircles(tickCounter){
		ctx.setLineDash([])
		if(tickCounter!==tick && tickCounter<ticks){
			tick = tickCounter
			
			barArray = barArray.sort(function(a, b){
				return (b.dl[tick] - a.dl[tick]);
			});
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if((tickCounter+1)>9){
				$('.date').text((tickCounter+1))
			}else{
				$('.date').text('0'+(tickCounter+1))
			}
			if(tick%10 == 0){
				$('.bottomDates').append("<span class='active counter"+(tick)+"' style='left:"+widthStep*tick+"px;'>"+tick+"</span>")
			}
			// $('.stateName').addClass('active')
			$('.legendContainer').addClass('active');
			setTimeout(()=>{animateCircles(tickCounter+1)},secs)
		}else{
			
		}
		
	}

	
	var init = function(){
		barArray = [];
		// height = window.innerHeight;
		// width = window.innerWidth;
		canvas.width = canWid;
		canvas.height = canHgt;
		ctx.beginPath();
		ctx.setLineDash([1,5]);
		ctx.lineWidth =1;
		ctx.strokeStyle = '#111';
		ctx.moveTo(0,-10+(canHgt*1.4*(1-Math.log2(10000))/20));
		ctx.lineTo(canWid,-10+(canHgt*1.4*(1-Math.log2(10000))/20));
		ctx.stroke();
		ctx.closePath();
		
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				if(!areaMap[element['name']]){
					console.log(element['name'])
				}
				if(country == 'India'){
					barArray.push(new Bar(0, count, element[0] , element, colorArray[8] , count, country));
				}else{
					barArray.push(new Bar(0, count, element[0] , element, colorArray[areaMap[country]] , count, country,15));
				}
				
			}
			count++;
		}
		
		const tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
		const txtarr = [1,10,100,1000,'10K','1L','10L','100L']
		const grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
		const numarr = [12,25,38,50,65,75,87,93,97,99];
		const circArr = [-1.4222678110138751, -1.273731075093857, -1.1252091723954274, -0.9766617502434156, -0.89, -0.79,-0.75,-0.70,-0.65,-0.60,-0.44890210054182716,-0.3365894965960431,-0.2691779250647427]
		const dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
		for (let i = 0; i < tckarr.length; i++) {
			
			ctx.beginPath();
			ctx.setLineDash([3,5]);
			ctx.lineWidth =1;
			ctx.strokeStyle = '#999';
			ctx.fillStyle = '#999';
			const valY = Math.log10(tckarr[i]);
			console.log(valY)
			const positionY = canHgt - (valY-3)*(canHgt/4)
			ctx.moveTo(0,positionY);
			ctx.lineTo(canWid,positionY)
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = '#555';
			ctx.font = '300 24px monty';
			ctx.textAlign = 'right';
			ctx.fillText(txtarr[i], canWid - 10, positionY);
			ctx.fill();
			ctx.closePath()
		}

		for (var i = 1; i < 100; i++) {
			for (var j = 0; j < grarr.length; j++) {
				ctx.beginPath();
				ctx.strokeStyle = '#999';
				ctx.lineWidth = 1;
				const thisPos = Math.log10(1000*(Math.pow((100+grarr[j])/100,i)))
				const thisPosY = canHgt - (thisPos-3)*(canHgt/4)
				const thisPosNext = Math.log10(1000*(Math.pow((100+grarr[j])/100,i+1)))
				const thisPosNextY = canHgt - (thisPosNext-3)*(canHgt/4)

				ctx.moveTo((widthStep*i),thisPosY);
				ctx.lineTo((widthStep*(i+1)),thisPosNextY)
				ctx.stroke();
				ctx.closePath();
				if(numarr[j] && i==numarr[j]){
					ctx.save();
					ctx.beginPath();
					ctx.font = '300 21px monty';
					ctx.textAlign = 'right';
					ctx.translate((widthStep*(i)),thisPosY);
					console.log(-((widthStep*(i))/(thisPosY-canHgt))-(Math.PI/2),circArr[j])
					ctx.rotate(circArr[j])
					ctx.fillText('Days to Double: '+dtdarr[j], 0,0);
					ctx.fill();
					ctx.closePath();
					ctx.restore();
				}else if(!numarr[j] && i===99){
					ctx.save();
					ctx.beginPath();
					ctx.font = '300 21px monty';
					ctx.textAlign = 'right';
					ctx.translate((widthStep*(i)),thisPosNextY);
					console.log(-((widthStep*(i))/(thisPosY-canHgt))-(Math.PI/2),circArr[j])
					ctx.rotate(circArr[j])
					ctx.fillText('Days to Double: '+dtdarr[j], 0,0);
					ctx.fill();
					ctx.closePath()
					ctx.restore();
				}
			}
		}
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				barArray.push(new Bar(0, count, element[0] , element, colorArray[areaMap[country]] , count, country));	
			}
			// count++;
		}
		ctx.setLineDash([])
		setTimeout(()=>{
			animateCircles(0);
		},100)
	};
	setTimeout(()=>{
		init();
	},1000);
})