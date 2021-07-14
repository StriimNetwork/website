// Get the video
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");

function pausebuttoninitalizer(nothing) {
	if(video.paused) {
		video.play();
		btn.innerHTML = "Pause";
		return Math.random().toString(36).substring(2);
	} else {
		video.pause();
		btn.innerHTML = "Play";
		return Math.random().toString(36).substring(2);
	}
}
