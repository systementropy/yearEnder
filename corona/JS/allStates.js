const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const arrayId = {
	"Andhra Pradesh":["AP","Andhra"],
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
	"Uttar Pradesh":["UP","UP"],
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
const todayData = [
	["Andaman and Nicobar Islands",186],
	["Andhra Pradesh",51060],
	["Arunachal Pradesh",2989],
	["Assam",33467],
	["Bihar",11523],
	["Chandigarh",1604],
	["Chhattisgarh",27857],
	["Dadra and Nagar Haveli and Daman and Diu",99],
	["Delhi",23080],
	["Goa",4803],
	["Gujarat",16718],
	["Haryana",11822],
	["Himachal Pradesh",3156],
	["Jammu and Kashmir",14696],
	["Jharkhand",10436],
	["Karnataka",115496],
	["Kerala",84958],
	["Ladakh",1166],
	["Madhya Pradesh",18757],
	["Maharashtra",252721],
	["Manipur",2696],
	["Meghalaya",2217],
	["Mizoram",291],
	["Nagaland",1155],
	["Odisha",28006],
	["Puducherry",4513],
	["Punjab",12895],
	["Rajasthan",21215],
	["Sikkim",598],
	["Tamil Nadu",45881],
	["Telangana",26644],
	["Tripura",4876],
	["Uttarakhand",8701],
	["Uttar Pradesh",45024],
	["West Bengal",27717],
]
todayData.sort(function(a,b){
	return ((b[1])-(a[1]))
})
console.log(todayData);
const legends = [
		
];
const csvData = $.ajax({'url': "/data/covid_19_india.csv", 'async': false}).responseText;
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
			dateWiseData[thisState].push(parseInt(element[8]-element[7]-element[6]))
		}else if(index == 1){
			dateWiseData[thisState] = [];
			dateWiseData[thisState].push(parseInt(element[8]-element[7]-element[6]))
		}else{
			dateWiseData[thisState].push(parseInt(element[8]-element[7]-element[6]))
		}
		if(index === 1){
			// console.log(element[1],thisDate)
			// console.log(element)
		}	
	}
	
	
}
// for (const key in dateWiseData) {
// 	if (dateWiseData.hasOwnProperty(key)) {
// 		const element = dateWiseData[key];
// 		let indexNon;
// 		for (let index = 0; index < element.length; index++) {
// 			if(element[index] < 10 || !element[index]){

