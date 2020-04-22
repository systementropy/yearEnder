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
			const dailyData = {
				"USA":[3,[1,1,6,7,11,12,14,17,21,22,28,36,40,47,54,63,85,108,118,200,244,307,417,557,706,942,1209,1581,2026,2467,2978,3873,4757,5926,7087,8407,9619,10783,12794,14695,16544,18586,20462,22019,23528,25831,28325,32916,36773,38664,40661,42094,44845]],
				"Spain":[3,[1,2,3,5,10,17,28,35,54,55,133,195,289,342,533,623,830,1043,1375,1772,2311,2808,3647,4365,5138,5982,6803,7716,8464,9387,10348,11198,11947,12641,13341,14045,14792,15447,16081,16606,17209,17756,18056,18708,19315,20002,20043,20453,20852,21282]],
				"Italy":[3,[1,2,3,7,10,12,17,21,29,34,52,79,107,148,197,233,366,463,631,827,827,1266,1441,1809,2158,2503,2978,3405,4032,4825,5476,6077,6820,7503,8215,9134,10023,10779,11591,12428,13155,13915,14681,15362,15887,16523,17127,17669,18279,18849,19468,19899,20465,21067,21645,22170,22745,23227,23660,24114,24648]],
				"France":[3,[1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,4,4,6,9,11,19,19,33,48,48,79,91,91,149,149,149,244,451,563,676,862,1102,1333,1698,1997,2317,2611,3030,3532,4414,5398,6520,7574,8093,8926,10343,10887,12228,13215,13851,14412,14986,15748,17188,17941,18703,19345,19744,20292,20829]],
				"Germany":[3,[2,2,3,3,7,9,11,17,24,28,44,67,84,94,123,157,206,267,342,433,533,645,775,920,1107,1275,1444,1584,1810,2016,2349,2607,2767,2736,3022,3194,3294,3804,4052,4352,4459,4586,4862,5033]],
				"UK":[3,[1,2,2,3,4,6,8,8,8,21,21,56,56,72,138,178,234,282,336,423,466,580,761,1021,1231,1411,1793,2357,2926,3611,4320,4943,5385,6171,7111,7993,8974,9892,10629,11347,12129,12894,13759,14607,15498,16095,16550,17378]],
				//"China":[3,[17,18,26,42,56,82,131,133,171,213,259,361,425,491,563,633,718,805,905,1012,1112,1117,1369,1521,1663,1766,1864,2003,2116,2238,2238,2443,2445,2595,2665,2717,2746,2790,2837,2872,2914,2947,2983,3015,3044,3072,3100,3123,3139,3161,3172,3180,3193,3203,3217,3230,3241,3249,3253,3259,3274,3274,3281,3285,3291,3296,3299,3304,3308,3309,3316,3322,3326,3330,3333,3335,3335,3337,3339,3340,3343,3343,3345,3345,3346,3346,4636,4636,4636,4636,4636]],
				"India":[8,[1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,178,226,246,288,331,358,393,405,448,486,521,559,592,645]],
				"Iran":[3,[2,2,4,5,8,12,16,19,26,34,43,54,66,77,92,107,124,145,194,237,291,354,429,514,611,724,853,988,1135,1284,1433,1556,1685,1812,1934,2077,2234,2378,2517,2640,2757,2898,3036,3160,3294,3452,3603,3739,3872,3993,4110,4232,4357,4474,4585,4683,4777,4869,4958,5031,5118,5209,5297]],
				"Turkey":[3,[1,1,3,4,9,30,37,44,59,75,92,108,131,168,214,277,356,425,501,574,649,725,812,908,1006,1101,1198,1296,1403,1518,1643,1769,1890,2017,2140,2259]],
			};
			const dateLabels = [['Day',0],['Day',1],['Day',2],['Day',3],['Day',4],['Day',5],['Day',6],['Day',7],['Day',8],['Day',9],['Day',10],['Day',11],['Day',12],['Day',13],['Day',14],['Day',15],['Day',16],['Day',17],['Day',18],['Day',19],['Day',20],['Day',21],['Day',22],['Day',23],['Day',24],['Day',25],['Day',26],['Day',27],['Day',28],['Day',29],['Day',30],['Day',31],['Day',32],['Day',33],['Day',34],['Day',35],['Day',36],['Day',37],['Day',38],['Day',39],['Day',40],['Day',41]];
			let lineArray = [];
			// const widthStep = canWid/dateLabels.length;
			const widthStep = canWid/42;
			const heightFactor = 1000;
			const activeFactor = 40000;
			const countriesFactor = 300;
			const heightStep = canHgt/heightFactor;
			let counterPrev  = 1;
			let secs = 200;
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
						if(this.dl[this.counter]<600){
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

							// ctx.save();
							// if(this.label =='India'){
							// 	ctx.translate((widthStep*(this.counter))-100,70+(canHgt*(1-(this.dl[this.counter]/heightFactor))));
							// }else{
							// 	ctx.translate((widthStep*(this.counter))+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))));
							// }
							
							// if(this.label == 'Spain' || this.label == 'Italy' || this.label == 'Germany'){
							// 	ctx.rotate(Math.PI/4);
							// }else{
							// 	ctx.rotate(-Math.PI/5);
							// }
							
							
							// ctx.beginPath();
							// ctx.fillStyle = '#333';
							// ctx.font = '400 24px monty';
							// ctx.fillText(this.label,20,10);
							// this.textLabelWidth = ctx.measureText(this.label).width;
							// ctx.fill();
							// ctx.closePath();

							// ctx.beginPath();
							// ctx.fillStyle = '#333';
							// ctx.font = '300 24px monty';
							// ctx.fillText('('+this.counter+')',(widthStep*this.counter)+7,(canHgt*(1-(this.dl[this.counter]/heightFactor))))
							// ctx.fill();
							// ctx.closePath();
							// ctx.restore();
							console.log($('.'+this.label))
							$('.'+this.label).attr('count-data', this.counter).addClass('active');
							this.shouldUpdate =false;	
						}	
					}else{
						
					}
					
				}
			}
			function makeGraph(counter){
				if(counter<42){
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
				for (let i = 0; i < 7; i++) {
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
					
					ctx.moveTo(0,(canHgt*(1-(i*100/heightFactor))));
					ctx.lineTo(canWid,(canHgt*(1-(i*100/heightFactor))));
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.fillStyle = color+'9';
					ctx.textAlign = 'right';
					ctx.fillText((i*100), canWid - 10, (canHgt*(1-(i*100/heightFactor))));
					ctx.fill();
					ctx.closePath();
					ctx.setLineDash([])
					ctx.lineWidth =3;
				}
				let count = 0;
				for (const country in dailyData) {
					if (dailyData.hasOwnProperty(country)) {
						const element = dailyData[country][1];
						lineArray.push(new CountryLine(0, count, element[0] , element, colorArray[count] , count, country, dailyData[country][0]));
					}
					count++;
				}
				makeGraph(0);
			}, 2000)
			
		})