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
        "Sikkim":["Sikkim","Sikkim"]
    };
    
    var dataIndia = [
        ["Andaman and Nicobar Islands",0,33,0,33,0,33,0,33],
        ["Andhra Pradesh",2191,2802,77,5070,2031,2745,75,4851],
        ["Arunachal Pradesh",56,1,0,57,50,1,0,51],
        ["Assam",1848,1085,4,2937,2107,665,4,2776],
        ["Bihar",2563,2864,32,5459,2672,2499,31,5202],
        ["Chandigarh",32,286,5,323,39,273,5,317],
        ["Chhattisgarh",848,386,6,1240,848,308,4,1160],
        ["Dadar Nagar Haveli",20,2,0,22,20,2,0,22],
        ["Delhi",18543,11861,905,31309,17712,11357,874,29943],
        ["Goa",292,67,0,359,263,67,0,330],
        ["Gujarat",5336,14365,1313,21014,5309,13956,1280,20545],
        ["Haryana",3030,2134,45,5209,2681,2134,39,4854],
        ["Himachal Pradesh",191,249,5,445,189,227,5,421],
        ["Jammu and Kashmir",2792,1506,48,4346,2916,1324,45,4285],
        ["Jharkhand",844,559,8,1411,730,519,7,1256],
        ["Karnataka",3251,2604,66,5921,3177,2519,64,5760],
        ["Kerala",1232,848,16,2096,1175,814,16,2005],
        ["Ladakh",55,52,1,108,50,52,1,103],
        ["Madhya Pradesh",2700,6729,420,9849,2688,6536,414,9638],
        ["Maharashtra",44860,42638,3289,90787,44384,40975,3169,88528],
        ["Manipur",243,61,0,304,214,58,0,272],
        ["Meghalaya",29,13,1,43,22,13,1,36],
        ["Mizoram",87,1,0,88,41,1,0,42],
        ["Nagaland",117,10,0,127,115,8,0,123],
        ["Odisha",998,2133,9,3140,992,1993,9,2994],
        ["Puducherry",75,52,0,127,75,52,0,127],
        ["Punjab",497,2167,55,2719,482,2128,53,2663],
        ["Rajasthan",2662,8328,255,11245,2513,8004,246,10763],
        ["Sikkim",13,0,0,13,7,0,0,7],
        ["Tamil Nadu",16282,18325,307,34914,15416,17527,286,33229],
        ["Telengana",1963,1809,148,3920,1803,1710,137,3650],
        ["Tripura",671,192,1,864,646,192,0,838],
        ["Uttarakhand",769,755,13,1537,684,714,13,1411],
        ["Uttar Pradesh",4365,6669,301,11335,4320,6344,283,10947],
        ["West Bengal",4950,3620,415,8985,4743,3465,405,8613],
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
        console.log(element[0],perc)
        console.log(element[0],perc)
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
                jQuery({ Counter: 0 }).animate({ Counter: 276583-266598}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 135206-129215}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 7745-7466}, {
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
