/*
White voters 			43%

White men 			39%

White men without a college degree 			34%

Black voters 			90%

Black women voters 			93%

Asian voters 			70%

Hispanic voters 			63%

Urban voters 			65%

18-29-year-olds 			61%
*/

const techVal = [
[43,"0.1Mbit/s"],
[39,"0.3Mbit/s"],
[34,"0.3Mbit/s"],
[90,"7.2Mbit/s"],
[93,"21Mbit/s"],
[70,"42Mbit/s"],
[63,"150Mbit/s"],
[65,"300Mbit/s"],
[61,"450Mbit/s"],
]
var canvas = document.getElementById("canvas");
const canHgt = 572;
const canWid = 303;
const canHgtStep = 10;//400/10
const canWidStep = 15;// 600/40;
canvas.style.height = canHgt+'px';
canvas.style.width = canWid+'px';
canvas.height = canHgt*2;
canvas.width = canWid*2;
var ctx = canvas.getContext("2d");
ctx.scale(2,2);
for (let index = 0; index < 9; index++) {
	$('.dataline>span').eq(index).width
	// ctx.beginPath();
	// ctx.fillStyle = '#DDDDDD';
	// ctx.lineWidth = 1;
	// ctx.rect(0, (49*index), canWid, 15);
	// ctx.fill();
	// ctx.closePath();
}
function init(num){
	if(num<techVal.length){
		console.log(num);
		ctx.beginPath();
		ctx.fillStyle = '#3c3b6e';
		ctx.rect(0, (49*num), canWid*(techVal[num][0]/100), 15);
		ctx.fill();
		ctx.closePath();
		$('.nameTag>span').eq(num).css({opacity: 1})
		$('.icon>span').eq(num).css({opacity: 1})
		$('.dataline>span').eq(num).css({opacity: 1, width: techVal[num][0]+'%'})
		setTimeout(() => {
			init(num+1)
		},2000)
	}
}
setTimeout(() => {
	init(0)
},2000)