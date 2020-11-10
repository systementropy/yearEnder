const shareData = [['Election Year: 1995 (324 seats)',116,119,0,0]]
function init(num){
	if(num<shareData.length){
		
		// $('.eachParty').eq(num+1).children('.peopleType').css({opacity: 1})
		// $('.eachParty').eq(num+1).children('.dataNum').css({opacity: 1})
		// $('.legend1').html(shareData[num][0])
		$('.eachParty').eq(0).children('.dataFix').css({height: shareData[num][1]*3+'px'}).attr("datatxt",shareData[num][1])
		$('.eachParty').eq(1).children('.dataFix').css({height: shareData[num][2]*3+'px'}).attr("datatxt",shareData[num][2])
		$('.eachParty').eq(2).children('.dataFix').css({height: shareData[num][3]*3+'px'}).attr("datatxt",shareData[num][3])
		$('.eachParty').eq(3).children('.dataFix').css({height: shareData[num][4]*3+'px'}).attr("datatxt",shareData[num][4])
		setTimeout(() => {
			init(num+1)
		},2000)
	}
	
}
setTimeout(() => {
	init(0)
},2000)
var inc = 1000;
clock(7,0);

function clock(hr,min) {
	const date = new Date();
	const hours = parseInt(hr);
	const minutes = parseInt(min);
	const seconds = date.getSeconds();
	console.log(hours)
	const hour = hours * 30;
	const minute = minutes * 6;
	const second = seconds * 6;

	document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
	document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
	document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);