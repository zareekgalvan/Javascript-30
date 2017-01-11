const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hour = now.getHours();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	const hourDegrees = ((hour / 12) * 360) + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	console.log(hour + ':' + minutes + ':' + seconds);
}

setInterval(setDate, 1000);