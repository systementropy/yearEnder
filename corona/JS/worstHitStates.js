$(document).ready(function(){
	
	const legends = [
		
	];
	const csvData = $.ajax({'url': "/data/datasets_557629_1273282_covid_19_india.csv", 'async': false}).responseText;
	let rowCsvData = csvData.split(/\r?\n|\r/);
	const dateWiseData = {}
	// console.log(rowCsvData)
	
	for (let index = 1; index < rowCsvData.length; index++) {
		const element = rowCsvData[index].split(',');
		const prement = rowCsvData[index-1];
		if(!element[1]){
			console.log(element)
		}else{
			let thisDate = element[1].split('/');
			let thisState = element[3]
			// console.log(thisDate)
			if(index>1 && thisDate[0] === legends[legends.length-1][0]){
				
			}else if(index == 1){
				legends.push(thisDate)
			}else if(index>1 && thisDate[0] !== legends[legends.length-1][0]){
				legends.push(thisDate)
			}
			if(!dateWiseData[thisState]){
				let emptyArray = new Array(Math.max(0,legends.length-2))
				emptyArray.fill(0,Math.max(0,legends.length-2))
				// console.log(legends.length,emptyArray,thisState)
				// dateWiseData[thisState] = [].fill(0,legends.length-1)
				dateWiseData[thisState] = emptyArray;
				dateWiseData[thisState].push(parseInt(element[8]))
			}else if(index == 1){
				dateWiseData[thisState] = [];
				dateWiseData[thisState].push(parseInt(element[8]))
			}else{
				dateWiseData[thisState].push(parseInt(element[8]))
			}
			if(index === 1){
				// console.log(element[1],thisDate)
				// console.log(element)
			}	
		}
		
		
	}
	console.log(legends)
	console.log(dateWiseData)
	// for (const state in dateWiseData) {
	// 	if (dateWiseData.hasOwnProperty(state)) {
	// 		const element = dateWiseData[state];
	// 		console.log(state,element.length)
	// 	}
	// }
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
	const lengthFactor = 300;
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
				if(this.dateCounter>1000){
					this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
				}else{
					this.dateCounterLabel = this.dateCounter
				}
				
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
			if(this.dateCounter<10000000 && this.dateCounter>0){
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


				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.textAlign = 'left';
				ctx.font = '500 21px/48px Montserrat';
				// this.label == 'India'?ctx.fillStyle=this.color:'';
				ctx.textAlign = 'right';
				ctx.fillText(this.label, this.posX -25 , this.posY+8+(this.width/2));
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
			if(legends[tick] && legends[tick][0]){
				let month;
				let date;
				
				// legends[tick][0]>9?date = legends[tick][0]:date = '0'+legends[tick][0];
				date = legends[tick][0]
				if(legends[tick][1] == 1){
					month = 'Jan'
				}else if(legends[tick][1] == 2){
					month = 'Feb'
				}else if(legends[tick][1] == 3){
					month = 'Mar'
				}else if(legends[tick][1] == 4){
					month = 'Apr'
				}else if(legends[tick][1] == 5){
					month = 'May'
				}else if(legends[tick][1] == 6){
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
					return ((b.dl[ticker]) - (a.dl[ticker]));
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
		
		
		const dataTotal = {...dateWiseData}
		const dataDeath ={}
		// console.log(dataDeath);
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country) && country!=='Unassigned') {
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
					// if(contArr.indexOf(country)>-1)
					barArray.push(new Bar(
						220,
						count,
						element[0] ,
						element,
						color ,
						count,
						country,
						null
						// dataDeath[country]
					));	
				// }
				
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