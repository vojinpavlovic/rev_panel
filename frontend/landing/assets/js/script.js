function uzmi_datum(){
	datum = new Date();
	mjesec = datum.getMonth()+1;
	dan = datum.getDate();
	if(mjesec < 10){mjesec = "0"+mjesec};
	if (dan < 10){dan = "0"+dan};
	$(".datum").text(`${dan}.${mjesec}.2022`)
}

$(".igraci_btn").on("click",function(){
	$(".lista_igraca").show("fast")
})
$(".sakriji").on("click",function(){
	$(".lista_igraca").hide("fast")
})

function pingaj(){
	url = "http://209.237.141.92"
	ping(url).then(function(delta) {
		console.log(delta)
		$("#ping_num").text(String(delta)+" MS")
		final = delta/15
		if (final > 85){
			final = 85
		}
		$(".itms").append(`<div class="item s_item" onmouseover="hover(${delta})" style="height: ${final}%"><p>${delta}</p></div>`)
    	return String(delta)
	}).catch(function(err) {
		$(".itms").append(`<div class="item s_item" onmouseover="hover(${delta})" style="height: ${0}%"><p>-1</p></div>`)
    	return String(-1)
	});
}
/*------------------------*/
function hover(num){
	$("#ping_num").text(String(num)+" MS")
}
setInterval(function() {
	pingaj()
}, 1000)
uzmi_datum()