$(document).ready(function(){
	const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	$('.legend1').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020');
	
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
		let indiaData = [
			["Andaman and Nicobar Islands",196,"AN Islands"],
			["Andhra Pradesh",90279,"Andhra P."],
			["Arunachal Pradesh",1892,"Arunachal P."],
			["Assam",29091,"Assam"],
			["Bihar",12959,"Bihar"],
			["Chandigarh",3171,"Chandigarh"],
			["Chhattisgarh",37470,"Chhattisgarh"],
			["Dadra and Nagar Haveli and Daman and Diu",233,"Dadra and Nagar Haveli and Daman and Diu"],
			["Delhi",30914,"Delhi"],
			["Goa",5375,"Goa"],
			["Gujarat",16262,"Gujarat"],
			["Haryana",21334,"Haryana"],
			["Himachal Pradesh",4146,"Himachal P."],
			["Jammu and Kashmir",19503,"Jammu & Kashmir"],
			["Jharkhand",14138,"Jharkhand"],
			["Karnataka",101645,"Karnataka"],
			["Kerala",32775,"Kerala"],
			["Ladakh",953,"Ladakh"],
			["Madhya Pradesh",22136,"Madhya P."],
			["Maharashtra",297506,"Maharashtra"],
			["Manipur",1751,"Manipur"],
			["Meghalaya",1902,"Meghalaya"],
			["Mizoram",567,"Mizoram"],
			["Nagaland",1261,"Nagaland"],
			["Odisha",32405,"Odisha"],
			["Puducherry",4770,"Puducherry"],
			["Punjab",21022,"Punjab"],
			["Rajasthan",17049,"Rajasthan"],
			["Sikkim",480,"Sikkim"],
			["Tamil Nadu",46633,"TN"],
			["Telangana",30443,"Telangana"],
			["Tripura",7498,"Tripura"],
			["Uttarakhand",11068,"Uttarakhand"],
			["Uttar Pradesh",67002,"Uttar P."],
			["West Bengal",24147,"West Bengal"],
		]
		indiaData.sort(function(a,b){
			return ((b[1])-(a[1]))
		})
		let totalActive = 0;
		for (let index = 0; index < indiaData.length; index++) {
			const element = indiaData[index][1];
			totalActive += element
		}
		
		indiaData = indiaData.slice(0,5)
		console.log(indiaData);
		console.log(totalActive);
		slideIndex = index;
		counter = 1;
		circleArray = [];
		var colorArray = ['#E26666','#55ABEA','#700000','#55EAAB','#525252'];
		var total = 100;
		var totalNum = totalActive;
		var pieData = []
		for (let index = 0; index < indiaData.length; index++) {
			const element = indiaData[index];
			pieData.push(
				[element[0],((element[1]*100)/totalNum),element[2],element[1]]
			)
		}
		console.log(JSON.stringify(pieData));
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
