$(document).ready(function(){
	const dateWiseData = {
	}
	const legends = ['March','March','May','July'];
	const rawData = [[['Diabetes',0],['TB',0],['Suicide',0],['HIV/AIDS',0],['Malaria',0],['Malnutrition',0],['Homicide',0],['Parkinsons',0],['Meningitis',0],['Influenza',0],['Maternal',0],['Alcohol',0],['Drugs',0],['Conflict',0],['Gastro*',0],['Hepatitis',0],['Fire',0],['Poisonings',0],['COVID',0],['Heat/cold',0]],
	[['Diabetes',315613],['TB',271883],['Suicide',188880],['HIV/AIDS',159026],['Malaria',148934],['Malnutrition',121687],['Homicide',93936],['Parkinsons',79135],['Meningitis',70389],['Influenza',47598],['Maternal',46673],['Alcohol',43225],['Drugs',38012],['Conflict',37675],['Gastro*',37002],['Hepatitis',30191],['Fire',28845],['Poisonings',17492],['COVID',19293],['Heat/cold',12867]],
	[['Diabetes',546834],['TB',471067],['Suicide',327255],['HIV/AIDS',275530],['Malaria',258045],['Malnutrition',210836],['Homicide',162753],['Parkinsons',137109],['Meningitis',121956],['Influenza',82470],['Maternal',80867],['Alcohol',74893],['Drugs',65859],['Conflict',65276],['Gastro*',64111],['Hepatitis',52308],['Fire',49977],['Poisonings',30307],['COVID',346239],['Heat/cold',22293]],
	[['Diabetes',773118],['TB',665998],['COVID',635666],['Suicide',462676],['HIV/AIDS',389546],['Malaria',364826],['Malnutrition',298082],['Homicide',249242],['Parkinsons',193846],['Meningitis',172422],['Influenza',116596],['Maternal',114330],['Alcohol',105884],['Drugs',93112],['Conflict',92288],['Gastro*',90640],['Hepatitis',73954],['Fire',40676],['Poisonings',42848],['Heat/cold',31518]]]

	for (let index = 0; index < rawData.length; index++) {
		const element = rawData[index];
		for (let dtaPts = 0; dtaPts < element.length; dtaPts++) {
			const each = element[dtaPts];
			if(dateWiseData[each[0]]){
				dateWiseData[each[0]].push(each[1])
			}else{
				dateWiseData[each[0]]=[]
				dateWiseData[each[0]].push(each[1])
			}
		}
	}
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	const ticks = legends.length;
	let tick;
	
	var canvas = document.getElementById("canvas");
	var canHgt = 600;
	var canWid = 780;
	
	canvas.height = canHgt*2;
	canvas.width = canWid*2;

	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';


	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	ctx.scale(2,2);
	const secs  = 100;
	let globalCounter = 0;
	const lengthFactor = 2000;
	var colorArray =['#000000','#EE999F','#F0DDB8','#F0C38F','#D0DEc2','#AECDAD','#999FEE','#AECDAD'];
	function Bar(x, y, length, dl, color, index, label, countryCode){
		this.posX = x;
		this.width = 20;
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
		this.yOffset = 10;
		this.countryCode='';
		
		this.update = function(i,dateCounter){
			if(i!==undefined && dateCounter!==undefined){
				
				this.previousIndex = this.index;
				this.index = i;
				if(this.index !== this.previousIndex){
					this.dy = (this.index-this.previousIndex)/(secs*0.75);
				}else{
					this.previousIndex = this.index;
					this.dy = 0;
				}

				this.tick = dateCounter;
				
				this.dx = (this.dl[dateCounter]-this.dl[dateCounter-1])/(secs*0.75);
				
				
				this.posY = (((this.previousIndex+this.dy) * (this.width+this.yOffset)));
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
				
				if(Math.abs(this.previousIndex - this.index)>0.001){
					this.posY = (((this.previousIndex+this.dy) * (this.width+this.yOffset)));
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


				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.textAlign = 'left';
				ctx.font = '500 21px/48px Montserrat';
				// this.label == 'COVID'?ctx.fillStyle=this.color:'';
				ctx.textAlign = 'right';
				ctx.fillText(this.label, this.posX -25 , this.posY+8+(this.width/2));
				this.textLabelWidth = ctx.measureText(this.label).width;
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#5A5A5A';
				ctx.textAlign = 'left';
				this.label == 'COVID'?ctx.fillStyle='#2B2A2A':'';
				this.label == 'COVID'?ctx.font = '900 21px/48px Montserrat':ctx.font = '500 21px/48px Montserrat';
				
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
			switch (tick) {
				case 0:
					$('.legend1>span').eq(0).addClass('active')
					break;
				case 1:
					$('.legend1>span').eq(0).addClass('active')
					break;
				case 2:
					$('.legend1>span').eq(0).removeClass('active')
					$('.legend1>span').eq(2).addClass('active')
					break;
				case 3:
					$('.legend1>span').eq(2).removeClass('active')
					$('.legend1>span').eq(4).addClass('active')
					break;
				default:
					break;
			}
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
				let color;
				country == 'COVID'?color = '#009DFF':color = '#FF6E6E'
				const contArr = [ 'COVID','China','US','Russia','South Korea','Iran','Turkey','UK','Germany','Italy','Spain'];
					barArray.push(new Bar(
						220,
						count,
						element[0] ,
						element,
						color ,
						count,
						country,
						null
					));	
				
			}
			count++;
		}
		setTimeout(()=>{
			allTimeAnimate();
			animateCircles(0);
		},2000)
	};
	init();
})