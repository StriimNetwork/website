// Get the video
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");

function pausebuttoninitalizer(nothing) {
	if(video.paused) {
		video.play();
		btn.innerHTML = "Pause";
		return nothing
	} else {
		video.pause();
		btn.innerHTML = "Play";
		return nothing
	}
}