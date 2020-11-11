
const shareData = [['Assembly Election Year: 1995' ,12.96,16.27,0,0],
['Assembly Election Year: 2000',14.64,11.06,6.47,28.34],
['Assembly Election Year: 2005',15.65,6.09,20.46,23.45],
['Assembly Election Year: 2010',16.49,8.37,22.58,18.84],
['Assembly Election Year: 2015',24.42,6.66,16.83,18.35],
['Assembly Election Year: 2020',19.5,9.5,15.4,23.1]
]
function init(num){
	if(num<shareData.length){
		
		// $('.eachParty').eq(num+1).children('.peopleType').css({opacity: 1})
		// $('.eachParty').eq(num+1).children('.dataNum').css({opacity: 1})
		$('.legend1').html(shareData[num][0])
		$('.eachParty').eq(0).children('.dataFix').css({height: shareData[num][1]*20+'px'}).attr("datatxt",shareData[num][1]+'%')
		$('.eachParty').eq(1).children('.dataFix').css({height: shareData[num][2]*20+'px'}).attr("datatxt",shareData[num][2]+'%')
		$('.eachParty').eq(2).children('.dataFix').css({height: shareData[num][3]*20+'px'}).attr("datatxt",shareData[num][3]+'%')
		$('.eachParty').eq(3).children('.dataFix').css({height: shareData[num][4]*20+'px'}).attr("datatxt",shareData[num][4]+'%')
		setTimeout(() => {
			init(num+1)
		},2000)
	}
}
setTimeout(() => {
	init(0)
},2000)