// 			}else{
// 				indexNon = index;
// 				break;
// 			}
// 		}
// 		dateWiseData[key] = [...element.slice(indexNon)]
// 	}
// }
console.log(dateWiseData);
const newjsondata = {...dateWiseData}
const dataTotalOld = {
	"confirmed":newjsondata,
};
console.log(dataTotalOld);
const dates = [['Jan','22'],['Jan','23'],['Jan','24'],['Jan','25'],['Jan','26'],['Jan','27'],['Jan','28'],['Jan','29'],['Jan','30'],['Jan','31'],['Feb','1'],['Feb','2'],['Feb','3'],['Feb','4'],['Feb','5'],['Feb','6'],['Feb','7'],['Feb','8'],['Feb','9'],['Feb','10'],['Feb','11'],['Feb','12'],['Feb','13'],['Feb','14'],['Feb','15'],['Feb','16'],['Feb','17'],['Feb','18'],['Feb','19'],['Feb','20'],['Feb','21'],['Feb','22'],['Feb','23'],['Feb','24'],['Feb','25'],['Feb','26'],['Feb','27'],['Feb','28'],['Feb','29'],['Mar','1'],['Mar','2'],['Mar','3'],['Mar','4'],['Mar','5'],['Mar','6'],['Mar','7'],['Mar','8'],['Mar','9'],['Mar','10'],['Mar','11'],['Mar','12'],['Mar','13'],['Mar','14'],['Mar','15'],['Mar','16'],['Mar','17'],['Mar','18'],['Mar','19'],['Mar','20'],['Mar','21'],['Mar','22'],['Mar','23'],['Mar','24'],['Mar','25'],['Mar','26'],['Mar','27'],['Mar','28'],['Mar','29'],['Mar','30'],['Mar','31'],['Apr','1'],['Apr','2'],['Apr','3'],['Apr','4'],['Apr','5'],['Apr','6'],['Apr','7'],['Apr','8'],['Apr','9'],['Apr','10'],['Apr','11'],['Apr','12'],['Apr','13'],['Apr','14'],['Apr','15'],['Apr','16'],['Apr','17'],['Apr','18'],['Apr','19'],['Apr','20'],['Apr','21'],['Apr','22'],['Apr','23'],['Apr','24'],['Apr','25'],['Apr','26'],['Apr','27'],['Apr','28'],['Apr','29'],['Apr','30'],['May','1'],['May','2'],['May','3'],['May','4'],['May','5'],['May','6'],['May','7'],['May','8'],['May','9'],['May','10'],['May','11'],['May','12'],['May','13'],['May','14'],['May','15'],['May','16'],['May','17'],['May','18'],['May','19'],['May','20'],['May','21'],['May','22'],['May','23'],['May','24'],['May','25'],['May','26'],['May',27],['May',28],['May',29],['May',30],['May',31],['June',1],['June',2],['June',3],['June',4],['June',5],['June',6],['June',7],['June',8],['June',9],['June',10],['June',11],['June',12],['June',13],['June',14],['June',15],['June',16],['June',17],['June',18],['June',19],['June',20],['June',21],['June',22],['June',23],['June',24],['June',25],['June',26],['June',27],['June',28],['June',29],['June',30],['July',1],['July',2],['July',3],['July',4],['July',5],['July',6],['July',7],['July',8],['July',9],['July',10],['July',11],['July',12],['July',13],['July',14],['July',15],['July',16],['July',17],['July',18],['July',19],['July',20],['July',21],['July',22],['July',23],['July',24],['July',25],['July',26],['July',27],['July',28],['July',29],['July',30],['July',31],['Aug',1],['Aug',2],['Aug',3],['Aug',4],['Aug',5],['Aug',6],['Aug','7'],['Aug','8'],['Aug','9'],['Aug','10'],['Aug','11'],['Aug','12'],['Aug','13'],['Aug','14'],['Aug','15'],['Aug','16'],['Aug','17'],['Aug','18'],['Aug','19'],['Aug','20'],['Aug','21'],['Aug','22'],['Aug','23']
];
const jsonData = JSON.parse($.ajax({'url': "/data/timeseries.json", 'async': false}).responseText);
console.log(typeof(jsonData));
for (const key in jsonData) {
	if (jsonData.hasOwnProperty(key)) {
		const element = jsonData[key];
		console.log(element);
	}
}
// const areaIndex = {"Asia Pacific":1,"Europe":4,}
var canvas = document.getElementById("canvas");
var canHgt = 400;
var canWid = 650;

canvas.height = canHgt*2;
canvas.width = canWid*2;
canvas.style.height = canHgt+'px';
canvas.style.width = canWid+'px';
var ctx = canvas.getContext("2d");
ctx.strokeStyle = '#FFFDDD';
ctx.fillStyle = 'rgba(255,0,0,1)';
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
ctx2.strokeStyle = '#7a7a7a';
ctx2.fillStyle = '#7a7a7a';
ctx2.scale(2,2)
const heightFactor = 310000;
const ticks = newjsondata["Maharashtra"].length-62;
const widthStep = canWid/ticks;
var maxArr = 20;
var barArray = [];
let count = 0; 
let slideLabel;

let tick;

