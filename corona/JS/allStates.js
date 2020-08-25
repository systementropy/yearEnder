// const areaMap = {
// 	"Angola":2,"Benin":2,"Botswana":2,"Burkina Faso":2,"Burundi":2,"Cameroon":2,"Cabo Verde":2,"Central African Republic":2,"Chad":2,"Congo (Brazzaville)":2,"Cote d'Ivoire":2,"Congo (Kinshasa)":2,"Equatorial Guinea":2,"Eritrea":2,"Eswatini":2,"Ethiopia":2,"Gabon":2,"Gambia":2,"Ghana":2,"Guinea":2,"Guinea-Bissau":2,"Kenya":2,"Lesotho":2,"Liberia":2,"Madagascar":2,"Malawi":2,"Mali":2,"Mauritius":2,"Mozambique":2,"Namibia":2,"Niger":2,"Nigeria":2,"Rwanda":2,"Sao Tome and Principe":2,"Senegal":2,"Seychelles":2,"Sierra Leone":2,"South Africa":2,"South Sudan":2,"Tanzania":2,"Togo":2,"Uganda":2,"Zambia":2,"Zimbabwe":2,"Antigua and Barbuda":5,"Argentina":5,"Bahamas":5,"Barbados":5,"Belize":5,"Bolivia":5,"Brazil":5,"Canada":5,"Chile":5,"Colombia":5,"Costa Rica":5,"Cuba":5,"Dominica":5,"Dominican Republic":5,"Ecuador":5,"El Salvador":5,"Grenada":5,"Guatemala":5,"Guyana":5,"Haiti":5,"Honduras":5,"Jamaica":5,"Mexico":5,"Nicaragua":5,"Panama":5,"Paraguay":5,"Peru":5,"Saint Kitts and Nevis":5,"Saint Lucia":5,"Saint Vincent and the Grenadines":5,"Suriname":5,"Trinidad and Tobago":5,"US":5,"Uruguay":5,"Venezuela":5,"Algeria":6,"Bahrain":6,"Comoros":6,"Djibouti":6,"Egypt":6,"Iraq":6,"Jordan":6,"Kuwait":6,"Lebanon":6,"Libya":6,"Mauritania":6,"Morocco":6,"Oman":6,"Qatar":6,"Saudi Arabia":6,"Somalia":6,"Sudan":6,"Syrian Arab Republic":6,"Tunisia":6,"United Arab Emirates":6,"Yemen":6,"Afghanistan":1,"Australia":1,"Bangladesh":1,"Bhutan":1,"Brunei":1,"Cambodia":1,"China":1,"Taiwan":1,"North Korea":1,"Fiji":1,"India":1,"Indonesia":1,"Iran":1,"Japan":1,"Kiribati":1,"South Korea":1,"Lao P.D.R.":1,"Malaysia":1,"Maldives":1,"Marshall Islands":1,"Micronesia":1,"Mongolia":1,"Myanmar":1,"Nauru":1,"Nepal":1,"New Zealand":1,"Pakistan":1,"Papua New Guinea":1,"Philippines":1,"Samoa":1,"Singapore":1,"Solomon Islands":1,"Sri Lanka":1,"Thailand":1,"Timor-Leste":1,"Tonga":1,"Tuvalu":1,"Vanuatu":1,"Vietnam":1,"Armenia":3,"Azerbaijan":3,"Belarus":3,"Kazakhstan":3,"Kyrgyzstan":3,"Russia":3,"Tajikistan":3,"Turkmenistan":3,"Uzbekistan":3,"Albania":4,"Andorra":4,"Austria":4,"Belgium":4,"Bosnia and Herzegovina":4,"Bulgaria":4,"Croatia":4,"Cyprus":4,"Czechia":4,"Denmark":4,"Estonia":4,"Finland":4,"France":4,"Georgia":4,"Germany":4,"Greece":4,"Hungary":4,"Iceland":4,"Ireland":4,"Israel":4,"Italy":4,"Latvia":4,"Liechtenstein":4,"Lithuania":4,"Luxembourg":4,"Malta":4,"Moldova":4,"Monaco":4,"Montenegro":4,"Netherlands":4,"Norway":4,"Poland":4,"Portugal":4,"Romania":4,"San Marino":4,"Serbia":4,"Slovakia":4,"Slovenia":4,"Spain":4,"Sweden":4,"Switzerland":4,"North Macedonia ":4,"Turkey":4,"Ukraine":4,"United Kingdom":4,"UK":4,"Holy See":4,"World":2
// }
// var jsondata = JSON.parse($.ajax({'url': "/data/global_confirmed.json", 'async': false}).responseText);
// for (const key in jsondata) {
// 	if (jsondata.hasOwnProperty(key)) {
// 		const element = jsondata[key];
// 		let indexNon;
// 		for (let index = 0; index < element.length; index++) {
// 			if(element[index] < 100){

