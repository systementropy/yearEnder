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
        ["Andaman and Nicobar Islands",166,4194,60,,168,4175,60,],
        ["Andhra Pradesh",21825,809770,6768,,21878,807318,6757,],
        ["Arunachal Pradesh",1603,13679,43,,1621,13580,43,],
        ["Assam",7067,200384,938,,7662,199458,934,],
        ["Bihar",6518,212452,1129,,6356,211872,1121,],
        ["Chandigarh",772,13925,230,,703,13862,229,],
        ["Chhattisgarh",23066,172513,2412,,23113,170760,2360,],
        ["Dadra and Nagar Haveli and Daman and Diu",37,3233,2,,36,3230,2,],
        ["Delhi",39722,377276,6833,,38729,371155,6769,],
        ["Goa",2058,42056,633,,2065,41849,630,],
        ["Gujarat",12014,162709,3748,,12304,161388,3744,],
        ["Haryana",15357,161176,1880,,14644,159643,1859,],
        ["Himachal Pradesh",3845,20033,361,,3668,19780,361,],
        ["Jammu and Kashmir",5745,90537,1523,,5802,89905,1517,],
        ["Jharkhand",4639,98365,895,,4685,97964,894,],
        ["Karnataka",33338,797204,11347,,33114,794503,11312,],
        ["Kerala",83324,388504,1640,,84203,380650,1613,],
        ["Ladakh",784,5854,80,,752,5802,79,],
        ["Madhya Pradesh",7676,164923,3004,,7766,164067,2992,],
        ["Maharashtra",103007,1562342,44965,,107358,1551282,44804,],
        ["Manipur",3608,16092,191,,3786,15750,189,],
        ["Meghalaya",984,8904,91,,989,8813,91,],
        ["Mizoram",545,2485,2,,515,2473,2,],
        ["Nagaland",1000,8282,45,,1058,8161,45,],
        ["Odisha",12201,285174,1393,,12363,283533,1378,],
        ["Puducherry",1640,33437,598,,1830,33123,597,],
        ["Punjab",4882,127304,4295,,4621,126932,4281,],
        ["Rajasthan",16277,189354,1966,,16301,187544,1955,],
        ["Sikkim",283,3786,75,,240,3778,75,],
        ["Tamil Nadu",19002,708846,11299,,19061,706444,11272,],
        ["Telangana",19936,227583,1372,,19272,226646,1366,],
        ["Tripura",1286,29792,356,,1327,29666,354,],
        ["Uttarakhand",3736,59746,1056,,3680,59338,1047,],
        ["Uttar Pradesh",23132,463240,7155,,23150,461073,7131,],
        ["West Bengal",35557,354732,7177,,35953,350449,7122,],
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
