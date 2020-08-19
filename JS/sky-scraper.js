const datArr = [
	['Mumbai',122],
	['Kolkata',13],
	['Gurgaon',10],
	['Noida',8],
	['Hyderabad',4],
	['Bangalore',3]
]
function plotEachCity(index){
	let city = datArr[index];
	// setTimeout(() => {
		$('.stateName').text(city[0])
		$('.confirmedData').text(city[1])
		$('.'+city[0]).addClass('active').css({height:city[1]*3})
	// }, 1000);
}
function init(index){
	if(index<datArr.length){
		plotEachCity(index)
		setTimeout(() => {
			init(index+1)
		}, 1000);
	}
}
setTimeout(() => {
	$('.mainBodySky').addClass('active')
}, 1000);
setTimeout(() => {
	init(0);
}, 3000);