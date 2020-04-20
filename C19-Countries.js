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
		   
			const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#92C24C','#FF9933'];
			let slideIndex;
			let counter = 0;
			let circleArray = [];
			const infoArr = ["1st cluster (approx 45 cases)",'1 Lakh','10 Lakh','15 Lakh']
			const alertIndex = [0,66,93,99]
			const areaMap = {"Angola":5,"Benin":5,"Botswana":5,"Burkina Faso":5,"Burundi":5,"Cameroon":5,"Cabo Verde":5,"Central African Republic":5,"Chad":5,"Congo (Brazzaville)":5,"Cote d'Ivoire":5,"Congo (Kinshasa)":5,"Equatorial Guinea":5,"Eritrea":5,"Eswatini":5,"Ethiopia":5,"Gabon":5,"Gambia":5,"Ghana":5,"Guinea":5,"Guinea-Bissau":5,"Kenya":5,"Lesotho":5,"Liberia":5,"Madagascar":5,"Malawi":5,"Mali":5,"Mauritius":5,"Mozambique":5,"Namibia":5,"Niger":5,"Nigeria":5,"Rwanda":5,"Sao Tome and Principe":5,"Senegal":5,"Seychelles":5,"Sierra Leone":5,"South Africa":5,"South Sudan":5,"Tanzania":5,"Togo":5,"Uganda":5,"Zambia":5,"Zimbabwe":5,"Antigua and Barbuda":2,"Argentina":2,"Bahamas":2,"Barbados":2,"Belize":2,"Bolivia":2,"Brazil":2,"Canada":2,"Chile":2,"Colombia":2,"Costa Rica":2,"Cuba":2,"Dominica":2,"Dominican Republic":2,"Ecuador":2,"El Salvador":2,"Grenada":2,"Guatemala":2,"Guyana":2,"Haiti":2,"Honduras":2,"Jamaica":2,"Mexico":2,"Nicaragua":2,"Panama":2,"Paraguay":2,"Peru":2,"Saint Kitts and Nevis":2,"Saint Lucia":2,"Saint Vincent and the Grenadines":2,"Suriname":2,"Trinidad and Tobago":2,"USA":2,"Uruguay":2,"Venezuela":2,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"UAE":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":7,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4
			};
			const dailyData = {
				"USA":[3,[1,1,2,2,5,5,5,5,5,7,8,8,11,11,11,11,11,11,11,11,12,12,13,13,13,13,13,13,13,13,15,15,15,51,51,57,58,60,68,74,98,118,149,217,262,402,518,583,959,1281,1663,2179,2727,3499,4632,6421,7783,13747,19273,25600,33276,43847,53740,65778,83836,101657,121465,140909,161831,188172,213372,243762,275586,308853,337072,366667,396223,429052,461437,496535,526396,555313,580619]],
				"Spain":[2,[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,13,15,32,45,84,120,165,222,259,400,500,673,1073,1695,2277,2277,5232,6391,7798,9942,11748,13910,17963,20410,25374,28768,35136,39885,49515,57786,65719,73235,80110,87956,95923,104118,112065,119199,126168,131646,136675,141942,148220,153222,158273,163027,166831,170099]],
				"Italy":[2,[0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,20,62,155,229,322,453,655,888,1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589,86498,92472,97689,101739,105792,110574,115242,119827,124632,128948,132547,135586,139422,143626,147577,152271,156363,159516]],
				"France":[2,[0,0,2,3,3,3,4,5,5,5,6,6,6,6,6,6,6,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,14,18,38,57,100,130,191,204,288,380,656,959,1136,1219,1794,2293,2293,3681,4496,4532,6683,7715,9124,10970,12758,14463,16243,20123,22622,25600,29551,33402,38105,40708,45170,52827,57749,59929,65202,90848,93773,98963,110065,113959,118781,125931,130727,133670,137875]],
				"Germany":[2,[0,0,0,0,0,1,4,4,4,5,8,10,12,12,12,12,13,13,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,27,46,48,79,130,159,196,262,482,670,799,1040,1176,1457,1908,2078,3675,4585,5795,7272,9257,12327,15320,19848,22213,24873,29056,32986,37323,43938,50871,57695,62095,66885,71808,77872,84794,91159,96092,100123,103374,107663,113296,118181,122171,124908,127854,130072]],
				"UK":[2,[0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,3,3,3,8,8,9,9,9,9,9,9,9,9,9,9,9,9,13,13,13,15,20,23,36,40,51,86,116,164,207,274,322,384,459,459,802,1144,1145,1551,1960,2642,2716,4014,5067,5745,6726,8164,9640,11812,14745,17312,19780,22453,25481,29865,34173,38689,42477,48436,52279,55949,61474,65872,74605,79874,85206,89570]],
				"China":[5,[548,643,920,1406,2075,2877,5509,6087,8141,9802,11891,16630,19716,23707,27440,30587,34110,36814,39829,42354,44386,44759,59895,66358,68413,70513,72434,74211,74619,75077,75550,77001,77022,77241,77754,78166,78600,78928,79356,79932,80136,80261,80386,80537,80690,80770,80823,80860,80887,80921,80932,80945,80977,81003,81033,81058,81102,81156,81250,81305,81435,81498,81591,81661,81782,81897,81999,82122,82198,82279,82361,82432,82511,82543,82602,82665,82718,82809,82883,82941,83014,83134,83213]],
				"India":[3,[0,0,0,0,0,0,0,0,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,28,30,31,34,39,43,56,62,73,82,102,113,119,142,156,194,244,330,396,499,536,657,727,887,987,1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453]],
			};
			const dateLabels = [[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13]];
			let lineArray = [];
			const widthStep = canWid/dateLabels.length;
			const heightFactor = 650000;
			const activeFactor = 40000;
			const countriesFactor = 300;
			const heightStep = canHgt/heightFactor;
			let counterPrev  = 1;
			let secs = 50;
			function CountryLine(x, y, length, dl, color, index, label, lineWidth){
				this.posX = x;
				this.dl = dl;
				this.lineWidth = lineWidth;
				this.length = 20;
				this.color = color;
				this.index = index;
				this.label = label;
				this.dateCounter = this.dl[0];

				this.dateCounterLabel;
				this.counter;
				this.update = function(dateCounter){
					this.counter = dateCounter;
					ctx.lineWidth = this.lineWidth;
					this.draw();
				}
				this.draw = function(){
					if(this.counter>0){
						// ctx.beginPath();
						// ctx.strokeStyle = this.color+'BC';
						// ctx.moveTo((widthStep*(this.counter-1))+7,(canHgt*(1-(dl[this.counter-1]/heightFactor))));
						// ctx.lineTo((widthStep*this.counter)+7,(canHgt*(1-(dl[this.counter]/heightFactor))))
						// ctx.stroke();
						// ctx.closePath();

						ctx.beginPath();
						ctx.fillStyle = this.color;
						ctx.arc((widthStep*this.counter)+7,(canHgt*(1-((dl[this.counter]-dl[this.counter-1])/activeFactor))), 2, 0, 2*Math.PI);
						ctx.fill();
						ctx.closePath();
					}
					if(this.counter>1){
						ctx.beginPath();
						ctx.strokeStyle = this.color+'BC';
						ctx.moveTo((widthStep*(this.counter-1))+7,(canHgt*(1-((dl[this.counter-1]-dl[this.counter-2])/activeFactor))));
						ctx.lineTo((widthStep*this.counter)+7,(canHgt*(1-((dl[this.counter]-dl[this.counter-1])/activeFactor))))
						ctx.stroke();
						ctx.closePath();	
					}
					// ctx.beginPath();
					// ctx.fillStyle = this.color;
					// ctx.arc((widthStep*this.counter)+7,(canHgt*(1-(dl[this.counter]/heightFactor))), 2, 0, 2*Math.PI)
					// ctx.fill();
					// ctx.closePath();
				}
			}
			function makeGraph(counter){
				if(counter<dateLabels.length){
					$('.legendContainer').addClass('active')
					if(dateLabels[counter][1]>9){
						$('.date').text(dateLabels[counter][1])
					}else{
						$('.date').text('0'+dateLabels[counter][1])
					}
					if(dateLabels[counter][0] == 2){
						$('.month').text('Feb')
					}else if(dateLabels[counter][0] == 3){
						$('.month').text('Mar')
					}else if(dateLabels[counter][0] == 4){
						$('.month').text('Apr')
					}
					$('.stateName').addClass('active')
					
					if(counter%15 == 0){
						let dispDate;
						let dispMnth;
						dispDate = dateLabels[counter][1];
						dispMnth = dateLabels[counter][0];
						dispMnth<10?dispMnth='0'+dispMnth:dispMnth;
						dispDate<10?dispDate='0'+dispDate:dispDate;
						// if(){

						// }
						$('.bottomDates').append("<span class='active counter"+(counter)+"' style='left:"+widthStep*counter+"px;'>"+dispDate+"/"+dispMnth+"</span>")
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
				const arr = [0, 100000, 200000, 300000, 400000, 500000 ,600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000]
				for (let i = 0; i < arr.length; i++) {
					ctx.beginPath();
					ctx.setLineDash([2,5])
					ctx.lineWidth =0.3;
					let color = '#555';
					let arrNum = '#555';
					arr[i] === 500000?color="#D55":color;
					arr[i] === 100000?color="#D55":color;
					arr[i] === 1500000?color="#D55":color;
					ctx.strokeStyle = color;
					ctx.fillStyle = color;
					ctx.font = '500 24px monty';
					
					ctx.moveTo(0,(canHgt*(1-(arr[i]/heightFactor))));
					ctx.lineTo(canWid,(canHgt*(1-(arr[i]/heightFactor))));
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.fillStyle = color+'7';
					ctx.fillText((arr[i]/100000)+'L', 40, (canHgt*(1-(arr[i]/heightFactor))));
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