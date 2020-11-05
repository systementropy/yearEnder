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
        ["Andaman and Nicobar Islands",166,4163,60,,159,4153,60,],
        ["Andhra Pradesh",21438,805026,6744,,21672,802325,6734,],
        ["Arunachal Pradesh",1645,13472,43,,1674,13367,42,],
        ["Assam",8110,198697,934,,8385,198042,934,],
        ["Bihar",6094,211398,1113,,6423,210672,1108,],
        ["Chandigarh",671,13802,229,,629,13751,228,],
        ["Chhattisgarh",22773,169410,2316,,21770,168201,2266,],
        ["Dadra and Nagar Haveli and Daman and Diu",32,3228,2,,30,3225,2,],
        ["Delhi",37369,365866,6703,,36375,360069,6652,],
        ["Goa",2135,41611,626,,2209,41362,618,],
        ["Gujarat",12376,160333,3737,,12429,159311,3731,],
        ["Haryana",14110,158136,1836,,13338,156975,1817,],
        ["Himachal Pradesh",3431,19579,355,,3119,19469,344,],
        ["Jammu and Kashmir",5935,89254,1511,,5968,88718,1502,],
        ["Jharkhand",4814,97480,894,,5021,96975,891,],
        ["Karnataka",35712,788780,11281,,40414,780735,11247,],
        ["Kerala",85108,372951,1587,,84826,364745,1559,],
        ["Ladakh",702,5772,79,,664,5701,76,],
        ["Madhya Pradesh",7854,163250,2987,,8044,162366,2974,],
        ["Maharashtra",113645,1540005,44548,,117168,1531277,44248,],
        ["Manipur",3698,15618,187,,3597,15460,184,],
        ["Meghalaya",959,8752,90,,971,8680,90,],
        ["Mizoram",521,2435,2,,516,2376,1,],
        ["Nagaland",1146,8017,44,,1240,7869,42,],
        ["Odisha",12452,282073,1364,,12510,280553,1352,],
        ["Puducherry",2129,32703,597,,2445,32284,596,],
        ["Punjab",4471,126583,4259,,4226,126315,4245,],
        ["Rajasthan",16323,185722,1945,,16385,183899,1936,],
        ["Sikkim",254,3740,73,,271,3660,73,],
        ["Tamil Nadu",19154,704031,11244,,19201,701527,11214,],
        ["Telangana",18656,225664,1362,,18100,224686,1357,],
        ["Tripura",1339,29545,353,,1322,29430,353,],
        ["Uttarakhand",3818,58729,1038,,3705,58459,1033,],
        ["Uttar Pradesh",22676,459722,7104,,22538,457708,7089,],
        ["West Bengal",36246,346262,7068,,36443,342133,7013,],
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
