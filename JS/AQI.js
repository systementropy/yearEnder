const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const datArr = [
	['Mumbai',161],
	['Delhi',226],
	['Kolkata',177],
	['Chennai',79],
	['Ahmedabad',162],
	['Hyderabad',76],
	['Bengaluru',72],
	['Pune',115],
]
function getColor(dp){
	let color;
	if(dp<=50){
		color = '#009966'
	}else if(dp>50 && dp<=100){
		color = '#FFDE33'
	}else if(dp>100 && dp<=150){
		color = '#FF9933'
	}else if(dp>150 && dp<=200){
		color = '#CC0033'
	}else if(dp>200 && dp<=300){
		color = '#660099'
	}else if(dp>300){
		color = '#7E0023'
	}
	return color;
}
function plotEachCity(index){
	let city = datArr[index];
	// setTimeout(() => {
		$('.stateName').text(city[0])
		$('.confirmedData').text(city[1])
		$('.'+city[0]).addClass('active').css({
			height:0.8*city[1],
			// 'background': getColor(city[1]),
			// 'background-image': "linear-gradient(to right bottom, "+getColor(city[1]) +",rgba(51, 51, 51, 1)),url('./Banner/bgDot.png')",
			// 'background-repeat': "no-repeat,repeat",
			// 'background-blend-mode': "multiply",
			// 'background-size': "cover",
			// 'background-position': "center, left center",
		}).attr("data-color", getColor(city[1]))
	// }, 1000);
}
function init(index){
	$('.legend1').text('AQI on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()]));
	if(index<datArr.length){
		plotEachCity(index)
		setTimeout(() => {
			init(index+1)
		}, 2000);
	}
}
setTimeout(() => {
	$('.mainBodySky').addClass('active')
}, 1000);
setTimeout(() => {
	init(0);
}, 3000);