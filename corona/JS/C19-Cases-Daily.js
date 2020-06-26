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
        ["Andaman and Nicobar Islands",16,43,0,59,13,43,0,56],
        ["Andhra Pradesh",5760,4988,136,10884,5428,4779,124,10331],
        ["Arunachal Pradesh",121,38,1,160,120,38,0,158],
        ["Assam",2279,4033,9,6321,2231,3958,9,6198],
        ["Bihar",1975,6441,57,8473,2039,6113,57,8209],
        ["Chandigarh",88,329,6,423,91,323,6,420],
        ["Chhattisgarh",685,1755,12,2452,780,1627,12,2419],
        ["Dadra and Nagar Haveli and Daman and Diu",123,32,0,155,90,30,0,120],
        ["Delhi",26586,44765,2429,73780,26588,41437,2365,70390],
        ["Goa",658,335,2,995,660,289,2,951],
        ["Gujarat",6269,21498,1753,29520,6120,21088,1735,28943],
        ["Haryana",4885,7380,198,12463,4897,6925,188,12010],
        ["Himachal Pradesh",353,477,9,839,332,466,8,806],
        ["Jammu and Kashmir",2492,3967,90,6549,2516,3818,88,6422],
        ["Jharkhand",645,1605,12,2262,626,1570,11,2207],
        ["Karnataka",3720,6670,170,10560,3803,6151,164,10118],
        ["Kerala",1761,1943,22,3726,1693,1888,22,3603],
        ["Ladakh",582,358,1,941,666,274,1,941],
        ["Madhya Pradesh",2435,9619,542,12596,2441,9473,534,12448],
        ["Maharashtra",63357,77453,6931,147741,62369,73792,6739,142900],
        ["Manipur",702,354,0,1056,642,328,0,970],
        ["Meghalaya",3,42,1,46,3,42,1,46],
        ["Mizoram",115,30,0,145,123,19,0,142],
        ["Nagaland",195,160,0,355,199,148,0,347],
        ["Odisha",1654,4291,17,5962,1612,4123,17,5752],
        ["Puducherry",306,187,9,502,276,176,9,461],
        ["Punjab",1457,3192,120,4769,1415,3099,113,4627],
        ["Rajasthan",3077,12840,379,16296,3023,12611,375,16009],
        ["Sikkim",46,39,0,85,45,39,0,84],
        ["Tamil Nadu",30067,39999,911,70977,28839,37763,866,67468],
        ["Telangana",6446,4688,230,11364,5858,4361,225,10444],
        ["Tripura",270,1019,1,1290,361,897,1,1259],
        ["Uttarakhand",897,1758,36,2691,867,1721,35,2623],
        ["Uttar Pradesh",6463,13119,611,20193,6375,12586,596,19557],
        ["West Bengal",4852,10190,606,15648,4880,9702,591,15173],
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
                jQuery({ Counter: 0 }).animate({ Counter: 490401-473105}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 285637-271697}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 15301-14894}, {
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
