$(document).ready(function(){

    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
    });
    google.charts.setOnLoadCallback(init);
    const countryMap = {"Afghanistan":"AF","Åland Islands":"AX","Albania":"AL","Algeria":"DZ","American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ","Antigua and Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahrain":"BH","Bangladesh":"BD","Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ","Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bonaire, Sint Eustatius and Saba":"BQ","Bosnia and Herzegovina":"BA","Botswana":"BW","Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO","Brunei":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burundi":"BI","Cabo Verde":"CV","Cambodia":"KH","Cameroon":"CM","Canada":"CA","Cayman Islands":"KY","Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX","Cocos Islands":"CC","Colombia":"CO","Comoros":"KM","Congo (Brazzaville)":"CG","Congo":"CG","Congo (Kinshasa)":"CD","Congo, Democratic Republic of the":"CD","Cook Islands":"CK","Costa Rica":"CR","Côte d'Ivoire":"CI","Cote d'Ivoire":"CI","Ivory Coast":"CI","Croatia":"HR","Cuba":"CU","Curaçao":"CW","Cyprus":"CY","Czechia":"CZ","Czech Republic":"CZ","Denmark":"DK","Djibouti":"DJ","Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Eswatini":"SZ","Ethiopia":"ET","Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI","France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF","Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI","Greece":"GR","Greenland":"GL","Grenada":"GD","Guadeloupe":"GP","Guam":"GU","Guatemala":"GT","Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT","Heard Island and McDonald Islands":"HM","Holy See":"VA","Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Isle of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP","Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kiribati":"KI","Korea (Democratic People's Republic of)":"KP","South Korea":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Laos":"LA","Lao People's Democratic Republic":"LA","Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libya":"LY","Liechtenstein":"LI","Lithuania":"LT","Luxembourg":"LU","Macau":"MO","Macao":"MO","Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT","Marshall Islands":"MH","Martinique":"MQ","Mauritania":"MR","Mauritius":"MU","Mayotte":"YT","Mexico":"MX","Micronesia (Federated States of)":"FM","Moldova":"MD","Moldova, Republic of":"MD","Monaco":"MC","Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Burma":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF","North Macedonia":"MK","Northern Mariana Islands":"MP","Norway":"NO","Oman":"OM","Pakistan":"PK","Palau":"PW","West Bank and Gaza":"PS","Palestine":"PS","Palestine, State of":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Réunion":"RE","Romania":"RO","Russia":"RU","Rwanda":"RW","Saint Barthelemy":"BL","Saint Helena, Ascension and Tristan da Cunha":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Martin (French part)":"MF","Saint Pierre and Miquelon":"PM","Saint Vincent and the Grenadines":"VC","Samoa":"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Sint Maarten (Dutch part)":"SX","Slovakia":"SK","Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA","South Georgia and the South Sandwich Islands":"GS","South Sudan":"SS","Spain":"ES","Sri Lanka":"LK","Sudan":"SD","Suriname":"SR","Svalbard and Jan Mayen":"SJ","Sweden":"SE","Switzerland":"CH","Syria":"SY","Syrian Arab Republic":"SY","Taiwan":"TW","Tajikistan":"TJ","Tanzania":"TZ","Tanzania, United Republic of":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks and Caicos Islands":"TC","Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","United Kingdom of Great Britain and Northern Ireland":"GB","United States Minor Outlying Islands":"UM","US":"US","United States":"US","Uruguay":"UY","Uzbekistan":"UZ","Vanuatu":"VU","Venezuela":"VE","Venezuela (Bolivarian Republic of)":"VE","Vietnam":"VN","Virgin Islands (British)":"VG","Virgin Islands (U.S.)":"VI","Wallis and Futuna":"WF","Western Sahara":"EH","Yemen":"YE","Zambia":"ZM","Zimbabwe":"ZW"}
    const colorMap = {
        1:'#419c95',
        3:'#2299c9',
        4:'#C2924C',
        5:'#C24C92',
        8:'#49492C',
        9:'#C2492C',
        48:'#333333',
        151:'#c85b5b'
    }
    let databyDateNew = [
        ["United States",151],
        ["Russia",48],
        ["Japan",9],
        ["Canada",8],
        ["Italy",5],
        ["France",4],
        ["Germany",3],
        ["Belgium",1],
        ["Netherlands",1],
        ["Sweden",1],
        ["Brazil",1],
        ["Denmark",1],
        ["Kazakhstan",1],
        ["Spain",1],
        ["United Kingdom",1],
        ["Malaysia",1],
        ["South Africa",1],
        ["South Korea",1],
        ["United Arab Emirates",1],
    ];
    let databyDate = {
        "confirmed":[555,654,941,1434,2118,2927,5578,6166,8234,9927,12038,16787,19881,23892,27635,30794,34391,37120,40150,42762,44802,45221,60368,66885,69030,71224,73258,75136,75639,76197,76819,78572,78958,79561,80406,81388,82746,84112,86011,88369,90306,92840,95120,97886,101801,105847,109821,113590,118620,125875,128352,145219,156116,167466,181603,197113,214846,242616,272247,304555,337018,378282,418079,467723,529701,593423,660824,720285,782490,857608,932638,1013458,1095876,1176059,1249737,1321427,1396438,1480200,1565538,1657929,1736025,1835164,1905192,1975581,2055506,2151872,2239723,2317339,2400843,2471759,2548821,2624107,2707742,2794829,2879770,2953368,3021807,3095043,3169904,3256846],
        "death":[17,18,26,42,56,82,131,133,171,213,259,362,426,492,564,634,719,806,906,1013,1113,1118,1371,1523,1666,1770,1868,2007,2122,2247,2251,2458,2469,2629,2708,2770,2814,2872,2941,2996,3085,3160,3254,3347,3459,3558,3801,3987,4263,4614,4722,5408,5830,6472,7150,7956,8823,9946,11422,13125,14825,16759,19014,21785,24788,28288,31797,35323,39439,44238,49675,55817,61812,67981,73076,78767,86662,93354,100882,108113,114146,119853,125561,132456,140677,147965,156824,163234,167797,173120,180257,186930,193677,200004,206184,209891,214468,220777,227638,233388],
        "recovered":[28,30,36,39,52,61,107,126,143,222,284,472,623,852,1124,1487,2011,2616,3244,3946,4683,5150,6295,8058,9395,10865,12583,14352,16121,18177,18890,22886,23394,25227,27905,30384,33277,36711,39782,42716,45602,48228,51170,53796,55865,58358,60694,62494,64404,67003,68324,70251,72624,76034,78088,80840,83312,84975,87420,91692,97899,98351,108000,113787,122150,130915,139415,149082,164566,178034,193177,210263,225796,246152,260012,276515,300054,328661,353975,376096,402110,421722,448655,474261,511019,542107,568343,592319,623903,645905,680390,710502,739409,790081,817838,846378,874010,907303,948737,1014753]
    }
    const dates = [
        ['Jan',22,2020],['Jan',23,2020],['Jan',24,2020],['Jan',25,2020],['Jan',26,2020],['Jan',27,2020],['Jan',28,2020],['Jan',29,2020],['Jan',30,2020],['Jan',31,2020],['Feb',1,2020],['Feb',2,2020],['Feb',3,2020],['Feb',4,2020],['Feb',5,2020],['Feb',6,2020],['Feb',7,2020],['Feb',8,2020],['Feb',9,2020],['Feb',10,2020],['Feb',11,2020],['Feb',12,2020],['Feb',13,2020],['Feb',14,2020],['Feb',15,2020],['Feb',16,2020],['Feb',17,2020],['Feb',18,2020],['Feb',19,2020],['Feb',20,2020],['Feb',21,2020],['Feb',22,2020],['Feb',23,2020],['Feb',24,2020],['Feb',25,2020],['Feb',26,2020],['Feb',27,2020],['Feb',28,2020],['Feb',29,2020],['Mar',1,2020],['Mar',2,2020],['Mar',3,2020],['Mar',4,2020],['Mar',5,2020],['Mar',6,2020],['Mar',7,2020],['Mar',8,2020],['Mar',9,2020],['Mar',10,2020],['Mar',11,2020],['Mar',12,2020],['Mar',13,2020],['Mar',14,2020],['Mar',15,2020],['Mar',16,2020],['Mar',17,2020],['Mar',18,2020],['Mar',19,2020],['Mar',20,2020],['Mar',21,2020],['Mar',22,2020],['Mar',23,2020],['Mar',24,2020],['Mar',25,2020],['Mar',26,2020],['Mar',27,2020],['Mar',28,2020],['Mar',29,2020],['Mar',30,2020],['Mar',31,2020],['Apr',1,2020],['Apr',2,2020],['Apr',3,2020],['Apr',4,2020],['Apr',5,2020],['Apr',6,2020],['Apr',7,2020],['Apr',8,2020],['Apr',9,2020],['Apr',10,2020],['Apr',11,2020],['Apr',12,2020],['Apr',13,2020],['Apr',14,2020],['Apr',15,2020],['Apr',16,2020],['Apr',17,2020],['Apr',18,2020],['Apr',19,2020],['Apr',20,2020],['Apr',21,2020],['Apr',22,2020],['Apr',23,2020],['Apr',24,2020],['Apr',25,2020],['Apr',26,2020],['Apr',27,2020],['Apr',28,2020],['Apr',29,2020],['Apr',30,2020]

    ]
    const canvas = document.getElementById("canvas");
    const canHgt = 675;
    const canWid = 1320;
    canvas.style.height = canHgt+'px';
    canvas.style.width = canWid+'px';
    canvas.height = canHgt*2;
    canvas.width = canWid*2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);
    ctx.lineWidth = 5;
    ctx.strokeColor = '#000'
        
    const colorArray = ['#FF0000','#C9224C','#7c4cc2','#C24C92','#4c92c2','#464646','#FF9933','#92C24C','#4cc292','#99FF33','#9933FF'];
    let slideIndex;
    let counter = 0;
    let barArray = [];
    const widthStep = canWid/(dates.length);
    const heightFactor = 3500000;
    let secs = 1000;

    let data, options, chart, counterCountry = 0, dataPlace, optionsPlace, chartPlace, counterPlace = 0; 
    function Bar(index,labelISO,countryName,personSent,color,colorAlt){
        this.index = index;
        this.labelISO = labelISO;
        this.countryName = countryName;
        this.personSent = personSent;
        this.width = canWid/databyDateNew.length;
        this.x = index*this.width;
        this.color = color;
        this.colorAlt = colorAlt;
        this.heightStart = 0;
        this.height = -(this.personSent/160)*(canHgt-30);
        this.dy = Math.min(this.height/60,-1)
        this.update = function(){
            if(this.heightStart>this.height){
                this.heightStart += this.dy
            }else{
                this.heightStart = this.height;
                this.dy = 0;
            }
            this.draw();
        }
        this.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#3339';
            ctx.rect(this.x, canHgt-30,this.width,this.heightStart);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            
            if(this.index == barArray.length-1 && !$('.graphicsContainer').hasClass('diminish')){
                ctx.beginPath();
                ctx.fillStyle = this.colorAlt;
                ctx.font = '300 50px monty';
                const t2 = ctx.measureText(this.countryName+' : '+this.personSent).width; 
                ctx.fillText(this.countryName+' : '+this.personSent,(canWid/2)-(t2/2),canHgt-100);
                ctx.closePath();
            }
            ctx.beginPath();
            ctx.fillStyle = '#333';
            ctx.font = '500 24px monty';
            const t1 = ctx.measureText(this.labelISO).width; 
            ctx.fillText(this.labelISO,this.x+(this.width/2)-(t1/2),canHgt);
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#333';
            ctx.font = '600 24px monty';
            const t2 = ctx.measureText(this.personSent).width; 
            ctx.fillText(this.personSent,this.x+(this.width/2)-(t2/2),canHgt + this.heightStart - 40);
            ctx.closePath();
        }
    }
    function drawRegionsMap(counter) {
        $('.stateName').addClass('active');
        data.addRow([countryMap[databyDateNew[counter][0]],databyDateNew[counter][1]]);
        chart.draw(data, options);
        barArray.push(new Bar(  counter,
                                countryMap[databyDateNew[counter][0]],
                                databyDateNew[counter][0],
                                databyDateNew[counter][1],
                                colorMap[databyDateNew[counter][1]]+'99',
                                colorMap[databyDateNew[counter][1]]
                            )
                    );
    }
    function animate(){
        ctx.clearRect(0,0,canWid,canHgt);
        for (let index = 0; index < barArray.length; index++) {
            barArray[index].update();
        }
        if(barArray.length == databyDateNew.length && barArray[barArray.length-1].dy == 0){
            setTimeout(()=>{$('.graphicsContainer').addClass('diminish')},1000)
        }
        requestAnimationFrame(animate)
    }
    function init(label){
        
        
        if(!label){

            
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Country');
            data.addColumn('number', 'Value');
            options = {
                domain: 'IN',
                legend: 'none',
                backgroundColor: 'transparent',
                datalessRegionColor: '#ccbdaf',
                colorAxis: {
                    values: [1,3,4,5,8,9,48,151],
                    colors: ['#419c95','#2299c9','#C2924C','#C24C92','#49492C','#C2492C','#333333','#c85b5b',]
                }
            };
            chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            chart.draw(data, options);
            setTimeout(function(){
                animate();
                init(1);
            },2000);
        }else if(label<=databyDateNew.length){
            setTimeout(function(){
                drawRegionsMap(label-1);
                if(databyDateNew[label-1]){
                        console.log('stop');
                        init(label+1);
                }else{
                    init(label+1);
                }
            },secs)
        }else{
        }
    }
});
