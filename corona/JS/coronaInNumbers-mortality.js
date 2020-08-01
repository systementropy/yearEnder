$(document).ready(function(){
	const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	const legends = [
		[1/22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[5,17],[5,18],[5,19],[5,20],[5,21],[5,22],[5,23],[5,24],[5,25],[5,26],[5,27],[5,28],[5,29],[5,30],[5,31],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],[6,17],[6,18],[6,19],[6,20],[6,21],[6,22],[6,23],[6,24],[6,25],[6,26],[6,27],[6,28],[6,29],[6,30],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],[7,15],[7,16],[7,17],[7,18],[7,19],[7,20],[7,21],[7,22],[7,23],[7,24],[7,25],[7,26],[7,27],[7,28],[7,29],[7,30],[7,31]
,	];
	$('.strap').text('MORTALITY RATE* OVER TIME')
	$('.footernotes').html('*Deaths as percentage of<br>total confirmed cases')
	var countryCode = JSON.parse($.ajax({'url': "../../countryCode.json", 'async': false}).responseText);
	
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	// const ticks = legends.length;
	const ticks = legends.length;
	let globalCounter = 0;
	let tick;
	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
	// var points = [];
	var canHgt = 505;
	var canWid = 780;
	
	canvas.height = canHgt*2;
	canvas.width = canWid*2;

	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';


	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	ctx.scale(2,2);
	const secs  = 16;
	const lengthFactor = 0.15;
	var colorArray =['#000000','#EE999F','#F0DDB8','#F0C38F','#D0DEc2','#AECDAD','#999FEE','#AECDAD'];
	function Bar(x, y, length, dl, color, index, label, countryCode){
		this.label = label;
		this.posX = x;
		this.width = 14.5;
		this.posY = 1+ (y * (this.width+1));
		this.dl = dl;
		this.length = 20;
		this.color = color;
		this.index = index;
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
					this.dy = (this.index-this.previousIndex)/10;
				}else{
					this.previousIndex = this.index;
					this.dy = 0;
				}

				this.tick = dateCounter;
				
				this.dx = (this.dl[dateCounter]-this.dl[dateCounter-1])/10;
				
				
				this.posY = (((this.previousIndex+this.dy) * (this.width+11)));
				// this.posY = (((this.index) * (this.width+15)));
				this.dateCounter =this.dl[dateCounter];
				if(this.dx == 0){
					this.length = 1+((this.dl[dateCounter])/lengthFactor);
				}else{
					this.length = 1+((this.dl[dateCounter-1]+this.dx)/lengthFactor);
				}
				
				this.previousIndex += this.dy;
				this.dateCounterLabel = this.dateCounter.toFixed(2)+'%'
			
			}else{
				

				if(( 1+((this.dl[this.tick])/lengthFactor) - this.length)<1){
					this.dx = 0;
					this.length = 1+(this.dl[this.tick])/lengthFactor;
				}else{
					this.length = this.length + (this.dx/lengthFactor);
				}
				
				if(Math.abs(this.previousIndex - this.index)>0.0001){
					this.posY = (((this.previousIndex+this.dy) * (this.width+11)));
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
				ctx.rect(this.posX+20, this.posY, canWid, this.width);
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
					ctx.drawImage(this.imgCountry, this.posX - 60, this.posY -7, 30,30);
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
				month = monthNames[legends[tick][0] - 1]
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
		
		const jsonData = JSON.parse($.ajax({'url': "/data/global_deaths.json", 'async': false}).responseText);
		const dataTotal = jsonData;
		const jsonDataTotal = JSON.parse($.ajax({'url': "/data/global_confirmed.json", 'async': false}).responseText);
		const dataConfTot =jsonDataTotal;

		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				if(dataConfTot[country] && dataConfTot[country][dataConfTot[country].length-1]>10000){
					const element = dataTotal[country];
					const eltConfTot = dataConfTot[country];
					const newUpd = []
					for (let index = 0; index < element.length; index++) {
						eltConfTot[index]==0?newUpd.push(0):newUpd.push((element[index]/eltConfTot[index])*100)
						// newUpd.push(0||(element[index]/eltConfTot[index])*100)
					}
					let color;
					country == 'India'?color = '#009DFF':color = '#820e0e'
					const contArr = [ 'INDIA','China','US','Russia','South Korea','Iran','Turkey','UK','Germany','Italy','Spain'];
					if(countryCode[country]){
						barArray.push(new Bar(
							250,
							count,
							newUpd[0] ,
							newUpd,
							color ,
							count,
							country,
							countryCode[country]
							// dataConfTot[country]
						));	
					}
				}
				
			}
			count++;
		}
		console.log(barArray)
		// ticks = count-1
		setTimeout(()=>{
			allTimeAnimate();
			animateCircles(0);
		},2000)
	};
	init();
})