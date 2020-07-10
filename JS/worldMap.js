$(document).ready(function(){

	google.charts.load('current', {
		'packages':['geochart'],
		'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
	});
	google.charts.setOnLoadCallback(init);
	const countryMap = {"Afghanistan":"AF","Åland Islands":"AX","Albania":"AL","Algeria":"DZ","American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ","Antigua and Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahrain":"BH","Bangladesh":"BD","Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ","Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bonaire, Sint Eustatius and Saba":"BQ","Bosnia and Herzegovina":"BA","Botswana":"BW","Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO","Brunei":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burundi":"BI","Cape Verde":"CV","Cambodia":"KH","Cameroon":"CM","Canada":"CA","Cayman Islands":"KY","Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX","Cocos Islands":"CC","Colombia":"CO","Comoros":"KM","Congo (Brazzaville)":"CG","Congo":"CG","Congo (Kinshasa)":"CD","Congo, Democratic Republic of the":"CD","Cook Islands":"CK","Costa Rica":"CR","Côte d'Ivoire":"CI","Cote d'Ivoire":"CI","Ivory Coast":"CI","Croatia":"HR","Cuba":"CU","Curaçao":"CW","Cyprus":"CY","Czechia":"CZ","Czech Republic":"CZ","Denmark":"DK","Djibouti":"DJ","Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Eswatini":"SZ","Ethiopia":"ET","Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI","France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF","Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI","Greece":"GR","Greenland":"GL","Grenada":"GD","Guadeloupe":"GP","Guam":"GU","Guatemala":"GT","Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT","Heard Island and McDonald Islands":"HM","Holy See":"VA","Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Isle of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP","Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kiribati":"KI","Korea (Democratic People's Republic of)":"KP","South Korea":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Laos":"LA","Lao People's Democratic Republic":"LA","Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libya":"LY","Liechtenstein":"LI","Lithuania":"LT","Luxembourg":"LU","Macau":"MO","Macao":"MO","Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT","Marshall Islands":"MH","Martinique":"MQ","Mauritania":"MR","Mauritius":"MU","Mayotte":"YT","Mexico":"MX","Micronesia (Federated States of)":"FM","Moldova":"MD","Moldova, Republic of":"MD","Monaco":"MC","Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Burma":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF","North Macedonia":"MK","Northern Mariana Islands":"MP","Norway":"NO","Oman":"OM","Pakistan":"PK","Palau":"PW","West Bank and Gaza":"PS","Palestine":"PS","Palestine, State of":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Réunion":"RE","Romania":"RO","Russia":"RU","Rwanda":"RW","Saint Barthelemy":"BL","Saint Helena, Ascension and Tristan da Cunha":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Martin (French part)":"MF","Saint Pierre and Miquelon":"PM","Saint Vincent and the Grenadines":"VC","Samoa":"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Sint Maarten (Dutch part)":"SX","Slovakia":"SK","Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA","South Georgia and the South Sandwich Islands":"GS","South Sudan":"SS","Spain":"ES","Sri Lanka":"LK","Sudan":"SD","Suriname":"SR","Svalbard and Jan Mayen":"SJ","Sweden":"SE","Switzerland":"CH","Syria":"SY","Syrian Arab Republic":"SY","Taiwan":"TW","Tajikistan":"TJ","Tanzania":"TZ","Tanzania, United Republic of":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks and Caicos Islands":"TC","Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","United Kingdom of Great Britain and Northern Ireland":"GB","United States Minor Outlying Islands":"UM","US":"US","United States of America":"US","Uruguay":"UY","Uzbekistan":"UZ","Vanuatu":"VU","Venezuela":"VE","Venezuela (Bolivarian Republic of)":"VE","Vietnam":"VN","Virgin Islands (British)":"VG","Virgin Islands (U.S.)":"VI","Wallis and Futuna":"WF","Western Sahara":"EH","Yemen":"YE","Zambia":"ZM","Zimbabwe":"ZW"}
	let databyDateNew = {
		"Syria":6.60,"Ukraine":6.64,"Russia":7.35,"Romania":8.15,"Belarus":9.87,"Bhutan":10.42,"Iran":10.50,"Kazakhstan":11.10,"Lithuania":11.14,"Vietnam":11.23,"Uzbekistan":11.44,"Moldova":11.57,"Nepal":12.05,"Mongolia":12.59,"India":12.90,"Turkey":13.61,"Argentina":13.69,"Egypt":13.82,"Georgia":13.86,"Tunisia":14.28,"Armenia":14.60,"Poland":15.78,"Bulgaria":15.93,"Latvia":16.55,"Azerbaijan":16.76,"Hungary":16.91,"Serbia":17.02,"Pakistan":17.55,"Slovakia":18.54,"Israel":19.90,"North Macedonia":20.11,"Bosnia and Herzegovina":20.19,"Albania":20.55,"Eswatini":21.73,"Czechia":22.38,"Réunion":22.45,"Thailand":23.82,"Paraguay":24.46,"Saint Martin (French part)":24.65,"Colombia":25.05,"South Korea":25.52,"Afghanistan":25.87,"Algeria":25.93,"Peru":26.17,"Dominican Republic":26.52,"Bangladesh":27.35,"Taiwan":27.36,"Sri Lanka":27.40,"France":27.81,"Brazil":28.24,"Kyrgyzstan":28.70,"Germany":28.74,"Estonia":28.93,"Indonesia":30.02,"Montenegro":30.04,"Slovenia":31.16,"China":31.41,"Malaysia":31.75,"Palestine, State of":31.90,"Cambodia":32.63,"Andorra":32.65,"Mayotte":32.78,"Mexico":33.15,"Italy":33.28,"Croatia":33.69,"Morocco":33.81,"Chile":33.99,"Monaco":34.49,"Canada":34.86,"Tajikistan":35.58,"United Kingdom":35.71,"Austria":35.99,"Saint Barthelemy":36.34,"Cape Verde":36.45,"Myanmar":36.82,"Macau":37.48,"Guatemala":38.13,"Senegal":38.82,"New Caledonia":39.02,"Philippines":39.29,"Spain":39.38,"Sweden":39.60,"Suriname":39.82,"Uruguay":40.10,"Lebanon":40.14,"Japan":40.33,"Malta":40.33,"Greece":40.56,"Åland Islands":40.74,"Iraq":41.49,"Bolivia":41.53,"El Salvador":41.96,"Netherlands":42.43,"Grenada":42.55,"Costa Rica":43.22,"Singapore":43.80,"Finland":43.85,"Ecuador":43.87,"Martinique":44.32,"Belgium":44.39,"South Africa":44.77,"Togo":45.91,"Gibraltar":46.13,"French Guiana":47.05,"Lao People's Democratic Republic":47.24,"Hong Kong":47.35,"Panama":47.45,"Jamaica":47.57,"Puerto Rico":47.99,"Saint Pierre and Miquelon":48.04,"Luxembourg":48.16,"Denmark":48.23,"Australia":48.35,"Kuwait":48.89,"San Marino":48.97,"Cyprus":49.39,"Portugal":49.42,"Saint Lucia":49.95,"United States of America":50.00,"Mauritius":50.30,"Papua New Guinea":51.06,"Dominica":51.43,"Libya":51.97,"Somalia":52.50,"New Zealand":54.00,"Guyana":54.66,"Niger":55.07,"Fiji":55.42,"Kenya":56.11,"Jordan":56.42,"Nicaragua":56.50,"Trinidad and Tobago":56.73,"Ireland":57.32,"Timor-Leste":57.33,"Isle of Man":57.80,"Angola":59.04,"Mali":59.34,"Benin":59.34,"Barbados":59.46,"Honduras":60.00,"Cameroon":60.47,"Guadeloupe":61.10,"Guernsey":62.14,"Belize":62.54,"Zimbabwe":63.87,"Iceland":64.71,"Côte d'Ivoire":66.12,"Aruba":66.95,"Liechtenstein":66.99,"Madagascar":67.21,"Ghana":69.54,"Norway":70.97,"Ethiopia":71.15,"Switzerland":72.10,"Saint Helena, Ascension and Tristan da Cunha":72.26,"Sao Tome and Principe":74.00,"Saint Kitts and Nevis":76.58,"Gabon":77.91,"Oman":77.91,"Nigeria":78.21,"Montserrat":78.43,"Faroe Islands":78.49,"Curaçao":78.57,"Guam":79.00,"French Polynesia":80.14,"Bonaire, Sint Eustatius and Saba":80.89,"Jersey":80.97,"Micronesia (Federated States of)":81.00,"Antigua and Barbuda":82.14,"Bahamas":82.56,"Saudi Arabia":82.85,"Saint Vincent and the Grenadines":83.25,"American Samoa":85.00,"Virgin Islands (U.S.)":85.97,"Marshall Islands":86.20,"Maldives":88.53,"Palau":89.98,"Cook Islands":92.12,"Lesotho":94.04,"Djibouti":95.07,"Vanuatu":95.25,"Sint Maarten (Dutch part)":95.44,"Comoros":98.23,"Anguilla":99.54,"Qatar":109.87,"Botswana":112.38,"United Arab Emirates":115.97,"Seychelles":122.72,"Haiti":124.50,"Bermuda":129.98,"Namibia":133.38,"Turks and Caicos Islands":134.99,"Bahrain":145.89,"Falkland Islands (Malvinas)":147.74,"Cayman Islands":150.07,"Brunei":157.02,"Greenland":163.68,"Mozambique":175.25,"Virgin Islands (British)":179.00,"Tanzania":188.16,"Turkmenistan":224.68,"Equatorial Guinea":259.38,"Burundi":283.73,"Mauritania":694.63,"Yemen":2466.67,"Eritrea":2666.24
	}
	const dates = [
		[],[],[],[],[],[]
	]
	for (const country in databyDateNew) {
		if (databyDateNew.hasOwnProperty(country)) {
			const element = databyDateNew[country];
			if(countryMap[country]){
				if(element<20){
					dates[0].push([countryMap[country],1])
				}else if(element<40){
					dates[1].push([countryMap[country],2])
				}else if(element<60){
					dates[2].push([countryMap[country],3])
				}else if(element<100){
					dates[3].push([countryMap[country],4])
				}else if(element<200){
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
		}
	}
});
