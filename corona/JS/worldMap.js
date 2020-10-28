$(document).ready(function(){

	google.charts.load('current', {
		'packages':['geochart'],
		'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
	});
	google.charts.setOnLoadCallback(init);
	const countryMap = {"Afghanistan":"AF","Åland Islands":"AX","Albania":"AL","Algeria":"DZ","American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ","Antigua and Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahrain":"BH","Bangladesh":"BD","Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ","Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bonaire, Sint Eustatius and Saba":"BQ","Bosnia and Herzegovina":"BA","Botswana":"BW","Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO","Brunei":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burundi":"BI","Cabo Verde":"CV","Cambodia":"KH","Cameroon":"CM","Canada":"CA","Cayman Islands":"KY","Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX","Cocos Islands":"CC","Colombia":"CO","Comoros":"KM","Congo (Brazzaville)":"CG","Congo":"CG","Congo (Kinshasa)":"CD","Congo, Democratic Republic of the":"CD","Cook Islands":"CK","Costa Rica":"CR","Côte d'Ivoire":"CI","Cote d'Ivoire":"CI","Ivory Coast":"CI","Croatia":"HR","Cuba":"CU","Curaçao":"CW","Cyprus":"CY","Czechia":"CZ","Czech Republic":"CZ","Denmark":"DK","Djibouti":"DJ","Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Eswatini":"SZ","Ethiopia":"ET","Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI","France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF","Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI","Greece":"GR","Greenland":"GL","Grenada":"GD","Guadeloupe":"GP","Guam":"GU","Guatemala":"GT","Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT","Heard Island and McDonald Islands":"HM","Holy See":"VA","Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Isle of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP","Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kiribati":"KI","Korea (Democratic People's Republic of)":"KP","South Korea":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Laos":"LA","Lao People's Democratic Republic":"LA","Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libya":"LY","Liechtenstein":"LI","Lithuania":"LT","Luxembourg":"LU","Macau":"MO","Macao":"MO","Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT","Marshall Islands":"MH","Martinique":"MQ","Mauritania":"MR","Mauritius":"MU","Mayotte":"YT","Mexico":"MX","Micronesia (Federated States of)":"FM","Moldova":"MD","Moldova, Republic of":"MD","Monaco":"MC","Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Burma":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF","North Macedonia":"MK","Northern Mariana Islands":"MP","Norway":"NO","Oman":"OM","Pakistan":"PK","Palau":"PW","West Bank and Gaza":"PS","Palestine":"PS","Palestine, State of":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Réunion":"RE","Romania":"RO","Russia":"RU","Rwanda":"RW","Saint Barthelemy":"BL","Saint Helena, Ascension and Tristan da Cunha":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Martin (French part)":"MF","Saint Pierre and Miquelon":"PM","Saint Vincent and the Grenadines":"VC","Samoa":"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Sint Maarten (Dutch part)":"SX","Slovakia":"SK","Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA","South Georgia and the South Sandwich Islands":"GS","South Sudan":"SS","Spain":"ES","Sri Lanka":"LK","Sudan":"SD","Suriname":"SR","Svalbard and Jan Mayen":"SJ","Sweden":"SE","Switzerland":"CH","Syria":"SY","Syrian Arab Republic":"SY","Taiwan":"TW","Tajikistan":"TJ","Tanzania":"TZ","Tanzania, United Republic of":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks and Caicos Islands":"TC","Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","United Kingdom of Great Britain and Northern Ireland":"GB","United States Minor Outlying Islands":"UM","US":"US","United States of America":"US","Uruguay":"UY","Uzbekistan":"UZ","Vanuatu":"VU","Venezuela":"VE","Venezuela (Bolivarian Republic of)":"VE","Vietnam":"VN","Virgin Islands (British)":"VG","Virgin Islands (U.S.)":"VI","Wallis and Futuna":"WF","Western Sahara":"EH","Yemen":"YE","Zambia":"ZM","Zimbabwe":"ZW"}
	const countriesData = JSON.parse($.ajax({'url': "/corona/JS/worldMapCountriesData.json", 'async': false}).responseText);
	let databyDateNew = {...countriesData}
	const jsonData = JSON.parse($.ajax({'url': "/corona/JS/worldMapData.json", 'async': false}).responseText);
	console.log(jsonData);
	let databyDate = {
		...jsonData
	}
	const dates = [
		['Jan',22,20],['Jan',23,20],['Jan',24,20],['Jan',25,20],['Jan',26,20],['Jan',27,20],['Jan',28,20],['Jan',29,20],['Jan',30,20],['Jan',31,20],['Feb',1,20],['Feb',2,20],['Feb',3,20],['Feb',4,20],['Feb',5,20],['Feb',6,20],['Feb',7,20],['Feb',8,20],['Feb',9,20],['Feb',10,20],['Feb',11,20],['Feb',12,20],['Feb',13,20],['Feb',14,20],['Feb',15,20],['Feb',16,20],['Feb',17,20],['Feb',18,20],['Feb',19,20],['Feb',20,20],['Feb',21,20],['Feb',22,20],['Feb',23,20],['Feb',24,20],['Feb',25,20],['Feb',26,20],['Feb',27,20],['Feb',28,20],['Feb',29,20],['Mar',1,20],['Mar',2,20],['Mar',3,20],['Mar',4,20],['Mar',5,20],['Mar',6,20],['Mar',7,20],['Mar',8,20],['Mar',9,20],['Mar',10,20],['Mar',11,20],['Mar',12,20],['Mar',13,20],['Mar',14,20],['Mar',15,20],['Mar',16,20],['Mar',17,20],['Mar',18,20],['Mar',19,20],['Mar',20,20],['Mar',21,20],['Mar',22,20],['Mar',23,20],['Mar',24,20],['Mar',25,20],['Mar',26,20],['Mar',27,20],['Mar',28,20],['Mar',29,20],['Mar',30,20],['Mar',31,20],['Apr',1,20],['Apr',2,20],['Apr',3,20],['Apr',4,20],['Apr',5,20],['Apr',6,20],['Apr',7,20],['Apr',8,20],['Apr',9,20],['Apr',10,20],['Apr',11,20],['Apr',12,20],['Apr',13,20],['Apr',14,20],['Apr',15,20],['Apr',16,20],['Apr',17,20],['Apr',18,20],['Apr',19,20],['Apr',20,20],['Apr',21,20],['Apr',22,20],['Apr',23,20],['Apr',24,20],['Apr',25,20],['Apr',26,20],['Apr',27,20],['Apr',28,20],['Apr',29,20],['Apr',30,20],['May',1,20],['May',2,20],['May',3,20],['May',4,20],['May',5,20],['May',6,20],['May',7,20],['May',8,20],['May',9,20],['May',10,20],['May',11,20],['May',12,20],['May',13,20],['May',14,20],['May',15,20],['May',16,20],['May',17,20],['May',18,20],['May',19,20],['May',20,20],['May',21,20],['May',22,20],['May',23,20],['May',24,20],['May',25,20],['May',26,20],['May',27,20],['May',28,20],['May',29,20],['May',30,20],['May',31,20],['Jun',1,20],['Jun',2,20],['Jun',3,20],['Jun',4,20],['Jun',5,20],['Jun',6,20],['Jun',7,20],['Jun',8,20],['Jun',9,20],['Jun',10,20],['Jun',11,20],['Jun',12,20],['Jun',13,20],['Jun',14,20],['Jun',15,20],['Jun',16,20],['Jun',17,20],['Jun',18,20],['Jun',19,20],['Jun',20,20],['Jun',21,20],['Jun',22,20],['Jun',23,20],['Jun',24,20],['Jun',25,20],['Jun',26,20],['Jun',27,20],['Jun',28,20],['Jun',29,20],['Jun',30,20],['Jul',1,20],['Jul',2,20],['Jul',3,20],['Jul',4,20],['Jul',5,20],['Jul',6,20],['Jul',7,20],['Jul',8,20],['Jul',9,20],['Jul',10,20],['Jul',11,20],['Jul',12,20],['Jul',13,20],['Jul',14,20],['Jul',15,20],['Jul',16,20],['Jul',17,20],['Jul',18,20],['Jul',19,20],['Jul',20,20],['Jul',21,20],['Jul',22,20],['Jul',23,20],['Jul',24,20],['Jul',25,20],['Jul',26,20],['Jul',27,20],['Jul',28,20],['Jul',29,20],['Jul',30,20],['Jul',31,20],['Aug',1,20],['Aug',2,20],['Aug',3,20],['Aug',4,20],['Aug',5,20],['Aug',6,20],['Aug',7,20],['Aug',8,20],['Aug',9,20],['Aug',10,20],['Aug',11,20],['Aug',12,20],['Aug',13,20],['Aug',14,20],['Aug',15,20],['Aug',16,20],['Aug',17,20],['Aug',18,20],['Aug',19,20],['Aug',20,20],['Aug',21,20],['Aug',22,20],['Aug',23,20],['Aug',24,20],['Aug',25,20],['Aug',26,20],['Aug',27,20],['Aug',28,20],['Aug',29,20],['Aug',30,20],['Aug',31,20],['Sep',1,20],['Sep',2,20],['Sep',3,20],['Sep',4,20],['Sep',5,20],['Sep',6,20],['Sep',7,20],['Sep',8,20],['Sep',9,20],['Sep',10,20],['Sep',11,20],['Sep',12,20],['Sep',13,20],['Sep',14,20],['Sep',15,20],['Sep',16,20],['Sep',17,20],['Sep',18,20],['Sep',19,20],['Sep',20,20],['Sep',21,20],['Sep',22,20],['Sep',23,20],['Sep',24,20],['Sep',25,20],['Sep',26,20],['Sep',27,20],['Sep',28,20],['Sep',29,20],['Sep',30,20],['Oct',1,20],['Oct',2,20],['Oct',3,20],['Oct',4,20],['Oct',5,20],['Oct',6,20],['Oct',7,20],['Oct',8,20],['Oct',9,20],['Oct',10,20],['Oct',11,20],['Oct',12,20],['Oct',13,20],['Oct',14,20],['Oct',15,20],['Oct',16,20],['Oct',17,20],['Oct',18,20],['Oct',19,20],['Oct',20,20],['Oct',21,20],['Oct',22,20],['Oct',23,20],['Oct',24,20],['Oct',25,20],['Oct',26,20],['Oct',27,20]
	]
	const canvas = document.getElementById("canvas");
	const canHgt = 450;
	const canWid = 750;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	const ctx = canvas.getContext("2d");
	ctx.scale(2,2);
	ctx.lineWidth = 5;
	ctx.strokeColor = '#000'
		
	const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#FF9933','#92C24C','#4cc292','#99FF33','#9933FF'];
	let slideIndex;
	let counter = 0;
	let circleArray = [];
	const widthStep = canWid/(dates.length);
	const heightFactor = 50000000;
	let secs = 60;

	let data, options, chart, counterCountry = 0, dataPlace, optionsPlace, chartPlace, counterPlace = 0; 
	function getNumText(num){
		let text; 
		num>1000000? text = (num/1000000).toFixed(1)+'M':
			num>1000?
			text = (num/1000).toFixed(1)+'K':
			text = num
		return text
	}
	let rowCounter = 0;
	const rowMap = {
		
	}
	function drawRegionsMap(counter) {
		$('.stateName').addClass('active');
		for (region in databyDateNew) {
			if (databyDateNew.hasOwnProperty(region)) {
				if(countryMap[region]){
					if(!rowMap[countryMap[region]]){
						rowMap[countryMap[region]] = rowCounter;
						rowCounter++;
						data.addRow([countryMap[region],databyDateNew[region][1][counter]]);
					}else{
						// data.addRow([countryMap[region],databyDateNew[region][1][counter]]);
						data.setValue(rowMap[countryMap[region]],1,databyDateNew[region][1][counter])
					}
					
				}else{
					if(countryMap[databyDateNew[region][0]]){
						if(!rowMap[countryMap[databyDateNew[region][0]]]){
							rowMap[countryMap[databyDateNew[region][0]]] = rowCounter;
							rowCounter++;
							data.addRow([countryMap[databyDateNew[region][0]],databyDateNew[region][1][counter]]);
						}else{
							// data.addRow([countryMap[databyDateNew[region][0]],databyDateNew[region][1][counter]]);
							data.setValue(rowMap[countryMap[databyDateNew[region][0]]],1,databyDateNew[region][1][counter])
						}
					}else{
					}
				}
			}
		}
		// console.log(rowMap);
		chart.draw(data, options);	
		dates[counter][1]>9?$('.date').text(`${dates[counter][1]},`):$('.date').text(`0${dates[counter][1]},`)
		$('.month').text(dates[counter][0])
		$('.year').text(dates[counter][2])

		ctx.beginPath();
		const confRect = databyDate['confirmed'][counter];
		ctx.fillStyle = '#FBE8E8';
		ctx.rect(
			(widthStep*counter)+1,
			(canHgt*(1-(confRect/heightFactor))),
			widthStep-2,
			(canHgt*(confRect/heightFactor))
		);
		ctx.fill();
		ctx.closePath();

		// ctx.beginPath();
		// const recvRect = databyDate['recovered'][counter];
		// ctx.fillStyle = '#99FF3344';
		// ctx.rect(
		// 	(widthStep*counter)+1,
		// 	(canHgt*(1-(recvRect/heightFactor))),
		// 	widthStep-2,
		// 	(canHgt*(recvRect/heightFactor))
		// );
		// ctx.fill();
		// ctx.closePath();

		// ctx.beginPath();
		// const dethRect = databyDate['death'][counter];
		// ctx.fillStyle = '#FF993344';
		// ctx.rect(
		// 	(widthStep*counter)+1,
		// 	(canHgt*(1-(dethRect/heightFactor))),
		// 	widthStep-2,
		// 	(canHgt*(dethRect/heightFactor))
		// );
		// ctx.fill();
		// ctx.closePath();
		

		if(counter>0){
			ctx.beginPath();
			ctx.strokeStyle = '#8C1919';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['confirmed'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['confirmed'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.strokeStyle = '#F86E6E';
			ctx.strokeStyle = '#198C19';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['recovered'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['recovered'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.strokeStyle = '#525252';
			ctx.lineCap = "round";
			ctx.moveTo((widthStep*(counter-(1/2))),(canHgt*(1-(databyDate['death'][counter-1]/heightFactor))));
			ctx.lineTo((widthStep*(counter+(1/2))),(canHgt*(1-(databyDate['death'][counter]/heightFactor))))
			ctx.stroke();
			ctx.closePath();
		}
		// ctx.beginPath();
		// ctx.fillStyle = '#7c4cc2CC';
		// ctx.arc((widthStep*counter)+7,(canHgt*(1-(databyDate['confirmed'][counter]/heightFactor))), 4, 0, 2*Math.PI)
		// ctx.fill();
		// ctx.closePath();

		// ctx.beginPath();
		// ctx.fillStyle = '#99FF33CC';
		// ctx.arc((widthStep*counter)+7,(canHgt*(1-(databyDate['recovered'][counter]/heightFactor))), 4, 0, 2*Math.PI)
		// ctx.fill();
		// ctx.closePath();

		// ctx.beginPath();
		// ctx.fillStyle = '#FF9933CC';
		// ctx.arc((widthStep*counter)+7,(canHgt*(1-(databyDate['death'][counter]/heightFactor))), 4, 0, 2*Math.PI)
		// ctx.fill();
		// ctx.closePath();

		let confNum;
		let country;
		let dethNum;
		let recvNum;
		$('.confirmedData').text(getNumText(databyDate['confirmed'][counter]))
		$('.recoveredData').text(getNumText(databyDate['recovered'][counter]))
		$('.deathsData').text(getNumText(databyDate['death'][counter]))
		
	}
	function init(label){
		
		
		if(!label){

			
			data = new google.visualization.DataTable();
			data.addColumn('string', 'Country');
			data.addColumn('number', 'Value');
			options = {
				domain: 'IN',
				legend: 'none',
				backgroundColor: 'transparent',
				datalessRegionColor: '#DBD9D9',
				colorAxis: {
					values: [0,1,1000,5000,10000,50000,100000,500000,1000000,5000000,10000000,50000000,100000000],
					colors: [
						'rgb(219, 217, 217)',
						'rgb(255, 235, 235)',
						'rgb(255, 213, 213)',
						'rgb(255, 192, 192)',
						'rgb(254, 170, 170)',
						'rgb(254, 149, 149)',
						'rgb(255, 162, 162)',
						'rgb(254, 127, 127)',
						'rgb(226, 102, 102)',
						'rgb(197, 76, 76)',
						'rgb(169, 51, 51)',
						'rgb(140, 25, 25)',
						'rgb(112, 0, 0)',
					]
				}
			};
			chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
			chart.draw(data, options);
			setTimeout(function(){
				init(1);
			},2000);
		}else if(label<=databyDateNew['India'][1].length){
			setTimeout(function(){
				drawRegionsMap(label-1);
				if(databyDateNew['India'][1][label-1]){
						// console.log('stop');
						init(label+1);
				}else{
					init(label+1);
				}
			},secs)
		}else{
			console.log(data);
		}
	}
});
