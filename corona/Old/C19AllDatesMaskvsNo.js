$(document).ready(function(){
	const areaMap = {
        // "Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4,"World":2,
"US":1,
"Spain":1,
"Italy":1,
"Germany":1,
"UK":1,
"France":1,
"Japan":0,
"Singapore":0,
"Hong Kong":0,
"S Korea":0,
"India":2
	}
	const dataTotalOld = {
		"confirmed":{
            "US":[1281,1663,2179,2727,3499,4632,6421,7783,13747,19273,25600,33276,43843,53736,65778,83836,101657,121465,140909,161831,188172,213242,243622,275367,308650,336802,366317,397121,428654,462780,496535,526396,555313,580619,607670,636350,667592,699706,732197,758809,784326,811865,840351,869170,905358,938154,965785,988197,1012582,1039909,1069424,1103461,1132539,1158040,1180375,1204351,1229331,1257023,1283929,1309550,1329260,1347881,1369376,1390406,1417774,1442824,1467820,1486757],
            "Spain":[1073,1695,2277,2277,5232,6391,7798,9942,11748,13910,17963,20410,25374,28768,35136,39885,49515,57786,65719,73235,80110,87956,95923,104118,112065,119199,126168,131646,136675,141942,148220,153222,158273,163027,166831,170099,172541,177644,184948,190839,191726,198674,200210,204178,208389,213024,202990,205905,207634,209465,210773,212917,213435,215216,216582,217466,218011,219329,220325,221447,222857,223578,224350,227436,228030,228691,229540,230183,230698,230698],
            "Italy":[1128,1694,2036,2502,3089,3858,4636,5883,7375,9172,10149,12462,12462,17660,21157,24747,27980,31506,35713,41035,47021,53578,59138,63927,69176,74386,80589,86498,92472,97689,101739,105792,110574,115242,119827,124632,128948,132547,135586,139422,143626,147577,152271,156363,159516,162488,165155,168941,172434,175925,178972,181228,183957,187327,189973,192994,195351,197675,199414,201505,203591,205463,207428,209328,210717,211938,213013,214457,215858,217185,218268,219070,219814,221216,222104,223096,223885,224760,225435],
            "Germany":[1040,1176,1457,1908,2078,3675,4585,5795,7272,9257,12327,15320,19848,22213,24873,29056,32986,37323,43938,50871,57695,62095,66885,71808,77872,84794,91159,96092,100123,103374,107663,113296,118181,122171,124908,127854,130072,131359,134753,137698,141397,143342,145184,147065,148291,150648,153129,154999,156513,157770,158758,159912,161539,163009,164077,164967,165664,166152,167007,168162,169430,170588,171324,171879,172576,173171,174098,174478,175233,175752,176369],
            "UK":[1144,1145,1551,1960,2642,2716,4014,5067,5745,6726,8164,9640,11812,14745,17312,19780,22453,25481,29865,34173,38689,42477,48436,52279,55949,61474,65872,74605,79874,85206,89570,94845,99483,104145,109769,115314,121172,125856,130172,134638,139246,144640,149569,154037,158348,162350,166441,172481,178685,183500,187842,191832,196243,202359,207977,212629,216525,220449,224332,227741,230985,234440,238004,241461,244995],
            "France":[1136,1219,1794,2293,2293,3681,4496,4532,6683,7715,9124,10970,12758,14463,16243,20123,22622,25600,29551,33402,38105,40708,45170,52827,57749,59929,65202,69500,71412,75343,79163,83057,87366,91738,94863,121712,125394,130365,133585,146075,148084,148086,153011,155393,158168,155980,158303,159952,161644,162220,165963,169053,166543,167299,167305,168518,168925,169583,170687,174224,174918,176202,176782,177094,177547,178349,178184,178994,179630,179630,179693],
            "Japan":[1007,1101,1128,1193,1307,1387,1468,1693,1866,1866,1953,2178,2495,2617,3139,3139,3654,3906,4257,4667,5530,6005,6748,7370,7645,8100,8626,9787,10296,10797,10797,11135,11512,12368,12829,13231,13441,14153,13736,13895,14088,14305,14571,14877,15078,15253,15253,15477,15575,15663,15777,15847,15968,16049,16120,16203,16237,16285],
            "Singapore":[1000,1049,1114,1189,1309,1375,1481,1623,1910,2108,2299,2532,2918,3252,3699,4427,5050,5992,6588,8014,9125,10141,11178,12075,12693,13624,14423,14951,15641,16169,17101,17548,18205,18778,19410,20198,20939,21707,22460,23336,23822,24671,25346,26098,26891,27356,28038],
            "Hong Kong":[1000,1004,1009,1012,1017,1017,1021,1024,1025,1025,1029,1033,1035,1035,1037,1037,1037,1037,1037,1037,1039,1039,1039,1040,1040,1040,1044,1044,1044,1047,1047,1047,1050,1051,1052,1052,1055],
            "S Korea":[1261,1766,2337,3150,3736,4335,5186,5621,6088,6593,7041,7314,7478,7513,7755,7869,7979,8086,8162,8236,8320,8413,8565,8652,8799,8961,8961,9037,9137,9241,9332,9478,9583,9661,9786,9887,9976,10062,10156,10237,10284,10331,10384,10423,10450,10480,10512,10537,10564,10591,10613,10635,10653,10661,10674,10683,10694,10708,10718,10728,10738,10752,10761,10765,10774,10780,10793,10801,10804,10806,10810,10822,10840,10874,10909,10936,10962,10991,11018,11037,11050,11065],
            "India":[1024,1251,1397,1998,2543,2567,3082,3588,4778,5311,5916,6725,7598,8446,9205,10453,11487,12322,13430,14352,15722,17615,18539,20080,21370,23077,24530,26283,27890,29451,31324,33062,34863,37257,39699,42505,46437,49400,52987,56351,59695,62808,67161,70768,74292,78055,81997,85784,90648,95698]
		},
		"recovered":{
			"US":[9707,14652,17448,19581,21763,23559,25410,28790,31270,32988,43482,47763,52096,54703,58545,64840,70337,72329,75204,77366,80203,99079,100372,106988,111424,115936,120720,153947,164015,175382,180152,187180,189791,189910,195036,198993,212534,216169,232733],
			"Spain":[12285,14709,16780,19259,22647,26743,30513,34219,38080,40437,43208,48021,52165,55668,59109,62391,64727,67504,70853,74797,74797,74797,77357,80587,82514,85915,89250,92355,95708,98372,100875,102548,108947,112050,112050,117248,118902,121343,123486,126002,128511,131148,133952,136166,137139],
			"UK":[0],
			"Russia":[10286,11619,13220,15013,16639,18095,19865,21327,23803,26608,31916,34306,39801],
			"Italy":[10361,10950,12384,13030,14620,15729,16847,18278,19758,20996,21815,22837,24392,26491,28470,30455,32534,34211,35435,37130,38092,40164,42727,44927,47055,48877,51600,54543,57576,60498,63120,64928,66624,68941,71252,75945,78249,79914,81654,82879,85231,93245,96276,99023,103031,105186,106587],
			"France":[9513,11053,12548,14135,15572,16349,17428,19523,21452,23413,25195,26663,27469,28001,28805,30955,32812,34420,35983,36578,37409,39181,40657,42088,43493,44594,44903,45513,46886,48228,49476,50212,50663,50885,51476,52842,54079,55191,55892,56148,56327,56835],
			"Germany":[9211,13500,16100,18700,22440,24575,26400,28700,28700,36081,46300,52407,53913,57400,60300,64300,68200,72600,77000,83114,85400,88000,91500,95200,99400,103300,109800,109800,112000,114500,117400,120400,123500,126900,129000,130600,132700,135100,139900,141700,141700,143300,144400,145617],
			"Brazil":[14026,14026,14026,14026,22130,22130,22991,25318,26573,27655,29160,30152,31142,32544,34132,35935,38039,40937,42991,45815,48221,51370,55350,59297,61685,64957,67384],
			"Turkey":[10453,11976,13430,14918,16477,18491,21737,25582,29140,33791,38809,44040,48886,53808,58259,63151,68166,73285,78202,82984,86396,89480,92691,95780],
			"Iran":[10457,11133,11679,12391,13911,14656,15473,16711,17935,19736,19736,24236,27039,29812,32309,35465,41947,43894,45983,48129,49933,52229,54064,55987,57023,59273,60965,63113,64843,66599,68193,69657,70933,72439,73791,75103,76318,77350,78422,79379,80475,81587,82744,83837,85064,86143,87422],
			"China":[9298,10755,12462,14206,15962,18014,18704,22699,23187,25015,27676,30084,32930,36329,39320,42162,44854,47450,50001,52292,53944,55539,57388,58804,60181,61644,62901,64196,65660,67017,67910,68798,69755,70535,71266,71857,72362,72814,73280,73773,74181,74720,75100,75582,75923,76206,76405,76565,76760,76946,77207,77310,77410,77567,77679,77791,77877,77956,78039,78200,78311,78401,77552,77614,77690,77745,77799,77861,77983,78109,78175,78277,78374,78422,78474,78523,78573,78586,78684,78792,78870,78929,78977,78993,79127,79167,79198],
			"Canada":[9698,10545,10964,11847,12543,13188,14454,14761,15149,16013,16883,18268,19231,20327,21424,22764,23814,24921,26030,27006,28184,29260,30239,31262,32109,33007],
			"India":[10007,10819,11775,12847,14142,15331,16776,17887,19301,20969,22549],
		},
		"deaths":{
			"US":[1008,1316,1726,2265,2731,3420,4192,5367,6501,7921,9246,10855,12375,13894,16191,18270,20255,22333,24342,26086,27870,30262,32734,34827,37411,39753,40945,42659,45086,47412,49724,51493,53755,54881,56219,58355,60967,62996,64943,66369,67682,68922,71064,73455,75662,77180,78795,79526,80682],
			"Spain":[1043,1375,1772,2311,2808,3647,4365,5138,5982,6803,7716,8464,9387,10348,11198,11947,12641,13341,14045,14792,15447,16081,16606,17209,17756,18056,18708,19315,20002,20043,20453,20852,21282,21717,22157,22524,22902,23190,23521,23822,24275,24543,24543,25100,25264,25428,25613,25857,26070,26299,26478,26621,26744],
			"UK":[1163,1457,1672,2046,2429,3100,3752,4467,5228,5874,6445,7483,8519,9623,10776,11616,12302,13047,14095,14941,15974,16910,18028,18527,19092,20264,21111,21840,22853,23697,24117,24458,25369,26166,26842,27583,28205,28520,28809,29501,30150,30689,31316,31662,31930,32141],
			"Russia":[1073,1169,1222,1280,1356,1451,1537,1625,1723,1827,1915,2009],
			"Italy":[1266,1441,1809,2158,2503,2978,3405,4032,4825,5476,6077,6820,7503,8215,9134,10023,10779,11591,12428,13155,13915,14681,15362,15887,16523,17127,17669,18279,18849,19468,19899,20465,21067,21645,22170,22745,23227,23660,24114,24648,25085,25549,25969,26384,26644,26977,27359,27682,27967,28236,28710,28884,29079,29315,29684,29958,30201,30395,30560,30739],
			"France":[1102,1333,1698,1997,2317,2611,3030,3532,4414,5398,6520,7574,8093,8926,10343,10887,12228,13215,13851,14412,14986,15731,17169,17922,18683,19325,19720,20267,20798,21342,21858,22248,22617,22859,23296,23663,24090,24379,24597,24763,24900,25204,25537,25812,25990,26233,26313,26383,26646],
			"Germany":[1107,1275,1444,1584,1810,2016,2349,2607,2767,2736,3022,3194,3294,3804,4052,4352,4459,4586,4862,5033,5279,5575,5760,5877,5976,6126,6314,6467,6623,6736,6812,6866,6993,6993,7275,7392,7510,7549,7569,7661],
			"Brazil":[1057,1124,1223,1328,1532,1736,1924,2141,2354,2462,2587,2741,2906,3331,3704,4057,4286,4603,5083,5513,6006,6412,6761,7051,7367,7938,8588,9190,10017,10656,11123,11653],
			"Turkey":[1006,1101,1198,1296,1403,1518,1643,1769,1890,2017,2140,2259,2376,2491,2600,2706,2805,2900,2992,3081,3174,3258,3336,3397,3461,3520,3584,3641,3689,3739,3786,3841],
			"Iran":[1135,1284,1433,1556,1685,1812,1934,2077,2234,2378,2517,2640,2757,2898,3036,3160,3294,3452,3603,3739,3872,3993,4110,4232,4357,4474,4585,4683,4777,4869,4958,5031,5118,5209,5297,5391,5481,5574,5650,5710,5806,5877,5957,6028,6091,6156,6203,6277,6340,6418,6486,6541,6589,6640,6685],
			"China":[1012,1112,1117,1369,1521,1663,1766,1864,2003,2116,2238,2238,2443,2445,2595,2665,2717,2746,2790,2837,2872,2914,2947,2983,3015,3044,3072,3100,3123,3139,3161,3172,3180,3193,3203,3217,3230,3241,3249,3253,3259,3274,3274,3281,3285,3291,3296,3299,3304,3308,3309,3316,3322,3326,3330,3333,3335,3335,3337,3339,3340,3343,3343,3345,3345,3346,3346,4636,4636,4636,4636,4636,4636,4636,4636,4636,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637,4637],
			"Canada":[1008,1259,1356,1401,1565,1727,1910,2078,2241,2402,2571,2687,2841,2983,3155,3310,3537,3684,3795,4003,4190,4366,4541,4697,4823,4991,5115],
			"India":[1008,1079,1154,1223,1323,1391,1566,1693,1785,1889,1985,2101,2212,2294],
		}
	};
	
	const dates = [['Jan','22'],['Jan','23'],['Jan','24'],['Jan','25'],['Jan','26'],['Jan','27'],['Jan','28'],['Jan','29'],['Jan','30'],['Jan','31'],['Feb','1'],['Feb','2'],['Feb','3'],['Feb','4'],['Feb','5'],['Feb','6'],['Feb','7'],['Feb','8'],['Feb','9'],['Feb','10'],['Feb','11'],['Feb','12'],['Feb','13'],['Feb','14'],['Feb','15'],['Feb','16'],['Feb','17'],['Feb','18'],['Feb','19'],['Feb','20'],['Feb','21'],['Feb','22'],['Feb','23'],['Feb','24'],['Feb','25'],['Feb','26'],['Feb','27'],['Feb','28'],['Feb','29'],['Mar','1'],['Mar','2'],['Mar','3'],['Mar','4'],['Mar','5'],['Mar','6'],['Mar','7'],['Mar','8'],['Mar','9'],['Mar','10'],['Mar','11'],['Mar','12'],['Mar','13'],['Mar','14'],['Mar','15'],['Mar','16'],['Mar','17'],['Mar','18'],['Mar','19'],['Mar','20'],['Mar','21'],['Mar','22'],['Mar','23'],['Mar','24'],['Mar','25'],['Mar','26'],['Mar','27'],['Mar','28'],['Mar','29'],['Mar','30'],['Mar','31'],['Apr','1'],['Apr','2'],['Apr','3'],['Apr','4'],['Apr','5'],['Apr','6'],['Apr','7'],['Apr','8'],['Apr','9'],['Apr','10'],['Apr','11'],['Apr','12'],['Apr','13'],['Apr','14'],['Apr','15'],['Apr','16'],['Apr','17'],['Apr','18'],['Apr','19'],['Apr','20'],['Apr','21'],['Apr','22'],['Apr','23'],['Apr','24'],['Apr','25'],['Apr','26'],['Apr','27'],['Apr','28'],['Apr','29'],['Apr','30'],['May','1'],['May','2'],['May','3'],['May','4'],['May','5'],['May','6'],['May','7'],['May','8'],['May','9'],['May','10']];

	// const areaIndex = {"Asia Pacific":1,"Europe":4,}
	var canvas = document.getElementById("canvas");
	var canHgt = 750;
	var canWid = 930;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	canvas.width = canWid;
	canvas.height = canHgt;
	ctx.scale(2,2)
	ctx.lineWidth = 2;
	ctx.strokeColor = '#000'
	
	const widthStep = canWid/dates.length;
	var maxArr = 20;
	var barArray = [];
	let count = 0; 
	let slideLabel;
	const ticks = dates.length;
	let tick;
	colorArray = ['rgb(42,140,42)','rgb(255,70,70)','rgb(255,135,0)']
	// colorArray =['rgba(0, 51, 68, 0.4)','rgba(221, 34, 34, 0.4)','rgba(158, 127, 4, 0.5)','rgba(158, 127, 4, 0.5)','rgba(34, 187, 255, 0.4)','rgba(102, 17, 153, 0.4)','rgba(0, 136, 136, 0.4)','rgba(220,220,220,0.4)','rgba(221, 34, 34, 0.5)'];
	
	let secs = 50;
	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}
	function getColor(area){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
	}
	
	function Bar(x, y, length, dl, color, index, label,offset){
		this.posX = x;
		this.width = (canHgt/maxArr)-2;
		this.posY = 2+ (y * (this.width+5));
		this.dl = dl;
		this.length = 20;
		this.color = color;
		this.index = index;
		this.label = label;
		this.dateCounter = this.dl[0];
		this.dateCounterLabel;
		this.valY;
		this.positionY;
		this.valYPrev;
		this.positionYPrev;
		this.offset = offset;
		if(this.offset == 4){
			this.heightF =3;
		}else{
			this.heightF =4;
		}
		if (this.label == 'India' || this.label == 'World'){
			this.lineWidth = 5;
		}else{
			this.lineWidth = 2;
		}
		this.update = function(i,dateCounter){
			this.index = i;
			this.tick = dateCounter
			this.dateCounter =this.dl[dateCounter]; 
			this.length = 5+(this.dl[dateCounter]);
			this.posY = 1+ (this.index * (this.width + 2));
			if(this.dateCounter>1000){
				this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
			}else{
				this.dateCounterLabel = this.dateCounter
			}
			this.valY = Math.log10(this.dl[this.tick]);
			this.positionY = canHgt - (this.valY-this.offset)*(canHgt/this.heightF);
			this.draw();
		};
		this.draw = function(){
			if(this.tick>0){
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.lineWidth = this.lineWidth
				this.valYPrev = Math.log10(this.dl[this.tick-1]);
				this.positionYPrev = canHgt - (this.valYPrev-this.offset)*(canHgt/this.heightF);

				ctx.moveTo((widthStep*(this.tick-1)),this.positionYPrev);
				ctx.lineTo((widthStep*this.tick),this.positionY)
				ctx.stroke();
				ctx.closePath();
				
			}
			
			if(tick == this.dl.length-1){
				ctx.beginPath();
				ctx.fillStyle = '#555'
				ctx.font = '500 22px monty';
				
				if((slideLabel !== 'deaths') && (this.label == 'World' || this.label == 'China' )){
					ctx.textAlign = 'right';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY-2);
				}else if((slideLabel !== 'deaths') && (this.label == 'Germany')){
					ctx.textAlign = 'left';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY+18);
				}else if((slideLabel !== 'deaths') && (this.label == 'France' || this.label == 'Spain')){
					ctx.textAlign = 'left';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY-6);
				}else if(slideLabel == 'deaths' && this.label == 'France'){
					ctx.textAlign = 'right';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY+18);
				}else if(slideLabel == 'deaths' && this.label == 'Russia'){
					ctx.textAlign = 'left';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY+18);
				}else if(slideLabel == 'confirmed' && this.label == 'Hong Kong'){
					ctx.textAlign = 'left';
					ctx.fillText(this.label,(widthStep*this.tick),this.positionY-18);
				}else{
					ctx.textAlign = 'left';	
					ctx.fillText(this.label,(widthStep*this.tick)+5,this.positionY+7);
				}
				
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#777';
				ctx.arc((widthStep*this.tick),this.positionY,3,0,2*Math.PI);
				ctx.fill();
				ctx.closePath();
			}

			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc((widthStep*this.tick),this.positionY,1.5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
		};
		this.update();
	}
	
	function animateCircles(tickCounter){
		ctx.setLineDash([])
		if(tickCounter!==tick && tickCounter<ticks){
			tick = tickCounter
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if((tickCounter+1)>9){
				$('.date').text((tickCounter+1))
			}else{
				$('.date').text('0'+(tickCounter+1))
			}
			if(tick%10 == 0){
				$('.bottomDates').append("<span class='active counter"+(tick)+"' style='left:"+widthStep*tick+"px;'>"+tick+"</span>")
			}
			// $('.stateName').addClass('active')
			$('.legendContainer').addClass('active');
			setTimeout(()=>{animateCircles(tickCounter+1)},secs)
		}else{
			// if(slideLabel == 'confirmed'){
			// 	setTimeout(()=>{$('.title h3').removeClass('confirmed')},2000)
			// 	setTimeout(()=>{init('recovered')},3000)
			// }else if(slideLabel == 'recovered'){
			// 	setTimeout(()=>{$('.title h3').removeClass('recovered')},2000)
			// 	setTimeout(()=>{init('deaths')},3000)
			// }
		}
		
	}

	
	var init = function(label){
		slideLabel = label;
		barArray = [];
		canvas.width = canWid;
		canvas.height = canHgt;
		
		// let tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
		// let txtarr = [1,10,100,1000,'10K','1L','10L','100L']
		// let grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
		// let numarr = [9,18,27,36,45,54,63,72,81,90];
		// let circArr = [-1.44, -1.31, -1.23, -1.15, -1.07, -0.98,-0.9,-0.85,-0.77,-0.72,-0.54,-0.42,-0.34]
		// let dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
		let tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
        let txtarr = [1,10,100,1000,'10K','1L','10L','100L']
        let grarr = [41.42,14.87,7.177,4.73,3.526,2.81];
        let numarr = [23,60,99];
        let circArr = [-1.273731075093857, -0.89,-0.60,-0.44890210054182716,-0.3365894965960431,-0.2691779250647427]
        let dtdarr = [2,5,10,15,20,25,14,15,16]
        let offset = 3;
        let heightF = 4;
        let factor = 1000;
		$('.bottomDates').html('');
		if(slideLabel == 'confirmed'){
			$('.title h3').addClass('confirmed')
		}else if(slideLabel == 'recovered'){
			$('.title h3').addClass('recovered')
		}else if(slideLabel == 'deaths'){
			tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
			txtarr = [1,10,100,1000,'10K','1L','10L','100L']
			grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
			numarr = [12,25,38,50,65,75,87,93,97,99];
			circArr = [-1.4222678110138751, -1.273731075093857, -1.1252091723954274, -0.9766617502434156, -0.89, -0.79,-0.75,-0.70,-0.65,-0.60,-0.44890210054182716,-0.3365894965960431,-0.2691779250647427]
			dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
			offset = 3;
			heightF = 4;
			factor = 1000;
			$('.bottom>span>i').text('*Day 0: The day deaths crossed 1k in any country')
			$('.title h3').addClass('deaths')
		}
		
		for (const country in dataTotalOld[label]) {
			if (dataTotalOld[label].hasOwnProperty(country)) {
				const element = dataTotalOld[label][country];
				// if(country == 'India'){
				// 	barArray.push(new Bar(0, count, element[0] , element, colorArray[8] , count, country,offset));
				// }else{
					barArray.push(new Bar(0, count, element[0] , element, colorArray[areaMap[country]] , count, country,offset));
                // }
                console.log(colorArray[areaMap[country]],country)
				
			}
			count++;
		}
		
		ctx.beginPath();
		ctx.setLineDash([1,5]);
		ctx.lineWidth =1;
		ctx.strokeStyle = '#111';
		ctx.moveTo(0,-10+(canHgt*1.4*(1-Math.log2(factor))/20));
		ctx.lineTo(canWid,-10+(canHgt*1.4*(1-Math.log2(factor))/20));
		ctx.stroke();
		ctx.closePath();

		for (let i = 0; i < tckarr.length; i++) {
			
			ctx.beginPath();
			ctx.setLineDash([3,5]);
			ctx.lineWidth =1;
			ctx.strokeStyle = '#777';
			ctx.fillStyle = '#777';
			const valY = Math.log10(tckarr[i]);
			console.log(valY)
			const positionY = canHgt - (valY-offset)*(canHgt/heightF)
			ctx.moveTo(0,positionY);
			ctx.lineTo(canWid,positionY)
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = '#777';
			ctx.font = '300 24px monty';
			ctx.textAlign = 'right';
			ctx.fillText(txtarr[i], canWid - 10, positionY);
			ctx.fill();
			ctx.closePath()
		}

		for (var i = 1; i < 100; i++) {
			for (var j = 0; j < grarr.length; j++) {
				ctx.beginPath();
				ctx.strokeStyle = '#0005';
				ctx.lineWidth = 1;
				const thisPos = Math.log10(factor*(Math.pow((100+grarr[j])/100,i)))
				const thisPosY = canHgt - (thisPos-offset)*(canHgt/heightF)
				const thisPosNext = Math.log10(factor*(Math.pow((100+grarr[j])/100,i+1)))
				const thisPosNextY = canHgt - (thisPosNext-offset)*(canHgt/heightF)

				ctx.moveTo((widthStep*i),thisPosY);
				ctx.lineTo((widthStep*(i+1)),thisPosNextY)
				ctx.stroke();
				ctx.closePath();
				ctx.fillStyle = '#777';
				if(numarr[j] && i==numarr[j]){

					ctx.save();
					ctx.beginPath();
					ctx.font = '300 21px monty';
					ctx.textAlign = 'right';
					ctx.translate((widthStep*(i)),thisPosY);
					
					ctx.rotate(circArr[j])
					ctx.fillText('Days to Double: '+dtdarr[j], 0,0);
					ctx.fill();
					ctx.closePath();
					ctx.restore();
				}else if(!numarr[j] && i===99){
					ctx.save();
					ctx.beginPath();
					ctx.font = '300 21px monty';
					ctx.textAlign = 'right';
					ctx.translate((widthStep*(i)),thisPosNextY);
					
					ctx.rotate(circArr[j])
					ctx.fillText('Days to Double: '+dtdarr[j], 0,0);
					ctx.fill();
					ctx.closePath()
					ctx.restore();
				}
			}
		}
		
		ctx.setLineDash([])
		setTimeout(()=>{
			animateCircles(0);
		},100)
	};
	setTimeout(()=>{
		init('confirmed');
	},1000);
})