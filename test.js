let thisdata = {data: "[{'username': '9667512732', 'usertype': 'patient', 'download_speed': '2.70 Mbps', 'upload_speed': '2.70 Mbps', 'connected_on': 'Unknown'}]"}
thisdata = thisdata.data.replace(/ /g,'').replace(/'/g,'"')
thisdata = thisdata.substring(1,thisdata.length-1);
console.log(JSON.parse(thisdata).username)