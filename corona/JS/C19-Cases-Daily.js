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
        ["Andaman and Nicobar Islands",53,159,0,212,55,152,0,207],
        ["Andhra Pradesh",32336,25574,758,58668,28800,24228,696,53724],
        ["Arunachal Pradesh",552,303,3,858,502,285,3,790],
        ["Assam",7291,18033,58,25382,8229,17095,58,25382],
        ["Bihar",10220,18515,217,28952,9996,17433,217,27646],
        ["Chandigarh",221,518,12,751,207,518,12,737],
        ["Chhattisgarh",1586,4114,29,5729,1592,3944,25,5561],
        ["Dadra and Nagar Haveli and Daman and Diu",240,463,2,705,234,448,2,684],
        ["Delhi",15288,106118,3690,125096,15166,104918,3663,123747],
        ["Goa",1552,2449,26,4027,1469,2361,23,3853],
        ["Gujarat",11760,36423,2196,50379,11513,35678,2162,49353],
        ["Haryana",6146,20952,364,27462,6277,20226,355,26858],
        ["Himachal Pradesh",576,1077,11,1664,553,1067,11,1631],
        ["Jammu and Kashmir",6540,8455,263,15258,6122,8274,254,14650],
        ["Jharkhand",3200,2904,55,6159,2893,2810,53,5756],
        ["Karnataka",44146,25459,1464,71069,42222,23795,1403,67420],
        ["Kerala",8060,5890,44,13994,7615,5616,43,13274],
        ["Ladakh",186,1010,2,1198,186,1007,2,1195],
        ["Madhya Pradesh",7082,16257,756,24095,6888,15684,738,23310],
        ["Maharashtra",132538,182217,12276,327031,131636,175029,12030,318695],
        ["Manipur",615,1400,0,2015,618,1307,0,1925],
        ["Meghalaya",416,70,4,490,396,66,4,466],
        ["Mizoram",149,168,0,317,129,168,0,297],
        ["Nagaland",545,485,0,1030,537,484,0,1021],
        ["Odisha",5344,13310,103,18757,5103,12910,97,18110],
        ["Puducherry",831,1318,30,2179,798,1265,29,2092],
        ["Punjab",3237,7389,263,10889,3130,7118,262,10510],
        ["Rajasthan",8052,22744,577,31373,7627,22195,568,30390],
        ["Sikkim",222,108,0,330,213,92,0,305],
        ["Tamil Nadu",51347,126670,2626,180643,51351,121776,2551,175678],
        ["Telangana",9891,37385,429,47705,11529,34323,422,46274],
        ["Tripura",1397,1926,8,3331,1227,1845,7,3079],
        ["Uttarakhand",1497,3297,55,4849,1375,3212,55,4642],
        ["Uttar Pradesh",20204,31855,1229,53288,19137,30831,1192,51160],
        ["West Bengal",17813,28035,1182,47030,17204,26418,1147,44769],
    ];
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $('.legend1').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
    let confirmedData = 3024; let recoveredData=0; let deathsData =0; let activeTotal = 0;
    for (let index = 0; index < dataIndia.length; index++) {
        const element = dataIndia[index];
        confirmedData += element[8];
        recoveredData += element[6];
        deathsData += element[7];
        element[5] = element[8] - element[6] - element[7]
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
        }else if(perc>0 && perc <= 50){
            colorIndex = 1
        }else if(perc>50 && perc <= 100){
            colorIndex = 2
        }else if(perc>100 && perc <= 250){
            colorIndex = 3
        }else if(perc>250 && perc <= 500){
            colorIndex = 4
        }else if(perc>500 && perc <= 750){
            colorIndex = 5
        }else if(perc>750 && perc <= 1000){
            colorIndex = 6
        }else if(perc>1000 && perc <= 2000){
            colorIndex = 7
        }else if(perc>2000 && perc <= 3000){
            colorIndex = 8
        }else if(perc>3000 && perc <= 4000){
            colorIndex = 9
        }else if(perc>4000 && perc <= 5000){
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
                jQuery({ Counter: 0 }).animate({ Counter: 1192915-1155191}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 753050-724578}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 28732-28084}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
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
                alpha += 0.1;
            }else{
                alpha = 0;
                index = Math.floor(globalCounter/msecForEach);
            }
            
            const element = dataIndia[index];
            if(element[0] && arrayId[element[0]]){
                $('.stateName').html(arrayId[element[0]][0]);
                $('.confirmedData').html(
                    element[4] - element[8]>1000?((element[4] - element[8])/1000).toFixed(1)+'K':element[4] - element[8]
                );
                $('.recoveredData').html(
                    element[2] - element[6]>1000?((element[2] - element[6])/1000).toFixed(1)+'K':element[2] - element[6]
                );
                $('.deathsData').html(
                    element[3] - element[7]>1000?((element[3] - element[7])/1000).toFixed(1)+'K':element[3] - element[7]
                );
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
