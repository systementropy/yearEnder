$(document).ready(function(){
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
        ["Andaman and Nicobar Islands",41,33,0,38,38],
        ["Andhra Pradesh",6456,3316,88,6163,5965],
        ["Arunachal Pradesh",91,7,0,91,87],
        ["Assam",4158,2166,8,4049,3718],
        ["Bihar",6650,4409,40,6470,6290],
        ["Chandigarh",354,296,6,352,345],
        ["Chhattisgarh",1756,890,8,1662,1512],
        ["Dadra and Nagar Haveli and Daman and Diu",36,5,0,36,35],
        ["Delhi",42829,16427,1400,41182,38958],
        ["Goa",592,85,0,564,523],
        ["Gujarat",24055,16664,1505,23544,23038],
        ["Haryana",7722,3565,100,7208,6749],
        ["Himachal Pradesh",556,353,8,518,502],
        ["Jammu and Kashmir",5220,2604,62,5041,4878],
        ["Jharkhand",1763,905,8,1745,1711],
        ["Karnataka",7213,4135,89,7000,6824],
        ["Kerala",2543,1175,20,2461,2407],
        ["Ladakh",555,82,1,549,437],
        ["Madhya Pradesh",10935,7903,465,10802,10641],
        ["Maharashtra",110744,56049,4128,107958,104568],
        ["Manipur",490,151,0,458,449],
        ["Meghalaya",44,25,1,44,44],
        ["Mizoram",117,1,0,112,107],
        ["Nagaland",177,92,0,168,163],
        ["Odisha",4055,2854,11,3909,3723],
        ["Puducherry",202,95,5,194,176],
        ["Punjab",3267,2443,71,3140,3063],
        ["Rajasthan",12981,9785,301,12694,12401],
        ["Sikkim",68,4,0,68,63],
        ["Tamil Nadu",46504,25344,479,44661,42687],
        ["Telangana",5193,2766,187,4974,4737],
        ["Tripura",1086,433,1,1076,1046],
        ["Uttarakhand",1845,1189,24,1819,1785],
        ["Uttar Pradesh",13615,8268,399,13615,13118],
        ["West Bengal",11494,5494,485,11087,10698],
    ];
    let confirmedTotal = 332424; let recoveredTotal=169798; let deathsTotal =9520; let activeTotal = 153106;
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
        [112, 0, 0]
    ]
    var max = [242,133,0];
    var min = [255,255,255];
    var globalCounter = 0;
    $('.legend1').text('on '+(new Date().getDate())+' july, 2020 | 8:00 am')
    dataIndia.sort(function(a,b){
        return ((a[1]-a[4])-(b[1]-b[4]))
    })
    for (let i = 0; i < dataIndia.length; i++) {
        const element = dataIndia[i];
        const perc = element[1]-element[2]-element[3];
        let colorIndex;
        if(perc==0){
            colorIndex = 0
        }else if(perc>0 && perc <= 50){
            colorIndex = 0
        }else if(perc>50 && perc <= 100){
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
        }else if(perc>10000 && perc <= 15000){
            colorIndex = 9
        }else{
            colorIndex = 10
        }
        perc==0?colorIndex=0:colorIndex = colorIndex+1
        const color = [colorArray[colorIndex][0],colorArray[colorIndex][1],colorArray[colorIndex][2]]
        // confirmedTotal += element[1]
        // recoveredTotal += element[2]
        // deathsTotal += element[3]
        // activeTotal = activeTotal + element[1] - element[2] - element[3]
        element.push(perc);
        element.push(color);
        element.push(colorIndex);
        dataIndia[i]=element;
    }
    
    const canvas = document.getElementById("canvas");
    const canHgt = 400;
    const canWid = 400;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 0.5;
    ctx.strokeColor = '#5557';

    var alpha; var index;
    const msecForEach = 150;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            
            $('.confirmedTotal').text(confirmedTotal)
            $('.recoveredTotal').text(recoveredTotal)
            $('.deathsTotal').text(deathsTotal)
            // $('.total').addClass('active');
        }else{
            globalCounter += 1;
            if(Math.floor(globalCounter/msecForEach) == index){
                alpha += 0.05;
            }else{
                alpha = 0;
                index = Math.floor(globalCounter/msecForEach);
                // index = 0;
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

            if(index>0){

                if(arrayId[dataIndia[index-1][0]][0] === 'A & N Islands'){
                    $('.'+arrayId[dataIndia[index-1][0]][1]).css({'fill':'#EFEFEF'})
                }else{
                    $('#'+arrayId[dataIndia[index-1][0]][1]).css({'fill':'#EFEFEF'})
                }
            }
            if(arrayId[element[0]][0] === 'A & N Islands'){
                $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[7][0]+','+element[7][1]+','+element[7][2]+','+alpha+')'})
            }else{
                $('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[7][0]+','+element[7][1]+','+element[7][2]+','+alpha+')'})
            }
            const activeState = element[1]-element[2]-element[3];
            let activeStatePerc = (activeState/activeTotal)*100

            $('.actPerc').text((activeStatePerc).toFixed(1)+'%')
            ctx.clearRect(0,0,canWid,canHgt);

            ctx.beginPath();
            ctx.fillStyle = '#707070';
            ctx.moveTo(0,50);
            ctx.rect(0,50,canWid,1)
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#FF6E6E';
            ctx.strokeStyle = '#FF6E6E';
            ctx.moveTo(0,50);
            ctx.rect(0,42,canWid*(activeStatePerc/100),16)
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            

            const yester = element[4]-element[5];
            const today = element[1]-element[4];
            let scale;
            today>yester?scale=today:scale=yester;
            scale = 4000;
            if(today===0){
                $('.newCaseP').text(0)
            }else{
                $('.newCaseP').text(today.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }
            let yesterLength = (yester/scale)*Math.min(1,alpha)*(canWid-100)
            let todayLength = (today/scale)*Math.min(1,alpha)*(canWid-100);
            ctx.beginPath();
            ctx.fillStyle = '#FF6E6E';
            ctx.moveTo(0,190);
            ctx.rect(0,190,yesterLength,15);
            ctx.fill();
            ctx.strokeStyle = '#FF6E6E';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();

            
            ctx.beginPath();
            ctx.fillStyle = '#A93333';
            ctx.moveTo(0,215);
            ctx.rect(0,215,todayLength,15);
            ctx.fill();
            ctx.strokeStyle = '#A93333';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.font = '600 15px/19px Montserrat';
            const date = new Date();
            ctx.fillStyle = '#333D';
            ctx.fillText((date.getDate()-1)+'/0'+(date.getMonth()+1), yesterLength+10,203)
            ctx.fillText(date.getDate()+'/0'+(date.getMonth()+1), todayLength+10,227)
            ctx.closePath();
            
            ctx.beginPath();
            ctx.fillStyle = '#707070';
            ctx.moveTo(0,332);
            ctx.rect(0,332,canWid,1)
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#FF6E6E';
            ctx.strokeStyle = '#FF6E6E';
            ctx.moveTo(0,325);
            ctx.rect(0,325,canWid*Math.min(1,alpha)*((element[2]/element[1])),16)
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#707070';
            ctx.moveTo(0,382);
            ctx.rect(0,382,canWid,1)
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#700000';
            ctx.strokeStyle = '#700000';
            ctx.moveTo(0,375);
            ctx.rect(0,375,canWid*Math.min(1,alpha)*((element[3]/element[1])),16)
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            $('.recovPData').text(((element[2]/element[1])*100).toFixed(1)+'%')
            $('.deathPData').text(((element[3]/element[1])*100).toFixed(1)+'%')

        }
    }
    
    setTimeout(function(){
        updateColor("init");
    },2000)
    
    function animate(){
        
        if(globalCounter == 1){
            $('.legendStates').addClass('active')
        }
        // if(globalCounter<dataIndia.length-1){
        if(globalCounter<dataIndia.length*msecForEach-1){
            updateColor(32);
            requestAnimationFrame(animate)
        }else{
            updateColor("final");
        }
        
    }
    // animate();
});