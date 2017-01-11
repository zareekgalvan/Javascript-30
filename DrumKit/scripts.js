const audio65 = new Audio("sounds/clap.wav");
const audio83 = new Audio("sounds/hihat.wav");
const audio68 = new Audio("sounds/kick.wav");
const audio70 = new Audio("sounds/openhat.wav");
const audio71 = new Audio("sounds/boom.wav");
const audio72 = new Audio("sounds/ride.wav");
const audio74 = new Audio("sounds/snare.wav");
const audio75 = new Audio("sounds/tom.wav");
const audio76 = new Audio("sounds/tink.wav");

function playSound(e) {
	const key = e.keyCode;
	const keyp = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(key == 65)
	{
		var audio = audio65;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 83)
	{
		var audio = audio83;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 68)
	{
		var audio = audio68;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 70)
	{
		var audio = audio70;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 71)
	{
		var audio = audio71;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 72)
	{
		var audio = audio72;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 74)
	{
		var audio = audio74;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 75)
	{
		var audio = audio75;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else if(key == 76)
	{
		var audio = audio76;
		audio.currentTime = 0;
		audio.play();
		keyp.classList.add('playing');
	}
	else 
	{
		return;
	}
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
 }

 function printKey(e) {
 	console.log(e);
 }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('touchstart', printKey, false));
window.addEventListener('keydown', playSound);