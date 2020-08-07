$(document).ready(function(){
			const canvas = document.getElementById("canvas");
			const canHgt = 750;
			const canWid = 930;
			canvas.style.height = canHgt+'px';
			canvas.style.width = canWid+'px';
			canvas.height = canHgt*2;
			canvas.width = canWid*2;
			const ctx = canvas.getContext("2d");
			ctx.scale(2,2);
			ctx.lineWidth = 2;
			ctx.strokeColor = '#000'
		   
			const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#FF9933','#92C24C','#4cc292','#99FF33','#9933FF'];
			let slideIndex;
			let counter = 0;
			let circleArray = [];
			const infoArr = ["1st cluster (approx 45 cases)",'1 Lakh','10 Lakh','15 Lakh']
			const alertIndex = [0,66,93,99]
			const areaMap = {"Angola":5,"Benin":5,"Botswana":5,"Burkina Faso":5,"Burundi":5,"Cameroon":5,"Cabo Verde":5,"Central African Republic":5,"Chad":5,"Congo (Brazzaville)":5,"Cote d'Ivoire":5,"Congo (Kinshasa)":5,"Equatorial Guinea":5,"Eritrea":5,"Eswatini":5,"Ethiopia":5,"Gabon":5,"Gambia":5,"Ghana":5,"Guinea":5,"Guinea-Bissau":5,"Kenya":5,"Lesotho":5,"Liberia":5,"Madagascar":5,"Malawi":5,"Mali":5,"Mauritius":5,"Mozambique":5,"Namibia":5,"Niger":5,"Nigeria":5,"Rwanda":5,"Sao Tome and Principe":5,"Senegal":5,"Seychelles":5,"Sierra Leone":5,"South Africa":5,"South Sudan":5,"Tanzania":5,"Togo":5,"Uganda":5,"Zambia":5,"Zimbabwe":5,"Antigua and Barbuda":2,"Argentina":2,"Bahamas":2,"Barbados":2,"Belize":2,"Bolivia":2,"Brazil":2,"Canada":2,"Chile":2,"Colombia":2,"Costa Rica":2,"Cuba":2,"Dominica":2,"Dominican Republic":2,"Ecuador":2,"El Salvador":2,"Grenada":2,"Guatemala":2,"Guyana":2,"Haiti":2,"Honduras":2,"Jamaica":2,"Mexico":2,"Nicaragua":2,"Panama":2,"Paraguay":2,"Peru":2,"Saint Kitts and Nevis":2,"Saint Lucia":2,"Saint Vincent and the Grenadines":2,"Suriname":2,"Trinidad and Tobago":2,"USA":2,"Uruguay":2,"Venezuela":2,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"UAE":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":7,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4
			};
			var json = JSON.parse($.ajax({'url': "/data/global_confirmed.json", 'async': false}).responseText);
    		let dailyCumulative = json;
			const dailyData = json;
			const dateLabels = [['Day',0],['Day',1],['Day',2],['Day',3],['Day',4],['Day',5],['Day',6],['Day',7],['Day',8],['Day',9],['Day',10],['Day',11],['Day',12],['Day',13],['Day',14],['Day',15],['Day',16],['Day',17],['Day',18],['Day',19],['Day',20],['Day',21],['Day',22],['Day',23],['Day',24],['Day',25],['Day',26],['Day',27],['Day',28],['Day',29],['Day',30],['Day',31],['Day',32],['Day',33],['Day',34],['Day',35],['Day',36],['Day',37],['Day',38],['Day',39],
			['Day',40],['Day',41],['Day',42],['Day',43],['Day',44],['Day',45],['Day',46],['Day',47],['Day',48],['Day',49],
			['Day',50],['Day',51],['Day',52],['Day',53],['Day',54],['Day',55],['Day',56],['Day',57],['Day',58],['Day',59],
			['Day',60],['Day',61],['Day',62],['Day',63],['Day',64],['Day',65],['Day',66],['Day',67],['Day',68],['Day',69],
			['Day',70],['Day',71],['Day',72],['Day',73],['Day',74],['Day',75],['Day',76],['Day',77],['Day',78],['Day',79],
			['Day',80],['Day',81],['Day',82],['Day',83],['Day',84],['Day',85],['Day',86],['Day',87],['Day',88],['Day',89],
			['Day',90],['Day',91],['Day',92],['Day',93],['Day',94],['Day',95],['Day',96],['Day',97],['Day',98],['Day',99]
		];
			let lineArray = [];
			// const widthStep = canWid/dateLabels.length;
			const widthStep = canWid/100;
			const heightFactor = 5000;
			const activeFactor = 40000;
			const countriesFactor = 300;
			const heightStep = canHgt/heightFactor;
			let counterPrev  = 1;
			let secs = 100;
			function CountryLine(x, y, length, dl, color, index, label, lineWidth){
				this.posX = x;
				this.dl = dl;
				this.lineWidth = lineWidth;
				this.length = 20;
				this.color = color;
				this.index = index;
				this.label = label;
				// if(this.label == 'India'){
				// 	this.color ='#FF9933';
				// }
				this.dateCounter = this.dl[0];
				this.shouldUpdate =true;
				this.dateCounterLabel;
				this.counter;
				this.update = function(dateCounter){
					this.counter = dateCounter;
					ctx.lineWidth = this.lineWidth;
					this.draw();
				}
				this.draw = function(){
					if(this.shouldUpdate){
						if(this.dl[this.counter]<3000){
							if(this.counter>0){
								ctx.beginPath();
								ctx.strokeStyle = this.color+'77';
								ctx.moveTo((widthStep*(this.counter-1))+7,(canHgt*(1-(this.dl[this.counter-1]/heightFactor))));
								ctx.lineTo((widthStep*this.counter)+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))))
								ctx.stroke();
								ctx.closePath();

								// ctx.beginPath();
								// ctx.fillStyle = this.color;
								// ctx.arc((widthStep*this.counter)+7,(canHgt*(1-((this.dl[this.counter]-this.dl[this.counter-1])/activeFactor))), 2, 0, 2*Math.PI);
								// ctx.fill();
								// ctx.closePath();
							}
							ctx.beginPath();
							ctx.fillStyle = this.color;
							ctx.arc((widthStep*this.counter)+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))), 2, 0, 2*Math.PI)
							ctx.fill();
							ctx.closePath();
						}else{
							ctx.beginPath();
							ctx.strokeStyle = this.color+'77';
							ctx.moveTo((widthStep*(this.counter-1))+7,(canHgt*(1-(this.dl[this.counter-1]/heightFactor))));
							ctx.lineTo((widthStep*this.counter)+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))))
							ctx.stroke();
							ctx.closePath();

							ctx.beginPath();
							ctx.fillStyle = this.color+'FF';
							ctx.arc((widthStep*this.counter)+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))), 5, 0, 2*Math.PI)
							ctx.fill();
							ctx.closePath();

							
							// console.log($('.'+this.label))
							// $('.'+this.label).attr('count-data', this.counter).addClass('active');
							this.shouldUpdate =false;	
						}	
					}else{
						
					}
					
				}
			}
			function makeGraph(counter){
				if(counter<68){
					$('.legendContainer').addClass('active')
					if(dateLabels[counter][1]>9){
						$('.date').text(dateLabels[counter][1])
					}else{
						$('.date').text('0'+dateLabels[counter][1])
					}
					$('.month').text('Day')
					// if(dateLabels[counter][0] == 2){
					// 	$('.month').text('Feb')
					// }else if(dateLabels[counter][0] == 3){
					// 	$('.month').text('Mar')
					// }else if(dateLabels[counter][0] == 4){
					// 	$('.month').text('Apr')
					// }
					$('.stateName').addClass('active')
					
					if(counter%5 == 0){
						let dispDate;
						let dispMnth = 'Day';
						dispDate = dateLabels[counter][1];
						// dispMnth = dateLabels[counter][0];
						//dispMnth<10?dispMnth='0'+dispMnth:dispMnth;
						dispDate<10?dispDate='0'+dispDate:dispDate;
						// if(){

						// }
						$('.bottomDates').append("<span class='active counter"+(counter)+"' style='left:"+widthStep*counter+"px;'>"+dispDate+"</span>")
					}
					
					for (var i = 0; i < lineArray.length; i++) {
						lineArray[i].update(counter);
					}
					setTimeout(()=>{
						makeGraph(counter+1)
					},secs)
					
				}
			}
			setTimeout(function () {
				// const arr = [0, 100000, 200000, 300000, 400000, 500000 ,600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000]
				for (let i = 0; i < 10; i++) {
					ctx.beginPath();
					ctx.setLineDash([2,5])
					ctx.lineWidth =0.3;
					let color = '#555';
					let arrNum = '#555';
					// arr[i] === 500000?color="#D55":color;
					// arr[i] === 100000?color="#D55":color;
					// arr[i] === 1500000?color="#D55":color;
					i==3||i==6?color="#D55":color
					ctx.strokeStyle = color;
					ctx.fillStyle = color;
					ctx.font = '300 24px monty';
					
					ctx.moveTo(0,(canHgt*(1-(i*1000/heightFactor))));
					ctx.lineTo(canWid,(canHgt*(1-(i*1000/heightFactor))));
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.fillStyle = color+'9';
					ctx.textAlign = 'right';
					ctx.fillText((i*1000), canWid - 10, (canHgt*(1-(i*1000/heightFactor))));
					ctx.fill();
					ctx.closePath();
					ctx.setLineDash([])
					ctx.lineWidth =3;
				}
				let count = 0;
				for (const country in dailyData) {
					if (dailyData.hasOwnProperty(country)) {
						const element = dailyData[country][1];

						lineArray.push(new CountryLine(0, count, element[0] , element, '#000' , count, country, dailyData[country][0]));
						console.log(country,colorArray[count])
					}
					count++;
				}
				makeGraph(0);
			}, 2000)
			
		})