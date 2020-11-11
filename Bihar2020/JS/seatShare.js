const shareData = [['Assembly Election Year: 1995 (324 seats)',41,29,0,0],
['Assembly Election Year: 2000 (324 seats)',67,23,21,124],
['Assembly Election Year: 2005 (243 seats)',55,9,88,54],
['Assembly Election Year: 2010 (243 seats)',91,4,115,22],
['Assembly Election Year: 2015 (243 seats)',53,27,71,80],
['Assembly Election Year: 2020 (243 seats)',74,19,43,75]
]
function init(num){
	if(num<shareData.length){
		
		// $('.eachParty').eq(num+1).children('.peopleType').css({opacity: 1})
		// $('.eachParty').eq(num+1).children('.dataNum').css({opacity: 1})
		$('.legend1').html(shareData[num][0])
		$('.eachParty').eq(0).children('.dataFix').css({height: shareData[num][1]*4+'px'}).attr("datatxt",shareData[num][1])
		$('.eachParty').eq(1).children('.dataFix').css({height: shareData[num][2]*4+'px'}).attr("datatxt",shareData[num][2])
		$('.eachParty').eq(2).children('.dataFix').css({height: shareData[num][3]*4+'px'}).attr("datatxt",shareData[num][3])
		$('.eachParty').eq(3).children('.dataFix').css({height: shareData[num][4]*4+'px'}).attr("datatxt",shareData[num][4])
		setTimeout(() => {
			init(num+1)
		},2000)
	}
}
setTimeout(() => {
	init(0)
},2000)