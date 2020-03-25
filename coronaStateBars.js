$(document).ready(function(){
	const areaMap = {
		"Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"Holy See":4
	}
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
	var circleArray = [];
	let colorArray = [[235, 255, 0],[255, 246, 0],[255, 195, 2],[255, 210, 65],[255, 171, 63],[255, 143, 0],[255, 132, 63],[255, 91, 0],[255, 67, 67],[255, 5, 5],[176, 14, 14]]
	var friction = 0.95;
	var gravity = 1;
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
			this.dateCounter =this.dl[dateCounter]; 
			this.length = 5+(this.dl[dateCounter]*6);
			this.posY = 10+ (this.index * (this.width + 5));
			if(this.dateCounter <= 2){
				colorIndex = 0
			}else if(this.dateCounter>2 && this.dateCounter <= 10){
				colorIndex = 1
			}else if(this.dateCounter>10 && this.dateCounter <= 20){
				colorIndex = 2
			}else if(this.dateCounter>20 && this.dateCounter <= 30){
				colorIndex = 3
			}else if(this.dateCounter>30 && this.dateCounter <= 40){
				colorIndex = 4
			}else if(this.dateCounter>40 && this.dateCounter <= 50){
				colorIndex = 5
			}else if(this.dateCounter>50 && this.dateCounter <= 60){
				colorIndex = 6
			}else if(this.dateCounter>60 && this.dateCounter <= 70){
				colorIndex = 7
			}else if(this.dateCounter>70 && this.dateCounter <= 80){
				colorIndex = 8
			}else if(this.dateCounter>80 && this.dateCounter <= 100){
				colorIndex = 9
			}else{
				colorIndex = 10
			}
			this.color = 'rgba('+colorArray[colorIndex][0]+','+colorArray[colorIndex][1]+','+colorArray[colorIndex][2]+',1)'
			if(this.dateCounter>1000){
				this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
			}else{
				this.dateCounterLabel = this.dateCounter
			}
			this.draw();
		};
		this.draw = function(){
			if(this.dateCounter<100 && this.dateCounter>0){
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.rect(this.posX, this.posY, (this.posX+this.length), this.width);
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				ctx.fillStyle = '#333';
				ctx.font = '400 19px monty'
				ctx.fillText(this.label+' ( '+this.dateCounterLabel+' )', this.length + 20 , this.posY+6+(this.width/2));
				ctx.fill();
				ctx.closePath();
			}else if(this.dateCounter>0){
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.rect(this.posX, this.posY, (this.posX+this.length), this.width);
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				ctx.fillStyle = '#333';
				ctx.font = '400 19px monty';
				ctx.fillStyle ='#FFF';
				ctx.fillText(this.label+' ( '+this.dateCounterLabel+' )', 20 , this.posY+6+(this.width/2));
				ctx.fill();
				ctx.closePath();
			}
			
		};
		this.update();
	}

	function animateCircles(tickCounter){
		// requestAnimationFrame(animateCircles);
		if(tickCounter!==tick && tickCounter<ticks){
			
			tick = tickCounter
			ctx.clearRect(0,0,canWid,canHgt);
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
			setTimeout(()=>{animateCircles(tickCounter+1)},200)
		}else{

		}
		
	}

	var maxArr = 30;
	var barArray = [];
	let count = 0; 
	const ticks = 56;
	let globalCounter = 0;
	let tick;
	const legends = [[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,20],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25]];
	var init = function(){
		barArray = [];
		height = window.innerHeight;
		width = window.innerWidth;
		canvas.width = canWid;
		canvas.height = canHgt;
		let dataTotal = {
			"Andhra Pradesh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,3,3,5,7,8,9],
			"Bihar":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,4],
			"Chhattisgarh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
			"Delhi":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,4,4,5,6,6,7,7,7,8,10,12,17,26,29,29,30,31],
			"Gujarat":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,7,18,29,33,38],
			"Haryana":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,14,14,14,14,14,14,15,17,17,17,17,21,26,28,28],
			"Himachal Pradesh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,3],
			"Karnataka":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,6,6,6,6,11,11,14,15,15,26,33,37,41],
			"Kerala":[1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,15,17,17,19,19,22,23,26,27,27,28,40,52,67,95,109],
			"Madhya Pradesh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,6,7,14],
			"Maharashtra":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,2,11,14,14,32,32,39,42,47,52,63,67,74,89,128],
			"Manipur":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
			"Odisha":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2],
			"Puducherry":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
			"Punjab":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,13,21,21,29,29],
			"Rajasthan":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,15,15,15,15,15,15,15,3,3,3,3,4,4,4,4,7,17,17,24,28,32,36],
			"Tamil Nadu":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,7,9,15,18],
			"Telengana":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,5,6,6,17,21,22,32,35,35],
			"Chandigarh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,5,6,7,7],
			"Jammu and Kashmir":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,3,3,3,4,4,4,4,4,4,7],
			"Ladakh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,3,3,3,3,4,6,8,8,10,13,13,13,13,13],
			"Uttar Pradesh":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,7,7,7,7,7,9,11,11,12,13,13,15,16,19,23,24,27,31,33,37],
			"Uttarakhand":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,4,4],
			"West Bengal":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,3,4,7,9,9],
			"Mizoram":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
		}

		
		const dataIndex = [
			{
				date:"30-01-2020","states":{'Kerala':[1,0,0,0]}
			},{
				date:"31-01-2020","states":{'Kerala':[1,0,0,0]}
			},{
				date:"01-02-2020","states":{'Kerala':[2,0,0,0]}
			},{
				date:"02-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"03-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"04-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"05-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"06-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"07-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"08-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"09-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"10-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"11-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"12-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"13-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"14-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"15-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"16-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"17-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"18-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"19-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"20-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"21-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"22-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"23-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"24-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"25-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"26-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"27-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"28-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"29-02-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"01-03-2020","states":{'Kerala':[3,0,0,0]}
			},{
				date:"02-03-2020","states":{'Telengana':[1,0,0,0],'Kerala':[3,0,0,0],'Delhi':[1,0,0,0]}
			},{
				date:"03-03-2020","states":{'Telengana':[1,0,0,0],'Rajasthan':[0,1,0,0],'Kerala':[3,0,3,0],'Delhi':[1,0,0,0]}
			},{
				date:"04-03-2020","states":{'Uttar Pradesh':[6,0,0,0],'Kerala':[3,0,3,0],'Haryana':[0,2,0,0],'Delhi':[1,0,0,0],'Telengana':[1,0,0,0],'Rajasthan':[1,14,0,0]}
			},{
				date:"05-03-2020","states":{'Delhi':[2,0,0,0],'Haryana':[0,2,0,0],'Kerala':[3,0,3,0],'Rajasthan':[1,14,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[7,0,0,0]}
			},{
				date:"06-03-2020","states":{'Delhi':[3,0,0,0],'Haryana':[0,2,0,0],'Kerala':[3,0,3,0],'Rajasthan':[1,14,0,0],'Uttar Pradesh':[7,0,0,0],'Telengana':[1,0,0,0]}
			},{
				date:"07-03-2020","states":{'Kerala':[3,0,3,0],'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0],'Telengana':[1,0,0,0],'Tamil Nadu':[1,0,0,0],'Delhi':[3,0,0,0],'Haryana':[0,2,0,0],'Rajasthan':[1,14,0,0]}
			},{
				date:"08-03-2020","states":{'Ladakh':[2,0,0,0],'Telengana':[1,0,0,0],'Tamil Nadu':[1,0,0,0],'Rajasthan':[1,14,0,0],'Kerala':[8,0,3,0],'Haryana':[0,2,0,0],'Delhi':[3,0,0,0],'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0]}
			},{
				date:"09-03-2020","states":{'Karnataka':[1,0,0,0],'Kerala':[9,0,3,0],'Maharashtra':[2,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[1,14,0,0],'Tamil Nadu':[1,0,0,0],'Telengana':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Uttar Pradesh':[7,0,0,0],'Haryana':[0,2,0,0],'Delhi':[4,0,0,0]}
			},{
				date:"10-03-2020","states":{'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0],'Delhi':[4,0,0,0],'Haryana':[0,2,0,0],'Karnataka':[4,0,0,0],'Kerala':[15,0,3,0],'Maharashtra':[5,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[1,14,0,0],'Tamil Nadu':[1,0,0,0],'Telengana':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0]}
			},{
				date:"11-03-2020","states":{'Maharashtra':[2,0,0,0],'Delhi':[5,0,0,0],'Haryana':[0,14,0,0],'Kerala':[17,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[9,0,0,0],'Ladakh':[2,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[4,0,0,0]}
			},{
				date:"12-03-2020","states":{'Delhi':[6,0,0,0],'Haryana':[0,14,0,0],'Kerala':[17,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[10,1,0,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[4,0,0,0],'Maharashtra':[11,0,0,0],'Andhra Pradesh':[1,0,0,0]}
			},{
				date:"13-03-2020","states":{'Delhi':[6,0,0,0],'Haryana':[0,14,0,0],'Kerala':[19,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[10,1,0,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[6,0,0,1],'Maharashtra':[14,0,0,0],'Andhra Pradesh':[1,0,0,0]}
			},{
				date:"14-03-2020","states":{'Delhi':[7,0,1,1],'Haryana':[0,14,0,0],'Kerala':[19,0,3,0],'Rajasthan':[1,2,1,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[11,1,5,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[2,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[6,0,0,1],'Maharashtra':[14,0,0,0],'Andhra Pradesh':[1,0,0,0]}
			},{
				date:"15-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[7,0,2,1],'Haryana':[0,14,0,0],'Karnataka':[6,0,0,1],'Kerala':[22,0,3,0],'Maharashtra':[32,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,0,1,0],'Jammu and Kashmir':[2,0,0,0],'Ladakh':[3,0,0,0],'Uttar Pradesh':[12,1,4,0],'Uttarakhand':[1,0,0,0]}
			},{
				date:"16-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[7,0,2,1],'Haryana':[0,14,0,0],'Karnataka':[6,0,0,1],'Kerala':[23,0,3,0],'Maharashtra':[32,0,0,0],'Odisha':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,0,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[4,0,0,0],'Uttar Pradesh':[12,1,4,0],'Uttarakhand':[1,0,0,0]}
			},{
				date:"17-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[8,0,2,1],'Haryana':[1,14,0,0],'Karnataka':[11,0,0,1],'Kerala':[24,2,3,0],'Maharashtra':[36,3,0,1],'Odisha':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,2,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[6,0,0,0],'Uttar Pradesh':[14,1,5,0],'Uttarakhand':[1,0,0,0]}
			},{
				date:"18-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[9,1,2,1],'Haryana':[3,14,0,0],'Karnataka':[11,0,0,1],'Kerala':[25,2,3,0],'Maharashtra':[39,3,0,1],'Odisha':[1,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[4,2,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[8,0,0,0],'Uttar Pradesh':[15,1,5,0],'Uttarakhand':[1,0,0,0],'West Bengal':[1,0,0,0]}
			},{
				date:"19-03-2020","states":{'Andhra Pradesh':[2,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[11,1,3,1],'Haryana':[3,14,0,0],'Karnataka':[14,0,0,1],'Kerala':[25,2,3,0],'Maharashtra':[44,3,0,1],'Odisha':[1,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[2,0,0,1],'Rajasthan':[5,2,3,0],'Tamil Nadu':[2,0,1,0],'Telengana':[4,2,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[8,0,0,0],'Uttar Pradesh':[18,1,9,0],'Uttarakhand':[1,0,0,0],'West Bengal':[1,0,0,0]}
			},{
				date:"20-03-2020","states":{'Andhra Pradesh':[3,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[16,1,5,1],'Gujarat':[5,0,0,0],'Haryana':[3,14,0,0],'Karnataka':[15,0,1,1],'Kerala':[26,2,3,0],'Maharashtra':[49,3,0,1],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[2,0,0,1],'Rajasthan':[15,2,3,0],'Tamil Nadu':[3,0,1,0],'Telengana':[8,9,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[10,0,0,0],'Uttar Pradesh':[22,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[2,0,0,0]}
			},{
				date:"21-03-2020","states":{'Andhra Pradesh':[3,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[25,1,5,1],'Gujarat':[7,0,0,0],'Haryana':[3,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[15,0,1,1],'Kerala':[33,7,3,0],'Madhya Pradesh':[4,0,0,0],'Maharashtra':[60,3,0,1],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[13,0,0,1],'Rajasthan':[15,2,3,0],'Tamil Nadu':[3,0,1,0],'Telengana':[10,11,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[23,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[3,0,0,0]}
			},{
				date:"22-03-2020","states":{'Andhra Pradesh':[5,0,0,0],'Bihar':[2,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[28,1,5,1],'Gujarat':[18,0,0,1],'Haryana':[7,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[26,0,2,1],'Kerala':[45,7,3,0],'Madhya Pradesh':[4,0,0,0],'Maharashtra':[64,3,0,2],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[21,0,0,1],'Rajasthan':[22,2,3,0],'Tamil Nadu':[5,2,1,0],'Telengana':[11,11,1,0],'Chandigarh':[5,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[26,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[4,0,0,0]}
			},{
				date:"23-03-2020","states":{'Andhra Pradesh':[7,0,0,0],'Bihar':[2,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[28,1,5,1],'Gujarat':[29,0,0,1],'Haryana':[12,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[33,0,2,1],'Kerala':[60,7,3,0],'Madhya Pradesh':[6,0,0,0],'Maharashtra':[71,3,0,2],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[21,0,0,1],'Rajasthan':[26,2,3,0],'Tamil Nadu':[7,2,1,0],'Telengana':[22,10,1,0],'Chandigarh':[6,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[30,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[7,0,0,0]}
			},{
				date:"24-03-2020","states":{'Andhra Pradesh':[8,0,0,0],'Bihar':[3,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[29,1,6,1],'Gujarat':[32,1,0,1],'Haryana':[14,14,11,0],'Himachal Pradesh':[3,0,0,1],'Karnataka':[37,0,3,1],'Kerala':[87,8,4,0],'Madhya Pradesh':[7,0,0,0],'Maharashtra':[86,3,0,2],'Manipur':[1,0,0,0],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[29,0,0,1],'Rajasthan':[30,2,3,0],'Tamil Nadu':[13,2,1,0],'Telengana':[25,10,1,0],'Chandigarh':[7,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[32,1,11,0],'Uttarakhand':[3,1,0,0],'West Bengal':[9,0,0,1]}
			},{
				date:"25-03-2020","states":{
					'Andhra Pradesh':[9,0,1,0],'Bihar':[4,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[30,1,6,1],'Gujarat':[37,1,0,1],'Haryana':[14,14,11,0],'Himachal Pradesh':[3,0,0,1],'Karnataka':[41,0,3,1],'Kerala':[101,8,4,0],'Madhya Pradesh':[14,0,0,0],'Maharashtra':[125,3,1,3],'Manipur':[1,0,0,0],'Mizoram':[1,0,0,0],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[29,0,0,1],'Rajasthan':[34,2,3,0],'Tamil Nadu':[16,2,1,0],'Telengana':[25,10,1,0],'Chandigarh':[7,0,0,0],'Jammu and Kashmir':[7,0,1,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[36,1,11,0],'Uttarakhand':[3,1,0,0],'West Bengal':[9,0,0,1],
				}
			}
		]
		
		// for (let i = 0; i < dataIndex.length; i++) {
		// 	const element = dataIndex[i];
		// 	for (const key in dataTotal) {
		// 		if (dataTotal.hasOwnProperty(key)) {
		// 			dataTotal[key].push(0);
		// 		}
		// 	}
			
		// 	for (const state in element['states']) {
		// 		if (element['states'].hasOwnProperty(state)) {
		// 			const elt = element['states'][state];
		// 			if(dataTotal[state]){
		// 				dataTotal[state][i] = elt[0]+elt[1]
		// 			}else{
		// 				console.log(state)
		// 			}
		// 		}
		// 	}
		// }
		console.log(JSON.stringify(dataTotal))
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				if(!areaMap[element['name']]){
					console.log(element['name'])
				}
				barArray.push(new Bar(0, count, element[0] , element, getColor() , count, country));
			}
			count++;
		}
		// ticks = count-1
		setTimeout(()=>{
			animateCircles(0);
		},1000)
	};
	init();
})