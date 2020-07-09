// var distData = [[28.6471948,76.9531798],[19.0759837,72.8776559],[13.0826802,80.2707184],[19.2183307,72.9780897],[18.5204303,73.8567437],[23.022505,72.5713621],[17.385044,78.486671],[12.9700247,77.6536125],[19.6967136,72.769885],[22.572646,88.36389500000001],[19.8761653,75.3433139],[12.6819372,79.98884129999999],[21.1702401,72.83106070000001],[18.7357931,73.0946926],[28.4594965,77.0266383],[19.9974533,73.78980229999999],[13.1230558,79.9119526],[49.2632927,-123.1012092],[22.7195687,75.8577258],[26.0794316,91.63721500000001],[28.4089123,77.3177894],[21.0076578,75.5626039],[9.9252007,78.1197754],[22.6168099,88.402895],[26.9124336,75.7872709]];
// distData = distData.reverse();
// const distAddressMap = {
//     "Jaipur,RJ,IN":[26.9124336,75.7872709],
//     "North 24 Parganas,WB,IN":[22.6168099,88.402895],
//     "Madurai,TN,IN":[9.9252007,78.1197754],
//     "Jalgaon,MH,IN":[21.0076578,75.5626039],
//     "Faridabad,HR,IN":[28.4089123,77.3177894],
//     "Kamrup Metropolitan,AS,IN":[26.0794316,91.63721500000001],
//     "Indore,MP,IN":[22.7195687,75.8577258],
//     "AS,IN":[49.2632927,-123.1012092],
//     "Thiruvallur,TN,IN":[13.1230558,79.9119526],
//     "Nashik,MH,IN":[19.9974533,73.78980229999999],
//     "Gurugram,HR,IN":[28.4594965,77.0266383],
//     "Raigad,MH,IN":[18.7357931,73.0946926],
//     "Surat,GJ,IN":[21.1702401,72.83106070000001],
//     "Chengalpattu,TN,IN":[12.6819372,79.98884129999999],
//     "Aurangabad,MH,IN":[19.8761653,75.3433139],
//     "Kolkata,WB,IN":[22.572646,88.36389500000001],
//     "Palghar,MH,IN":[19.6967136,72.769885],
//     "Bengaluru Urban,KA,IN":[12.9700247,77.6536125],
//     "Hyderabad,TG,IN":[17.385044,78.486671],
//     "Ahmedabad,GJ,IN":[23.022505,72.5713621],
//     "Pune,MH,IN":[18.5204303,73.8567437],
//     "Thane,MH,IN":[19.2183307,72.9780897],
//     "Chennai,TN,IN":[13.0826802,80.2707184],
//     "Mumbai,MH,IN":[19.0759837,72.8776559],
//     "DL,IN":[28.6471948,76.9531798],
// }
const distAddressMap = {
    "North 24 Parganas,WB,IN":[22.6168099,88.402895,"North 24 Parganas"],
    "Jalgaon,MH,IN":[21.0076578,75.5626039,"Jalgaon"],
    "Indore,MP,IN":[22.7195687,75.8577258,"Indore"],
    "Jaipur,RJ,IN":[26.9124336,75.7872709,"Jaipur"],
    "Madurai,TN,IN":[9.9252007,78.1197754,"Madurai"],
    "Nashik,MH,IN":[19.9974533,73.78980229999999,"Nashik"],
    "AS,IN":[49.2632927,-123.1012092,"Assam"],
    "Faridabad,HR,IN":[28.4089123,77.3177894,"Faridabad"],
    "Kamrup Metropolitan,AS,IN":[26.0794316,91.63721500000001,"Kamrup Metropolitan"],
    "Gurugram,HR,IN":[28.4594965,77.0266383,"Gurugram"],
    "Thiruvallur,TN,IN":[13.1230558,79.9119526,"Thiruvallur"],
    "Ahmedabad,GJ,IN":[23.022505,72.5713621,"Ahmedabad"],
    "Surat,GJ,IN":[21.1702401,72.83106070000001,"Surat"],
    "Kolkata,WB,IN":[22.572646,88.36389500000001,"Kolkata"],
    "Chengalpattu,TN,IN":[12.6819372,79.98884129999999,"Chengalpattu"],
    "Palghar,MH,IN":[19.6967136,72.769885,"Palghar"],
    "Aurangabad,MH,IN":[19.8761653,75.3433139,"Aurangabad"],
    "Thane,MH,IN":[19.2183307,72.9780897,"Thane"],
    "Pune,MH,IN":[18.5204303,73.8567437,"Pune"],
    "Raigad,MH,IN":[18.7357931,73.0946926,"Raigad"],
    "Hyderabad,TG,IN":[17.385044,78.486671,"Hyderabad"],
    "Bengaluru Urban,KA,IN":[12.9700247,77.6536125,"Bengaluru Urban"],
    "Chennai,TN,IN":[13.0826802,80.2707184,"Chennai"],
    "Mumbai,MH,IN":[19.0759837,72.8776559,"Mumbai"],
    "DL,IN":[28.6471948,76.9531798,"New Delhi"]
}


