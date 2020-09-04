$(document).ready(function(){
	const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	const legends = [
		[1,22,20],[1,23,20],[1,24,20],[1,25,20],[1,26,20],[1,27,20],[1,28,20],[1,29,20],[1,30,20],[1,31,20],[2,1,20],[2,2,20],[2,3,20],[2,4,20],[2,5,20],[2,6,20],[2,7,20],[2,8,20],[2,9,20],[2,10,20],[2,11,20],[2,12,20],[2,13,20],[2,14,20],[2,15,20],[2,16,20],[2,17,20],[2,18,20],[2,19,20],[2,20,20],[2,21,20],[2,22,20],[2,23,20],[2,24,20],[2,25,20],[2,26,20],[2,27,20],[2,28,20],[2,29,20],[3,1,20],[3,2,20],[3,3,20],[3,4,20],[3,5,20],[3,6,20],[3,7,20],[3,8,20],[3,9,20],[3,10,20],[3,11,20],[3,12,20],[3,13,20],[3,14,20],[3,15,20],[3,16,20],[3,17,20],[3,18,20],[3,19,20],[3,20,20],[3,21,20],[3,22,20],[3,23,20],[3,24,20],[3,25,20],[3,26,20],[3,27,20],[3,28,20],[3,29,20],[3,30,20],[3,31,20],[4,1,20],[4,2,20],[4,3,20],[4,4,20],[4,5,20],[4,6,20],[4,7,20],[4,8,20],[4,9,20],[4,10,20],[4,11,20],[4,12,20],[4,13,20],[4,14,20],[4,15,20],[4,16,20],[4,17,20],[4,18,20],[4,19,20],[4,20,20],[4,21,20],[4,22,20],[4,23,20],[4,24,20],[4,25,20],[4,26,20],[4,27,20],[4,28,20],[4,29,20],[4,30,20],[5,1,20],[5,2,20],[5,3,20],[5,4,20],[5,5,20],[5,6,20],[5,7,20],[5,8,20],[5,9,20],[5,10,20],[5,11,20],[5,12,20],[5,13,20],[5,14,20],[5,15,20],[5,16,20],[5,17,20],[5,18,20],[5,19,20],[5,20,20],[5,21,20],[5,22,20],[5,23,20],[5,24,20],[5,25,20],[5,26,20],[5,27,20],[5,28,20],[5,29,20],[5,30,20],[5,31,20],[6,1,20],[6,2,20],[6,3,20],[6,4,20],[6,5,20],[6,6,20],[6,7,20],[6,8,20],[6,9,20],[6,10,20],[6,11,20],[6,12,20],[6,13,20],[6,14,20],[6,15,20],[6,16,20],[6,17,20],[6,18,20],[6,19,20],[6,20,20],[6,21,20],[6,22,20],[6,23,20],[6,24,20],[6,25,20],[6,26,20],[6,27,20],[6,28,20],[6,29,20],[6,30,20],[7,1,20],[7,2,20],[7,3,20],[7,4,20],[7,5,20],[7,6,20],[7,7,20],[7,8,20],[7,9,20],[7,10,20],[7,11,20],[7,12,20],[7,13,20],[7,14,20],[7,15,20],[7,16,20],[7,17,20],[7,18,20],[7,19,20],[7,20,20],[7,21,20],[7,22,20],[7,23,20],[7,24,20],[7,25,20],[7,26,20],[7,27,20],[7,28,20],[7,29,20],[7,30,20],[7,31,20],[8,1,20],[8,2,20],[8,3,20],[8,4,20],[8,5,20],[8,6,20],[8,7,20],[8,8,20],[8,9,20],[8,10,20],[8,11,20],[8,12,20],[8,13,20],[8,14,20],[8,15,20],[8,16,20],[8,17,20],[8,18,20],[8,19,20],[8,20,20],[8,21,20],[8,22,20],[8,23,20],[8,24,20],[8,25,20],[8,26,20],[8,27,20],[8,28,20],[8,29,20],[8,30,20],[8,31,20]
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
	const secs  = 20;
	const lengthFactor = 250;
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
				this.index===0?console.log(this.tick):'';
				// console.log(dateCounter);
				this.previousIndex = this.index;
				this.index = i;
				if(Math.abs(this.previousIndex - this.index)>0.0001){
					this.dy = (this.index-this.previousIndex)/(0.5*secs);
				}else{
					this.previousIndex = this.index;
					this.dy = 0;
				}

				this.tick = dateCounter;
				
				this.dx = ((this.dl[dateCounter]-this.dl[dateCounter-1])-(this.dl[dateCounter-1]-this.dl[dateCounter-2]))/(0.5*secs);
				
				
				this.posY = (((this.previousIndex+this.dy) * (this.width+21)));
				// this.posY = (((this.index) * (this.width+15)));
				this.dateCounter =(this.dl[dateCounter]-this.dl[dateCounter-1]);
				if(this.dx == 0){
					this.length = 1+(((this.dl[dateCounter]-this.dl[dateCounter-1]))/lengthFactor);
				}else{
					this.length = 1+(((this.dl[dateCounter-1]-this.dl[dateCounter-2])+this.dx)/lengthFactor);
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
				

				if(( 1+((this.dl[this.tick]-this.dl[this.tick-1])/lengthFactor) - this.length)<1){
					this.dx = 0;
					this.length = 1+(this.dl[this.tick]-this.dl[this.tick-1])/lengthFactor;
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
			console.log(tick);
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if(legends[tick] && legends[tick][1]){
				let month;
				let date;
				
				legends[tick][1]>9?date = legends[tick][1]:date = '0'+legends[tick][1];
				month = monthNames[legends[tick][0] - 1]
				$('.legend1').text(`${month} ${date}, 2020`)
				// console.log(`${month} ${date}, 2020`);
				// june 18, 2020
				// $('.stateName').addClass('active')
				// $('.legendContainer').addClass('active');
			}
			// setTimeout(()=>{animateCircles(tickCounter+1)},secs)
		}else{
		}
	}
	function allTimeAnimate(){
		if(globalCounter<secs*(ticks+1)-1){
			if(globalCounter ==0 || globalCounter%secs!==0){
				ctx.clearRect(0,0,canWid,canHgt);
				for (var i = 0; i < barArray.length; i++) {
					barArray[i].update();
				}
				globalCounter = globalCounter + 1;
			}else{
				let ticker = Math.floor(globalCounter/secs);
				ctx.clearRect(0,0,canWid,canHgt);
				console.log(ticker);
				barArray = barArray.sort(function(a, b){
					return ((b.dl[ticker]-b.dl[ticker-1]) - (a.dl[ticker]-a.dl[ticker-1]));
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