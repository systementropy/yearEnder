const techVal = [[0.1,"0.1Mbit/s"],
[0.3,"0.3Mbit/s"],
[0.3,"0.3Mbit/s"],
[7.2,"7.2Mbit/s"],
[21,"21Mbit/s"],
[42,"42Mbit/s"],
[150,"150Mbit/s"],
[300,"300Mbit/s"],
[450,"450Mbit/s"],
[600,"600Mbit/s"],
[979,"979Mbit/s"],
[10000,"10000Mbit/s"]]
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
for (let index = 0; index < 12; index++) {
	ctx.beginPath();
	ctx.fillStyle = '#DDDDDD';
	ctx.lineWidth = 1;
	ctx.rect(0, (49*index), canWid, 15);
	ctx.fill();
	ctx.closePath();
}
function init(num){
	if(num<techVal.length){
		console.log(num);
		ctx.beginPath();
		ctx.fillStyle = '#00A0A0';
		ctx.rect(0, (49*num), canWid*(Math.pow(techVal[num][0]/10000,0.5)), 15);
		ctx.fill();
		ctx.closePath();
		setTimeout(() => {
			init(num+1)
		},1000)
	}
}
setTimeout(() => {
	init(0)
},2000)