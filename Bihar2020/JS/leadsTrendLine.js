$(document).ready(function(){
	const shareData = [
		[[08,10],(0+1+1),(1+1+0)],
		// [[08,30],(20+7+7),(11+18+3)],
		[[09,00],(50+17+11),(33+40+1)],
		// [[09,30],(63+24+13),(37+54+3)],
		[[10,00],(72+25+12),(44+57+4)],
		// [[10,30],68+25+16,48+63+3],
		[[11,00],68+27+17,56+62+4],
		// [[11,30],(68+28+28),(51+65+4)],
		[[12,00],63+26+20,49+67+6],
		// [[12,30],102,126],
		[[13,00],102,126],
		[[14,00],104,126],
		[[15,00],109,121],
		[[16,00],110,123],
		[[17,00],113,121],
		[[18,00],114,121],
		[[19,00],116,119],
		[[20,00],110,125],
		[[21,00],111,124]
	]
	let hrLText;
	let mnLText;
	let ampText = 'AM';
	shareData[0][0][0]>12? ampText = 'PM':''
	shareData[0][0][0]>=10? hrLText = shareData[0][0][0] :  hrLText = '0'+shareData[0][0][0]
	shareData[0][0][1]>=10? mnLText = shareData[0][0][1] :  mnLText = '0'+shareData[0][0][1]
	$('.startLine').text(hrLText+":"+mnLText+' '+ampText)
	let hours = shareData[shareData.length-1][0][0]
	hours>12?ampText = 'PM':''
	hours = hours%12
	hours>=10
		? hrLText = hours 
		: hrLText = '0'+hours

	shareData[shareData.length-1][0][1]>=10? mnLText = shareData[shareData.length-1][0][1] :  mnLText = '0'+shareData[shareData.length-1][0][1]
	
	$('.endLine').text(hrLText+":"+mnLText+' '+ampText)
	const canvas = document.getElementById("canvas");
	const canHgt = 500;
	const canWidAvailable = 650;
	const canWid = 740;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	const ctx = canvas.getContext("2d");
	ctx.scale(2,2);
	ctx.lineWidth = 5;
	ctx.strokeColor = '#000'
	const heightFactor = 152;
	const widthStep = canWidAvailable/shareData.length;
	ctx.beginPath();
	ctx.setLineDash([])
	ctx.lineWidth =1;
	ctx.strokeStyle = '#707070';
	ctx.fillStyle = '#707070';
	ctx.rect(canWidAvailable,0,1,canHgt);
	ctx.rect(0,canHgt-1,canWidAvailable,1);
	ctx.fill();
	ctx.closePath();
	
	for (let counter = 0; counter < 250; counter+=10) {
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.font = '500 18px Montserrat'
		ctx.textAlign = 'left';
		if(counter%50 === 0 && counter!==0){
			ctx.fillText(counter, canWidAvailable + 30, 6+(canHgt*(1-(counter/heightFactor))));
			// ctx.fill();
		}else if(counter===0){
			ctx.fillText(counter, canWidAvailable + 30, canHgt);
		}
		ctx.closePath();
		
	
		ctx.beginPath();
		counter%500 === 0?
			ctx.rect(canWidAvailable,(canHgt*(1-(counter/heightFactor))),20,1)
			:ctx.rect(canWidAvailable,(canHgt*(1-(counter/heightFactor))),10,1);
		ctx.fill();
		ctx.closePath()
	
		ctx.setLineDash([])
		ctx.lineWidth =5;
	}
	
	ctx.lineWidth = 5;
	function init(num){
		if(num<shareData.length){
			
			// $('.eachParty').eq(num+1).children('.peopleType').css({opacity: 1})
			// $('.eachParty').eq(num+1).children('.dataNum').css({opacity: 1})
			// $('.legend1').html(shareData[num][0])
			clock(shareData[num][0][0],shareData[num][0][1]);
			$('.confirmedData').text("MGB: "+shareData[num][1])
			$('.recoveredData').text("NDA: "+shareData[num][2])
			let hrText;
			let mnText;
			// shareData[num][0][0]>=10? hrText = shareData[num][0][0] :  hrText = '0'+shareData[num][0][0]
			shareData[num][0][1]>=10? mnText = shareData[num][0][1] :  mnText = '0'+shareData[num][0][1]
			let ampText = 'AM'
			let hours = shareData[num][0][0]
			hours>=12?ampText = 'PM':''
			hours = hours%12
			hours>=10
				? hrText = hours 
				: hrText = '0'+hours
			hours === 0? hrText = '12' : ''
			$('.stateName').text("Leads at "+hrText+":"+mnText+" "+ampText)
			ctx.beginPath();
			ctx.fillStyle = '#31B900';
			ctx.arc((widthStep*num)+35,-5+(canHgt*(1-(shareData[num][1]/heightFactor))),5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
	
			ctx.beginPath();
			ctx.fillStyle = '#FF9800';
			ctx.arc((widthStep*num)+35,-5+(canHgt*(1-(shareData[num][2]/heightFactor))),5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
			if(num>0){
				ctx.beginPath();
				ctx.strokeStyle = '#31B90077';
				ctx.moveTo((widthStep*(num-1))+35,-5+(canHgt*(1-(shareData[num-1][1]/heightFactor))));
				ctx.lineTo((widthStep*num)+35,-5+(canHgt*(1-(shareData[num][1]/heightFactor))))
				ctx.stroke();
				ctx.closePath();
	
				ctx.beginPath();
				ctx.strokeStyle = '#FF980077';
				ctx.moveTo((widthStep*(num-1))+35,-5+(canHgt*(1-(shareData[num-1][2]/heightFactor))));
				ctx.lineTo((widthStep*num)+35,-5+(canHgt*(1-(shareData[num][2]/heightFactor))))
				ctx.stroke();
				ctx.closePath();
	
			}
			setTimeout(() => {
				init(num+1)
			},1000)
		}
	}
	setTimeout(() => {
		init(0)
	},2000)
	var inc = 1000;
	let prevMin = 0;
	clock(8,0);
	
	function clock(hr,min) {
		const date = new Date();
		const hours = parseInt(hr);
		const minutes = parseInt(min);
		const seconds = date.getSeconds();
		// console.log(hours)
		const hour = hours * 30;
		let minute
		minutes===0 ? minute = 360:minute = minutes * 6;
		const second = seconds * 6;
		
		document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
		document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
		document.querySelector('.second').style.transform = `rotate(${second}deg)`
		setTimeout(() => {
			if(minute === 360){
				$('.clock').addClass('noAni');
				document.querySelector('.minute').style.transform = `rotate(0deg)`
				setTimeout(() => {
					$('.clock').removeClass('noAni');
				},10);
			}
			
		},500)
	}
	
	setInterval(clock, inc);
	
	
	
	
})