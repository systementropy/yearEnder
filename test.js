let hr = 00;
function activeHrs(time){
	let srtTime,endTime;
	time==0?
		srtTime='11PM'
		:time-1>12?srtTime=time-1-12+'PM':srtTime=time-1+'AM';
	
	time==23 || time==24?
		endTime = time+2-24+'AM'
		:time+2>12?endTime=time+2-12+'PM':endTime=time+2+'AM';
	return (srtTime+'-'+endTime)
}
function getAMPM(time){
	let hrs = time[0]
	let mins = time[1]
}
let now = new Date();
console.log(now.toLocaleTimeString())
let stTime = new Date(now.setHours(now.getHours()-1)).toLocaleTimeString();
let enTime = new Date(now.setHours(now.getHours()+3)).toLocaleTimeString();
console.log(stTime,enTime)
console.log(getAMPM([12,40]))
