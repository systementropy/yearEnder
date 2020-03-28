$(document).ready(function(){
	const areaMap = {
		"Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"Holy See":4
	}
	const dataTotal = {
		"China":[548,643,920,1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156,81250,81305,81435,81498,81591,81661,81782],
		"US":[98,118,149,217,262,402,518,583,959,1281,1663,2179,2727,3499,4632,6421,7783,13677,19100,25489,33276,43847,53740,65778,83836],
		"Iran":[95,139,245,388,593,978,1501,2336,2922,3513,4747,5823,6566,7161,8042,9000,10075,11364,12729,13938,14991,16169,17361,18407,19644,20610,21638,23049,24811,27017,29406],
		"Italy":[155,229,322,453,655,888,1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589],
		"Japan":[105,122,147,159,170,189,214,228,241,256,274,293,331,360,420,461,502,511,581,639,639,701,773,839,839,878,889,924,963,1007,1101,1128,1193,1307,1387],
		"South Korea":[104,204,433,602,833,977,1261,1766,2337,3150,3736,4335,5186,5621,6088,6593,7041,7314,7478,7513,7755,7869,7979,8086,8162,8236,8320,8413,8565,8652,8799,8961,8961,9037,9137,9241],
		"Singapore":[102,106,108,110,110,117,130,138,150,150,160,178,178,200,212,226,243,266,313,345,385,432,455,509,558,631,683],
		"United Kingdom":[116,164,207,274,322,384,459,459,802,1144,1145,1551,1960,2642,2716,4014,5067,5745,6726,8164,9640,11812],
		"India":[102,113,119,142,156,194,244,330,396,499,536,657,727],
		"Germany":[130,159,196,262,482,670,799,1040,1176,1457,1908,2078,3675,4585,5795,7272,9257,12327,15320,19848,22213,24873,29056,32986,37323,43938],
		"Spain":[120,165,222,259,400,500,673,1073,1695,2277,2277,5232,6391,7798,9942,11748,13910,17963,20410,25374,28768,35136,39885,49515,57786]

	};
	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
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
	ctx.lineWidth = 2;
	ctx.strokeColor = '#000'
	// const widthStep = canWid/dataTotal['China'].length;
	const widthStep = canWid/45;
	let heightFactor = 1000;
	
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	// const ticks = dataTotal['China'].length-1;
	const ticks = 45;
	let tick;
	
	colorArray =['rgba(0, 51, 68, 0.5)','rgba(221, 34, 34, 0.5)','rgba(255, 119, 0, 0.5)','rgba(255, 187, 68, 0.5)','rgba(34, 187, 255, 0.5)','rgba(102, 17, 153, 0.5)','rgba(0, 136, 136, 0.5)','rgba(220,220,220,0.5)','rgba(221, 34, 34, 1)'];
	
	let bool = 50;
	let secs = 200;
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
		if(this.dl.length<ticks-2){
			console.log(this.dl.length, ticks-2)
			this.tickDisp = this.dl.length-1
			console.log(label, this.ticks)
		}else{
			console.log(this.dl.length, ticks-2)
			this.tickDisp = tickDisp;
		}
		
		if (this.label == 'India'){
			this.lineWidth = 5;
		}else{
			this.lineWidth = 2;
		}
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
				ctx.lineWidth = this.lineWidth
				ctx.moveTo((widthStep*(this.tick-1))+7,-10+(canHgt*1.4*(1-Math.log2(this.dl[this.tick-1])/20)));
				ctx.lineTo((widthStep*this.tick)+7,-10+(canHgt*1.4*(1-Math.log2(this.dl[this.tick])/20)))
				ctx.stroke();
				ctx.closePath();
				if(this.tick == this.tickDisp){
					ctx.beginPath();
					ctx.font = '500 16px monty';
					ctx.fillStyle = '#333'
					ctx.fillText(this.label,(widthStep*this.tick)+10,-5+(canHgt*1.4*(1-Math.log2(this.dl[this.tick])/20)));
					ctx.fill();
					ctx.closePath();

					ctx.beginPath();
					ctx.fillStyle = '#999';
					ctx.arc((widthStep*this.tick)+7,-10+(canHgt*1.4*(1-Math.log2(this.dl[this.tick])/20)),3,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
				}else{
					ctx.beginPath();
					ctx.fillStyle = this.color;
					ctx.arc((widthStep*this.tick)+7,-10+(canHgt*1.4*(1-Math.log2(this.dl[this.tick])/20)),1,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
				}
			}
			
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
			if(tick>9){
				$('.date').text(tick)
			}else{
				$('.date').text('0'+tick)
			}
			$('.stateName').addClass('active')
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
		ctx.strokeStyle = '#999999';
		ctx.moveTo(0,-10+(canHgt*1.4*(1-Math.log2(10000))/20));
		ctx.lineTo(canWid,-10+(canHgt*1.4*(1-Math.log2(10000))/20));
		ctx.stroke();
		ctx.closePath();
		
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				if(!areaMap[element['name']]){
					console.log(country)
				}
				if(country == 'India'){
					barArray.push(new Bar(0, count, element[0] , element, colorArray[8] , count, country));
				}else{
					barArray.push(new Bar(0, count, element[0] , element, colorArray[areaMap[country]] , count, country,15));
				}
				
			}
			count++;
		}
		
		const tckarr = [100,1000,5000,10000,50000,100000]
		
		for (let i = 0; i < tckarr.length; i++) {
			
			ctx.beginPath();
			ctx.setLineDash([1,5]);
			ctx.lineWidth =1;
			ctx.strokeStyle = '#999999';
			ctx.fillStyle = '#999999';
			console.log(-10+-1*(canHgt*1.4*(1-Math.log2(tckarr[i]))/20))
			ctx.moveTo(0,-10+(canHgt*1.4*(1-Math.log2(tckarr[i])/20)));
			ctx.lineTo(canWid,-10+(canHgt*1.4*(1-Math.log2(tckarr[i])/20)))
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.fillText(tckarr[i], 10, -10+(canHgt*1.4*(1-(Math.log2(tckarr[i])/20))));
			ctx.fill();
			ctx.closePath()
		}
		
		ctx.setLineDash([])
		setTimeout(()=>{
			animateCircles(0);
		},100)
	};
	init();
})