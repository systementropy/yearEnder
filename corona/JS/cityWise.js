$(document).ready(function(){
	google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyAwGAMpFviLTiB9UpdJ1_iH3Ox6Ru0Sm4s '
    });
    google.charts.setOnLoadCallback(init);
});
