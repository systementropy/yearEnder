const techValLOL = [
	["height",,"height"],
	["width",,"width"],
	["weight",10,1,"weight"],
	// ["speedP",1,20,"Download Speed (Peak)"],
	// ["speedA",10,100,"Download Speed (Avg)"],
	// ["carriers",5,16,"Max number of carriers"],
]
const techVal = [
	["height",5.78,5.18,5.78,6.33,"Dimention",2.82,2.53,2.82,3.07],
	["weight",162,133,187,226,"Weight"],
]
function init(num){
	console.log(techVal[num][0]);
	if(num === 0){
		const data = techVal[num];
		const max = Math.max(data[1],data[2],data[3],data[4]);
		// num>0?$('.ip12.'+techVal[num-1][0]).hide():'';
		// num>0?$('.ip12m.'+techVal[num-1][0]).hide():'';
		// num>0?$('.ip12p.'+techVal[num-1][0]).hide():'';
		// num>0?$('.ip12pm.'+techVal[num-1][0]).hide():'';
		$('.legendTitle').text(data[5])
		console.log(data[2]/data[1]);
		$('.ip12.'+data[0]).addClass('active').css({width: (40*(data[6]))+'px',height: (40*(data[1]))+'px' })
		$('.ip12m.'+data[0]).addClass('active').css({width: (40*(data[7]))+'px',height: (40*(data[2]))+'px' })
		$('.ip12p.'+data[0]).addClass('active').css({width: (40*(data[8]))+'px',height: (40*(data[3]))+'px' })
		$('.ip12pm.'+data[0]).addClass('active').css({width: (40*(data[9]))+'px',height: (40*(data[4]))+'px' })
		// console.log((100*(data[1]/max))+'%',(100*(data[2]/max))+'%', );
		setTimeout(() => {
			init(num+1)
		},5000)		
	}else if(num === 1){
		const data = techVal[num];
		const max = Math.max(data[1],data[2],data[3],data[4]);
		$('.legendTitle').text(data[5])

		$('.ip12.'+data[0]).addClass('active noborder').css({width: '40px',height: (300*(data[1]/max))+'px' })
		$('.ip12m.'+data[0]).addClass('active noborder').css({width: '40px',height: (300*(data[2]/max))+'px' })
		$('.ip12p.'+data[0]).addClass('active noborder').css({width: '40px',height: (300*(data[3]/max))+'px' })
		$('.ip12pm.'+data[0]).addClass('active noborder').css({width: '40px',height: (300*(data[4]/max))+'px' })
	}
}
console.log('here');
setTimeout(() => {
	init(0)
},2000)