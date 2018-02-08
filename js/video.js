var video;

window.onload = function() {
	video = document.getElementById("video");
}

function PlayPauseVideo() {
	if (video.paused) {
		video.play();
	}else {
		video.pause();
	}
}
function FullScreen() {
	video.webkitEnterFullscreen();
}



$(document).ready(function () {
	resizeDiv();


	window.onresize = function (event) {
		resizeDiv();
	};

	function resizeDiv() {
		vpw = $(window).width();
		vph = $(window).height();

		$('.content h1').css({ 'padding-top': vph*0.32 + "px"});
		$('.footer').css({ 'padding-top': vph*0.15 + "px"});

	}


	$(".play").click(function(){
		$('.container-video').show();
		$(video).show();
		$("video")[0].play();
	});

	$('body').click(function(e){
		e = e || event;
		target = e.target || e.srcElement;
		if (target.id !== "video" && target.className !== "play") {
			$(video).hide();
			$('.container-video').hide();
			video.pause();
		}
	});

// var left; 
// var top; 

// 	$(".play").click(function(){
// 		console.log($(video).offsetLeft() + $(video).width());
// 		console.log($(video).offsetTop()+ $(video).width());
// 	})
 

});

