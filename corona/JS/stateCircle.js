$(document).ready(function(){
	const canvas = document.getElementById("canvas");
    const canHgt = 609;
    const canWid = 554;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 1;
	ctx.strokeColor = '#5557';
	
    var arrayId = ["Laddakh","andaman","Andhra","Arunachal","Assam","Bihar","Chandigarh","Chhatisgarh","Goa","Gujrat","Haryana","Himachal","Jharkhand","Karnataka","Kerala","MP","Maharashtra","Manipur","Meghayala","Mizoram","Nagaland","Delhi","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","UP","UK","WB","Orissa","J_K","DnNHaweli"];
    arrayId = {
        "Andhra Pradesh":["Andhra Pradesh","Andhra"],
        "Delhi":["Delhi","Delhi"],
        "Haryana":["Haryana","Haryana"],
        "Karnataka":["Karnataka","Karnataka"],
        "Kerala":["Kerala","Kerala"],
        "Maharashtra":["Maharashtra","Maharashtra"],
        "Odisha":["Odisha","Orissa"],
        "Pondicherry":["Pondicherry",],
        "Punjab":["Punjab","Punjab"],
        "Rajasthan":["Rajasthan","Rajasthan"],
        "Tamil Nadu":["Tamil Nadu","Tamilnadu"],
        "Telangana":["Telangana","Telangana"],
        "Union Territory of Chandigarh":["Chandigarh","Chandigarh"],
        "Chandigarh":["Chandigarh","Chandigarh"],
        "Union Territory of Jammu and Kashmir":["Jammu & Kashmir","J_K"],
        "Jammu and Kashmir":["Jammu & Kashmir","J_K"],
        "Union Territory of Ladakh":["Ladakh","Laddakh"],
        "Ladakh":["Ladakh","Laddakh"],
        "Uttar Pradesh":["Uttar Pradesh","UP"],
        "UP":["Uttar Pradesh","UP"],
        "Uttarakhand":["Uttarakhand","UK"],
        "West Bengal":["West Bengal","WB"],
        "Chhattisgarh":["Chhattisgarh","Chhatisgarh"],
        "Gujarat":["Gujarat","Gujrat"],
        "Puducherry":["Puducherry","Puducherry"],
        "Madhya Pradesh":["Madhya Pradesh","MP"],
        "Himachal Pradesh":["Himachal Pradesh","Himachal"],
        "Bihar":["Bihar","Bihar"],
        "Manipur":["Manipur","Manipur"],
        "Mizoram":["Mizoram","Mizoram"],
        "Andaman and Nicobar Islands":["A & N Islands","andaman"],
        "Goa":["Goa","Goa"],
        "Arunachal Pradesh":["Arunachal Pradesh","Arunachal"],
        "Jharkhand":["Jharkhand","Jharkhand"],
        "Assam":["Assam","Assam"],
        "Tripura":["Tripura","Tripura"],
        "Nagaland":["Nagaland","Nagaland"],
        "Meghalaya":["Meghalaya","Meghalaya"],
        "Dadra and Nagar Haveli and Daman and Diu":["DNHDD","DnNHaweli"],
        "Sikkim":["Sikkim","Sikkim"],
        "Daman & Diu":["Daman & Diu","Daman"]
    };
    
    var dataIndia = [
        ["Andaman and Nicobar Islands",68,83,0,151],
        ["Andhra Pradesh",11383,12154,277,23814],
        ["Arunachal Pradesh",180,120,2,302],
        ["Assam",5281,8729,22,14032],
        ["Bihar",4013,9816,115,13944],
        ["Chandigarh",113,403,7,523],
        ["Chhattisgarh",757,2903,15,3675],
        ["Dadra and Nagar Haveli and Daman and Diu",222,189,0,411],
        ["Delhi",21567,82226,3258,107051],
        ["Goa",869,1273,9,2151],
        ["Gujarat",9468,27718,2008,39194],
        ["Haryana",4572,14510,287,19369],
        ["Himachal Pradesh",283,846,11,1140],
        ["Jammu and Kashmir",3652,5695,154,9501],
        ["Jharkhand",1015,2208,23,3246],
        ["Karnataka",17786,12833,486,31105],
        ["Kerala",2799,3708,27,6534],
        ["Ladakh",139,915,1,1055],
        ["Madhya Pradesh",3475,12232,634,16341],
        ["Maharashtra",93673,127259,9667,230599],
        ["Manipur",651,799,0,1450],
        ["Meghalaya",45,66,2,113],
        ["Mizoram",64,133,0,197],
        ["Nagaland",369,304,0,673],
        ["Odisha",3742,7407,52,11201],
        ["Puducherry",553,584,14,1151],
        ["Punjab",2012,4945,183,7140],
        ["Rajasthan",5002,17070,491,22563],
        ["Sikkim",62,72,0,134],
        ["Tamil Nadu",46655,78161,1765,126581],
        ["Telangana",12423,18192,331,30946],
        ["Tripura",437,1338,1,1776],
        ["Uttarakhand",587,2672,46,3305],
        ["Uttar Pradesh",10373,21127,862,32362],
        ["West Bengal",8231,16826,854,25911],
    ];
    let confirmedTotal = 0; let recoveredTotal=0; let deathsTotal =0; let activeTotal = 0;
    let colorArray = [
        [255, 235, 235],
        [255, 213, 213],
        [255, 192, 192],
        [254, 170, 170],
        [254, 149, 149],
        [255, 162, 162],
        [254, 127, 127],
        [226, 102, 102],
        [197, 76, 76],
        [169, 51, 51],
        [140, 25, 25],
        [112, 0, 0],
        // [135,255,0],[200,255,0],[255,246,0],[255,210,65],[255,195,2],[255,171,63],[255,143,0],[255,132,63],[255,91,0],[176,14,14],[145,0,0],[83,0,0]
    ]
    var max = [242,133,0];
    var min = [255,255,255];
    var globalCounter = 0;
    dataIndia.sort(function(a,b){
        return ((a[1])-(b[1]))
    })
    console.log(dataIndia);
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $('.legend1').text('As of '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
    for (let i = 0; i < dataIndia.length; i++) {
        const element = dataIndia[i];
        const perc = element[1];
        let colorIndex;
        if(perc<=10){
            colorIndex = 0
        }else if(perc>10 && perc <= 100){
            colorIndex = 1
        }else if(perc>100 && perc <= 250){
            colorIndex = 2
        }else if(perc>250 && perc <= 500){
            colorIndex = 3
        }else if(perc>500 && perc <= 1000){
            colorIndex = 4
        }else if(perc>1000 && perc <= 2500){
            colorIndex = 5
        }else if(perc>2500 && perc <= 5000){
            colorIndex = 6
        }else if(perc>5000 && perc <= 7500){
            colorIndex = 7
        }else if(perc>7500 && perc <= 10000){
            colorIndex = 8
        }else if(perc>10000 && perc <= 20000){
            colorIndex = 9
        }else if(perc>20000 && perc <= 30000){
            colorIndex = 10
        }else{
            colorIndex = 11
        }
        // perc==0?colorIndex=0:colorIndex = colorIndex+1
        const color = [colorArray[colorIndex][0],colorArray[colorIndex][1],colorArray[colorIndex][2]]
        confirmedTotal += element[1]
        recoveredTotal += element[2]
        deathsTotal += element[3]
        // activeTotal = activeTotal + element[1] - element[2] - element[3]
        activeTotal = element[1]
        element.push(perc);
        element.push(color);
        element.push(colorIndex);
        element.push(activeTotal)
        dataIndia[i]=element;
        // console.log(element)
    }
    
    

    var alpha; var index;
    const msecForEach = 40;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            $('.stateName').html('India');
            $('.confirmedData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 276682}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            
            $('.total').addClass('active');
            $('.stateInfo').addClass('inactive');
        }else{
			globalCounter += 1;
			let shouldCircleDraw
            if(Math.floor(globalCounter/msecForEach) == index){
				alpha += 0.1;
				alpha = Math.min(alpha,1)
            }else{
				shouldCircleDraw = true
                alpha = 0;
                index = Math.floor(globalCounter/msecForEach);
            }
            
            const element = dataIndia[index];
            $('.stateName').html(arrayId[element[0]][0]);
            $('.confirmedData').html(
                element[1]>1000?((element[1]/1000).toFixed(1)+'K'):element[1]
            );
            $('.recoveredData').html(
                element[2]>1000?((element[2]/1000).toFixed(1)+'K'):element[2]
            );
            $('.deathsData').html(
                element[3]>1000?((element[3]/1000).toFixed(1)+'K'):element[3]
            );
            // if(arrayId[element[0]][0] === 'A & N Islands'){
            //     $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[6][0]+','+element[6][1]+','+element[6][2]+','+alpha+')'})
            // }else if(arrayId[element[0]] !== undefined){
			// 	$('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[6][0]+','+element[6][1]+','+element[6][2]+','+alpha+')'})
            // }else {
            //     console.log(element[0],arrayId[element[0]]);
			// }
			
            const activeState = element[1];
            if(shouldCircleDraw){
				console.log(arrayId[element[0]][1], alpha,arrayId[element[0]][1])
				const el = document.getElementById(arrayId[element[0]][1])
				if(el){
					const box = el.getBoundingClientRect()
					// console.log(arrayId[element[0]][1], alpha, box)
					ctx.beginPath()
					ctx.fillStyle = '#FEAAAACC'
					ctx.strokeStyle = '#E26666FF'
					// ctx.moveTo(-650+box.x+(box.width/2),-310+box.y+(box.height/2))
					ctx.arc(-650+box.x+(box.width/2),-310+box.y+(box.height/2), (1.5*(Math.sqrt(element[1]/30))), 0, 2* Math.PI)
					ctx.fill()
					ctx.stroke();
					ctx.closePath()

					ctx.beginPath()
					ctx.fillStyle = '#333'
					ctx.moveTo(-650+box.x+(box.width/2),-310+box.y+(box.height/2))
					// ctx.fillText(arrayId[element[0]][1],-650+box.x+(box.width/2),-310+box.y+(box.height/2))
					ctx.closePath()
				}else{
					console.log(arrayId[element[0]][1])
				}
				shouldCircleDraw = false;
			}else{
				console.log(shouldCircleDraw)
			}

        }
    }
    
    setTimeout(function(){
        updateColor("init");
    },2000)
    
    function animate(){
        
        if(globalCounter == 1){
            $('.legendStates').addClass('active')
        }
        // if(globalCounter<msecForEach*dataIndia.length-1){
        if(globalCounter<msecForEach*dataIndia.length-1){
            updateColor();
            requestAnimationFrame(animate)
        }else{
            updateColor("final");
        }
        
    }
    // animate();
});