// 			}else{
// 				indexNon = index;
// 				break;
// 			}
// 		}
// 		jsondata[key] = [...element.slice(indexNon)]
// 	}
// }

// console.log(newjsondata);
const arrayId = {
	"Andhra Pradesh":["Andhra Pradesh","Andhra"],
	"Delhi":["Delhi","Delhi"],
	"Haryana":["Haryana","Haryana"],
	"Karnataka":["Karnataka","Karnataka"],
	"Kerala":["Kerala","Kerala"],
	"Maharashtra":["Maharashtra","Maharashtra"],
	"Odisha":["Odisha","Orissa"],
	"Pondicherry":["Pondicherry"],
	"Punjab":["Punjab","Punjab"],
	"Rajasthan":["Rajasthan","Rajasthan"],
	"Tamil Nadu":["Tamil Nadu","Tamilnadu"],
	"Telangana":["Telangana","Telangana"],
	"Union Territory of Chandigarh":["Chandigarh","Chandigarh"],
	"Chandigarh":["Chandigarh","Chandigarh"],
	"Union Territory of Jammu and Kashmir":["Jammu & Kashmir","J_K"],
	"Jammu and Kashmir":["Jammu & Kashmir","J_K"],
	"Union Territory of Ladakh":["Ladakh","Laddakh"],
	"Ladakh":["Ladakh","Laddakh"],
	"Uttar Pradesh":["Uttar Pradesh","UP"],
	"UP":["Uttar Pradesh","UP"],
	"Uttarakhand":["Uttarakhand","UK"],
	"West Bengal":["West Bengal","WB"],
	"Chhattisgarh":["Chhattisgarh","Chhatisgarh"],
	"Gujarat":["Gujarat","Gujrat"],
	"Puducherry":["Puducherry","Puducherry"],
	"Madhya Pradesh":["Madhya Pradesh","MP"],
	"Himachal Pradesh":["Himachal Pradesh","Himachal"],
	"Bihar":["Bihar","Bihar"],
	"Manipur":["Manipur","Manipur"],
	"Mizoram":["Mizoram","Mizoram"],
	"Andaman and Nicobar Islands":["A & N Islands","andaman"],
	"Goa":["Goa","Goa"],
	"Arunachal Pradesh":["Arunachal Pradesh","Arunachal"],
	"Jharkhand":["Jharkhand","Jharkhand"],
	"Assam":["Assam","Assam"],
	"Tripura":["Tripura","Tripura"],
	"Nagaland":["Nagaland","Nagaland"],
	"Meghalaya":["Meghalaya","Meghayala"],
	"Dadra and Nagar Haveli and Daman and Diu":["DNHDD","DnNHaweli"],
	"Sikkim":["Sikkim","Sikkim"],
	"Daman & Diu":["Daman & Diu","Daman"]
};
const todayData = {
	"Andaman and Nicobar Islands":[864,1963,33],
	"Andhra Pradesh":[89742,260087,3282],
	"Arunachal Pradesh":[961,2297,5],
	"Assam":[19598,70900,242],
	"Bihar":[23111,98325,511],
	"Chandigarh":[1389,1492,37],
	"Chhattisgarh":[7790,12931,197],
	"Dadra and Nagar Haveli and Daman and Diu":[406,1753,2],
	"Delhi":[11778,145388,4300],
	"Goa":[3383,10472,144],
	"Gujarat":[14517,69212,2895],
	"Haryana":[8961,44822,603],
	"Himachal Pradesh":[1511,3461,29],
	"Jammu and Kashmir":[7198,24832,617],
	"Jharkhand":[9736,19629,312],
	"Karnataka":[83567,189564,4683],
	"Kerala":[20394,37645,223],
	"Ladakh":[765,1491,23],
	"Madhya Pradesh":[11510,40390,1229],
	"Maharashtra":[171859,488271,22253],
	"Manipur":[1608,3616,22],
	"Meghalaya":[1133,776,8],
	"Mizoram":[459,459,0],
	"Nagaland":[1383,2294,9],
	"Odisha":[23715,54406,409],
	"Puducherry":[3706,6657,159],
	"Punjab":[14165,26528,1086],
	"Rajasthan":[14330,55324,955],
	"Sikkim":[529,871,3],
	"Tamil Nadu":[53541,319327,6517],
	"Telangana":[22919,82411,761],
	"Tripura":[2488,6341,73],
	"Uttarakhand":[4444,10480,200],
	"Uttar Pradesh":[49242,135613,2926],
	"West Bengal":[28069,108007,2794],
}
const legends = [
		
];
const csvData = $.ajax({'url': "/data/datasets_557629_1428172_covid_19_india.csv", 'async': false}).responseText;
let rowCsvData = csvData.split(/\r?\n|\r/);
const dateWiseData = {}


