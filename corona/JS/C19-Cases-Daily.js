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
        ["Andaman and Nicobar Islands",46,130,0,176,57,109,0,166],
        ["Andhra Pradesh",16621,18378,452,35451,15144,17467,408,33019],
        ["Arunachal Pradesh",306,153,3,462,306,153,3,462],
        ["Assam",6447,12173,46,18666,6351,11416,40,17807],
        ["Bihar",6970,13462,180,20612,6261,12849,174,19284],
        ["Chandigarh",155,459,11,625,144,446,10,600],
        ["Chhattisgarh",1195,3324,20,4539,1084,3275,20,4379],
        ["Dadra and Nagar Haveli and Daman and Diu",180,357,2,539,209,310,1,520],
        ["Delhi",17807,95699,3487,116993,18664,93236,3446,115346],
        ["Goa",1259,1674,18,2951,1128,1607,18,2753],
        ["Gujarat",11187,31286,2079,44552,11065,30503,2069,43637],
        ["Haryana",5320,17667,319,23306,5226,17090,312,22628],
        ["Himachal Pradesh",351,979,11,1341,347,951,11,1309],
        ["Jammu and Kashmir",5123,6337,206,11666,4755,6223,195,11173],
        ["Jharkhand",1797,2485,38,4320,1628,2427,36,4091],
        ["Karnataka",27859,18466,928,47253,25845,17390,842,44077],
        ["Kerala",4884,4634,35,9553,4458,4438,34,8930],
        ["Ladakh",177,964,1,1142,146,946,1,1093],
        ["Madhya Pradesh",5053,13908,682,19643,4757,13575,673,19005],
        ["Maharashtra",112099,152613,10928,275640,107963,149007,10695,267665],
        ["Manipur",711,989,0,1700,702,970,0,1672],
        ["Meghalaya",278,66,2,346,250,66,2,318],
        ["Mizoram",79,159,0,238,79,159,0,238],
        ["Nagaland",554,348,0,902,550,346,0,896],
        ["Odisha",4345,10476,77,14898,4342,9864,74,14280],
        ["Puducherry",686,889,21,1596,684,829,18,1531],
        ["Punjab",2711,5867,221,8799,2635,5663,213,8511],
        ["Rajasthan",6405,19502,530,26437,5885,19161,525,25571],
        ["Sikkim",133,87,0,220,122,87,0,209],
        ["Tamil Nadu",47343,102310,2167,151820,47915,97310,2099,147324],
        ["Telangana",12957,25999,386,39342,12530,24840,375,37745],
        ["Tripura",661,1604,3,2268,630,1538,2,2170],
        ["Uttarakhand",787,2948,50,3785,769,2867,50,3686],
        ["Uttar Pradesh",14628,25743,1012,41383,13758,24983,983,39724],
        ["West Bengal",12747,20680,1000,34427,11927,19931,980,32838],
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
                jQuery({ Counter: 0 }).animate({ Counter: 968876-936181}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 612815-592032}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        this.Counter>1000?$this.text((this.Counter/1000).toFixed(1)+'K'):$this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 24915-24309}, {
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
