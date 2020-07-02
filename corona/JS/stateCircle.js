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
        ["Andaman and Nicobar Islands",47,50,0,97],
        ["Andhra Pradesh",7897,6511,187,14595],
        ["Arunachal Pradesh",128,62,1,191],
        ["Assam",2568,5647,12,8227],
        ["Bihar",2289,7687,67,10043],
        ["Chandigarh",70,364,6,440],
        ["Chhattisgarh",597,2250,13,2860],
        ["Dadra and Nagar Haveli and Daman and Diu",131,82,0,213],
        ["Delhi",26270,58348,2742,87360],
        ["Goa",716,596,3,1315],
        ["Gujarat",7049,23662,1846,32557],
        ["Haryana",4340,9972,236,14548],
        ["Himachal Pradesh",363,580,10,953],
        ["Jammu and Kashmir",2674,4722,101,7497],
        ["Jharkhand",591,1884,15,2490],
        ["Karnataka",7078,7918,246,15242],
        ["Kerala",2112,2306,24,4442],
        ["Ladakh",324,648,1,973],
        ["Madhya Pradesh",2626,10395,572,13593],
        ["Maharashtra",75995,90911,7855,174761],
        ["Manipur",681,553,0,1234],
        ["Meghalaya",9,42,1,52],
        ["Mizoram",38,122,0,160],
        ["Nagaland",291,168,0,459],
        ["Odisha",1851,5189,25,7065],
        ["Puducherry",430,272,12,714],
        ["Punjab",1557,3867,144,5568],
        ["Rajasthan",3381,14220,413,18014],
        ["Sikkim",37,52,0,89],
        ["Tamil Nadu",38892,50074,1201,90167],
        ["Telangana",8785,7294,260,16339],
        ["Tripura",301,1086,1,1388],
        ["Uttarakhand",609,2231,41,2881],
        ["Uttar Pradesh",6711,16084,697,23492],
        ["West Bengal",5761,12130,668,18559],
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
$('.legend1').text('As of '+(new Date().getDate())+' july, 2020 | 8:00 am');
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
    const msecForEach = 60;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            $('.stateName').html('India');
            $('.confirmedData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 220114}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 347979}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 17400}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            // $('.confirmedTotal').text('61149')
            // $('.recoveredTotal').text(recoveredTotal)
            // $('.deathsTotal').text(deathsTotal)
            $('.total').addClass('active');
            $('.stateInfo').addClass('inactive');
        }else{
			globalCounter += 1;
			let shouldCircleDraw
            if(Math.floor(globalCounter/msecForEach) == index){
				alpha += 0.05;
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