for (let index = 1; index < rowCsvData.length; index++) {
	const element = rowCsvData[index].split(',');
	const prement = rowCsvData[index-1];
	if(!element[1]){
		// console.log(element)
	}else{
		let thisDate = element[1].split('/');
		let thisState = element[3]
		// console.log(thisDate)
		if(index>1 && thisDate[0] === legends[legends.length-1][0]){
			
		}else if(index == 1){
			legends.push(thisDate)
		}else if(index>1 && thisDate[0] !== legends[legends.length-1][0]){
			legends.push(thisDate)
		}
		if(!dateWiseData[thisState]){
			let emptyArray = new Array(Math.max(0,legends.length-1))
			// emptyArray.fill(0,Math.max(0,legends.length-1))
			// console.log(legends.length,emptyArray,thisState)
			// dateWiseData[thisState] = [].fill(0,legends.length-1)
			dateWiseData[thisState] = emptyArray;
			dateWiseData[thisState].push(parseInt(element[8]))
		}else if(index == 1){
			dateWiseData[thisState] = [];
			dateWiseData[thisState].push(parseInt(element[8]))
		}else{
			dateWiseData[thisState].push(parseInt(element[8]))
		}
		if(index === 1){
			// console.log(element[1],thisDate)
			// console.log(element)
		}	
	}
	
	
}
for (const key in dateWiseData) {
	if (dateWiseData.hasOwnProperty(key)) {
		const element = dateWiseData[key];
		let indexNon;
		for (let index = 0; index < element.length; index++) {
			if(element[index] < 100 || !element[index]){

			}else{
				indexNon = index;
				break;
			}
		}
		dateWiseData[key] = [...element.slice(indexNon)]
	}
}
console.log(dateWiseData);
const newjsondata = {...dateWiseData}
const dataTotalOld = {
	"confirmed":newjsondata,
};
console.log(dataTotalOld);
const dates = [['Jan','22'],['Jan','23'],['Jan','24'],['Jan','25'],['Jan','26'],['Jan','27'],['Jan','28'],['Jan','29'],['Jan','30'],['Jan','31'],['Feb','1'],['Feb','2'],['Feb','3'],['Feb','4'],['Feb','5'],['Feb','6'],['Feb','7'],['Feb','8'],['Feb','9'],['Feb','10'],['Feb','11'],['Feb','12'],['Feb','13'],['Feb','14'],['Feb','15'],['Feb','16'],['Feb','17'],['Feb','18'],['Feb','19'],['Feb','20'],['Feb','21'],['Feb','22'],['Feb','23'],['Feb','24'],['Feb','25'],['Feb','26'],['Feb','27'],['Feb','28'],['Feb','29'],['Mar','1'],['Mar','2'],['Mar','3'],['Mar','4'],['Mar','5'],['Mar','6'],['Mar','7'],['Mar','8'],['Mar','9'],['Mar','10'],['Mar','11'],['Mar','12'],['Mar','13'],['Mar','14'],['Mar','15'],['Mar','16'],['Mar','17'],['Mar','18'],['Mar','19'],['Mar','20'],['Mar','21'],['Mar','22'],['Mar','23'],['Mar','24'],['Mar','25'],['Mar','26'],['Mar','27'],['Mar','28'],['Mar','29'],['Mar','30'],['Mar','31'],['Apr','1'],['Apr','2'],['Apr','3'],['Apr','4'],['Apr','5'],['Apr','6'],['Apr','7'],['Apr','8'],['Apr','9'],['Apr','10'],['Apr','11'],['Apr','12'],['Apr','13'],['Apr','14'],['Apr','15'],['Apr','16'],['Apr','17'],['Apr','18'],['Apr','19'],['Apr','20'],['Apr','21'],['Apr','22'],['Apr','23'],['Apr','24'],['Apr','25'],['Apr','26'],['Apr','27'],['Apr','28'],['Apr','29'],['Apr','30'],['May','1'],['May','2'],['May','3'],['May','4'],['May','5'],['May','6'],['May','7'],['May','8'],['May','9'],['May','10'],['May','11'],['May','12'],['May','13'],['May','14'],['May','15'],['May','16'],['May','17'],['May','18'],['May','19'],['May','20'],['May','21'],['May','22'],['May','23'],['May','24'],['May','25'],['May','26'],['May',27],['May',28],['May',29],['May',30],['May',31],['June',1],['June',2],['June',3],['June',4],['June',5],['June',6],['June',7],['June',8],['June',9],['June',10],['June',11],['June',12],['June',13],['June',14],['June',15],['June',16],['June',17],['June',18],['June',19],['June',20],['June',21],['June',22],['June',23],['June',24],['June',25],['June',26],['June',27],['June',28],['June',29],['June',30],['July',1],['July',2],['July',3],['July',4],['July',5],['July',6],['July',7],['July',8],['July',9],['July',10],['July',11],['July',12],['July',13],['July',14],['July',15],['July',16],['July',17],['July',18],['July',19],['July',20],['July',21],['July',22],['July',23],['July',24],['July',25],['July',26],['July',27],['July',28],['July',29],['July',30],['July',31],['Aug',1],['Aug',2],['Aug',3],['Aug',4],['Aug',5],['Aug',6],['Aug','7'],['Aug','8'],['Aug','9'],['Aug','10'],['Aug','11'],['Aug','12'],['Aug','13'],['Aug','14'],['Aug','15'],['Aug','16'],['Aug','17'],['Aug','18'],['Aug','19'],['Aug','20'],['Aug','21'],['Aug','22'],['Aug','23']
];

