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
        "Telengana":["Telangana","Telangana"],
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
        "Dadar Nagar Haveli":["Dadra and Nagar Haveli","DnNHaweli"],
        "Sikkim":["Sikkim","Sikkim"],
        "Dadra and Nagar Haveli and Daman and Diu":["DNHDD","DnNHaweli"]
    };
    
    var dataIndia = [
        ["Andaman and Nicobar Islands",38,33,0,38,34],
        ["Andhra Pradesh",5680,3105,80,5429,5269],
        ["Arunachal Pradesh",67,4,0,61,57],
        ["Assam",3498,1537,8,3319,3092],
        ["Bihar",6103,3587,36,5983,5710],
        ["Chandigarh",334,286,5,332,327],
        ["Chhattisgarh",1429,550,6,1398,1262],
        ["Dadra and Nagar Haveli and Daman and Diu",30,2,0,30,28],
        ["Delhi",36824,13398,1214,34687,32810],
        ["Goa",463,69,0,417,387],
        ["Gujarat",22527,15493,1415,22032,21521],
        ["Haryana",6334,2475,70,5968,5579],
        ["Himachal Pradesh",486,297,6,470,451],
        ["Jammu and Kashmir",4730,2086,53,4574,4507],
        ["Jharkhand",1617,672,8,1599,1489],
        ["Karnataka",6516,3440,79,6245,6041],
        ["Kerala",2322,1000,19,2244,2161],
        ["Ladakh",239,62,1,135,115],
        ["Madhya Pradesh",10443,7201,440,10241,10049],
        ["Maharashtra",101141,47796,3717,97648,94041],
        ["Manipur",385,77,0,366,311],
        ["Meghalaya",44,22,1,44,44],
        ["Mizoram",104,1,0,102,93],
        ["Nagaland",156,49,0,128,128],
        ["Odisha",3498,2474,10,3386,3250],
        ["Puducherry",157,67,2,157,127],
        ["Punjab",2986,2282,63,2887,2805],
        ["Rajasthan",12068,8898,272,11838,11600],
        ["Sikkim",63,2,0,14,13],
        ["Tamil Nadu",40698,22047,367,38716,36841],
        ["Telangana",4484,2278,174,4320,4111],
        ["Tripura",961,278,1,913,895],
        ["Uttarakhand",1724,947,21,1643,1562],
        ["Uttar Pradesh",12616,7609,365,12088,11610],
        ["West Bengal",10244,4206,451,9768,9328],
    ];
    let confirmedTotal = 308993; let recoveredTotal=154330; let deathsTotal =8884; let activeTotal = 154330;
    let colorArray = [
        [135,255,0],[200,255,0],[255,246,0],[255,210,65],[255,195,2],[255,171,63],[255,143,0],[255,132,63],[255,91,0],[176,14,14],[145,0,0],[83,0,0]
    ]
    var max = [242,133,0];
    var min = [255,255,255];
    var globalCounter = 0;
    dataIndia.sort(function(a,b){
        return ((a[1]-a[2]-a[3])-(b[1]-b[2]-b[3]))
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
    const canHgt = 500;
    const canWid = 500;
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
            $('.stateName.statewise').html(arrayId[element[0]][0]);
            $('.confirmed.statewise').html(
                element[1]>1000?((element[1]/1000).toFixed(1)+'K'):element[1]
            );
            $('.recovered.statewise').html(
                element[2]>1000?((element[2]/1000).toFixed(1)+'K'):element[2]
            );
            $('.deaths.statewise').html(
                element[3]>1000?((element[3]/1000).toFixed(1)+'K'):element[3]
            );

            if(index>0){

                if(arrayId[dataIndia[index-1][0]][0] === 'A & N Islands'){
                    $('.'+arrayId[dataIndia[index-1][0]][1]).css({'fill':'#FFF7'})
                }else{
                    $('#'+arrayId[dataIndia[index-1][0]][1]).css({'fill':'#FFF7'})
                }
            }
            if(arrayId[element[0]][0] === 'A & N Islands'){
                $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[7][0]+','+element[7][1]+','+element[7][2]+','+alpha+')'})
            }else{
                $('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[7][0]+','+element[7][1]+','+element[7][2]+','+alpha+')'})
            }
            const activeState = element[1]-element[2]-element[3];
            let activeStatePerc = activeState/activeTotal

            ctx.beginPath();
            ctx.clearRect(0,0,canWid,canHgt);
            ctx.fillStyle = '#999';
            ctx.moveTo(50,50);
            ctx.arc(50,50,48,0,2*Math.PI)
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = 'rgba('+element[7][0]+','+element[7][1]+','+element[7][2]+',1)';
            ctx.moveTo(50,50);
            ctx.arc(50,50,50,0,2*Math.PI*activeStatePerc*Math.min(alpha,1))
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#F5F5F6';
            ctx.moveTo(50,50);
            ctx.arc(50,50,45,0,2*Math.PI)
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#333';
            ctx.font = '500 25px monty';
            ctx.moveTo(50,50);
            const t1 = ctx.measureText((activeStatePerc*100).toFixed(1)+'%').width;
            ctx.fillText((activeStatePerc*100).toFixed(1)+'%', 50-(t1/2), 60 )
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#333';
            ctx.font = '300 32px monty';
            ctx.moveTo(50,50);
            ctx.fillText('Of current active cases', 120, 60 )
            ctx.font = '400 24px monty';
            ctx.fillText('in India', 120, 80 )
            ctx.fill();

            const yester = element[4]-element[5];
            const today = element[1]-element[4];
            let scale;
            today>yester?scale=today:scale=yester;

            ctx.beginPath();
            ctx.fillStyle = '#e0c532CC';
            ctx.moveTo(100,100);
            ctx.rect(150,(150+(1-(yester/scale)*Math.min(1,alpha))*170),150,(yester/scale)*170*Math.min(1,alpha))
            ctx.fill();
            ctx.strokeStyle = '#3337';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = '#e08432CC';
            ctx.moveTo(305,100);
            ctx.rect(305,(150+(1-(today/scale)*Math.min(1,alpha))*170),150,(today/scale)*170*Math.min(1,alpha))
            ctx.fill();
            ctx.strokeStyle = '#5557';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
            
            if(yester!==0 || today!==0){
                ctx.beginPath();
                ctx.fillStyle = '#333';
                ctx.font = '500 25px monty';
                ctx.alignText = 'left';
                let label = today-yester;
                today>yester?label='+'+label:'';
                today>yester?ctx.fillStyle = '#761388':ctx.fillStyle = '#137688';
                const t4 = ctx.measureText(label).width;
                ctx.fillText(
                    label, 
                    380-(t4/2),
                    -25*(1-today/scale)+(140+(1-(today/scale)*Math.min(1,alpha))*140))
                
                ctx.font = '600 22px monty';
                const t14 = ctx.measureText('17/05').width;
                const t15 = ctx.measureText('18/05').width;
                ctx.fillStyle = '#333D';
                const date = new Date();
                ctx.fillText((date.getDate()-1)+'/0'+(date.getMonth()+1), 225-(t14/2),320)
                ctx.fillText(date.getDate()+'/0'+(date.getMonth()+1), 380-(t15/2),320)
                ctx.fill();
            }
            
            if(today == 0 && yester>0){
                ctx.beginPath();
                ctx.fillStyle = '#137688';
                ctx.font = '600 32px monty';
                ctx.fillText('No', 150, 350 )
                
                let t5 = ctx.measureText('No').width
                ctx.font = '400 24px monty';
                ctx.fillText('new cases today', 155+t5, 350 )
                ctx.fill();
            }else if(today>1){
                ctx.beginPath();
                ctx.fillStyle = '#333';
                ctx.font = '600 32px monty';
                ctx.fillText(today, 150, 350 )
                
                let t5 = ctx.measureText(today).width
                ctx.font = '400 24px monty';
                ctx.fillText('New cases today', 155+t5, 350 )
                ctx.fill();
            }else if(today==1){
                ctx.beginPath();
                ctx.fillStyle = '#333';
                ctx.font = '600 32px monty';
                ctx.fillText('1', 150, 350 )
                
                let t5 = ctx.measureText(today).width
                ctx.font = '400 24px monty';
                ctx.fillText('New case today', 155+t5, 350 )
                ctx.fill();
            }else if(today ==0 && yester ==0){
                ctx.beginPath();
                ctx.fillStyle = '#137688';
                ctx.font = '600 32px monty';
                ctx.fillText('No', 150, 300 )
                
                let t5 = ctx.measureText('No').width
                ctx.font = '400 24px monty';
                ctx.fillText('new cases today', 155+t5, 300 )
                ctx.fill();
            }
            


            ctx.beginPath();
            ctx.fillStyle = '#999';
            ctx.moveTo(50,300);
            ctx.arc(50, 430,48,0,2*Math.PI)
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = 'rgba(74,111,32)';
            ctx.moveTo(50, 430);
            if(element[2]>0){
                ctx.arc(50, 430,50,0,Math.min(1,alpha)*2*Math.PI*(1-element[2]/element[1]),true)
            }
            if(element[2] == element[1]){
                ctx.arc(50, 430,50,0,2*Math.PI)
            }
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#F33';
            ctx.moveTo(50, 430);
            ctx.arc(50, 430,50,0,Math.min(1,alpha)*2*Math.PI*element[3]/element[1])
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#F5F5F6';
            ctx.moveTo(50, 430);
            ctx.arc(50, 430,45,0,2*Math.PI)
            ctx.fill();

            

            ctx.beginPath();
            ctx.fillStyle = 'rgba(74,111,32)';
            ctx.font = '500 25px monty';
            ctx.moveTo(50, 430);
            const t2 = ctx.measureText((element[2]/element[1]*100).toFixed(1)+'%').width;
            ctx.fillText((element[2]/element[1]*100).toFixed(1)+'%', 50-(t2/2), 430 )
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#F33';
            ctx.font = '500 25px monty';
            ctx.moveTo(50, 430);
            const t3 = ctx.measureText((element[3]/element[1]*100).toFixed(1)+'%').width;
            ctx.fillText((element[3]/element[1]*100).toFixed(1)+'%', 50-(t3/2), 450 )
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#333';
            ctx.font = '300 32px monty';
            ctx.fillText('Recovered & Deaths', 120, 430 )
            ctx.font = '400 24px monty';
            ctx.fillText('in the state', 120,450 )
            ctx.fill();

        }
    }
    
    setTimeout(function(){
        updateColor("init");
    },2000)
    
    function animate(){
        
        if(globalCounter == 1){
            $('.legendStates').addClass('active')
        }
        if(globalCounter<dataIndia.length-1){
        // if(globalCounter<dataIndia.length*msecForEach-1){
            updateColor(32);
            requestAnimationFrame(animate)
        }else{
            updateColor("final");
        }
        
    }
    // animate();
});