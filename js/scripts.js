var video = $("#video")[0];
var audio = $("#audio")[0];
var mobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	mobile = true;
}

if (mobile) {
	$("#video").attr("controls", "controls");
	$("#links").show();
	$("#loading").hide();
}

if (!mobile) {
	video.addEventListener("play", function()
	{
		$("#loading").hide();
		
		setTimeout(function() {
			video.currentTime = 0;
			video.play();
		}, 3*60*1000 - video.currentTime);
	});
	
	video.addEventListener("timeupdate", function()
	{
		if (video.currentTime >= 56.8) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
		
		if (video.currentTime >= 38) {
			$("#links").fadeIn("slow");
		} else {
			$("#links").hide();
		}
	});
}