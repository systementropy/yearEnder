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
        ["Andaman and Nicobar Islands",150,4346,61,,145,4330,61,],
        ["Andhra Pradesh",17892,829991,6881,,18659,828484,6868,],
        ["Arunachal Pradesh",1232,14588,48,,1264,14500,48,],
        ["Assam",3446,206044,964,,3666,205639,963,],
        ["Bihar",5221,220007,1189,,5454,219263,1184,],
        ["Chandigarh",1052,14584,250,,1088,14468,248,],
        ["Chhattisgarh",18577,190463,2604,,19087,188869,2578,],
        ["Dadra and Nagar Haveli and Daman and Diu",19,3273,2,,22,3267,2,],
        ["Delhi",40128,441361,7713,,39990,437801,7614,],
        ["Goa",1424,43941,663,,1585,43656,662,],
        ["Gujarat",12456,172972,3808,,12575,171932,3803,],
        ["Haryana",19342,180647,2038,,19557,178298,2019,],
        ["Himachal Pradesh",6775,22931,450,,6879,22392,442,],
        ["Jammu and Kashmir",5588,95824,1597,,5688,95342,1589,],
        ["Jharkhand",2754,102548,928,,2952,102188,924,],
        ["Karnataka",26122,825141,11541,,27165,822953,11529,],
        ["Kerala",71046,454774,1888,,74922,448207,1869,],
        ["Ladakh",944,6456,93,,922,6385,89,],
        ["Madhya Pradesh",8996,172436,3092,,9146,171691,3090,],
        ["Maharashtra",85363,1618380,46034,,85889,1615379,45974,],
        ["Manipur",2993,18832,224,,3057,18593,221,],
        ["Meghalaya",933,9672,101,,971,9594,100,],
        ["Mizoram",524,2915,5,,516,2876,4,],
        ["Nagaland",1013,8959,53,,920,8913,52,],
        ["Odisha",8706,299159,1543,,9270,297862,1527,],
        ["Puducherry",902,34827,608,,984,34732,608,],
        ["Punjab",5601,132001,4480,,5769,131431,4458,],
        ["Rajasthan",18684,207224,2078,,18337,205414,2066,],
        ["Sikkim",293,4137,91,,284,4125,89,],
        ["Tamil Nadu",15765,732656,11495,,16441,730272,11478,],
        ["Telangana",13732,243686,1410,,14385,242084,1407,],
        ["Tripura",1044,30631,364,,1043,30555,364,],
        ["Uttarakhand",4184,63158,1116,,4565,62543,1107,],
        ["Uttar Pradesh",22603,482854,7393,,22967,480965,7372,],
        ["West Bengal",27897,398952,7714,,29314,394576,7661,],
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
