function execute() {
    $.getJSON('/bash', function(dat) {
    	//server
        document.getElementById('se_1').innerHTML = dat['serv_memory'];
        document.getElementById('se_2').innerHTML = dat['serv_disk'];
        document.getElementById('se_3').innerHTML = dat['serv_cpu'];

        //pi
        document.getElementById('se_4').innerHTML = dat['pi_memory'];
        document.getElementById('se_5').innerHTML = dat['pi_disk'];
        document.getElementById('se_6').innerHTML = dat['pi_cpu'];
    });
}

setInterval(execute, 2000)