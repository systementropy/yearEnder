$(document).ready(function(){
	const areaMap = {
		"Angola":5,"Benin":5,"Botswana":5,"Burkina Faso":5,"Burundi":5,"Cameroon":5,"Cabo Verde":5,"Central African Republic":5,"Chad":5,"Congo (Brazzaville)":5,"Cote d'Ivoire":5,"Congo (Kinshasa)":5,"Equatorial Guinea":5,"Eritrea":5,"Eswatini":5,"Ethiopia":5,"Gabon":5,"Gambia":5,"Ghana":5,"Guinea":5,"Guinea-Bissau":5,"Kenya":5,"Lesotho":5,"Liberia":5,"Madagascar":5,"Malawi":5,"Mali":5,"Mauritius":5,"Mozambique":5,"Namibia":5,"Niger":5,"Nigeria":5,"Rwanda":5,"Sao Tome and Principe":5,"Senegal":5,"Seychelles":5,"Sierra Leone":5,"South Africa":5,"South Sudan":5,"Tanzania":5,"Togo":5,"Uganda":5,"Zambia":5,"Zimbabwe":5,"Antigua and Barbuda":2,"Argentina":02,"Bahamas":02,"Barbados":02,"Belize":02,"Bolivia":2,"Brazil":2,"Canada":2,"Chile":2,"Colombia":2,"Costa Rica":2,"Cuba":2,"Dominica":2,"Dominican Republic":2,"Ecuador":2,"El Salvador":2,"Grenada":2,"Guatemala":2,"Guyana":2,"Haiti":2,"Honduras":2,"Jamaica":2,"Mexico":2,"Nicaragua":2,"Panama":2,"Paraguay":2,"Peru":2,"Saint Kitts and Nevis":2,"Saint Lucia":2,"Saint Vincent and the Grenadines":2,"Suriname":2,"Trinidad and Tobago":2,"USA":2,"US":2,"Uruguay":2,"Venezuela":2,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Syria":6,"Tunisia":6,"United Arab Emirates":6,"UAE":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"INDIA":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Laos":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Burma":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4
	}
	const legends = [
		[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[5,17],[5,18],[5,19],[5,20],[5,21],[5,22],[5,23],[5,24],[5,25],[5,26],[5,27],[5,28],[5,29],[5,30],[5,31],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],[6,17],[6,18],[6,19],[6,20],[6,21],[6,22],[6,23]
	];
	var countryCode = JSON.parse($.ajax({'url': "../../countryCode.json", 'async': false}).responseText);
	// console.log(countryCode);
	$('.strap').text('Coronavirus cases over time')
	// $('#canvas.countryBar').css({top:'350px'});
	var maxArr = 10;
	var barArray = [];
	let count = 0; 
	// const ticks = legends.length;
	const ticks = legends.length;
	let globalCounter = 0;
	let tick;
	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
	// var points = [];
	var canHgt = 450;
	var canWid = 780;
	
	canvas.height = canHgt*2;
	canvas.width = canWid*2;

	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';


	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	ctx.scale(2,2);
	const secs  = 30;
	const lengthFactor = 5600;
	var colorArray =['#000000','#EE999F','#F0DDB8','#F0C38F','#D0DEc2','#AECDAD','#999FEE','#AECDAD'];
	function Bar(x, y, length, dl, color, index, label, countryCode){
		this.posX = x;
		this.width = 25;
		this.posY = 1+ (y * (this.width+1));
		this.dl = dl;
		this.length = 20;
		this.color = color;
		this.index = index;
		this.label = label;
		this.dateCounter = this.dl[0];
		this.tick;
		this.dateCounterLabel;
		this.previousIndex;
		this.dy = 0;
		this.dx = 0;
		this.countryCode='';
		this.imgCountry='';
		if(countryCode){
			this.countryCode = countryCode.toLowerCase();
			this.imgCountry = new Image();
			this.imgCountry.src = 'https://www.countryflags.io/'+this.countryCode+'/flat/64.png';
		}
		
		
		// this.deathData = death;
		// this.deathCounter = this.deathData[0];
		this.update = function(i,dateCounter){
			if(i!==undefined && dateCounter!==undefined){
				
				this.previousIndex = this.index;
				this.index = i;
				if(Math.abs(this.previousIndex - this.index)>0.0001){
					this.dy = (this.index-this.previousIndex)/20;
				}else{
					this.previousIndex = this.index;
					this.dy = 0;
				}

				this.tick = dateCounter;
				
				this.dx = (this.dl[dateCounter]-this.dl[dateCounter-1])/20;
				
				
				this.posY = (((this.previousIndex+this.dy) * (this.width+21)));
				// this.posY = (((this.index) * (this.width+15)));
				this.dateCounter =this.dl[dateCounter];
				if(this.dx == 0){
					this.length = 1+((this.dl[dateCounter])/lengthFactor);
				}else{
					this.length = 1+((this.dl[dateCounter-1]+this.dx)/lengthFactor);
				}
				
				this.previousIndex += this.dy;
				// if(this.dateCounter>1000){
				// 	this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
				// }else{
				// 	this.dateCounterLabel = this.dateCounter
				// }
				this.dateCounter>1000000
					?this.dateCounterLabel = (this.dateCounter/1000000).toFixed(2)+'M'
					:this.dateCounter>1000
						?this.dateCounterLabel = (this.dateCounter/1000).toFixed(1)+'K'
						:this.dateCounterLabel = this.dateCounter

			
			}else{
				

				if(( 1+((this.dl[this.tick])/lengthFactor) - this.length)<1){
					this.dx = 0;
					this.length = 1+(this.dl[this.tick])/lengthFactor;
				}else{
					this.length = this.length + (this.dx/lengthFactor);
				}
				
				if(Math.abs(this.previousIndex - this.index)>0.0001){
					this.posY = (((this.previousIndex+this.dy) * (this.width+21)));
					this.previousIndex += this.dy;
					if(this.posY<0){
						console.table(this.label,this.posY)
					}
				}else{
					this.previousIndex = this.index;
					this.dy = 0;
				}
				
			}
			this.draw();
		};
		this.draw = function(){
			if(this.dateCounter>0){
				ctx.beginPath();
				ctx.fillStyle = '#E6E5E5';
				ctx.strokeStyle = this.color;
				ctx.lineWidth = 1;
				ctx.rect(this.posX+20, this.posY+8, canWid, 8);
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.strokeStyle = this.color;
				ctx.lineWidth = 1;
				ctx.rect(this.posX+20, this.posY, this.length, this.width);
				ctx.fill();
				ctx.stroke();
				ctx.closePath();

				// ctx.beginPath();
				// ctx.fillStyle = '#999';
				// ctx.rect(this.posX+20, this.posY, (this.posX+this.deathLength), this.width);
				// ctx.fill();
				// ctx.closePath();

				ctx.save();
				ctx.beginPath();
				if(this.imgCountry){
					// ctx.arc(this.posX - 50, this.posY+32,32,0,2*Math.PI)
					// ctx.clip();
					ctx.drawImage(this.imgCountry, this.posX - 60, this.posY -7, 40,40);
				}
				ctx.closePath();
				ctx.restore();

				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.textAlign = 'left';
				ctx.font = '500 21px/48px Montserrat';
				// this.label == 'India'?ctx.fillStyle=this.color:'';
				ctx.textAlign = 'right';
				ctx.fillText(this.label, this.posX -70 , this.posY+8+(this.width/2));
				this.textLabelWidth = ctx.measureText(this.label).width;
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.textAlign = 'left';
				this.label == 'India'?ctx.fillStyle='#2B2A2A':'';
				this.label == 'India'?ctx.font = '900 21px/48px Montserrat':ctx.font = '500 21px/48px Montserrat';
				
				// ctx.textAlign = "left"
				ctx.fillText(this.dateCounterLabel, this.length+ this.posX + 30 , this.posY+8+(this.width/2));
				ctx.fill();
				ctx.closePath();

			}
			if(this.tick == ticks-1){
				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.font = '500 15px/48px Montserrat';
				let text;
				ctx.textAlign = 'right';
				this.index+1>9?text=this.index+1:text='0'+(this.index+1)
				ctx.fillText(text+'.', this.posX +12 , this.posY+6+(this.width/2));
				ctx.closePath();
			}	
		};
	}

	function animateCircles(tickCounter){

		if(tickCounter!==tick && tickCounter<ticks){
			tick = tickCounter
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if(legends[tick] && legends[tick][1]){
				let month;
				let date;
				
				legends[tick][1]>9?date = legends[tick][1]:date = '0'+legends[tick][1];
				if(legends[tick][0] == 1){
					month = 'Jan'
				}else if(legends[tick][0] == 2){
					month = 'Feb'
				}else if(legends[tick][0] == 3){
					month = 'Mar'
				}else if(legends[tick][0] == 4){
					month = 'Apr'
				}else if(legends[tick][0] == 5){
					month = 'May'
				}else if(legends[tick][0] == 6){
					month = 'Jun'
				}
				$('.legend1').text(`${month} ${date}, 2020`)
				// june 18, 2020
				// $('.stateName').addClass('active')
				// $('.legendContainer').addClass('active');
			}
			// setTimeout(()=>{animateCircles(tickCounter+1)},secs)
		}else{
		}
	}
	function allTimeAnimate(){
		if(globalCounter<secs*ticks-1){
			if(globalCounter ==0 || globalCounter%secs!==0){
				ctx.clearRect(0,0,canWid,canHgt);
				for (var i = 0; i < barArray.length; i++) {
					barArray[i].update();
				}
				globalCounter = globalCounter + 1;
			}else{
				// console.log(globalCounter,globalCounter/secs)
				let ticker = Math.floor(globalCounter/secs);
				ctx.clearRect(0,0,canWid,canHgt);
				barArray = barArray.sort(function(a, b){
					return (b.dl[ticker] - a.dl[ticker]);
				});
				animateCircles(ticker);
				globalCounter += 1;
			}
			requestAnimationFrame(allTimeAnimate)
		}
		
	}
	
	var init = function(){
		barArray = [];
		height = window.innerHeight;
		width = window.innerWidth;
		
		const jsonData = JSON.parse($.ajax({'url': "/data/global_confirmed.json", 'async': false}).responseText);
		const dataTotal = jsonData // {...jsonData}

		// console.log(dataTotal)
		const dataDeath ={}
		// console.log(dataDeath);
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				// if(!countryCode[country]){
				// 	console.log(country)
				// }
				// if(!dataDeath[country]){
				// 	console.log('deth'+country)
				// }
				// if(dataDeath[country] && dataDeath[country][dataDeath[country].length-1]>50){
				let color;
				country == 'India'?color = '#009DFF':color = '#FF6E6E'
				const contArr = [ 'INDIA','China','US','Russia','South Korea','Iran','Turkey','UK','Germany','Italy','Spain'];
				if(countryCode[country]){
					barArray.push(new Bar(
						250,
						count,
						element[0] ,
						element,
						color ,
						count,
						country,
						countryCode[country]
						// dataDeath[country]
					));	
				}
				
			}
			count++;
		}
		// ticks = count-1
		setTimeout(()=>{
			allTimeAnimate();
			animateCircles(0);
		},2000)
	};
	init();
})