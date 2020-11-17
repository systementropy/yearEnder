$(document).ready(function(){
    const legends = [
		"3,1","3,2","3,3","3,4","3,5","3,6","3,7","3,8","3,9","3,10","3,11","3,12","3,13","3,14","3,15","3,16","3,17","3,18","3,19","3,20","3,21","3,22","3,23","3,24","3,25","3,26","3,27","3,28","3,29","3,30","3,31","4,1","4,2","4,3","4,4","4,5","4,6","4,7","4,8","4,9","4,10","4,11","4,12","4,13","4,14","4,15","4,16","4,17","4,18","4,19","4,20","4,21","4,22","4,23","4,24","4,25","4,26","4,27","4,28","4,29","4,30","5,1","5,2","5,3","5,4","5,5","5,6","5,7","5,8","5,9","5,10","5,11","5,12","5,13","5,14","5,15","5,16","5,17","5,18","5,19","5,20","5,21","5,22","5,23","5,24","5,25","5,26","5,27","5,28","5,29","5,30","5,31","6,1","6,2","6,3","6,4","6,5","6,6","6,7","6,8","6,9","6,10","6,11","6,12","6,13","6,14","6,15",
    ];
    var dataIndia = [
        ["Delhi",[400,516],[
            93,72,31,39,38,79,42,48,97,71,53,78,49,36,45,61,45,69,66,46,53,59,71,82,59,62,53,66,97,98,64,
            44,46,66,93,101,79,86,104,74,96,111,124,143,142,159,154,146,112,108,132,141,141,96,68,103,121,117,92,149,156,
            146,145,189,170,154,124,145,158,157,159,163,167,184,186,186,200,184,190,164,178,167,156,213,264,243,223,227,214,222,276,265,
            314,314,211,179,348,380,289,358,351,542,484,238,244,242,423,381

        ]],
        ["Noida",[470,533],[
            102,85,68,67,69,112,48,72,116,86,79,124,60,47,55,83,47,69,67,57,76,56,33,40,35,30,29,56,88,92,90,
            85,80,76,60,62,59,92,128,88,135,139,133,149,157,163,160,149,120,103,141,158,150,86,68,96,124,123,99,130,145,
            133,141,155,152,162,145,151,180,169,169,172,175,206,199,209,239,189,200,175,156,178,178,236,302,245,255,238,214,240,295,281,
            322,317,215,207,351,330,301,360,401,452,353,227,227,253,465,327

            //Sector 1
        ]],
        ["Greater Noida",[523,569],[
            89,75,76,73,81,105,43,67,99,92,76,110,72,46,59,84,56,72,66,50,35,34,40,38,36,34,54,71,93,84,51,
            34,47,71,101,101,77,107,125,106,137,128,146,159,166,161,162,156,128,115,152,165,153,84,64,104,112,132,103,141,146,
            140,143,150,165,161,144,159,178,171,175,172,170,228,191,188,209,192,208,169,174,165,182,209,274,246,267,254,230,250,312,262,
            297,312,225,214,359,345,305,336,414,445,428,220,227,237,357,309

            // Knowledge Park - III, Greater Noida
        ]],
        ["Gurugram",[377,542],[
            113,99,98,102,85,104,96,102,142,117,115,127,96,66,97,107,102,115,100,83,82,86,77,81,78,71,82,71,83,98,84,
            70,78,89,117,117,134,99,143,107,144,153,164,160,163,161,160,166,149,136,150,158,156,146,103,108,154,160,126,165,164,
            156,162,162,175,166,167,154,173,174,171,170,167,189,196,182,204,178,189,183,179,189,175,194,202,225,214,218,174,233,312,263,
            281,248,190,196,302,315,319,333,381,451,356,182,204,225,363,274

            //Vikas Sadan Gurgaon, Gurgaon
        ]],
        ["Faridabad",[453,550],[
            92,76,73,72,80,94,50,78,186,85,81,126,76,81,84,79,69,78,82,76,60,59,51,54,61,54,62,76,161,80,70,
            50,68,70,104,116,140,84,141,100,149,135,152,159,162,167,162,162,174,119,151,159,157,108,74,94,126,137,103,146,148,
            145,198,166,168,159,144,153,168,200,169,168,171,192,200,187,234,171,193,170,177,172,199,204,272,233,279,231,220,241,276,254,
            301,294,244,274,348,327,326,304,324,365,259,219,204,195,292,171
            // Sector 30, Faridabad
        ]],
        ["Alwar",[320,640],[
            90,92,90,83,96,89,77,83,83,82,85,78,83,79,81,79,79,87,83,83,78,77,79,77,81,95,93,96,100,100,97,
            95,93,95,106,103,100,96,100,186,105,104,104,113,112,118,120,116,109,104,108,116,124,108,106,104,116,106,112,108,120,
            116,112,116,123,121,116,123,120,123,124,126,128,127,119,144,147,128,142,137,132,121,134,135,149,142,144,130,160,142,154,154,
            155,132,123,127,142,153,139,169,161,163,175,150,137,139,147,159

            
        ]],
        ["Meerut",[583,480],[
            63,52,97,72,69,71,50,35,72,76,64,64,60,31,32,58,68,49,65,21,25,19,15,24,52,62,54,47,64,52,42,
            35,53,65,70,80,71,70,91,85,106,108,117,139,150,154,144,146,116,105,152,157,145,79,57,80,122,156,100,135,132,
            125,126,152,154,160,156,162,182,187,192,205,192,189,172,192,237,205,193,175,210,169,243,167,197,244,219,214,222,236,208,223,
            325,268,265,187,284,296,212,242,287,230,204,158,166,193,298,203

            //Ganga Nagar, Meerut
        ]]
    ];
    // ["Moti Nagar","U05A025",[139,106,167,152,150,53,70,139,146,127,161,143,132,150,87,100,129,138,142,178,167,162,141,125,123,94,99,72,66,83]],
    // ["Rohini","U05A013",[154,120,170,161,170,104,92,126,168,156,254,139,157,160,124,162,156,166,159,198,175,186,163,149,134,123,134,90,87,104]],
    // ["Karol Bagh","U05A023",[137,96,166,149,143,74,55,101,143,139,152,127,123,139,81,100,125,156,122,164,157,155,144,111,115,91,111,74,55,77,101]],
    $('.strap').html("<div class='strap'>Air Quality in Delhi-NCR<br><span>AQI - 01 Aug to "+new Date().getDate()+" Nov</span></div>")
    const canvas = document.getElementById("canvas");
    const canHgt = 100;
    
    const canWid = 800;
    let widStep = canWid/(dataIndia[0][2].length);
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 2;
    ctx.strokeColor = '#000';

    let heightFactor = 520;
    
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
    const fps = 100; 
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
                
                const element = dataIndia[regionNum];
                
                $('.stateName').text(element[0])
                $('.marker')
                    .css({
                    'top':element[1][1], //+(-100 + Math.random()*200),
                    'left':element[1][0] //+(-100 + Math.random()*200)
                })
                // $('#'+element[1]).css({'fill':'rgba(70,70,70,1)'})  
                
                console.log(element[0],element[2].length,legends.length,widStep,dataIndia);
                ctx.clearRect(0,0,canWid,canHgt);
                for (var counter = 0; counter < element[2].length; counter++) {
                    
                    const dp = element[2][counter];
                    if(counter>0){
                        ctx.beginPath();
                        ctx.strokeStyle = '#999';
                        ctx.setLineDash([2,1]);
                        ctx.lineWidth = 3;
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
    },3500)
    
    function animate(){
        if(globalCounter == 1){
            
        }
        if(globalCounter<(dataIndia.length*secsForEach*fps)-1){
        // if(globalCounter<(secsForEach*fps)-1){
            updateColor(globalCounter);
            requestAnimationFrame(animate)
        }else{
            updateColor("final");
        }
        
    }
    setTimeout(function(){
        $('.mainBodySky').addClass('active')
        $('.legendStates').addClass('active');
    },1000);
});
