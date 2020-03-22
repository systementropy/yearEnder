$(document).ready(function(){
	const areaMap = {
		"Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"Holy See":4
	}
	const dataTotal = {

		"China":[548,643,920,1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156],
		"France":[0,0,2,3,3,3,4,5,5,5,6,6,6,6,6,6,6,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,14,18,38,57,100,130,191,204,288,380,656,957,1134,1217,1792,2290,2290,3678,4487,4523,6668,7699,9105,10947],
		"Germany":[0,0,0,0,0,1,4,4,4,5,8,10,12,12,12,12,13,13,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,27,46,48,79,130,159,196,262,482,670,799,1040,1176,1457,1908,2078,3675,4585,5795,7272,9257,12327,15320],
		"India":[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194],
		"Italy":[0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,20,62,155,229,322,453,655,888,1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035],
		"South Korea":[1,1,2,2,3,4,4,4,4,11,12,15,15,16,19,23,24,24,25,27,28,28,28,28,28,29,30,31,31,104,204,433,602,833,977,1261,1766,2337,3150,3736,4335,5186,5621,6088,6593,7041,7314,7478,7513,7755,7869,7979,8086,8162,8236,8320,8413,8565],
		"Malaysia":[0,0,0,3,4,4,4,7,8,8,8,8,8,10,12,12,12,16,16,18,18,18,19,19,22,22,22,22,22,22,22,22,22,22,22,22,23,23,25,29,29,36,50,50,83,93,99,117,129,149,149,197,238,428,566,673,790,900],
		"Spain":[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,13,15,32,45,84,120,165,222,259,400,500,673,1073,1695,2277,2277,5232,6391,7798,9942,11748,13910,17963],
		"Sri Lanka":[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,6,10,18,28,44,51,60],
		"Sweden":[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,7,7,12,14,15,21,35,94,101,161,203,248,355,500,599,814,961,1022,1103,1190,1279,1439],
		"Taiwan":[1,1,3,3,4,5,8,8,9,10,10,10,10,11,11,16,16,17,18,18,18,18,18,18,18,20,22,22,23,24,26,26,28,30,31,32,32,34,39,40,41,42,42,44,45,45,45,45,47,48,49,50,53,59,67,77,100,108],
		"Thailand":[2,3,5,7,8,8,14,14,14,19,19,19,19,25,25,25,25,32,32,32,33,33,33,33,33,34,35,35,35,35,35,35,35,35,37,40,40,41,42,42,43,43,43,47,48,50,50,50,53,59,70,75,82,114,147,177,212,272],
		"United Arab Emirates":[0,0,0,0,0,0,0,4,4,4,4,5,5,5,5,5,5,7,7,8,8,8,8,8,8,9,9,9,9,9,9,13,13,13,13,13,13,19,21,21,21,27,27,29,29,45,45,45,74,74,85,85,85,98,98,98,113,140],
		"United Kingdom":[0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,8,8,9,9,9,9,9,9,9,9,9,9,9,9,13,13,13,15,20,23,36,40,51,86,116,164,207,274,322,384,459,459,802,1144,1145,1551,1960,2642,2716],
		"US":[1,1,2,2,5,5,5,5,5,7,8,8,11,11,11,11,11,11,11,11,12,12,13,13,13,13,13,13,13,13,15,15,15,51,51,57,58,60,68,74,98,118,149,217,262,402,518,583,959,1281,1663,2179,2727,3499,4632,6421,7783,13677],
	};
	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
	var points = [];
	var canHgt = 600;
	var canWid = 710;
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
	var circleArray = [];
	var friction = 0.95;
	var gravity = 1;
	ctx.lineWidth = 2;
	ctx.strokeColor = '#000'
	const widthStep = canWid/dataTotal['China'].length;

	let heightFactor = 80000;
	const countriesFactor = 10000;
	const heightStep = canHgt/heightFactor;
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	const ticks = 58;
	let globalCounter = 0;
	let tick;
	const legends = [[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,20],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19]];
	colorArray =['rgba(0, 51, 68, 1)','rgba(221, 34, 34, 1)','rgba(255, 119, 0, 1)','rgba(255, 187, 68, 1)','rgba(34, 187, 255, 1)','rgba(102, 17, 153, 1)','rgba(0, 136, 136, 1)'];
	let slideIndex;
	var mouse = {
		x : undefined,
		y : undefined
	}
	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}
	function getColor(area){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
	}
	//			 0, count, dataTotal[key][0] , dataTotal[key], color , count, key));
	function Bar(x, y, length, dl, color, index, label){
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
		this.update = function(i,dateCounter){
			this.index = i;
			this.tick = dateCounter
			this.dateCounter =this.dl[dateCounter]; 
			this.length = 5+(this.dl[dateCounter]/75);
			this.posY = 1+ (this.index * (this.width + 2));
			if(this.dateCounter>1000){
				this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
			}else{
				this.dateCounterLabel = this.dateCounter
			}
			this.draw();
		};
		this.draw = function(){
			if(this.tick>0){
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.moveTo((widthStep*(this.tick-1))+7,-5+(canHgt*(1-(this.dl[this.tick-1]/heightFactor))));
				// ctx.moveTo((widthStep*this.tick)+7,canHgt)
				ctx.lineTo((widthStep*this.tick)+7,-5+(canHgt*(1-(this.dl[this.tick]/heightFactor))))

				// ctx.arcTo(
				// 	(widthStep*(this.tick-1))+7,
				// 	-5+(canHgt*(1-(this.dl[this.tick-1]/heightFactor))),
				// 	(widthStep*this.tick)+7,
				// 	-5+(canHgt*(1-(this.dl[this.tick]/heightFactor))),
				// 	10
				// )

				ctx.stroke();
				ctx.closePath();
			}
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc((widthStep*this.tick)+7,-5+(canHgt*(1-(this.dl[this.tick]/heightFactor))),1,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
		};
		this.update();
	}
	let bool = 50;
	let secs = 10
	function animateCircles(tickCounter){
		ctx.setLineDash([])
		// requestAnimationFrame(animateCircles);
		if(tickCounter!==tick && tickCounter<ticks){
			
			tick = tickCounter
			// ctx.clearRect(0,0,canWid,canHgt);
			barArray = barArray.sort(function(a, b){
				return (b.dl[tick] - a.dl[tick]);
			});
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if(legends[tick][1]>9){
				$('.date').text(legends[tick][1])
			}else{
				$('.date').text('0'+legends[tick][1])
			}
			if(legends[tick][0] == 2){
				$('.month').text('Feb')
			}else if(legends[tick][0] == 3){
				$('.month').text('Mar')
			}
			$('.stateName').addClass('active')
			$('.legendContainer').addClass('active');
			setTimeout(()=>{animateCircles(tickCounter+1)},secs)
		}else{
			if(bool<100000){
				count = 0;
				secs = 0
				
				bool = bool*2
				heightFactor = bool
				setTimeout(()=>{
					ctx.clearRect(0,0,canWid,canHgt);
					ctx.setLineDash([2,5])
					ctx.strokeStyle= '#999'
					ctx.lineWidth = 1;

					ctx.moveTo(0,canHgt/2)
					ctx.lineTo(canWid,canHgt/2)
					ctx.stroke()
					ctx.fillText(bool/2,5,canHgt/2)

					ctx.moveTo(0,canHgt*3/4)
					ctx.lineTo(canWid,canHgt*3/4)
					ctx.stroke()
					ctx.fillText(bool/4,5,canHgt*3/4)
					
					ctx.moveTo(0,canHgt/4)
					ctx.lineTo(canWid,canHgt/4)
					ctx.stroke()
					ctx.fillText(bool*3/4,5,canHgt/4)

					animateCircles(count)
				},2000)
				
			}
			
			
		}
		
	}

	
	var init = function(){
		barArray = [];
		height = window.innerHeight;
		width = window.innerWidth;
		canvas.width = canWid;
		canvas.height = canHgt;
		
		
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				if(!areaMap[element['name']]){
					console.log(element['name'])
				}
				barArray.push(new Bar(0, count, element[0] , element, colorArray[areaMap[country]] , count, country));
			}
			count++;
		}
		// for (let index = 0; index < dataTotal.length; index++) {
		// 	const element = dataTotal[index];
		// 	var color = getColor();
		// 	if(!areaMap[element['name']]){
		// 		console.log(element['name'])
		// 	}
		// 	barArray.push(new Bar(0, index, element['data'][0] , element['data'], colorArray[areaMap[element['name']]] , index, element['name']));
		// }
		setTimeout(()=>{
			animateCircles(0);
		},100)
	};
	init();
})