// const areaIndex = {"Asia Pacific":1,"Europe":4,}
var canvas = document.getElementById("canvas");
var canHgt = 400;
var canWid = 700;
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


var canvas2Label = document.getElementById("canvas2Label");
var canHgtLbl = 400;
var canWidLbl = 70;
canvas2Label.style.height = canHgtLbl+'px';
canvas2Label.style.width = canWidLbl+'px';
canvas2Label.height = canHgtLbl*2;
canvas2Label.width = canWidLbl*2;
var ctx2 = canvas2Label.getContext("2d");
ctx2.strokeStyle = '#FFFDDD';
ctx2.fillStyle = 'rgba(112,0,0,1)';
canvas2Label.width = canWidLbl;
canvas2Label.height = canHgtLbl;

const widthStep = canWid/180;
var maxArr = 20;
var barArray = [];
let count = 0; 
let slideLabel;
const ticks = 180;
let tick;

colorArray =['#105499','#EB638D','#9DBF57','rgba(0, 51, 68, 0.4)','rgba(221, 34, 34, 0.4)','rgba(158, 127, 4, 0.5)','rgba(158, 127, 4, 0.5)','rgba(34, 187, 255, 0.4)','rgba(102, 17, 153, 0.4)','rgba(0, 136, 136, 0.4)','rgba(220,220,220,0.4)','rgba(221, 34, 34, 0.5)'];
const colorCont = {"India":"#9DBF57","US":"#105499","Brazil":"#EB638D"}
let secs = 10;
function getRandom (min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
function getColor(area){
	return colorArray[Math.floor(Math.random() * (colorArray.length))];
}

function Bar(x, y, length, dl, color, index, label,offset,dataToday){
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
	this.offset =2;
	// if(this.offset == 4){
	// 	this.heightF =3;
	// }else{
	// 	this.heightF =4;
	// }
	this.dataToday = dataToday;
	if(!this.dataToday || this.dataToday.length!==3){
		console.log(this.label);
	}
	this.totalConfirmed = dataToday[0]+dataToday[1]+dataToday[2]
	this.heightF =5;
	if (this.label == 'India' || this.label == 'US' || this.label == 'Brazil'){
		this.lineWidth = 5;
		this.color = colorCont[this.label];
	}else{
		this.lineWidth = 1;
	}
	this.update = function(i,dateCounter,barIndex){
		if(barIndex === 999){
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
			// this.valY = Math.log10(this.dl[this.tick]-dataTotalOld['recovered'][this.label][this.tick]-dataTotalOld['deaths'][this.label][this.tick]);
			this.valY = Math.log10(this.dl[this.tick]);
			this.positionY = canHgt - (this.valY-this.offset)*(canHgt/this.heightF);
			this.draw();
		}else if(this.index !== barIndex){

			this.lineWidth = 1;
			this.color = '#9995';
			for (let datesCount = 0; datesCount < ticks; datesCount++) {
				
				this.tick = datesCount
				this.dateCounter =this.dl[datesCount]; 
				this.length = 5+(this.dl[datesCount]);
				this.posY = 1+ (this.index * (this.width + 2));
				
				this.valY = Math.log10(this.dl[this.tick]);
				this.positionY = canHgt - (this.valY-this.offset)*(canHgt/this.heightF);
				this.draw();
			}
		}else{

			this.lineWidth = 4;
			this.color = '#C54C4C';
			for (let datesCount = 0; datesCount < ticks; datesCount++) {
				
				this.tick = datesCount
				this.dateCounter =this.dl[datesCount]; 
				this.length = 5+(this.dl[datesCount]);
				this.posY = 1+ (this.index * (this.width + 2));
				
				this.valY = Math.log10(this.dl[this.tick]);
				this.positionY = canHgt - (this.valY-this.offset)*(canHgt/this.heightF);
				this.draw(true);
			}
		}
		
	};
	this.draw = function(label){
		if(this.tick>0){
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.lineWidth = this.lineWidth
			// this.valYPrev = Math.log10(this.dl[this.tick-1]-dataTotalOld['recovered'][this.label][this.tick-1]-dataTotalOld['deaths'][this.label][this.tick-1]);
			this.valYPrev = Math.log10(this.dl[this.tick-1]);
			this.positionYPrev = canHgt - (this.valYPrev-this.offset)*(canHgt/this.heightF);

			ctx.moveTo((widthStep*(this.tick-1)),this.positionYPrev);
			ctx.lineTo((widthStep*this.tick),this.positionY)
			ctx.stroke();
			ctx.closePath();
			
		}
		
		if(this.tick == this.dl.length-1){
			ctx.beginPath();
			ctx.fillStyle = '#555'
			ctx.font = '500 15px/19px Montserrat';
			if (this.label == 'India' || this.label == 'US' || this.label == 'Brazil'){
				ctx.fillText(this.label,widthStep*this.tick+10,this.positionY+3);
			}
			
			ctx.closePath();

			ctx.beginPath();
			ctx.fillStyle = '#7777';
			ctx.arc((widthStep*this.tick),this.positionY,3,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
		}
		if(label==true && this.tick == this.dl.length-1){
			if(this.index>0){
				if(arrayId[barArray[this.index-1].label][0] === 'A & N Islands'){
					$('.'+arrayId[barArray[this.index-1].label][1]).css({'fill':'#FFF'})
				}else if(arrayId[barArray[this.index-1].label] !== undefined){
					$('#'+arrayId[barArray[this.index-1].label][1]).css({'fill':'#FFF'})
				}else {
					console.log(barArray[this.index-1].label,arrayId[barArray[this.index-1].label]);
				}
			}
			$('.stateName').html(arrayId[this.label][0]);
            $('.confirmedData').html(
                this.dataToday[0]>1000?((this.dataToday[0]/1000).toFixed(1)+'K'):this.dataToday[0]
				);
            $('.recoveredData').html(
                this.dataToday[1]>1000?((this.dataToday[1]/1000).toFixed(1)+'K'):this.dataToday[1]
				);
            $('.deathsData').html(
                this.dataToday[2]>1000?((this.dataToday[2]/1000).toFixed(1)+'K'):this.dataToday[2]
				);
			if(arrayId[this.label][0] === 'A & N Islands'){
				$('.'+arrayId[this.label][1]).css({'fill':'#C54C4C'})
			}else if(arrayId[this.label] !== undefined){
				$('#'+arrayId[this.label][1]).css({'fill':'#C54C4C'})
			}else {
				console.log(this.label,arrayId[this.label]);
			}
		}

		ctx.beginPath();
		ctx.fillStyle = this.color;
		// ctx.arc((widthStep*this.tick),this.positionY,1.5,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
	};
	this.update();
}

function animateCircles(tickCounter, indexCountry){
	ctx.setLineDash([])
	if(tickCounter!==tick && tickCounter<ticks && indexCountry === 9999){
		tick = tickCounter
		for (var i = 0; i < barArray.length; i++) {
			barArray[i].update(i,tick,999);
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
		setTimeout(()=>{animateCircles(tickCounter+1,9999)},secs)
	}else{
		ctx.setLineDash([])
		indexCountry===9999?indexCountry=-1:'';
		if(indexCountry<barArray.length){

			ctx.clearRect(0,0,canWid,canHgt)
			for (var i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tickCounter,indexCountry);
			}
			setTimeout(()=>{animateCircles(tickCounter,indexCountry+1)},secs *100)			
		}
	}
	
}

var init = function(label){
	slideLabel = label;
	barArray = [];
	canvas.width = canWid;
	canvas.height = canHgt;
	
	let tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
	let txtarr = [1,10,100,1000,'10K','1L','10L','100L']
	let grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
	let numarr = [9,18,27,36,45,54,63,72,81,90];
	let circArr = [-1.44, -1.31, -1.23, -1.15, -1.07, -0.98,-0.9,-0.85,-0.77,-0.72,-0.54,-0.42,-0.34]
	let dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
	let offset = 2;
	let heightF = 5;
	let factor = 10000;
	$('.bottomDates').html('');
	if(slideLabel == 'confirmed'){
		$('.title h3').addClass('confirmed')
	}else if(slideLabel == 'recovered'){
		$('.title h3').addClass('recovered')
	}else if(slideLabel == 'deaths'){
		tckarr = [1,10,50,100,500,1000,5000,10000,100000,1000000,10000000]
		txtarr = [1,10,,100,,1000,,'10K','1L','10L','100L']
		grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
		numarr = [12,25,38,50,65,75,87,93,97,99];
		circArr = [-1.4222678110138751, -1.273731075093857, -1.1252091723954274, -0.9766617502434156, -0.89, -0.79,-0.75,-0.70,-0.65,-0.60,-0.44890210054182716,-0.3365894965960431,-0.2691779250647427]
		dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
		offset = 3;
		heightF = 5;
		factor = 1000;
		$('.bottom>span>i').text('*Day 0: The day deaths crossed 1k in any country')
		$('.title h3').addClass('deaths')
	}
	tckarr = [1,10,100,1000,10000,100000,1000000,10000000]
	txtarr = [1,10,100,'1K','10K','1L','10L','100L']
	
	tckarr = [10,100,200,400,1000,2000,4000,10000,20000,40000,100000,200000,400000,1000000,2000000,4000000,10000000]
	txtarr = [10,100,'','','1K','','','10K','','','1L','','','10L','','','100L']

	grarr = [100,41.42,25.992,18.92,14.87,12.246,10.4,9.05,8,7.177,4.73,3.526,2.81];
	numarr = [12,25,38,50,65,75,87,93,97,99];
	circArr = [-1.4222678110138751, -1.273731075093857, -1.1252091723954274, -0.9766617502434156, -0.89, -0.79,-0.75,-0.70,-0.65,-0.60,-0.44890210054182716,-0.3365894965960431,-0.2691779250647427]
	dtdarr = [1,2,3,4,5,6,7,8,9,10,15,20,25,14,15,16]
	offset = 2;
	heightF = 5;
	factor = 1000;
	for (const country in dataTotalOld[label]) {
		if (dataTotalOld[label].hasOwnProperty(country)) {
			const element = dataTotalOld[label][country];
			if(country == 'Unassigned' || country == 'Dadar Nagar Haveli' || country == 'Daman & Diu'){
				// barArray.push(new Bar(0, count, element[0] , element, colorArray[8] , count, country,offset));
			}else{
				barArray.push(new Bar(0, count, element[0] , element, '#99999955' , count, country,offset,todayData[country]));
			}
			
		}
		count++;
		
	}
	console.log(barArray);
	barArray.sort(function(a,b){
        return ((b.label)-(a.label))
	})
	console.log(barArray);
	ctx.beginPath();
	// ctx.setLineDash([1,5]);
	ctx.lineWidth =1;
	ctx.strokeStyle = '#111';
	ctx.moveTo(0,-10+(canHgt*1.4*(1-Math.log2(factor))/20));
	ctx.lineTo(canWid,-10+(canHgt*1.4*(1-Math.log2(factor))/20));
	ctx.stroke();
	ctx.closePath();

	for (let i = 0; i < tckarr.length; i++) {
		
		ctx.beginPath();
		ctx.setLineDash([]);
		ctx.lineWidth =1;
		txtarr[i]?ctx.fillStyle = '#777':ctx.fillStyle = '#AAA'
		const valY = Math.log10(tckarr[i]);
		// console.log(valY)
		const positionY = canHgt - (valY-offset)*(canHgt/heightF)
		ctx.moveTo(0,positionY);
		// txtarr[i]?ctx.rect(0,positionY,canWid,0.5):''
		ctx.fill();
		txtarr[i]?ctx2.rect(0,positionY,25,0.5):ctx2.rect(0,positionY,15,0.5)
		ctx2.fill();
		ctx.closePath();
		ctx2.beginPath();
		ctx2.fillStyle = '#7a7a7a';
		ctx2.font = '600 15px/19px Montserrat';
		ctx2.textAlign = 'left';
		ctx2.fillText(txtarr[i], canWidLbl - 40, positionY);
		ctx2.fill();
		ctx2.closePath()
	}

	
	
	ctx.setLineDash([])
	setTimeout(()=>{
		animateCircles(0,9999);
	},100)
};
setTimeout(()=>{
	init('confirmed');
},1000);