var map;
var initMap = function(){
    geocoder = new google.maps.Geocoder();
    for (let index = 0; index < dataIndia.length; index++) {
        const element = dataIndia[index];
        if(!distAddressMap[element[6]]){
            getLatLng(index,element[6],element[0])
        }
    }
    console.log(JSON.stringify(distAddressMap))
}
google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
});
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
$('.legend1').text('As of '+(new Date().getDate())+' '+(monthNames[new Date().getMonth()])+', 2020 | 8:00 am');
var geocoder;
const mapOptions = {
    domain: 'IN',
    region: 'IN',
    legend: 'none',

    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    resolution: 'provinces',
    colorAxis: {
        values: [0,10],
        colors: ['#52a352','#E50000']
    },
    sizeAxis: { minValue: 0, maxValue: 110000, minSize: 2, maxSize: 50 },
    displayMode: 'markers',
    tooltip: {
        trigger: 'selection'
    }
};
let initForMap = false;
const coordinateObj = {};
var dataIndia = [['District Name','Confirmed','Recovered','Deceassed','Tested']];
var jsondata = JSON.parse($.ajax({'url': "/data/citydata.json", 'async': false}).responseText);
for (const state in jsondata) {
    if (jsondata.hasOwnProperty(state)) {
        const element = jsondata[state].districts;
        if(element){
            Object.keys(element).map(a=>{
                if(element[a]['total'] && element[a]['total']['confirmed']){
                    if(a==="Unknown" || a==="Others" ){
                        const newArr = ["",0,0,0,0]
                        newArr[0] = state+'-'+a;
                        newArr[1] = element[a]['total']['confirmed'] || 0;
                        newArr[2] = element[a]['total']['recovered'] || 0;
                        newArr[3] = element[a]['total']['deceased'] || 0;
                        newArr[4] = element[a]['total']['tested'] || 0;
                        newArr[5] = state+',IN';
                        newArr[6] = state+',IN';
                        dataIndia.push([...newArr])
                    }else{
                        const newArr = ["",0,0,0,0]
                        newArr[0] = a;
                        newArr[1] = element[a]['total']['confirmed'] || 0;
                        newArr[2] = element[a]['total']['recovered'] || 0;
                        newArr[3] = element[a]['total']['deceased'] || 0;
                        newArr[4] = element[a]['total']['tested'] || 0;
                        newArr[5] = state+',IN';
                        newArr[6] = a+','+state+',IN';
                        dataIndia.push([...newArr])
                    }
                }
            })
        }
    }
}
console.log(dataIndia)
dataIndia.sort(function(a,b){
    return ((b[1])-(a[1]))
})
dataIndia = dataIndia.slice(1,26)
dataIndia.sort(function(a,b){
    return ((a[1])-(b[1]))
})
console.log(dataIndia);

// let csvContent = "data:text/csv;charset=utf-8," 
// + dataIndia.map(e => e.join(",")).join("\n");
// var encodedUri = encodeURI(csvContent);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", "my_data.csv");
// document.body.appendChild(link); // Required for FF
// link.click();

function drawRegionsMap(counter) {
    if(distAddressMap[dataIndia[counter][6]]){

        data.addRow([distAddressMap[dataIndia[counter][6]][0],distAddressMap[dataIndia[counter][6]][1],10,dataIndia[counter][1]]);
        chart.draw(data, mapOptions);
        $('.stateName').html(distAddressMap[dataIndia[counter][6]][2]);
        $('.confirmedData').html(
            dataIndia[counter][1]>1000?((dataIndia[counter][1]/1000).toFixed(1)+'K'):dataIndia[counter][1]
        );
    }else{
        console.log(dataIndia[counter])
    }
}

google.charts.setOnLoadCallback(init);
function init(label){
    if(!label){
        data = new google.visualization.DataTable();
        data.addColumn('number', 'Lat');                                
        data.addColumn('number', 'Long');
        data.addColumn('number', 'Color'); 
        data.addColumn('number', 'Size'); 
        
        chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, mapOptions);

        dataPlace = new google.visualization.DataTable();
        dataPlace.addColumn('string', 'Country');
        dataPlace.addColumn('number', 'Value');
        dataPlace.addRow(["IN",0])
        optionsPlace = {
            domain: 'IN',
            region: 'IN',
            legend: 'none',
            backgroundColor: 'transparent',
            datalessRegionColor: 'transparent',
            // resolution: 'provinces',
            colorAxis: {
                values: [0,10],
                colors: ['#E5E5E5','#E50000']
            },
            sizeAxis: { minValue: 0, maxValue: 110, minSize: 5, maxSize: 50 },
            displayMode: 'regions',
            tooltip: {
                trigger: 'selection'
            }
        };
        chartPlace = new google.visualization.GeoChart(document.getElementById('places_div'));
        chartPlace.draw(dataPlace, optionsPlace);
        google.visualization.events.addListener(chart, 'select', function () {
            var selection = chart.getSelection();
            console.log(selection)
            return selection;
        });

        setTimeout(function(){
            init(1);
        },1000);
    }else if(label<=dataIndia.length){
        setTimeout(function(){
            drawRegionsMap(label-1);
            if(dataIndia[label-1]){
                    console.log('stop');
                    init(label+1);
            }else{
                init(label+1);
            }
        },400)
    }else{
        
    }
}
function getLatLng(i,address,name){
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK){
            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();
            console.log(results[0].geometry.location.lat());
            if(name === address){
                distAddressMap[address] = [lat,lng,name];
            }else{
                distAddressMap[address] = [lat,lng,name];
            }
            
        }
    });
}
