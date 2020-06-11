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
        ["Andaman and Nicobar Islands",1,33,0,34,0,33,0,33],
        ["Andhra Pradesh",2292,2899,78,5269,2191,2802,77,5070],
        ["Arunachal Pradesh",55,2,0,57,56,1,0,57],
        ["Assam",1839,1249,4,3092,1848,1085,4,2937],
        ["Bihar",2606,3071,33,5710,2563,2864,32,5459],
        ["Chandigarh",36,286,5,327,32,286,5,323],
        ["Chhattisgarh",854,402,6,1262,848,386,6,1240],
        ["Dadar Nagar Haveli",24,2,0,26,20,2,0,22],
        ["Daman & Diu",2,0,0,2,0,0,0,0],
        ["Delhi",19581,12245,984,32810,18543,11861,905,31309],
        ["Goa",320,67,0,387,292,67,0,359],
        ["Gujarat",5439,14735,1347,21521,5336,14365,1313,21014],
        ["Haryana",3339,2188,52,5579,3030,2134,45,5209],
        ["Himachal Pradesh",191,254,6,451,191,249,5,445],
        ["Jammu and Kashmir",2785,1671,51,4507,2792,1506,48,4346],
        ["Jharkhand",889,592,8,1489,844,559,8,1411],
        ["Karnataka",3110,2862,69,6041,3251,2604,66,5921],
        ["Kerala",1238,905,18,2161,1232,848,16,2096],
        ["Ladakh",62,52,1,115,55,52,1,108],
        ["Madhya Pradesh",2730,6892,427,10049,2700,6729,420,9849],
        ["Maharashtra",46086,44517,3438,94041,44860,42638,3289,90787],
        ["Manipur",248,63,0,311,243,61,0,304],
        ["Meghalaya",30,13,1,44,29,13,1,43],
        ["Mizoram",92,1,0,93,87,1,0,88],
        ["Nagaland",106,22,0,128,117,10,0,127],
        ["Odisha",959,2282,9,3250,998,2133,9,3140],
        ["Puducherry",74,53,0,127,75,52,0,127],
        ["Punjab",518,2232,55,2805,497,2167,55,2719],
        ["Rajasthan",2772,8569,259,11600,2662,8328,255,11245],
        ["Sikkim",13,0,0,13,13,0,0,13],
        ["Tamil Nadu",17182,19333,326,36841,16282,18325,307,34914],
        ["Telengana",2138,1817,156,4111,1963,1809,148,3920],
        ["Tripura",655,239,1,895,671,192,1,864],
        ["Uttarakhand",716,831,15,1562,769,755,13,1537],
        ["Uttar Pradesh",4418,6871,321,11610,4365,6669,301,11335],
        ["West Bengal",5117,3779,432,9328,4950,3620,415,8985],
    ];
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
                jQuery({ Counter: 0 }).animate({ Counter: 286579-276583}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 141029-135206}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 8102-7745}, {
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
