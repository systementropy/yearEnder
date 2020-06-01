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
		   
			const colorArray = ['#FF0000','#FF9933','#7c4cc2','#4cc292','#4c92c2','#464646','#C9224C','#92C24C','#C24C92','#99FF33','#9933FF'];
			let slideIndex;
			let counter = 0;
			let circleArray = [];
			const infoArr = ["1st cluster (approx 45 cases)",'1 Lakh','10 Lakh','15 Lakh']
			const alertIndex = [0,66,93,99]
			const areaMap = {"Angola":5,"Benin":5,"Botswana":5,"Burkina Faso":5,"Burundi":5,"Cameroon":5,"Cabo Verde":5,"Central African Republic":5,"Chad":5,"Congo (Brazzaville)":5,"Cote d'Ivoire":5,"Congo (Kinshasa)":5,"Equatorial Guinea":5,"Eritrea":5,"Eswatini":5,"Ethiopia":5,"Gabon":5,"Gambia":5,"Ghana":5,"Guinea":5,"Guinea-Bissau":5,"Kenya":5,"Lesotho":5,"Liberia":5,"Madagascar":5,"Malawi":5,"Mali":5,"Mauritius":5,"Mozambique":5,"Namibia":5,"Niger":5,"Nigeria":5,"Rwanda":5,"Sao Tome and Principe":5,"Senegal":5,"Seychelles":5,"Sierra Leone":5,"South Africa":5,"South Sudan":5,"Tanzania":5,"Togo":5,"Uganda":5,"Zambia":5,"Zimbabwe":5,"Antigua and Barbuda":2,"Argentina":2,"Bahamas":2,"Barbados":2,"Belize":2,"Bolivia":2,"Brazil":2,"Canada":2,"Chile":2,"Colombia":2,"Costa Rica":2,"Cuba":2,"Dominica":2,"Dominican Republic":2,"Ecuador":2,"El Salvador":2,"Grenada":2,"Guatemala":2,"Guyana":2,"Haiti":2,"Honduras":2,"Jamaica":2,"Mexico":2,"Nicaragua":2,"Panama":2,"Paraguay":2,"Peru":2,"Saint Kitts and Nevis":2,"Saint Lucia":2,"Saint Vincent and the Grenadines":2,"Suriname":2,"Trinidad and Tobago":2,"USA":2,"Uruguay":2,"Venezuela":2,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"UAE":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":7,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4
			};
			
			const dateLabels = [
			['Dec',31],['Jan',1],['Jan',2],['Jan',3],['Jan',4],['Jan',5],['Jan',6],['Jan',7],['Jan',8],['Jan',9],['Jan',10],['Jan',11],['Jan',12],['Jan',13],['Jan',14],['Jan',15],['Jan',16],['Jan',17],['Jan',18],['Jan',19],['Jan',20],['Jan',21],['Jan',22],['Jan',23],['Jan',24],['Jan',25],['Jan',26],['Jan',27],['Jan',28],['Jan',29],['Jan',30],['Jan',31],['Feb',1],['Feb',2],['Feb',3],['Feb',4],['Feb',5],['Feb',6],['Feb',7],['Feb',8],['Feb',9],['Feb',10],['Feb',11],['Feb',12],['Feb',13],['Feb',14],['Feb',15],['Feb',16],['Feb',17],['Feb',18],['Feb',19],['Feb',20],['Feb',21],['Feb',22],['Feb',23],['Feb',24],['Feb',25],['Feb',26],['Feb',27],['Feb',28],['Feb',29],['Mar',1],['Mar',2],['Mar',3],['Mar',4],['Mar',5],['Mar',6],['Mar',7],['Mar',8],['Mar',9],['Mar',10],['Mar',11],['Mar',12],['Mar',13],['Mar',14],['Mar',15],['Mar',16],['Mar',17],['Mar',18],['Mar',19],['Mar',20],['Mar',21],['Mar',22],['Mar',23],['Mar',24],['Mar',25],['Mar',26],['Mar',27],['Mar',28],['Mar',29],['Mar',30],['Mar',31],['Apr',1],['Apr',2],['Apr',3],['Apr',4],['Apr',5],['Apr',6],['Apr',7],['Apr',8],['Apr',9],['Apr',10],['Apr',11],['Apr',12],['Apr',13],['Apr',14],['Apr',15],['Apr',16],['Apr',17],['Apr',18],['Apr',19],['Apr',20],['Apr',21],['Apr',22],['Apr',23],['Apr',24],['Apr',25],['Apr',26],['Apr',27],['Apr',28]
			];
			let lineArray = [];
			const doubleData = {
				'India':[5,4,3,6,8,10],
				'US':[3,2,3,2,2,2],
				'Italy':[2,2,4,3,4,5],
				'Spain':[2,2,2,3,3,4],
				'France':[2,3,3,4,4,5],
				'Germany':[3,4,2,3,3,4],
				'Canada':[3,3,3,5,6,12],
				'UK':[2,4,3,3,4,5]
			}

			let secs = 1000;
			let offsetCounter = {
				'India':0,
				'US':0,
				'Italy':0,
				'Spain':0,
				'France':0,
				'Germany':0,
				'Canada':0,
				'UK':0,
			};
			function plotData(row,index,color){
				setTimeout(()=>{
					// console.log(index,100+(index*10));
					ctx.beginPath();
					ctx.fillStyle =color;
					ctx.rect(
						100+(index*20),
						(row*95)+10,
						19,
						40
					);
					ctx.fill();
					ctx.closePath();
				},index*40)
			}

			function plotDaysText(row,index,color,label){
				if(label){
					setTimeout(()=>{
						ctx.beginPath();
						ctx.fillStyle =color;
						ctx.fillText(label,100+(index*20)-10,(row*95)+70)
						ctx.fill();
						ctx.closePath();
					},index*50)
				}
			}


			function makeGraph(counter){
				if(counter<7){
					$('.legendContainer').addClass('active')
					if(dateLabels[counter][1]>9){
						$('.date').text(dateLabels[counter][1])
					}else{
						$('.date').text('0'+dateLabels[counter][1])
					}
					$('.month').text(dateLabels[counter][0])
					// $('.stateName').addClass('active');
					let countryCount = 0;
					for (country in doubleData) {
						if (doubleData.hasOwnProperty(country)) {
							if(counter == 0){
								ctx.beginPath();
								ctx.fillStyle ='#333';
								if (country == 'India') {
									ctx.fillStyle ='#9933FF';
								}
								ctx.font = '600 20px monty';
								ctx.textAlign = 'right';
								ctx.fillText(country, 95, (countryCount*95)+40)
								ctx.fill();
								ctx.closePath();	
							}
							for (var i = 0; i < doubleData[country][counter]; i++) {
								plotData(countryCount,offsetCounter[country],colorArray[counter])
								offsetCounter[country] += 1;
							}
							plotDaysText(countryCount,offsetCounter[country],colorArray[counter],doubleData[country][counter])
						}
						countryCount += 1;
					}
					
					setTimeout(()=>{
						makeGraph(counter+1)
					},secs)
					
				}
			}
			setTimeout(function () {
				makeGraph(0);
			}, 2000)
			
		})