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
				"USA":[3,[1,1,6,7,11,12,14,17,21,22,28,36,41,49,58,73,99,133,164,258,349,442,586,786,1008,1316,1726,2265,2731,3420,4192,5367,6501,7921,9246,10855,12375,13894,16191,18270,20255,22333,24342,26086,27870,30262,32734,34827,37411,39753,40945,42659,45086,47412,49724,51493,53755,54881,56219,58355,60967,62996,64943,66369,67682,68922,71064,73455,75662,77180,78795,79526,80682,82356,84119,85898,87530,88754,89562]],
				"Spain":[3,[1,2,3,5,10,17,28,35,54,55,133,195,289,342,533,623,830,1043,1375,1772,2311,2808,3647,4365,5138,5982,6803,7716,8464,9387,10348,11198,11947,12641,13341,14045,14792,15447,16081,16606,17209,17756,18056,18708,19315,20002,20043,20453,20852,21282,21717,22157,22524,22902,23190,23521,23822,24275,24543,24543,25100,25264,25428,25613,25857,26070,26299,26478,26621,26744,26920,27104,27321,27459,27563,27563]],
				"Italy":[3,[1,2,3,7,10,12,17,21,29,34,52,79,107,148,197,233,366,463,631,827,827,1266,1441,1809,2158,2503,2978,3405,4032,4825,5476,6077,6820,7503,8215,9134,10023,10779,11591,12428,13155,13915,14681,15362,15887,16523,17127,17669,18279,18849,19468,19899,20465,21067,21645,22170,22745,23227,23660,24114,24648,25085,25549,25969,26384,26644,26977,27359,27682,27967,28236,28710,28884,29079,29315,29684,29958,30201,30395,30560,30739,30911,31106,31368,31610,31763,31908]],
				"France":[3,[1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,4,4,6,9,11,19,19,33,48,48,79,91,91,149,149,149,244,451,563,676,862,1102,1333,1698,1997,2317,2611,3030,3532,4414,5398,6520,7574,8093,8926,10343,10887,12228,13215,13851,14412,14986,15731,17169,17922,18683,19325,19720,20267,20798,21342,21858,22248,22617,22859,23296,23663,24090,24379,24597,24763,24900,25204,25537,25812,25990,26233,26313,26383,26646,26994,27077,27428,27532,27532,28111]],
				"Germany":[3,[2,2,3,3,7,9,11,17,24,28,44,67,84,94,123,157,206,267,342,433,533,645,775,920,1107,1275,1444,1584,1810,2016,2349,2607,2767,2736,3022,3194,3294,3804,4052,4352,4459,4586,4862,5033,5279,5575,5760,5877,5976,6126,6314,6467,6623,6736,6812,6866,6993,6993,7275,7392,7510,7549,7569,7661,7738,7861,7884,7897,7938,7962]],
				"UK":[3,[1,2,2,3,7,7,9,10,28,43,66,82,116,159,195,251,286,360,509,695,879,1163,1457,1672,2046,2429,3100,3752,4467,5228,5874,6445,7483,8519,9623,10776,11616,12302,13047,14095,14941,15974,16910,18028,18527,19092,20264,21111,21840,22853,23697,24117,24458,25369,26166,26842,27583,28205,28520,28809,29501,30150,30689,31316,31662,31930,32141,32769,33264,33693,34078,34546,34716]],
				"India":[8,[1,1,2,2,2,2,3,3,4,5,4,7,10,10,12,20,20,24,27,32,35,58,72,72,86,99,136,150,178,226,246,288,331,358,393,405,448,486,521,559,592,645,681,721,780,825,881,939,1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294,2415,2551,2649,2753,2871,3025]],
				"Iran":[3,[2,2,4,5,8,12,16,19,26,34,43,54,66,77,92,107,124,145,194,237,291,354,429,514,611,724,853,988,1135,1284,1433,1556,1685,1812,1934,2077,2234,2378,2517,2640,2757,2898,3036,3160,3294,3452,3603,3739,3872,3993,4110,4232,4357,4474,4585,4683,4777,4869,4958,5031,5118,5209,5297,5391,5481,5574,5650,5710,5806,5877,5957,6028,6091,6156,6203,6277,6340,6418,6486,6541,6589,6640,6685,6733,6783,6854,6902,6937,6988]],
				"Turkey":[3,[1,1,3,4,9,30,37,44,59,75,92,108,131,168,214,277,356,425,501,574,649,725,812,908,1006,1101,1198,1296,1403,1518,1643,1769,1890,2017,2140,2259,2376,2491,2600,2706,2805,2900,2992,3081,3174,3258,3336,3397,3461,3520,3584,3641,3689,3739,3786,3841,3894,3952,4007,4055,4096,4140]],
			};
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
			const widthStep = canWid/68;
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

							
							console.log($('.'+this.label))
							$('.'+this.label).attr('count-data', this.counter).addClass('active');
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
						lineArray.push(new CountryLine(0, count, element[0] , element, colorArray[count] , count, country, dailyData[country][0]));
						console.log(country,colorArray[count])
					}
					count++;
				}
				makeGraph(0);
			}, 2000)
			
		})