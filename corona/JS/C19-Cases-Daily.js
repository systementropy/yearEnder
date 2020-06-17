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
        ["Andaman and Nicobar Islands",11,33,0,44,8,33,0,41],
        ["Andhra Pradesh",3244,3509,88,6841,3052,3316,88,6456],
        ["Arunachal Pradesh",88,7,0,95,84,7,0,91],
        ["Assam",2145,2166,8,4319,1984,2166,8,4158],
        ["Bihar",2093,4644,41,6778,2201,4409,40,6650],
        ["Chandigarh",50,302,6,358,52,296,6,354],
        ["Chhattisgarh",736,1036,9,1781,858,890,8,1756],
        ["Dadra and Nagar Haveli and Daman and Diu",36,9,0,45,31,5,0,36],
        ["Delhi",26351,16500,1837,44688,25002,16427,1400,42829],
        ["Goa",544,85,0,629,507,85,0,592],
        ["Gujarat",5962,17082,1533,24577,5886,16664,1505,24055],
        ["Haryana",4406,3748,118,8272,4057,3565,100,7722],
        ["Himachal Pradesh",180,372,8,560,195,353,8,556],
        ["Jammu and Kashmir",2454,2781,63,5298,2554,2604,62,5220],
        ["Jharkhand",709,1121,9,1839,850,905,8,1763],
        ["Karnataka",2980,4456,94,7530,2989,4135,89,7213],
        ["Kerala",1366,1236,20,2622,1348,1175,20,2543],
        ["Ladakh",563,85,1,649,472,82,1,555],
        ["Madhya Pradesh",2455,8152,476,11083,2567,7903,465,10935],
        ["Maharashtra",50057,57851,5537,113445,50567,56049,4128,110744],
        ["Manipur",341,159,0,500,339,151,0,490],
        ["Meghalaya",18,25,1,44,18,25,1,44],
        ["Mizoram",120,1,0,121,116,1,0,117],
        ["Nagaland",87,92,0,179,85,92,0,177],
        ["Odisha",1178,2974,11,4163,1190,2854,11,4055],
        ["Puducherry",111,99,6,216,102,95,5,202],
        ["Punjab",838,2461,72,3371,753,2443,71,3267],
        ["Rajasthan",3059,9849,308,13216,2895,9785,301,12981],
        ["Sikkim",66,4,0,70,64,4,0,68],
        ["Tamil Nadu",20709,26782,528,48019,20681,25344,479,46504],
        ["Telangana",2188,3027,191,5406,2240,2766,187,5193],
        ["Tripura",658,433,1,1092,652,433,1,1086],
        ["Uttarakhand",701,1216,25,1942,632,1189,24,1845],
        ["Uttar Pradesh",5064,8610,417,14091,4948,8268,399,13615],
        ["West Bengal",5386,6028,495,11909,5515,5494,485,11494],
    ];
    $('.legend1').text('on '+(new Date().getDate())+' june, 2020 | 8:00 am')
    let confirmedData = 8605; let recoveredData=0; let deathsData =0; let activeTotal = 0;
    for (let index = 0; index < dataIndia.length; index++) {
        const element = dataIndia[index];
        confirmedData += element[8];
        recoveredData += element[6];
        deathsData += element[7];
    }
    console.log(confirmedData,recoveredData,deathsData)
    confirmedData = 0; recoveredData=0; deathsData =0; activeTotal = 0;
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
    ]
    var max = [242,133,0];
    var min = [255,255,255];
    var globalCounter = 0;
    dataIndia.sort(function(a,b){
        return ((a[4]-a[8])-(b[4]-b[8]))
    })

    for (let i = 0; i < dataIndia.length; i++) {
        let element = dataIndia[i];
        const perc = element[4]-element[8];
        let colorIndex;
        if(perc<1){
            colorIndex = 0
        }else if(perc>0 && perc <= 10){
            colorIndex = 1
        }else if(perc>10 && perc <= 25){
            colorIndex = 2
        }else if(perc>25 && perc <= 50){
            colorIndex = 3
        }else if(perc>50 && perc <= 100){
            colorIndex = 4
        }else if(perc>100 && perc <= 250){
            colorIndex = 5
        }else if(perc>250 && perc <= 500){
            colorIndex = 6
        }else if(perc>500 && perc <= 750){
            colorIndex = 7
        }else if(perc>750 && perc <= 1000){
            colorIndex = 8
        }else if(perc>1000 && perc <= 2000){
            colorIndex = 9
        }else if(perc>2000 && perc <= 3000){
            colorIndex = 10
        }else{
            colorIndex = 11
        }
        // perc==0?colorIndex=0:colorIndex = colorIndex+1
        const color = [colorArray[colorIndex][0],colorArray[colorIndex][1],colorArray[colorIndex][2]]
        confirmedData += element[1]
        recoveredData += element[2]
        deathsData += element[3]
        // activeTotal = activeTotal + element[1] - element[2] - element[3]
        activeTotal = element[1] - element[2] - element[3]
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
                jQuery({ Counter: 0 }).animate({ Counter: 354065-343091}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 186935-180013}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 11903-9900}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            // $('.confirmedData').text('61149')
            // $('.recoveredData').text(recoveredData)
            // $('.deathsData').text(deathsData)
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
            if(element[0] && arrayId[element[0]]){
                $('.stateName').html(arrayId[element[0]][0]);
                $('.confirmedData').html(element[4] - element[8]);
                $('.recoveredData').html(element[2] - element[6]);
                $('.deathsData').html(element[3] - element[7]);
                if(arrayId[element[0]][0] === 'A & N Islands'){
                    $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[10][0]+','+element[10][1]+','+element[10][2]+','+alpha+')'})
                }else if(arrayId[element[0]] !== undefined){
                    $('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[10][0]+','+element[10][1]+','+element[10][2]+','+alpha+')'})
                }else {
                    console.log(element[0],arrayId[element[0]]);
                }
            }else{
                console.log('Error'+element[0])
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
