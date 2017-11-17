var down = false;
var prevKey = null;
var map = {};		//keeps track of buttons current held down


window.addEventListener('keydown', function(e) {
	if(map[e.keyCode]) return;	//will not repeat sound while key is held
	map[e.keyCode] = true;		//will allow for other keys to be played

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(key);
	if (!audio) return;
	audio.currentTime = 0;		//resets corresponding sound if same key is released and pressed
	audio.play();
	key.classList.add('playing');
});

window.addEventListener('keyup', function(e) {
	map[e.keyCode] = false;
});