const techVal = [
	["electoral",209,118,"Electoral Votes"],
	["votes",516,517,"Counted Votes"],
	["voteP",48.8,49.5,"Vote Percentage"],
	["senate",42,45,"Senate Results"],
	["house",106,137,"House Results"],
]
function init(num){
	console.log(techVal[num][0]);
	if(num<techVal.length){
		const data = techVal[num];
		const max = Math.max(data[1],data[2]);
		num>0?$('.Dems.'+techVal[num-1][0]).hide():'';
		num>0?$('.Reps.'+techVal[num-1][0]).hide():'';
		$('.legendTitle').text(data[3])
		console.log(data[2]/data[1]);
		$('.Dems.'+data[0]).addClass('active').css({height: (100*(data[1]/max))+'%' })
		$('.Reps.'+data[0]).addClass('active').css({height: (100*(data[2]/max))+'%' })
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