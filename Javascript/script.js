function test(){
	var x;
	x = document.getElementById('background_audio').paused;
	document.write(x);
}


function mute(){
	var audio = document.getElementById('background_audio')
	var audio2 = document.getElementById('background_audio2')
	var playbutton = document.getElementById('play_button')
	audio.volume = 0.35

 	if(audio.paused == true){
 		audio.play();
 		audio2.play();
 		playbutton.src="Ressources/speaker.svg";
 	} else {
 		audio.pause();
 		audio2.pause();
 		playbutton.src="Ressources/speakermute.svg";
 	}
}

function wow(){
	var audiowow = document.getElementById('wow');
	audiowow.play();
}
