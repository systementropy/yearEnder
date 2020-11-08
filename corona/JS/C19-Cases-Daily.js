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
        "Pondicherry":["Pondicherry"],
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
        "Meghalaya":["Meghalaya","Meghayala"],
        "Dadra and Nagar Haveli and Daman and Diu":["DNHDD","DnNHaweli"],
        "Sikkim":["Sikkim","Sikkim"],
        "Daman & Diu":["Daman & Diu","Daman"]
    };
    
    var dataIndia = [
        ["Andaman and Nicobar Islands",175,4206,60,,166,4194,60,],
        ["Andhra Pradesh",21434,812517,6779,,21825,809770,6768,],
        ["Arunachal Pradesh",1559,13785,45,,1603,13679,43,],
        ["Assam",6758,200939,940,,7067,200384,938,],
        ["Bihar",6287,213513,1136,,6518,212452,1129,],
        ["Chandigarh",815,13978,232,,772,13925,230,],
        ["Chhattisgarh",23256,173872,2434,,23066,172513,2412,],
        ["Dadra and Nagar Haveli and Daman and Diu",32,3239,2,,37,3233,2,],
        ["Delhi",40258,383614,6912,,39722,377276,6833,],
        ["Goa",2036,42239,641,,2058,42056,633,],
        ["Gujarat",12124,163640,3753,,12014,162709,3748,],
        ["Haryana",15713,162814,1897,,15357,161176,1880,],
        ["Himachal Pradesh",4198,20243,371,,3845,20033,361,],
        ["Jammu and Kashmir",5584,91225,1528,,5745,90537,1523,],
        ["Jharkhand",4566,98776,897,,4639,98365,895,],
        ["Karnataka",33339,799439,11369,,33338,797204,11347,],
        ["Kerala",83377,395624,1668,,83324,388504,1640,],
        ["Ladakh",816,5894,80,,784,5854,80,],
        ["Madhya Pradesh",7736,165715,3017,,7676,164923,3004,],
        ["Maharashtra",100068,1569090,45115,,103007,1562342,44965,],
        ["Manipur",3223,16714,194,,3608,16092,191,],
        ["Meghalaya",995,8959,93,,984,8904,91,],
        ["Mizoram",562,2526,2,,545,2485,2,],
        ["Nagaland",1074,8336,45,,1000,8282,45,],
        ["Odisha",11873,286857,1410,,12201,285174,1393,],
        ["Puducherry",1212,33932,600,,1640,33437,598,],
        ["Punjab",4827,127821,4310,,4882,127304,4295,],
        ["Rajasthan",16327,191132,1979,,16277,189354,1966,],
        ["Sikkim",314,3805,76,,283,3786,75,],
        ["Tamil Nadu",18966,711198,11324,,19002,708846,11299,],
        ["Telangana",19890,229064,1377,,19936,227583,1372,],
        ["Tripura",1302,29858,357,,1286,29792,356,],
        ["Uttarakhand",3890,60083,1063,,3736,59746,1056,],
        ["Uttar Pradesh",22991,465250,7180,,23132,463240,7155,],
        ["West Bengal",35088,359071,7235,,35557,354732,7177,],
    ];
    
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $('.legend1').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
    let confirmedData = 3024; let recoveredData=0; let deathsData =0; let activeTotal = 0;
    let diffDataconfirmed=0,diffDatarecovered=0,diffDatadeaths=0;
    for (let index = 0; index < dataIndia.length; index++) {
        const element = dataIndia[index]
        element[4] = element[1]+element[2]+element[3]
        element[8] = element[5]+element[6]+element[7]
        // const element = element;
        confirmedData += element[8];
        diffDataconfirmed += (element[4]-element[8])
        recoveredData += element[6];
        diffDatarecovered += (element[2]-element[6])
        deathsData += element[7];
        diffDatadeaths += (element[3]-element[7])
        element[9] = element[4]-element[8]
        dataIndia[index] = element
        // element[5] = element[8] - element[6] - element[7]
    }
    console.log(JSON.stringify(dataIndia));
    console.log(confirmedData,recoveredData,deathsData)
    console.log(diffDataconfirmed,diffDatarecovered,diffDatadeaths)
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
    console.log(dataIndia);
    for (let i = 0; i < dataIndia.length; i++) {
        let element = dataIndia[i];
        const perc = element[4]-element[8];
        let colorIndex;
        if(perc==0){
            colorIndex = 0
        }else if(perc>0 && perc <= 250){
            colorIndex = 1
        }else if(perc>250 && perc <= 500){
            colorIndex = 2
        }else if(perc>500 && perc <= 750){
            colorIndex = 3
        }else if(perc>750 && perc <= 1000){
            colorIndex = 4
        }else if(perc>1000 && perc <= 2000){
            colorIndex = 5
        }else if(perc>2000 && perc <= 3000){
            colorIndex = 6
        }else if(perc>3000 && perc <= 4000){
            colorIndex = 7
        }else if(perc>4000 && perc <= 5000){
            colorIndex = 8
        }else if(perc>5000 && perc <= 7500){
            colorIndex = 9
        }else if(perc>6000 && perc <= 10000){
            colorIndex = 10
        }else{
            colorIndex = 11
        }
        console.log(colorIndex)
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
    const msecForEach = 90;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            $('.stateName').html('India');
            $('.confirmedData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: diffDataconfirmed},{
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: diffDatarecovered},{
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: diffDatadeaths},{
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
                    $('.'+arrayId[element[0]][1]).css({'fill':'rgba('+element[11][0]+','+element[11][1]+','+element[11][2]+','+alpha+')'})
                }else if(arrayId[element[0]] !== undefined){
                    console.log(arrayId[element[0]][1],'rgba('+element[11][0]+','+element[11][1]+','+element[11][2]+',1');
                    $('#'+arrayId[element[0]][1]).css({'fill':'rgba('+element[11][0]+','+element[11][1]+','+element[11][2]+','+alpha+')'})
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
