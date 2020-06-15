$(document).ready(function(){
    const canvas = document.getElementById("canvas");
    const canHgt = 100;
    const canWid = 500;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 2;
    ctx.strokeColor = '#000';
    let widStep;
    let heightFactor = 300;
    const legends = [
		"3,1","3,2","3,3","3,4","3,5","3,6","3,7","3,8","3,9","3,10","3,11","3,12","3,13","3,14","3,15","3,16","3,17","3,18","3,19","3,20","3,21","3,22","3,23","3,24","3,25","3,26","3,27","3,28","3,29","3,30","3,31","4,1","4,2","4,3","4,4","4,5","4,6","4,7","4,8","4,9","4,10","4,11","4,12","4,13","4,14","4,15","4,16","4,17","4,18","4,19","4,20","4,21","4,22","4,23","4,24","4,25","4,26","4,27","4,28","4,29","4,30","5,1","5,2","5,3","5,4","5,5","5,6","5,7","5,8","5,9","5,10","5,11","5,12","5,13","5,14","5,15","5,16","5,17","5,18","5,19","5,20","5,21","5,22","5,23","5,24","5,25","5,26","5,27","5,28","5,29","5,30","5,31","6,1","6,2","6,3","6,4","6,5","6,6","6,7","6,8","6,9"
    ];
    const legendArrs = [];
    legendArrs.push(legends.indexOf("3,25"))
    legendArrs.push(legends.indexOf("4,15"))
    legendArrs.push(legends.indexOf("5,4"))
    legendArrs.push(legends.indexOf("5,18"))
    legendArrs.push(legends.indexOf("6,1"))
    legendArrs.push(legends.indexOf("6,8"))
    var dataIndia = [
        ["Malviya Nagar","U05A043",[140,97,156,123,144,78,56,98,120,121,149,131,108,128,93,120,122,126,131,148,164,130,142,113,117,75,85,63,45,65,84,76,71,69,74,85,107,106,85,83,79,118,114,88,118,120,132,125,75,72,81,89,77,106,107,127,69,97,74,99,127,130,136,92,86,60,80,114,141,130,140,108,111,110,145,110,106,128,139,140,172,122,117,135,114,103,118,104,102,96,68,71,58,106,103,112,127,95,91,102,90]],
        ["R. K. Puram","U05A044",[122,97,155,136,139,74,54,103,124,124,138,111,113,129,89,109,119,120,135,142,157,134,135,112,103,75,82,65,59,68,75,73,72,63,101,105,111,177,120,90,79,135,115,103,140,103,158,137,69,65,83,106,87,129,134,129,87,106,67,91,114,107,112,83,73,69,106,124,89,106,105,93,86,84,123,96,93,140,135,131,137,114,110,127,149,104,115,104,87,111,51,51,43,80,92,88,91,65,56,70,79]],
        ["Moti Nagar","U05A025",[139,106,167,152,150,53,70,139,146,127,161,143,132,150,87,105,129,138,142,178,167,162,141,125,123,94,99,72,66,83,100,101,100,85,84,102,125,130,96,83,106,130,122,105,138,130,147,177,130,123,123,71,104,149,192,169,143,108,81,110,140,135,143,87,95,95,95,105,115,125,130,118,117,106,181,157,169,224,286,255,326,139,196,259,183,119,153,126,101,95,87,68,60,122,112,137,153,114,100,106,125]],
        ["Shahdara","U05A062",[146,122,205,174,156,106,81,117,202,131,168,142,143,140,112,147,151,135,129,172,188,169,159,137,133,103,115,67,68,66,83,98,96,80,70,98,130,141,100,71,87,120,142,92,122,131,137,154,78,80,86,112,108,134,114,132,81,113,81,114,140,128,145,95,98,80,131,138,82,123,134,107,113,118,153,140,108,139,158,166,166,130,118,166,155,139,125,114,103,94,81,75,68,123,118,129,155,130,95,112,145]],
        ["New Delhi","U05A040",[152,155,169,136,145,90,63,109,134,119,160,136,129,126,105,128,125,131,127,159,166,151,142,128,126,88,95,70,55,64,88,81,85,90,95,100,106,117,79,79,89,128,118,88,123,129,131,123,74,79,74,106,93,118,116,140,82,107,77,103,134,133,136,89,82,78,120,129,73,109,137,103,118,106,145,126,104,134,150,147,148,123,115,129,127,107,123,83,97,89,72,71,68,113,89,129,127,115,84,105,108]],
        ["Mundka","U05A008",[142,103,190,156,149,96,73,113,161,144,167,141,141,170,120,177,167,174,176,208,169,185,158,131,129,121,139,81,73,108,126,114,113,100,123,131,141,137,113,103,130,142,137,131,151,169,137,146,83,80,105,130,110,103,121,144,64,81,78,90,105,124,146,92,82,81,136,133,84,130,134,114,110,119,157,143,132,176,192,193,226,159,136,174,144,131,145,136,111,91,64,72,58,109,104,128,175,112,99,105,121,]],
        ["Dwarka","U05A033",[143,106,178,164,153,84,70,116,149,162,172,140,134,158,117,160,160,166,168,171,170,164,153,136,128,108,108,79,65,91,107,99,91,86,97,122,136,123,109,103,108,155,119,112,146,149,134,137,76,76,93,108,96,143,119,134,74,94,78,99,134,136,143,97,86,78,132,129,94,127,140,110,108,117,147,122,112,143,154,146,160,138,125,140,123,112,129,122,101,96,68,65,51,101,99,111,134,91,95,104,111]],
        ["Patparganj","U05A057",[130,95,171,151,141,77,52,97,145,118,159,127,134,125,97,121,131,128,122,161,162,148,134,112,127,97,96,61,44,50,55,63,83,67,62,88,111,116,82,42,77,113,116,86,125,111,133,150,57,70,75,96,83,117,112,121,61,96,70,85,125,115,133,82,78,68,118,130,98,110,124,97,101,92,136,116,98,137,149,156,151,106,114,153,145,126,123,118,101,103,66,66,59,115,107,127,138,114,78,97,112]]
    ];
    // ["Moti Nagar","U05A025",[139,106,167,152,150,53,70,139,146,127,161,143,132,150,87,100,129,138,142,178,167,162,141,125,123,94,99,72,66,83]],
    // ["Rohini","U05A013",[154,120,170,161,170,104,92,126,168,156,254,139,157,160,124,162,156,166,159,198,175,186,163,149,134,123,134,90,87,104]],
    // ["Karol Bagh","U05A023",[137,96,166,149,143,74,55,101,143,139,152,127,123,139,81,100,125,156,122,164,157,155,144,111,115,91,111,74,55,77,101]],
    let colorArray = [[76, 191, 198],[240,240,240],[255,243,228],[255,231,203],[255,214,164],[255,196,124],[255,178,85],[255,161,46],[255,143,7],[203,111,0],[183,101,0]]
    var max = [242,133,0];
    var min = [255,255,255];
    var globalCounter = 0;
    function getColor(dp){
        let color;
        if(dp<=50){
            color = '#009966'
        }else if(dp>50 && dp<=100){
            color = '#FFDE33'
        }else if(dp>100 && dp<=150){
            color = '#FF9933'
        }else if(dp>150 && dp<=200){
            color = '#CC0033'
        }else if(dp>200 && dp<=300){
            color = '#660099'
        }else if(dp>300){
            color = '#7E0023'
        }
        return color;
    }

    var alpha; var index;
    const secsForEach = 4;
    const fps = 60; 
    let regionNum;
    function updateColor(label){
        if(label == "init"){
            animate();
        }else if(((globalCounter/(fps*secsForEach))<dataIndia.length) && label!=='final'){
            let tempNum = Math.floor(globalCounter/(fps*secsForEach));
            globalCounter += 1;
            if(tempNum == regionNum){

            }else{
                regionNum = tempNum;
                if(regionNum>0){
                    $('#'+dataIndia[regionNum-1][1]).css({'fill':'rgba(220,220,220,1)'})  	
                }
                
                const element = dataIndia[regionNum];
                let position = $('#'+element[1]).position();
                let offset = ($(window).innerWidth() - 500)/2
                position.left = position.left  -40;
                $('.stateName').text(element[0])
                // $('.legendStates')
                //     .css({
                //     'top':((position.top)-200)+'px',
                //     'left': (position.left-100)+"px"
                // })
                $('#'+element[1]).css({'fill':'rgba(70,70,70,1)'})  
                widStep = (canWid/element[2].length);
                console.log(element[0],element[2].length,dataIndia);
                ctx.clearRect(0,0,canWid,canHgt);
                for (var counter = 0; counter < element[2].length; counter++) {
                    
                    const dp = element[2][counter];
                    if(counter>0){
                        ctx.beginPath();
                        ctx.strokeStyle = '#999';
                        ctx.setLineDash([2,1]);
                        ctx.lineWidth = 1;
                        ctx.moveTo(widStep*(counter-0.5),canHgt*(1-(element[2][counter-1]/heightFactor)));
                        ctx.lineTo((widStep*(counter+0.5)),(canHgt*(1-(dp/heightFactor))));
                        ctx.stroke();
                        ctx.closePath();
                    }
                    
                    ctx.beginPath();
                    ctx.fillStyle = getColor(dp);
                    ctx.rect(widStep*counter,canHgt,widStep,-(canHgt*(dp/heightFactor)));
                    ctx.fill();
                    ctx.closePath();
                    for (let index = 0; index < legendArrs.length; index++) {
                        const element = legendArrs[index];
                        ctx.beginPath();
                        index==5?ctx.strokeStyle = '#46FF46':ctx.strokeStyle = '#999'
                        ctx.setLineDash([3,2])
                        ctx.lineWidth = 0.5;
                        ctx.moveTo((widStep*element),0);
                        ctx.lineTo((widStep*element),canHgt);
                        ctx.stroke();
                        ctx.closePath();

                        ctx.beginPath();
                        ctx.font = '300 24px monty';
                        index==5?ctx.fillStyle = '#46FF46':ctx.fillStyle = '#EEE';
                        //index==0?ctx.textAlign = 'left':ctx.textAlign = 'right';
                        ctx.textAlign = 'left'
                        index==5?'':ctx.fillText((index+1)+'.0', (widStep*element), 20);
                        ctx.fill();
                        ctx.closePath();
                    }
                    
                    
                }
            }
        }else{
            console.log(globalCounter);
        }
    }
    setTimeout(function(){
        updateColor("init");
    },2000)
    
    function animate(){
        if(globalCounter == 1){
            $('.legendStates').addClass('active');
        }
        if(globalCounter<(dataIndia.length*secsForEach*fps)-1){
        // if(globalCounter<(secsForEach*fps)-1){
            updateColor(globalCounter);
            requestAnimationFrame(animate)
        }else{
            updateColor("final");
        }
        
    }
    
});
