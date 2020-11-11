$(document).ready(function(){


	const shareData = [
		[[08,10],(0+1+1),(1+1+0),122],
		[[09,00],(50+17+11),(33+40+1),122],
		[[10,00],(72+25+12),(44+57+4),122],
		[[11,00],68+27+17,56+62+4,122],
		[[12,00],63+26+20,49+67+6,122],
		[[13,00],102,126,122],
		[[14,00],104,126,122],
		[[15,00],109,121,122],
		[[16,00],110,123,122],
		[[17,00],113,121,122],
		[[18,00],114,121,122],
		[[19,00],116,119,122],
		[[20,00],110,125,122],
		[[21,00],111,124,122],
		[[09,00],110,125,122],
	]
	function init(num){
		if(num<shareData.length){
			
			// $('.eachParty').eq(num+1).children('.peopleType').css({opacity: 1})
			// $('.eachParty').eq(num+1).children('.dataNum').css({opacity: 1})
			// $('.legend1').html(shareData[num][0])
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
			num === shareData.length-1
				?$('.stateName').text("Final tally")
				:$('.stateName').text("Leads at "+hrText+":"+mnText+" "+ampText)
				
			clock(shareData[num][0][0],shareData[num][0][1]);
			$('.eachParty').eq(0).children('.dataFix').css({height: shareData[num][1]*3.2+'px'}).attr("datatxt",shareData[num][1])
			$('.eachParty').eq(1).children('.dataFix').css({height: shareData[num][2]*3.2+'px'}).attr("datatxt",shareData[num][2])
			$('.eachParty').eq(2).children('.dataFix').css({height: shareData[num][3]*3.2+'px'}).attr("datatxt",shareData[num][3])
			$('.eachParty').eq(3).children('.dataFix').css({height: shareData[num][4]*3.2+'px'}).attr("datatxt",shareData[num][4])
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