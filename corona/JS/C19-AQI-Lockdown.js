$(document).ready(function(){
    const legends = [
		"3,1","3,2","3,3","3,4","3,5","3,6","3,7","3,8","3,9","3,10","3,11","3,12","3,13","3,14","3,15","3,16","3,17","3,18","3,19","3,20","3,21","3,22","3,23","3,24","3,25","3,26","3,27","3,28","3,29","3,30","3,31","4,1","4,2","4,3","4,4","4,5","4,6","4,7","4,8","4,9","4,10","4,11","4,12","4,13","4,14","4,15","4,16","4,17","4,18","4,19","4,20","4,21","4,22","4,23","4,24","4,25","4,26","4,27","4,28","4,29","4,30","5,1","5,2","5,3","5,4","5,5","5,6","5,7","5,8","5,9","5,10","5,11","5,12","5,13","5,14","5,15","5,16","5,17","5,18","5,19","5,20","5,21","5,22","5,23","5,24","5,25","5,26","5,27","5,28","5,29","5,30","5,31","6,1","6,2","6,3","6,4","6,5","6,6","6,7","6,8","6,9","6,10","6,11","6,12","6,13","6,14","6,15",
    ];
    var dataIndia = [
        ["Malviya Nagar","U05A043",[103,96,62,69,68,94,43,68,116,76,87,106,65,42,63,81,61,80,70,59,49,53,37,50,46,54,38,56,70,93,56,43,50,51,96,105,62,68,103,72,128,120,123,138,144,154,141,144,114,96,126,144,143,100,73,100,122,120,86,132,143,132,130,147,149,146,135,157,158,158,158,163,164,187,183,177,184,167,173,159]],
        ["R. K. Puram","U05A044",[65,65,55,56,52,58,48,46,80,54,48,76,62,28,27,26,25,25,24,39,38,47,45,45,45,46,47,49,61,96,91,70,39,47,59,70,60,57,89,68,105,106,130,160,190,165,149,153,122,104,138,150,147,98,74,108,133,143,115,154,155,149,153,162,161,160,159,159,171,167,168,173,177,237,192,198,193,190,197,178]],
        ["Shahdara","U05A062",[115,88,69,77,82,126,54,68,124,102,104,133,77,73,84,101,68,89,96,77,71,66,54,54,63,58,60,72,105,119,70,36,51,86,108,118,126,124,172,108,134,138,163,164,187,171,192,164,140,139,156,171,162,111,77,123,136,140,122,145,153,150,150,163,165,176,153,162,239,174,177,180,180,259,229,226,274,215,221]],
        ["New Delhi","U05A040",[102,94,67,69,70,101,52,72,121,86,81,106,66,46,61,83,58,78,73,61,58,58,50,56,47,53,51,56,70,84,38,45,53,58,91,102,77,69,118,86,132,131,133,137,149,152,147,148,118,104,136,146,146,98,74,101,128,129,94,147,149,126,139,150,150,151,140,149,159,160,162,168,170,196,182,193,184,180,190,166]],
        ["Mundka","U05A008",[124,108,74,69,75,117,64,75,155,93,110,110,68,50,82,96,69,81,84,88,68,72,48,53,48,46,41,48,91,118,61,36,55,83,98,109,100,95,89,110,131,135,142,145,160,156,161,155,132,121,151,157,154,121,86,113,155,141,106,153,162,151,153,164,168,162,160,159,168,180,174,179,184,178,195,226,229,232,201,244]],
        ["Dwarka","U05A033",[103,89,72,85,77,105,55,78,139,83,98,109,63,47,74,82,69,90,74,70,60,63,53,58,51,59,59,62,76,108,63,32,62,68,97,106,96,61,128,87,144,142,147,145,156,151,152,148,119,102,133,146,135,115,88,102,130,125,94,152,150,140,135,146,166,155,128,150,169,162,167,176,174,188,198,198,204,184,196,183]],
        ["Patparganj","U05A057",[120,96,73,74,77,124,53,72,125,97,80,93,74,56,64,98,59,68,65,51,43,51,43,49,40,52,52,65,81,93,54,31,48,71,106,122,100,102,100,82,129,135,146,159,160,162,158,159,136,132,145,165,159,107,89,110,138,156,128,161,162,155,156,161,157,162,149,155,182,170,171,174,176,215,199,208,246,195,191,179]]
        // ["Moti Nagar","U05A025",[]],
    ];
    // ["Moti Nagar","U05A025",[139,106,167,152,150,53,70,139,146,127,161,143,132,150,87,100,129,138,142,178,167,162,141,125,123,94,99,72,66,83]],
    // ["Rohini","U05A013",[154,120,170,161,170,104,92,126,168,156,254,139,157,160,124,162,156,166,159,198,175,186,163,149,134,123,134,90,87,104]],
    // ["Karol Bagh","U05A023",[137,96,166,149,143,74,55,101,143,139,152,127,123,139,81,100,125,156,122,164,157,155,144,111,115,91,111,74,55,77,101]],
    const canvas = document.getElementById("canvas");
    const canHgt = 100;
    
    const canWid = 400;
    let widStep = canWid/(dataIndia[0][2].length);
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 2;
    ctx.strokeColor = '#000';

    let heightFactor = 300;
    
    const legendArrs = [];
    // legendArrs.push(legends.indexOf("3,25"))
    // legendArrs.push(legends.indexOf("4,15"))
    // legendArrs.push(legends.indexOf("5,4"))
    // legendArrs.push(legends.indexOf("5,18"))
    // legendArrs.push(legends.indexOf("6,1"))
    // legendArrs.push(legends.indexOf("6,8"))
    
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
                
                console.log(element[0],element[2].length,legends.length,widStep,dataIndia);
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
                    
                    let grd = ctx.createLinearGradient(widStep*counter,canHgt,widStep*counter+5,0);
                    grd.addColorStop((0/400), "#009966");
                    grd.addColorStop((50/400), "#FFDE33");
                    grd.addColorStop((100/400), "#FF9933");
                    grd.addColorStop((150/400), "#CC0033");
                    grd.addColorStop((200/400), "#660099");
                    grd.addColorStop((300/400), "#7E0023");
                    grd.addColorStop((400/400), "#7E0023");
                    
                    ctx.strokeStyle = '#000';
                    ctx.setLineDash([]);
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    // ctx.fillStyle = grd;
                    ctx.fillStyle = getColor(dp);
                    ctx.rect(widStep*counter,canHgt,widStep,-(canHgt*(dp/heightFactor)));
                    ctx.fill();
                    // ctx.stroke()
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
