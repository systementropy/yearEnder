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
        "Daman & Diu":["Daman & Diu","Daman"]
    };
    
    var dataIndia = [
        ["Andaman and Nicobar Islands",1,33,0,34],
        ["Andhra Pradesh",2292,2899,78,5269],
        ["Arunachal Pradesh",55,2,0,57],
        ["Assam",1839,1249,4,3092],
        ["Bihar",2606,3071,33,5710],
        ["Chandigarh",36,286,5,327],
        ["Chhattisgarh",854,402,6,1262],
        ["Dadar Nagar Haveli",24,2,0,26],
        ["Daman & Diu",2,0,0,2],
        ["Delhi",19581,12245,984,32810],
        ["Goa",320,67,0,387],
        ["Gujarat",5439,14735,1347,21521],
        ["Haryana",3339,2188,52,5579],
        ["Himachal Pradesh",191,254,6,451],
        ["Jammu and Kashmir",2785,1671,51,4507],
        ["Jharkhand",889,592,8,1489],
        ["Karnataka",3110,2862,69,6041],
        ["Kerala",1238,905,18,2161],
        ["Ladakh",62,52,1,115],
        ["Madhya Pradesh",2730,6892,427,10049],
        ["Maharashtra",46086,44517,3438,94041],
        ["Manipur",248,63,0,311],
        ["Meghalaya",30,13,1,44],
        ["Mizoram",92,1,0,93],
        ["Nagaland",106,22,0,128],
        ["Odisha",959,2282,9,3250],
        ["Puducherry",74,53,0,127],
        ["Punjab",518,2232,55,2805],
        ["Rajasthan",2772,8569,259,11600],
        ["Sikkim",13,0,0,13],
        ["Tamil Nadu",17182,19333,326,36841],
        ["Telengana",2138,1817,156,4111],
        ["Tripura",655,239,1,895],
        ["Uttarakhand",716,831,15,1562],
        ["Uttar Pradesh",4418,6871,321,11610],
        ["West Bengal",5117,3779,432,9328],
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
                jQuery({ Counter: 0 }).animate({ Counter: 137448}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 141029}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 8102}, {
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
