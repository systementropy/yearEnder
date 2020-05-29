$(document).ready(function(){
    let colorArray = [[235, 255, 0],[255, 246, 0],[255, 195, 2],[255, 210, 65],[255, 171, 63],[255, 143, 0],[255, 132, 63],[255, 91, 0],[255, 67, 67],[255, 5, 5],[176, 14, 14]]
    const arrayId = {
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
        "Telengana":["Telangana","Telangana"],
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
        "Andaman and Nicobar Islands":["Andaman and Nicobar Islands","andaman"],
        "Goa":["Goa","Goa"],
        "Arunachal Pradesh":["Arunachal Pradesh","Arunachal"],
        "Jharkhand":["Jharkhand","Jharkhand"],
        "Assam":["Assam","Assam"],
        "Tripura":["Tripura","Tripura"],
        "Nagaland":["Nagaland","Nagaland"],
        "Meghalaya":["Meghalaya","Meghalaya"]
    };
    let dataTotal = {
        "Andaman and Nicobar Islands":[[0,33,33,0]],
        "Andhra Pradesh":[[0,1980,925,45]],
        "Arunachal Pradesh":[[0,1,1,0]],
        "Assam":[[0,63,34,2]],
        "Bihar":[[0,696,365,6]],
        "Chandigarh":[[0,169,24,2]],
        "Chhattisgarh":[[0,59,49,0]],
        "Dadar Nagar Haveli":[[0,1,0,0]],
        "Delhi":[[0,6923,2069,73]],
        "Goa":[[0,7,7,0]],
        "Gujarat":[[0,8194,2545,493]],
        "Haryana":[[0,703,300,10]],
        "Himachal Pradesh":[[0,55,39,2]],
        "Jammu and Kashmir":[[0,861,383,9]],
        "Jharkhand":[[0,157,78,3]],
        "Karnataka":[[0,848,424,31]],
        "Kerala":[[0,512,489,4]],
        "Ladakh":[[0,42,21,0]],
        "Madhya Pradesh":[[0,3614,1676,215]],
        "Maharashtra":[[0,22171,4199,832]],
        "Manipur":[[0,2,2,0]],
        "Meghalaya":[[0,13,10,1]],
        "Mizoram":[[0,1,1,0]],
        "Odisha":[[0,377,68,3]],
        "Puducherry":[[0,9,6,0]],
        "Punjab":[[0,1823,166,31]],
        "Rajasthan":[[0,3814,2176,107]],
        "Tamil Nadu":[[0,7204,1959,47]],
        "Telengana":[[0,1196,750,30]],
        "Tripura":[[0,150,2,0]],
        "Uttarakhand":[[0,68,46,1]],
        "Uttar Pradesh":[[0,3467,1653,74]],
        "West Bengal":[[0,1939,417,185]],
    
    };
    let stateLabelArray = ["Kerala","Uttar Pradesh","Madhya Pradesh","Rajasthan","Delhi","Tamil Nadu","Gujarat","Maharashtra"];
    const nameMap = {
        "Uttar Pradesh":"UP",
        "Madhya Pradesh":"MP",
        "Rajasthan":"Rajasthan",
        "Delhi":"Delhi",
        "Tamil Nadu":"Tamil Nadu",
        "Gujarat":"Gujarat",
        "Maharashtra":"Maharashtra",
        "Others":"Others"
    }
    let stateCounter = 0;
    const legends = [[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11]];
    const canvas = document.getElementById("canvas");
    const canHgt = 720;
    const canWid = 930;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 2;
    ctx.strokeColor = '#000'
    let stopArray = [];
    let slideIndex;
    let counter = 0;
    var circleArray = [];
    const secsForEach = 2500;
    const widthStep = canWid/(legends.length);
    const heightFactor = 23000;
    let secs = 0;
    function Circle(radiusStart, radiusEnd, index, label,text, perc, color, startAngle, endAngle,name){
        this.radius = radiusStart;
        this.radiusEnd = radiusEnd+((Math.random()*100)-50);
        this.name = name;
        this.color = color;
        this.index = index;
        this.label = label;
        this.text = text;
        this.perc = perc;
        this.dRad = 1;
        this.startAngle = startAngle;
        this.endAngle = startAngle;
        this.finalAngle = endAngle;
        this.dAngle = 1/80;
        this.center = {x:canWid/2, y:canHgt/2}
        console.log(this)
        this.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.moveTo(this.center.x, this.center.y);
            ctx.arc(this.center.x, this.center.y, this.radius, this.startAngle, this.endAngle);
            ctx.fill();
            ctx.strokeStyle = '#F5F5F6'
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(this.center.x, this.center.y);
            ctx.arc(this.center.x, this.center.y, this.radius, this.startAngle, this.endAngle);
            ctx.clip();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#F5F5F6'
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            ctx.beginPath();
            ctx.fillStyle = '#F5F5F6';
            ctx.moveTo(this.center.x, this.center.y);
            ctx.arc(this.center.x, this.center.y, 50, this.startAngle, this.endAngle);
            ctx.fill();
            ctx.closePath();

            if(counter>0){
                ctx.save();
                ctx.beginPath();
                ctx.translate(
                    (this.center.x)+(this.radius+20)*Math.cos((this.endAngle+this.startAngle)/2),
                    (this.center.y)+(this.radius+20)*Math.sin((this.endAngle+this.startAngle)/2),
                );
                ctx.font = '600 22px monty';
                let t1 = ctx.measureText(this.name).width
                if((this.endAngle+this.startAngle)/2 < Math.PI/2 || (this.endAngle+this.startAngle)/2 > 3*Math.PI/2){
                    ctx.textAlign = 'left'
                    if(this.name == 'Delhi'){
                        ctx.textAlign = 'left'
                        ctx.fillText( this.name,0,0);
                        ctx.textAlign = 'right'
                        ctx.fillStyle = "#333";
                        ctx.font = '300 30px monty';
                        ctx.fillText( '('+(this.perc).toFixed(1)+'%)', t1,30);
                    }else{
                        ctx.textAlign = 'left'
                        ctx.fillText( this.name,0,10);
                        
                        ctx.fillStyle = "#333";
                        ctx.font = '300 30px monty';
                        ctx.fillText( '('+(this.perc).toFixed(1)+'%)', 0+t1,10);
                    }
                }else{
                    t1 = -t1;
                    ctx.textAlign = 'right';
                    let left;
                    if(this.name == 'Maharashtra'){
                        left = -0
                    }else{
                        left = -0
                    }
                    ctx.fillText( 
                        this.name,left,0
                    );
                    
                    ctx.fillStyle = "#333";
                    ctx.font = '300 30px monty';
                    ctx.fillText( '('+(this.perc).toFixed(1)+'%)', left,30);
                    
                }
                if(this.index == 0 && this.finalAngle>this.endAngle){
                        
                }
                ctx.closePath();
                ctx.restore();
            }
                
                
        }
        this.update = function(){
    
            if(this.finalAngle>this.endAngle){
                this.endAngle += this.dAngle;
            }
            if(this.radiusEnd>this.radius){
                this.radius += this.dRad;
            }
            
            ctx.fillStyle = this.color;
            this.draw();
            if(this.radiusEnd<=this.radius && this.finalAngle<=this.endAngle){
                // stopArray.push('stop')
            }
        }
        this.update();
    }
    
    function makeGraph(label,counter){
        if(counter<legends.length){
        
            const cNum = dataTotal[label][counter][0]+dataTotal[label][counter][1];
            const rNum = dataTotal[label][counter][2];
            const dNum = dataTotal[label][counter][3];
            if(cNum>=0 && cNum <= 50){
                colorIndex = 0
            }else if(cNum>50 && cNum <= 100){
                colorIndex = 1
            }else if(cNum>100 && cNum <= 250){
                colorIndex = 2
            }else if(cNum>250 && cNum <= 500){
                colorIndex = 3
            }else if(cNum>500 && cNum <= 750){
                colorIndex = 4
            }else if(cNum>750 && cNum <= 1000){
                colorIndex = 5
            }else if(cNum>1000 && cNum <= 1500){
                colorIndex = 6
            }else if(cNum>1500 && cNum <= 2000){
                colorIndex = 7
            }else if(cNum>2000 && cNum <= 3000){
                colorIndex = 8
            }else if(cNum>3000 && cNum <= 4000){
                colorIndex = 9
            }else{
                colorIndex = 10
            }
            const color = [colorArray[colorIndex][0],colorArray[colorIndex][1],colorArray[colorIndex][2]]
            if(label === 'Andaman and Nicobar Islands'){
                $('.'+arrayId[label][1]).css({'fill':'rgba('+color[0]+','+color[1]+','+color[2]+',1)'})
            }else{
                $('#'+arrayId[label][1]).css({'fill':'rgba('+color[0]+','+color[1]+','+color[2]+',1)'})
            }
            ctx.beginPath();
            const hgtRect = cNum
            ctx.fillStyle = '#AFB6D0';
            ctx.rect(
                (widthStep*counter)+1,
                (canHgt*(1-(hgtRect/heightFactor))),
                widthStep-2,
                (canHgt*(hgtRect/heightFactor))
            );
            ctx.fill();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.fillStyle = '#2cb62cDD';
            ctx.rect(
                (widthStep*counter)+1,
                (canHgt*(1-(rNum/heightFactor))),
                widthStep-2,
                (canHgt*(rNum/heightFactor))
            );
            ctx.fill();
            ctx.closePath();
    
            ctx.beginPath();
            ctx.fillStyle = '#ca9828DD';
            ctx.rect(
                (widthStep*counter)+1,
                (canHgt*(1-(dNum/heightFactor))),
                widthStep-2,
                (canHgt*(dNum/heightFactor))
            );
            ctx.fill();
            ctx.closePath();
            if(counter>0){
                const cNumback = dataTotal[label][counter-1][0]+dataTotal[label][counter-1][1];
                const rNumback = dataTotal[label][counter-1][2];
                const dNumback = dataTotal[label][counter-1][3]
    
                ctx.beginPath();
                ctx.strokeStyle = '#E6000055';
                ctx.moveTo((widthStep*(counter-1))+7,(canHgt*(1-(cNumback/heightFactor))));
                ctx.lineTo((widthStep*counter)+7,(canHgt*(1-(cNum/heightFactor))))
                ctx.stroke();
                ctx.closePath();
    
                ctx.beginPath();
                ctx.strokeStyle = '#2cb62c55';
                ctx.moveTo((widthStep*(counter-1))+7,(canHgt*(1-(rNumback/heightFactor))));
                ctx.lineTo((widthStep*counter)+7,(canHgt*(1-(rNum/heightFactor))))
                ctx.stroke();
                ctx.closePath();
                
                ctx.beginPath();
                ctx.strokeStyle = '#ca982855';
                ctx.moveTo((widthStep*(counter-1))+7,(canHgt*(1-(dNumback/heightFactor))));
                ctx.lineTo((widthStep*counter)+7,(canHgt*(1-(dNum/heightFactor))))
                ctx.stroke();
                ctx.closePath();
            }
            
    
            setTimeout(()=>{
                makeGraph(label,counter+1)
            },secs)
            
        }else{
            
            const cNum = dataTotal[label][counter-1][0]+dataTotal[label][counter-1][1];
            const rNum = dataTotal[label][counter-1][2];
            const dNum = dataTotal[label][counter-1][3];
            $('.stateName.total').addClass('active').html(arrayId[label][0]);
            $('.confirmedTotal').text(cNum)
            $('.recoveredTotal').text(rNum)
            $('.deathsTotal').text(dNum)
            $('.total').addClass('active');
        }
    }
    
    function plotStates(stateC){
        if(stateC<stateLabelArray.length){
            ctx.clearRect(0,0,canWid,canHgt	);
            
            if(stateC>0){
                if(stateLabelArray[stateC-1] === 'Andaman and Nicobar Islands'){
                    $('.'+arrayId[stateLabelArray[stateC-1]][1]).css({'fill':'rgba(255,255,255,0.5)'})
                }else{
                    $('#'+arrayId[stateLabelArray[stateC-1]][1]).css({'fill':'rgba(255,255,255,0.5)'})
                }	
            }
            
            for (let counter = 0; counter < 23; counter++) {
                ctx.beginPath();
                ctx.setLineDash([2,5])
                ctx.lineWidth =0.3;
                let color = '#777';
                let arrNum = '#777';
                counter === 1?color="#D55":color;
                counter === 5?color="#D55":color;
                counter === 10?color="#D55":color;
                counter === 15?color="#D55":color;
                counter === 20?color="#D55":color;
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.font = '500 24px monty';
                
                ctx.moveTo(0,(canHgt*(1-(counter*1000/heightFactor))));
                ctx.lineTo(canWid,(canHgt*(1-(counter*1000/heightFactor))));
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = color+'7';
                ctx.textAlign = 'right';
                ctx.fillText((counter)+'K', canWid-20, (canHgt*(1-(counter*1000/heightFactor))));
                ctx.fill();
                ctx.closePath();
                ctx.setLineDash([])
                ctx.lineWidth =5;
            }
            $('.bottomDates').html('');
            makeGraph(stateLabelArray[stateC],0);
            setTimeout(function(){
                plotStates(stateC+1);
            },secsForEach)
        }else{
            setTimeout(function(){
                createPie();
            },0)
        }
    }
    setTimeout(function () {
        plotStates(10);
    }, 2000)
    function createPie(){
        slideIndex = 1;
        counter = 1;
        circleArray = [];
        var colorArray = ['#419c95','#2299c9','#C2924C','#C24C92',"#49492C",'#C2492C',"#9c4195","#999999"];
        var total = 0;
        const totalMax = 67152;
        let totalLeft = 67152;
        var pieData = [
            
        ]
        let cNum=0;let rNum=0;let dNum=0;
        for (const state in dataTotal) {
            if (dataTotal.hasOwnProperty(state)) {
                const element = dataTotal[state];
                const lastindex = element.length-1;
                cNum += element[lastindex][0]+element[lastindex][1];
                rNum += element[lastindex][2];
                dNum += element[lastindex][3];
            }
        }
        
        
        $('.stateName.total').addClass('active').html('India');
        $('.confirmedTotal').text(cNum)
        $('.recoveredTotal').text(rNum)
        $('.deathsTotal').text(dNum)
        $('.total').addClass('active');
    
    
        $('.svgContainer').addClass('active').css({'z-index':'-1'})
        $('.bottomDates').html('');
        for (let index = 1; index < stateLabelArray.length; index++) {
            const element = stateLabelArray[index];
            totalLeft = totalLeft - dataTotal[element][dataTotal[element].length-1][1]
            
            pieData.push([element,(dataTotal[element][dataTotal[element].length-1][1]*100/totalMax),element])
        }
        pieData.push(['Others',(((totalLeft)*100)/totalMax),'Others'])
        for (const state in arrayId) {
            if (arrayId.hasOwnProperty(state)) {
                const element = arrayId[state][1];
                if(element === 'Andaman and Nicobar Islands'){
                    $('.'+element).css({'fill':'#99999977'})
                }else{
                    $('#'+element).css({'fill':'#99999977'})
                }
            }
        }
        for (let i = 0; i < pieData.length; i++) {
            const element = pieData[i];
            circleArray.push(new Circle(
                50,200, i, element[1], element[0], element[1], colorArray[i], 
                ((10*i)/100)*2*Math.PI, 
                (10*(i+1)/100)*2*Math.PI,
                nameMap[element[2]]
            ));
            
            if(element[0] == 'Others'){
    
            }else{
                $('#'+arrayId[element[0]][1]).css({'fill':colorArray[i]})
                
            }
            
            total = total + element[1]
        }
        animate();
    }
    function animate() {
        
        if(stopArray.length < stateLabelArray.length-1){
            // canWid/2+80, y:2*canHgt/3
            ctx.clearRect(0,0,canWid,canHgt)
            ctx.beginPath();
            ctx.fillStyle = "#555";
            ctx.font = '600 30px monty';
            ctx.textAlign = 'left';
            const tx = ctx.measureText('Share of cases').width
            ctx.fillText('Share of cases',-(tx/2)+canWid/2+80,(2*canHgt/3)+200);
            ctx.closePath();
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
            requestAnimationFrame(animate);
        }
        
    }
    })
    