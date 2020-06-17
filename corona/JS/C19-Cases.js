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
        ["Andaman and Nicobar Islands",11,33,0,44],
        ["Andhra Pradesh",3244,3509,88,6841],
        ["Arunachal Pradesh",88,7,0,95],
        ["Assam",2145,2166,8,4319],
        ["Bihar",2093,4644,41,6778],
        ["Chandigarh",50,302,6,358],
        ["Chhattisgarh",736,1036,9,1781],
        ["Dadra and Nagar Haveli and Daman and Diu",36,9,0,45],
        ["Delhi",26351,16500,1837,44688],
        ["Goa",544,85,0,629],
        ["Gujarat",5962,17082,1533,24577],
        ["Haryana",4406,3748,118,8272],
        ["Himachal Pradesh",180,372,8,560],
        ["Jammu and Kashmir",2454,2781,63,5298],
        ["Jharkhand",709,1121,9,1839],
        ["Karnataka",2980,4456,94,7530],
        ["Kerala",1366,1236,20,2622],
        ["Ladakh",563,85,1,649],
        ["Madhya Pradesh",2455,8152,476,11083],
        ["Maharashtra",50057,57851,5537,113445],
        ["Manipur",341,159,0,500],
        ["Meghalaya",18,25,1,44],
        ["Mizoram",120,1,0,121],
        ["Nagaland",87,92,0,179],
        ["Odisha",1178,2974,11,4163],
        ["Puducherry",111,99,6,216],
        ["Punjab",838,2461,72,3371],
        ["Rajasthan",3059,9849,308,13216],
        ["Sikkim",66,4,0,70],
        ["Tamil Nadu",20709,26782,528,48019],
        ["Telangana",2188,3027,191,5406],
        ["Tripura",658,433,1,1092],
        ["Uttarakhand",701,1216,25,1942],
        ["Uttar Pradesh",5064,8610,417,14091],
        ["West Bengal",5386,6028,495,11909],
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
    $('.legend1').text('As of '+(new Date().getDate())+' june, 2020 | 8:00 am');
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
                jQuery({ Counter: 0 }).animate({ Counter: 155227}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 186935}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 11903}, {
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
            if(Math.floor(globalCounter/msecForEach) == index){
                alpha += 0.025;
            }else{
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
            if(arrayId[element[0]][0] === 'A & N Islands'){
                $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[6][0]+','+element[6][1]+','+element[6][2]+','+alpha+')'})
            }else if(arrayId[element[0]] !== undefined){
                $('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[6][0]+','+element[6][1]+','+element[6][2]+','+alpha+')'})
            }else {
                console.log(element[0],arrayId[element[0]]);
            }
            const activeState = element[1];
            // let activeStatePerc = Math.pow((activeState*100/activeTotal),0.5)
            

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
