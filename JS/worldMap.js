$(document).ready(function(){

	google.charts.load('current', {
		'packages':['geochart'],
		'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
	});
	google.charts.setOnLoadCallback(init);
	const countryMap = {"Afghanistan":"AF","Åland Islands":"AX","Albania":"AL","Algeria":"DZ","American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ","Antigua and Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahrain":"BH","Bangladesh":"BD","Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ","Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bonaire, Sint Eustatius and Saba":"BQ","Bosnia and Herzegovina":"BA","Botswana":"BW","Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO","Brunei":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burundi":"BI","Cape Verde":"CV","Cambodia":"KH","Cameroon":"CM","Canada":"CA","Cayman Islands":"KY","Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX","Cocos Islands":"CC","Colombia":"CO","Comoros":"KM","Congo (Brazzaville)":"CG","Congo":"CG","Congo (Kinshasa)":"CD","Congo, Democratic Republic of the":"CD","Cook Islands":"CK","Costa Rica":"CR","Côte d'Ivoire":"CI","Cote d'Ivoire":"CI","Ivory Coast":"CI","Croatia":"HR","Cuba":"CU","Curaçao":"CW","Cyprus":"CY","Czechia":"CZ","Czech Republic":"CZ","Denmark":"DK","Djibouti":"DJ","Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Eswatini":"SZ","Ethiopia":"ET","Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI","France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF","Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI","Greece":"GR","Greenland":"GL","Grenada":"GD","Guadeloupe":"GP","Guam":"GU","Guatemala":"GT","Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT","Heard Island and McDonald Islands":"HM","Holy See":"VA","Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Isle of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP","Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kiribati":"KI","Korea (Democratic People's Republic of)":"KP","South Korea":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Laos":"LA","Lao People's Democratic Republic":"LA","Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libya":"LY","Liechtenstein":"LI","Lithuania":"LT","Luxembourg":"LU","Macau":"MO","Macao":"MO","Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT","Marshall Islands":"MH","Martinique":"MQ","Mauritania":"MR","Mauritius":"MU","Mayotte":"YT","Mexico":"MX","Micronesia (Federated States of)":"FM","Moldova":"MD","Moldova, Republic of":"MD","Monaco":"MC","Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Burma":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF","North Macedonia":"MK","Northern Mariana Islands":"MP","Norway":"NO","Oman":"OM","Pakistan":"PK","Palau":"PW","West Bank and Gaza":"PS","Palestine":"PS","Palestine, State of":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Réunion":"RE","Romania":"RO","Russia":"RU","Rwanda":"RW","Saint Barthelemy":"BL","Saint Helena, Ascension and Tristan da Cunha":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Martin (French part)":"MF","Saint Pierre and Miquelon":"PM","Saint Vincent and the Grenadines":"VC","Samoa":"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Sint Maarten (Dutch part)":"SX","Slovakia":"SK","Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA","South Georgia and the South Sandwich Islands":"GS","South Sudan":"SS","Spain":"ES","Sri Lanka":"LK","Sudan":"SD","Suriname":"SR","Svalbard and Jan Mayen":"SJ","Sweden":"SE","Switzerland":"CH","Syria":"SY","Syrian Arab Republic":"SY","Taiwan":"TW","Tajikistan":"TJ","Tanzania":"TZ","Tanzania, United Republic of":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks and Caicos Islands":"TC","Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","United Kingdom of Great Britain and Northern Ireland":"GB","United States Minor Outlying Islands":"UM","US":"US","United States of America":"US","Uruguay":"UY","Uzbekistan":"UZ","Vanuatu":"VU","Venezuela":"VE","Venezuela (Bolivarian Republic of)":"VE","Vietnam":"VN","Virgin Islands (British)":"VG","Virgin Islands (U.S.)":"VI","Wallis and Futuna":"WF","Western Sahara":"EH","Yemen":"YE","Zambia":"ZM","Zimbabwe":"ZW"}
	let databyDateNew = {
		"India":0.09,"Israel":0.11,"Kyrgyzstan":0.21,"Italy":0.43,"Ukraine":0.46,"Kazakhstan":0.46,"Somalia":0.50,"Sri Lanka":0.51,"Russia":0.52,"Vietnam":0.57,"Fiji":0.59,"China":0.61,"Sudan":0.63,"Indonesia":0.64,"Algeria":0.65,"Australia":0.68,"Pakistan":0.69,"Poland":0.70,"Bangladesh":0.70,"Chile":0.71,"Turkey":0.72,"Réunion":0.72,"Tanzania":0.73,"Dominican Republic":0.74,"Mongolia":0.74,"Iran":0.75,"Kuwait":0.77,"Myanmar":0.78,"Denmark":0.80,"France":0.81,"Nepal":0.86,"Belarus":0.89,"Georgia":0.93,"Ghana":0.94,"Monaco":0.98,"Western Sahara":0.99,"Morocco":0.99,"Brazil":1.01,"Romania":1.03,"Jordan":1.03,"Kenya":1.05,"Armenia":1.05,"Austria":1.08,"Mayotte":1.08,"Egypt":1.09,"Moldova":1.12,"Malaysia":1.12,"Djibouti":1.12,"Bhutan":1.16,"San Marino":1.16,"Thailand":1.23,"Guernsey":1.24,"Estonia":1.27,"Uzbekistan":1.34,"Ireland":1.36,"Zambia":1.36,"Tunisia":1.37,"Nigeria":1.39,"United Kingdom":1.39,"Philippines":1.42,"El Salvador":1.45,"Argentina":1.45,"Iceland":1.46,"Rwanda":1.48,"Slovenia":1.48,"Cambodia":1.50,"Afghanistan":1.55,"Uruguay":1.58,"Serbia":1.60,"Uganda":1.62,"Isle of Man":1.66,"Jersey":1.71,"Nicaragua":1.71,"North Macedonia":1.75,"Spain":1.81,"Lithuania":1.85,"Azerbaijan":1.86,"Congo":1.94,"Guam":2.00,"Sweden":2.07,"Guinea":2.08,"Timor-Leste":2.08,"Saudi Arabia":2.12,"Burundi":2.12,"Peru":2.13,"Lesotho":2.13,"Finland":2.14,"Guatemala":2.17,"Bulgaria":2.22,"Bahrain":2.27,"Paraguay":2.30,"Faroe Islands":2.41,"Guadeloupe":2.42,"Ethiopia":2.44,"Singapore":2.47,"Burkina Faso":2.47,"Croatia":2.48,"Mauritius":2.48,"American Samoa":2.50,"Palau":2.50,"Hong Kong":2.55,"Martinique":2.60,"Brunei":2.64,"Northern Mariana Islands":2.65,"Haiti":2.74,"Costa Rica":2.74,"Cameroon":2.75,"Albania":2.83,"Macau":2.89,"Netherlands":2.98,"Bosnia and Herzegovina":3.04,"Honduras":3.12,"Côte d'Ivoire":3.20,"Ecuador":3.24,"Åland Islands":3.24,"Belize":3.25,"Liberia":3.25,"Palestine, State of":3.26,"Saint Lucia":3.27,"Niger":3.30,"Senegal":3.30,"Saint Martin (French part)":3.32,"Mozambique":3.33,"Saint Vincent and the Grenadines":3.33,"Tonga":3.41,"Colombia":3.46,"French Guiana":3.61,"Malta":3.62,"Sierra Leone":3.69,"United Arab Emirates":3.78,"Latvia":3.79,"Lebanon":3.82,"Slovakia":3.84,"Maldives":3.88,"Jamaica":3.88,"Luxembourg":3.89,"Japan":3.91,"Montenegro":3.94,"Liechtenstein":4.01,"Germany":4.06,"Saint Barthelemy":4.06,"Qatar":4.12,"Guinea-Bissau":4.12,"Mali":4.12,"Lao People's Democratic Republic":4.16,"Iraq":4.20,"Vanuatu":4.25,"South Africa":4.30,"Comoros":4.38,"Togo":4.50,"Niue":4.50,"Oman":4.58,"Mauritania":4.63,"Tajikistan":4.65,"Sint Maarten (Dutch part)":4.66,"Virgin Islands (U.S.)":4.67,"Libya":4.73,"Mexico":4.77,"Namibia":4.78,"Cape Verde":4.81,"New Caledonia":4.81,"Belgium":4.88,"Gabon":4.89,"Suriname":4.92,"Dominica":4.92,"Portugal":4.97,"Bolivia":5.09,"Gambia":5.10,"Norway":5.28,"Angola":5.29,"Hungary":5.32,"Grenada":5.37,"Papua New Guinea":5.40,"Guyana":5.46,"Svalbard and Jan Mayen":5.90,"Taiwan":5.91,"Anguilla":5.92,"Trinidad and Tobago":5.92,"Bahamas":6.02,"New Zealand":6.06,"Syria":6.55,"Panama":6.69,"Antigua and Barbuda":7.17,"Micronesia (Federated States of)":7.20,"Gibraltar":7.38,"British Indian Ocean Territory":7.50,"Czech Republic":7.95,"US":8.00,"Central African Republic":8.25,"Montserrat":8.33,"Switzerland":8.38,"Solomon Islands":8.53,"Madagascar":8.81,"Aruba":9.11,"Puerto Rico":9.17,"Barbados":9.32,"Andorra":9.54,"Greenland":9.56,"Bonaire, Sint Eustatius and Saba":9.95,"Kiribati":10.50,"Samoa":10.86,"South Korea":10.94,"Curaçao":11.06,"Saint Kitts and Nevis":11.07,"Seychelles":11.43,"Turkmenistan":11.44,"Greece":12.06,"Virgin Islands (British)":12.50,"Canada":12.55,"Equatorial Guinea":12.78,"Eswatini":13.31,"Cuba":13.33,"Turks and Caicos Islands":13.33,"Cyprus":13.56,"Botswana":13.87,"French Polynesia":15.42,"Yemen":15.98,"Cocos Islands":16.98,"Tokelau":17.75,"Cayman Islands":23.05,"Chad":23.33,"Benin":27.22,"Malawi":27.41,"Sao Tome and Principe":28.26,"Bermuda":28.75,"Nauru":30.47,"Falkland Islands (Malvinas)":40.41,"Saint Helena, Ascension and Tristan da Cunha":52.50
	}
	const dates = [
		[],[],[],[],[],[]
	]
	for (const country in databyDateNew) {
		if (databyDateNew.hasOwnProperty(country)) {
			const element = databyDateNew[country];
			if(countryMap[country]){
				
				if(element<1){
					dates[0].push([countryMap[country],1])
				}else if(element<2){
					dates[1].push([countryMap[country],2])
				}else if(element<3){
					dates[2].push([countryMap[country],3])
				}else if(element<5){
					dates[3].push([countryMap[country],4])
				}else if(element<25){
					dates[4].push([countryMap[country],5])
				}else{
					dates[5].push([countryMap[country],6])
				}
			}else{
				console.log(country)
			}
		}
	}
	console.log(dates)
	
		
	const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#FF9933','#92C24C','#4cc292','#99FF33','#9933FF'];
	
	let secs = 1500;

	let data, options, chart, counterCountry = 0, dataPlace, optionsPlace, chartPlace, counterPlace = 0; 
	
	function drawRegionsMap(counter) {
		$('.stateName').addClass('active');
		for (let index = 0; index < dates[counter].length; index++) {
			const element = dates[counter][index];
			data.addRow([element[0],element[1]]);
		}
		chart.draw(data, options);	
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
					values: [1,2,3,4,5,6],
					colors: [
						'#FFEBEB','#FFC0C0','#FFA2A2','#FE7F7F','#C54C4C','#A93333'
					]
				}
			};
			chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
			chart.draw(data, options);
			setTimeout(function(){
				init(1);
			},2000);
		}else if(label<=dates.length){
			setTimeout(function(){
				drawRegionsMap(label-1);
				if(dates[label-1]){
						console.log('stop');
						init(label+1);
				}else{
					init(label+1);
				}
			},secs)
		}else{
			$('.notes').addClass('active')
			$('.india').addClass('active')
		}
	}
});
