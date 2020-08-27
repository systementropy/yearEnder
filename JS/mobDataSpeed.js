var updateCuboid = function(cuboid,valueNum) {
 
    var value   = valueNum?value=valueNum:parseInt(cuboid.attr("value")), 
        color   = cuboid.attr("data-color") 
                || "rgba(120, 200, 20, 0.4)", 
        height  = cuboid.height(), 
        width   = cuboid.width();
    
    if (value > 0) {
      
      $(cuboid.find(".filling")).slice(0, 4).css({
        height: value + "%",
        backgroundColor: color, 
        color: color,
      });
      
      var y           = height * (value / 100), 
          rotate      = "rotateX(90deg)", 
          translateZ1 = "translateZ(" + (-width * 0.5) 
                      + "px)",
          translateZ2 = "translateZ(" + y + "px)", 
          top         = rotate + " " + translateZ1 
                      + " " + translateZ2, 
          bottom      = rotate 
                      + translateZ1;
      
      $(cuboid.find(".filling")[4]).css({
        backgroundColor: color,
        color: color,
        visibility: "visible", 
        transform: top
      });

      $(cuboid.find(".filling")[5]).css({
        backgroundColor: color,
        color: color,
        visibility: "visible", 
        transform: bottom
      });
    }
  };

// $(document).ready(function() {
  
//   var cuboids = $(".cuboid");

//   for (var i = 0, len = cuboids.length; i < len; i++) {

//     var cuboid  = $(cuboids[i]);
//     updateCuboid(cuboid);
//   }
  
//   setInterval(function() {
    
//     for (var i = 0; i < cuboids.length; i++) {
      
//       cuboids.eq(i).attr("value", Math.random() * 100);
//       updateCuboid(cuboids.eq(i));
//     }
//   }, 2000);
// });
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

function init(num){
	console.log('here'+num);
	var cuboids = $(".cuboid");
	if(num<cuboids.length){
		cuboids.eq(num).attr("value", (techVal[num][0]/10000) * 100);
		$('.speedData').eq(num).addClass('active')
		updateCuboid(cuboids.eq(num),(techVal[num][0]/10000) * 100)
		setTimeout(() => {
			init(num+1)
		},1000)
	}
}
setTimeout(() => {
	init(0)
},1000)
$(".light").on("click", function(event) {
  
  $("html").toggleClass("dark");
});