colorArray =['#efefef','#FFEBEB','#FFD5D5','#FFD5D5','#FEAAAA',"#FFC0C0",'#FFA2A2','#FE9595','#FE7F7F','#E26666','#C54C4C','#A93333','#A93333','#700000'];
const colorCont = {"India":"#9DBF57","US":"#105499","Brazil":"#EB638D"}
let secs = 100;
function getRandom (min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
function getColor(area){
	return colorArray[Math.floor(Math.random() * (colorArray.length))];
}

function plotEachState(index, tick){
	
	const element = barArray[index]
	let activeNum = element["dl"][tick];
	let activePrevNum = element["dl"][tick-1];
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';
	ctx.beginPath();
	ctx.strokeStyle = element["color"];
	ctx.moveTo((widthStep/2)+(widthStep*(tick-1)),(canHgt*(1-((activePrevNum)/heightFactor))));
	ctx.lineTo((widthStep/2)+(widthStep*tick),(canHgt*(1-((activeNum)/heightFactor))))
	ctx.stroke();
	ctx.closePath();

}

function animateCircles(tickCounter, indexCountry){
	ctx.setLineDash([])
	if(tickCounter!==tick && tickCounter<ticks){
		tick = tickCounter
		for (var i = 0; i < barArray.length; i++) {
			plotEachState(i,tick)
		}
		
		setTimeout(()=>{animateCircles(tickCounter+1,9999)},secs)
	}else{
		$('.allCountries .stateName, .allCountries .statContainer').css({opacity: 1})
		let totalWorst = 0;
		for (let index = 0; index < barArray.length; index++) {
			const element = barArray[index]["dl"];
			totalWorst += element[element.length-1]
		}
		totalWorst = (totalWorst/100000).toFixed(2);
		$('.confirmedData').text(totalWorst+'L')
		$('.recoveredData').text('9.19L')
		$('.legend2').hide(0)
		$('.legend1').show(0).text('As on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am')
		$('.stateName').text('Share of Active Cases : '+(100*totalWorst/9.19).toFixed(1)+'%')
	}
	
}

var init = function(label){
	barArray =[]
	for (const country in dataTotalOld[label]) {
		if (dataTotalOld[label].hasOwnProperty(country)) {
			const element = dataTotalOld[label][country].slice(62);
			
			if(country == 'Unassigned' || country == 'Dadar Nagar Haveli' || country == 'Daman & Diu'){
				// barArray.push(new Bar(0, count, element[0] , element, colorArray[8] , count, country,offset));
			}else{
				barArray.push({
					"x":0,
					"y":count,
					"length":element.length,
					"color":null ,
					"dl":element,
					"index":count,
					"label":country,
					"offset":1,
					// "dataToday":todayData[country]
				});
			}
			
		}
		count++;
		
	}

	console.log(barArray);
	barArray.sort(function(a,b){
        return ((b.dl[b.dl.length-1])-(a.dl[a.dl.length-1]))
	})
	console.log(barArray);
	barArray = barArray.slice(0,7)
	for (let index = 0; index < barArray.length; index++) {
		barArray[index].color =  colorArray[colorArray.length-1	-(index*2)]
		if(barArray["label"] === 'Andaman and Nicobar Islands'){
			$('.'+arrayId[barArray[index]["label"]][1]).css({'fill':barArray[index].color})
		}else{
			$('#'+arrayId[barArray[index]["label"]][1]).css({'fill':barArray[index].color})
		}
		$('.legend2>div').eq(index).text(arrayId[barArray[index]["label"]][0])
	}
	console.log(barArray);

	for (let counter = 0; counter < 2700; counter+=0.5) {
		ctx2.lineWidth =1;
		ctx2.beginPath();
		ctx2.font = '500 18px Montserrat'
		ctx2.textAlign = 'left';
		if(counter%1 === 0 && counter!==0){
			ctx2.fillText(counter+'L', 0 + 30, 6+(canHgt*(1-(counter*100000/heightFactor))));
			// ctx2.fill();
		}else if(counter===0){
			ctx2.fillText(counter+'L', 0 + 30, canHgt);
		}
		ctx2.closePath();
		

		ctx2.beginPath();
		counter%1 === 0?
			ctx2.rect(0,(canHgt*(1-(counter*100000/heightFactor))),20,1)
			:ctx2.rect(0,(canHgt*(1-(counter*100000/heightFactor))),10,1);
		ctx2.fill();
		ctx2.closePath()

		ctx2.setLineDash([])
		ctx2.lineWidth =5;
	}
	// setTimeout(()=>{
		animateCircles(0,9999);
	// },1000)
};
setTimeout(()=>{
	init('confirmed');
},1000);
