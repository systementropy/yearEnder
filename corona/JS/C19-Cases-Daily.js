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
        ["Andaman and Nicobar Islands",190,3937,57,,199,3913,56,],
        ["Andhra Pradesh",32257,758138,6524,,32376,754415,6508,],
        ["Arunachal Pradesh",2638,11407,32,,2682,11199,31,],
        ["Assam",24724,177662,896,,25807,176078,889,],
        ["Bihar",11213,197208,1026,,11118,196240,1019,],
        ["Chandigarh",712,12924,212,,744,12842,209,],
        ["Chhattisgarh",25238,143212,1680,,25795,140216,1628,],
        ["Dadra and Nagar Haveli and Daman and Diu",47,3164,2,,44,3161,2,],
        ["Delhi",25237,312918,6163,,24117,310191,6128,],
        ["Goa",2991,38031,564,,3099,37683,557,],
        ["Gujarat",14121,146171,3667,,14193,144970,3660,],
        ["Haryana",10009,142798,1688,,10187,141506,1674,],
        ["Himachal Pradesh",2623,16937,284,,2636,16706,279,],
        ["Jammu and Kashmir",7952,80802,1412,,8088,80092,1402,],
        ["Jharkhand",6122,91629,859,,6206,91004,851,],
        ["Karnataka",92946,684835,10770,,100459,671618,10696,],
        ["Kerala",93393,274675,1255,,93527,267082,1232,],
        ["Ladakh",842,4902,68,,848,4865,68,],
        ["Madhya Pradesh",12146,149353,2842,,12386,148082,2828,],
        ["Maharashtra",150510,1431856,42831,,159346,1415679,42633,],
        ["Manipur",4101,12393,127,,3846,12297,124,],
        ["Meghalaya",1661,6981,78,,1870,6674,77,],
        ["Mizoram",184,2175,0,,167,2174,0,],
        ["Nagaland",1799,6469,28,,1683,6428,28,],
        ["Odisha",17857,257041,1196,,18087,254913,1181,],
        ["Puducherry",4039,29211,582,,4026,29016,580,],
        ["Punjab",4466,121155,4072,,4808,120220,4060,],
        ["Rajasthan",18341,160614,1800,,19185,157960,1788,],
        ["Sikkim",254,3410,63,,253,3361,63,],
        ["Tamil Nadu",34198,655170,10825,,35480,650856,10780,],
        ["Telangana",20377,207326,1298,,20183,206105,1292,],
        ["Tripura",2229,27502,339,,2339,27252,334,],
        ["Uttarakhand",4897,53643,968,,5085,53061,960,],
        ["Uttar Pradesh",29131,427937,6790,,29364,425356,6755,],
        ["West Bengal",36064,294911,6308,,35579,291303,6244,],
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
