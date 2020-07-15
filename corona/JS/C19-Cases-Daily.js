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
        ["Andaman and Nicobar Islands",57,109,0,166,57,109,0,166],
        ["Andhra Pradesh",15144,17467,408,33019,14274,16464,365,31103],
        ["Arunachal Pradesh",306,153,3,462,240,145,2,387],
        ["Assam",6351,11416,40,17807,5876,10894,36,16806],
        ["Bihar",6261,12849,174,19284,5482,12317,160,17959],
        ["Chandigarh",144,446,10,600,157,423,8,588],
        ["Chhattisgarh",1084,3275,20,4379,996,3202,19,4217],
        ["Dadra and Nagar Haveli and Daman and Diu",209,310,1,520,226,268,1,495],
        ["Delhi",18664,93236,3446,115346,19017,91312,3411,113740],
        ["Goa",1128,1607,18,2753,1026,1540,17,2583],
        ["Gujarat",11065,30503,2069,43637,10897,29770,2055,42722],
        ["Haryana",5226,17090,312,22628,4984,16602,308,21894],
        ["Himachal Pradesh",347,951,11,1309,292,940,11,1243],
        ["Jammu and Kashmir",4755,6223,195,11173,4545,6095,187,10827],
        ["Jharkhand",1628,2427,36,4091,1514,2351,33,3898],
        ["Karnataka",25845,17390,842,44077,24576,16248,757,41581],
        ["Kerala",4458,4438,34,8930,4032,4257,33,8322],
        ["Ladakh",146,946,1,1093,146,946,1,1093],
        ["Madhya Pradesh",4757,13575,673,19005,4336,13208,663,18207],
        ["Maharashtra",107963,149007,10695,267665,105935,144507,10482,260924],
        ["Manipur",702,970,0,1672,656,970,0,1626],
        ["Meghalaya",250,66,2,318,250,66,2,318],
        ["Mizoram",79,159,0,238,82,151,0,233],
        ["Nagaland",550,346,0,896,505,340,0,845],
        ["Odisha",4342,9864,74,14280,4412,9255,70,13737],
        ["Puducherry",684,829,18,1531,665,785,18,1468],
        ["Punjab",2635,5663,213,8511,2388,5586,204,8178],
        ["Rajasthan",5885,19161,525,25571,5781,18630,525,24936],
        ["Sikkim",122,87,0,209,106,86,0,192],
        ["Tamil Nadu",47915,97310,2099,147324,48199,92567,2032,142798],
        ["Telangana",12530,24840,375,37745,12177,23679,365,36221],
        ["Tripura",630,1538,2,2170,603,1475,2,2080],
        ["Uttarakhand",769,2867,50,3686,703,2856,49,3608],
        ["Uttar Pradesh",13758,24983,983,39724,12972,24203,955,38130],
        ["West Bengal",11927,19931,980,32838,11279,19213,956,31448],
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
    const msecForEach = 40;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            $('.stateName').html('India');
            $('.confirmedData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 936181-906752}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 592032-571460}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 24309-23727}, {
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
