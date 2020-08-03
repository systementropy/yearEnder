$(document).ready(function(){
	const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const stateLabel = {
		"Andhra Pradesh":"Andhra Pradesh",
		"Delhi":"Delhi",
		"Haryana":"Haryana",
		"Karnataka":"Karnataka",
		"Kerala":"Kerala",
		"Maharashtra":"Maharashtra",
		"Odisha":"Odisha",
		"Pondicherry":"Puducherry",
		"Punjab":"Punjab",
		"Rajasthan":"Rajasthan",
		"Tamil Nadu":"Tamil Nadu",
		"Telangana":"Telangana",
		"Union Territory of Chandigarh":"Chandigarh",
		"Chandigarh":"Chandigarh",
		"Union Territory of Jammu and Kashmir":"Jammu & Kashmir",
		"Jammu and Kashmir":"Jammu & Kashmir",
		"Union Territory of Ladakh":"Ladakh",
		"Ladakh":"Ladakh",
		"Uttar Pradesh":"Uttar Pradesh",
		"UP":"Uttar Pradesh",
		"Uttarakhand":"Uttarakhand",
		"West Bengal":"West Bengal",
		"Chhattisgarh":"Chhattisgarh",
		"Gujarat":"Gujarat",
		"Puducherry":"Puducherry",
		"Madhya Pradesh":"Madhya Pradesh",
		"Himachal Pradesh":"Himachal Pradesh",
		"Bihar":"Bihar",
		"Manipur":"Manipur",
		"Mizoram":"Mizoram",
		"Andaman and Nicobar Islands":"A & N Islands",
		"Goa":"Goa",
		"Arunachal Pradesh":"Arunachal Pradesh",
		"Jharkhand":"Jharkhand",
		"Assam":"Assam",
		"Tripura":"Tripura",
		"Nagaland":"Nagaland",
		"Meghalaya":"Meghalaya",
		"Dadra and Nagar Haveli and Daman and Diu":"DNHDD",
		"Sikkim":"Sikkim",
		"Daman & Diu":"Daman & Diu",
	}
	var jsontest = JSON.parse($.ajax({'url': "/data/state_test_data.json", 'async': false}).responseText);
    let statetested = jsontest['states_tested_data'];
    console.log(statetested);
    let testedObj ={};
    for (let index = 0; index < statetested.length; index++) {
        const element = statetested[index];
		testedObj[element.state]?'':testedObj[element.state]=[]
		// testedObj[element.state].push(element)
		const dateString = element['updatedon'].split('/')
		element.positive==0
			?testedObj[element.state][parseInt(dateString[1])-3] = 0
			:testedObj[element.state][parseInt(dateString[1])-3]=(element.totaltested/element.positive)
    }
    // console.log(testedObj)
	const dateWiseData = {"Andaman and Nicobar Islands":[0,86.3030303030303,233.5151515151515,161.94845360824743,43.86496350364963,33.48773841961853],"Andhra Pradesh":[0,67.39700641482537,122.41313628899836,60.992805755395686,13.848963691967105,13.009290519261294],"Arunachal Pradesh":[0,347,2070.75,126.89528795811518,51.45505971087366,52.43286219081272],"Assam":[0,257.2972972972973,85.76808176100629,52.611869814932994,22.78166828081154,22.480398098079434],"Bihar":[0,55.432762836185816,20.513813651137596,22.66933497536946,10.751211093023713,10.693469530295094],"Chandigarh":[0,15.5,16.331058020477816,17.475,13.28163653663178,12.974932855863921],"Chhattisgarh":[0,438.525,140.5528455284553,56.21063680895731,34.792758089368256,34.47835137385512],"Dadra and Nagar Haveli and Daman and Diu":[0,0,5738.5,150.38028169014083,37.326584507042256,36.100762066045725],"Delhi":[0,13.732189589997093,10.722838137472284,6.086904761904762,0,7.725829296106103],"Goa":[0,290.14285714285717,274.5211267605634,50.56349809885931,22.208354473194657,20.581163859111793],"Gujarat":[0,14.563594994311718,12.619387876622604,11.445424746500015,12.447947524333474,12.788928150765607],"Haryana":[0,83.19174041297936,56.49832615973219,18.16077811383008,17.52012012012012,17.697253484487526],"Himachal Pradesh":[0,153.325,112.29003021148036,83.41972717733474,56.61232449297972,55.562708102108765],"Jammu and Kashmir":[0,32.159609120521175,69.9284546197874,48.69387755102041,31.313669630139003,30.543378782218902],"Jharkhand":[0,100.79816513761467,108.00983606557377,57.2855421686747,26.027576453950857,25.187674177880403],"Karnataka":[0,106.47079646017698,91.1440546414157,40.72608581550978,10.88339040406075,10.5220258272202],"Kerala":[0,55.29376257545272,61.02992125984252,52.131922557406575,32.873210807148304,31.53280333436246],"Ladakh":[0,102.04545454545455,95.50649350649351,14.404564315352697,13.863960113960115,13.54706684856753],"Madhya Pradesh":[0,15.890285714285714,20.74520954382495,26.886412123887293,24.132899452933408,23.840763381541674],"Maharashtra":[0,13.685728693898135,7.10743002700712,5.452027311809829,4.977372610127739,5.0308956098243405],"Manipur":[0,229.5,145.6949152542373,40.65362673186634,32.59862647844334],"Meghalaya":[0,132.91666666666666,288.18518518518516,371.03846153846155,43.48655256723716,41.867511520737324],"Mizoram":[0,180,777,91.03311258278146,51.759803921568626,45.98931623931624],"Nagaland":[0,0,59.906976744186046,36.08496732026144,22.383343177790902,20.30594315245478],"Odisha":[0,223.2112676056338,78.09599589322382,37.569851380042465,16.142453806819965,15.33427004986638],"Puducherry":[0,294.125,89.5679012345679,24.203081232493,11.436347926267281,10.9143457698371],"Punjab":[0,44.177083333333336,38.82103402562969,54.20797413793103,36.142006327935974,33.58824847364588],"Rajasthan":[0,40.13312693498452,46.4021062167365,45.754024647496394,36.284532946795615,35.37466786759739],"Sikkim":[0,0,2925,119.7159090909091,39.028169014084504,40.23252279635258],"Tamil Nadu":[0,51.54885923374946,22.028478036985625,12.983497288364923,10.811635937671593,10.787739749158622],"Telangana":[0,18.974409448818896,15.079303675048356,5.420343962298794,6.978645359871138,7.201271061188295],"Tripura":[0,1607.5,86.94620253164557,46.28715003589375,34.194155324259405,33.528298385600294],"Uttar Pradesh":[0,35.284034373586614,35.89993808049535,30.98046143367955,0,0],"Uttarakhand":[0,115.17543859649123,37.952618453865334,23.9583477959042,23.404287901990813,23.16357171078625],"West Bengal":[0,21.80079155672823,37.03890201781494,26.29656770300124,12.728671567789366,12.375350919010542]}					// {}
	const legends = ['March','April','May','June','July','August'];
	const rawData = [[['Diabetes',0],['TB',0],['Suicide',0],['HIV/AIDS',0],['Malaria',0],['Malnutrition',0],['Homicide',0],['Parkinsons',0],['Meningitis',0],['Influenza',0],['Maternal',0],['Alcohol',0],['Drugs',0],['Conflict',0],['Gastro*',0],['Hepatitis',0],['Fire',0],['Poisonings',0],['COVID',0],['Heat/cold',0]],
	[['Diabetes',315613],['TB',271883],['Suicide',188880],['HIV/AIDS',159026],['Malaria',148934],['Malnutrition',121687],['Homicide',93936],['Parkinsons',79135],['Meningitis',70389],['Influenza',47598],['Maternal',46673],['Alcohol',43225],['Drugs',38012],['Conflict',37675],['Gastro*',37002],['Hepatitis',30191],['Fire',28845],['Poisonings',17492],['COVID',19293],['Heat/cold',12867]],
	[['Diabetes',546834],['TB',471067],['Suicide',327255],['HIV/AIDS',275530],['Malaria',258045],['Malnutrition',210836],['Homicide',162753],['Parkinsons',137109],['Meningitis',121956],['Influenza',82470],['Maternal',80867],['Alcohol',74893],['Drugs',65859],['Conflict',65276],['Gastro*',64111],['Hepatitis',52308],['Fire',49977],['Poisonings',30307],['COVID',346239],['Heat/cold',22293]],
	[['Diabetes',773118],['TB',665998],['COVID',635666],['Suicide',462676],['HIV/AIDS',389546],['Malaria',364826],['Malnutrition',298082],['Homicide',249242],['Parkinsons',193846],['Meningitis',172422],['Influenza',116596],['Maternal',114330],['Alcohol',105884],['Drugs',93112],['Conflict',92288],['Gastro*',90640],['Hepatitis',73954],['Fire',40676],['Poisonings',42848],['Heat/cold',31518]]]

	// for (let index = 0; index < rawData.length; index++) {
	// 	const element = rawData[index];
	// 	for (let dtaPts = 0; dtaPts < element.length; dtaPts++) {
	// 		const each = element[dtaPts];
	// 		if(dateWiseData[each[0]]){
	// 			dateWiseData[each[0]].push(each[1])
	// 		}else{
	// 			dateWiseData[each[0]]=[]
	// 			dateWiseData[each[0]].push(each[1])
	// 		}
	// 	}
	// }
	
	console.log(dateWiseData);
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
	const lengthFactor = 1;
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
					this.dateCounter?this.dateCounterLabel = this.dateCounter.toFixed(2):0
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
					$('.legend1>span').eq(1).addClass('active')
					break;
				case 3:
					$('.legend1>span').eq(1).removeClass('active')
					$('.legend1>span').eq(2).addClass('active')
					break;
				case 4:
					$('.legend1>span').eq(2).removeClass('active')
					$('.legend1>span').eq(3).addClass('active')
					break;
				case 5:
					$('.legend1>span').eq(3).removeClass('active')
					$('.legend1>span').eq(4).addClass('active')
					break;
				case 6:
					$('.legend1>span').eq(5).removeClass('active')
					$('.legend1>span').eq(6).addClass('active')
					break;
				case 7:
					$('.legend1>span').eq(6).removeClass('active')
					$('.legend1>span').eq(7).addClass('active')
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
						300,
						count,
						element[0] ,
						element,
						color ,
						count,
						stateLabel[country],
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