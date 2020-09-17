// Yahoo - 3 billion
// Aadhaar - 1.1 billion
// First American Financial Corp. 
// Verifications.io - 763 million
// Facebook - 540 million
// Yahoo - 500 million
// Marriott/Starwood - 500 million
// Adult Friend Finder - 412.2 million
// MySpace - 360 million
// Exactis - 340 million
// Twitter - 330 million
// NetEase - 234 million
// LinkedIn - 165 million
// Dubsmash - 162 million
// Adobe - 152 million

const techVal = [
 [(3*(1000000000)), "3 billion", "Yahoo"],
 [(1.1*(1000000000)), "1.1 billion", "Aadhaar"],
 [(885*(1000000)), "885 million", "First American Financial Corp."],
 [(763*(1000000)), "763 million", "Verifications.io"],
 [(540*(1000000)), "540 million", "Facebook"],
 [(500*(1000000)), "500 million", "Yahoo"],
 [(500*(1000000)), "500 million", "Marriott/Starwood"],
 [(412.2*(1000000)), "412.2 million", "Adult Friend Finder"],
 [(360*(1000000)), "360 million", "MySpace"],
 [(340*(1000000)), "340 million", "Exactis"],
 [(330*(1000000)), "330 million", "Twitter"],
 [(234*(1000000)), "234 million", "NetEase"],
//  [(165*(10^6)), "165 million", "LinkedIn"],
//  [(162*(10^6)), "162 million", "Dubsmash"],
//  [(152*(10^6)), "152 million", "Adobe"],
]
techVal.reverse()
console.log(JSON.stringify(techVal));
var canvas = document.getElementById("canvas");
const canHgt = 572;
const canWid = 460;
const canHgtStep = 10;//400/10
const canWidStep = 15;// 600/40;
canvas.style.height = canHgt+'px';
canvas.style.width = canWid+'px';
canvas.height = canHgt*2;
canvas.width = canWid*2;
var ctx = canvas.getContext("2d");
ctx.scale(2,2);
for (let index = 0; index < 15; index++) {
	ctx.beginPath();
	ctx.fillStyle = '#DDDDDD';
	ctx.lineWidth = 1;
	ctx.rect(0, (49*index), canWid, 15);
	ctx.fill();
	ctx.closePath();
}
function init(num){
	if(num<techVal.length){
		console.log(num,techVal[num][0]/(3000000000));
		ctx.beginPath();
		ctx.fillStyle = '#a00033';
		ctx.rect(0, (49*num), canWid*(techVal[num][0]/(3000000000)), 15);
		ctx.fill();
		ctx.closePath();
		$('.innerCont').css({'top':(num)*-150+'px'})
		setTimeout(() => {
			init(num+1)
		},3000)
	}
}
setTimeout(() => {
	init(0)
},1000)