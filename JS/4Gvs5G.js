const techVal = [
	["bandwidth",100,1000,"Bandwidth"],
	["latency",10,1,"Latency"],
	["speedP",1,20,"Download Speed (Peak)"],
	["speedA",10,100,"Download Speed (Avg)"],
	["carriers",5,16,"Max number of carriers"],
]
function init(num){
	console.log(techVal[num][0]);
	if(num<techVal.length){
		const data = techVal[num];
		const max = Math.max(data[1],data[2]);
		num>0?$('.4g.'+techVal[num-1][0]).hide():'';
		num>0?$('.5g.'+techVal[num-1][0]).hide():'';
		$('.legendTitle').text(data[3])
		console.log(data[2]/data[1]);
		$('.4g.'+data[0]).addClass('active').css({height: (100*(data[1]/max))+'%' })
		$('.5g.'+data[0]).addClass('active').css({height: (100*(data[2]/max))+'%' })
		// console.log((100*(data[1]/max))+'%',(100*(data[2]/max))+'%', );
		setTimeout(() => {
			init(num+1)
		},5000)		
	}
}
console.log('here');
setTimeout(() => {
	init(0)
},2000)