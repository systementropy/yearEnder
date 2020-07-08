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
        ["Andaman and Nicobar Islands",67,74,0,141,53,72,0,125],
        ["Andhra Pradesh",10860,8920,239,20019,10043,8422,232,18697],
        ["Arunachal Pradesh",176,92,2,270,190,78,1,269],
        ["Assam",4264,7882,14,12160,4249,7125,14,11388],
        ["Bihar",3031,8997,97,12125,3016,8765,95,11876],
        ["Chandigarh",82,401,6,489,65,395,6,466],
        ["Chhattisgarh",624,2667,14,3305,592,2601,14,3207],
        ["Dadra and Nagar Haveli and Daman and Diu",183,114,0,297,165,106,0,271],
        ["Delhi",25620,72088,3115,100823,25038,71339,3067,99444],
        ["Goa",745,1061,7,1813,818,936,7,1761],
        ["Gujarat",8497,26315,1960,36772,8202,25892,1943,36037],
        ["Haryana",3893,13335,276,17504,3796,12944,265,17005],
        ["Himachal Pradesh",303,763,11,1077,315,737,11,1063],
        ["Jammu and Kashmir",3219,5318,138,8675,3042,5255,132,8429],
        ["Jharkhand",759,2068,20,2847,717,2045,19,2781],
        ["Karnataka",14389,10527,401,25317,13255,9847,372,23474],
        ["Kerala",2254,3341,27,5622,2230,3174,25,5429],
        ["Ladakh",168,836,1,1005,178,826,1,1005],
        ["Madhya Pradesh",3088,11579,617,15284,2911,11411,608,14930],
        ["Maharashtra",87699,115262,9026,211987,86057,111740,8822,206619],
        ["Manipur",656,734,0,1390,678,688,0,1366],
        ["Meghalaya",36,43,1,80,18,43,1,62],
        ["Mizoram",64,133,0,197,56,130,0,186],
        ["Nagaland",382,243,0,625,359,231,0,590],
        ["Odisha",3002,6486,38,9526,2810,6224,36,9070],
        ["Puducherry",459,331,12,802,459,331,12,802],
        ["Punjab",1828,4494,169,6491,1711,4408,164,6283],
        ["Rajasthan",3949,16278,461,20688,3780,15928,456,20164],
        ["Sikkim",60,65,0,125,62,61,0,123],
        ["Tamil Nadu",46836,66571,1571,114978,46863,62778,1510,111151],
        ["Telangana",10646,14781,306,25733,10904,12703,295,23902],
        ["Tripura",460,1219,1,1680,365,1202,1,1568],
        ["Uttarakhand",533,2586,42,3161,558,2524,42,3124],
        ["Uttar Pradesh",8718,19109,809,28636,8161,18761,785,27707],
        ["West Bengal",6973,15235,779,22987,6658,14711,757,22126],
    ];
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $('.legend1').text('on '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
    let confirmedData = 4629; let recoveredData=0; let deathsData =0; let activeTotal = 0;
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
    const msecForEach = 40;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(label == "final"){
            $('.stateName').html('India');
            $('.confirmedData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 719665-697413}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.recoveredData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 439948-424433}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
                    }
                });
            });
            $('.deathsData').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: 20160-19693}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text((this.Counter/1000).toFixed(1)+'K');
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
