$(document).ready(function(){
	const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	$('.stateName').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020');
	
	var canvas = document.getElementById("canvas");
	var canHgt = 500;
	var canWid = 600;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	var ctx = canvas.getContext("2d");
	ctx.scale(2,2);

	var canvas2 = document.getElementById("labels");
	canvas2.style.height = canHgt+'px';
	canvas2.style.width = canWid+'px';
	canvas2.height = canHgt*2;
	canvas2.width = canWid*2;
	var ctx2 = canvas2.getContext("2d");
	ctx2.scale(2,2);

	function Circle(radiusStart, radiusEnd, index, label,text, perc, color, startAngle, endAngle,name){
		this.radius = radiusStart;
		this.radiusEnd = radiusEnd;
		this.name = name;
		this.color = color;
		this.index = index;
		this.label = label;
		this.text = text;
		this.perc = perc;
		this.dRad = 1;
		this.startAngle = startAngle;
		this.endAngle = startAngle;
		this.finalAngle = endAngle;
		this.dAngle = (this.finalAngle-this.startAngle)/200;

		this.draw = function(){
			if(this.index == 0){
				ctx.beginPath();
				ctx.fillStyle = '#7a7a7a77';
				ctx.moveTo(canWid/2, canHgt/2);
				ctx.arc(canWid/2, canHgt/2, this.radius, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
			}
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.moveTo(canWid/2, canHgt/2);
			ctx.arc(canWid/2, canHgt/2, this.radius, this.startAngle, this.endAngle);
			ctx.fill();
			ctx.closePath();

			ctx.save();
			ctx.beginPath();
			ctx.moveTo(canWid/2, canHgt/2);
			ctx.arc(canWid/2, canHgt/2, this.radius, this.startAngle, this.endAngle);
			ctx.clip();
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
			ctx.restore();
			if(counter>0){
				ctx2.save();
				ctx2.beginPath();
				ctx2.translate(
					(canWid/2)+this.radius*Math.cos((this.endAngle+this.startAngle)/2),
					(canHgt/2)+this.radius*Math.sin((this.endAngle+this.startAngle)/2),
				);
				this.startAngle>7?ctx2.textAlign = 'right':ctx2.textAlign = 'left'
				ctx2.fillStyle = "#555";
				ctx2.font = '600 18px Montserrat';
				(this.name == 'Colombia' || this.name == 'S Africa') ? ctx2.fillText( 
					this.name,
					0,
					-30,
					100
				):ctx2.fillText( 
					this.name,
					-10,
					0,
					100
				);
				
				ctx2.fillStyle = "#7a7a7a";
				ctx2.font = '400 21px Montserrat';
				(this.name == 'Colombia' || this.name == 'S Africa') ? ctx2.fillText( 
					this.perc.toFixed(2)+'%', 
					0,
					-10,
				):ctx2.fillText( 
					this.perc.toFixed(2)+'%',
					-10,
					20,
					100
				);
				
				ctx2.closePath();
				ctx2.restore();
			}else{
				console.log('here');
			}
				
				
		}
		this.update = function(){

			if(this.finalAngle>this.endAngle){
				this.endAngle += this.dAngle;
			}


			if(this.radiusEnd>this.radius){
				this.radius += this.dRad;
			}else{
			}
			ctx.fillStyle = this.color;
			this.draw();
		}
		this.update();
	}
	var slideIndex;
	var counter = 0;
	var circleArray = []
	function init(index) {
		slideIndex = index;
		counter = 1;
		circleArray = [];
		var colorArray = ['#E26666','#55ABEA','#700000','#55EAAB','#525252'];
		var total = 100;
		var totalNum = 202805.18;
		var pieData = [
			['USA',(5251997/totalNum),'US'],
			['Brazil',(3057470/totalNum),'Brazil'],
			['India',(2271034/totalNum),'India'],
			['Russia',(897599/totalNum),'Russia'],
			['S Africa',(563598/totalNum),'S Africa'],
		]
		for (let i = 0; i < pieData.length; i++) {
			const element = pieData[i];
			circleArray.push(new Circle(
				0,200, i, element[1], element[0], element[1], colorArray[i], 
				(total/100)*2*Math.PI, 
				((total+element[1])/100)*2*Math.PI,
				element[2]
			));
			total = total + element[1]

		}
		
		animate();
	}
	var globalCounter = 1
	setTimeout(function () {
		init(1);
	}, 2000)
	function animate() {
		
		if(globalCounter<500){
			ctx.clearRect(0,0,canWid, canHgt);
			ctx2.clearRect(0,0,canWid, canHgt);
			globalCounter += 1;
			for (let i = 0; i < circleArray.length; i++) {
				circleArray[i].update();
			}
		}else{

		}
		
		requestAnimationFrame(animate);
	}
	
})
