//Getting date
function returnDate() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minutes = d.getMinutes();

    //document.getElementById('time').innerHTML = month+'/'+day+'/'+year;

    if (minutes < 10) {
        document.getElementById('time').innerHTML = hour+':0'+minutes+' '+month+'/'+day+'/'+year;
    } else {
        document.getElementById('time').innerHTML = hour+':'+minutes+' '+month+'/'+day+'/'+year;
    }
}

setInterval(returnDate, 2000)
