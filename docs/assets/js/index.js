const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');
const digitalHour = document.getElementById('hour');
const digitalMinute = document.getElementById('minute');
const digitalSecond = document.getElementById('second');

const getTime = () => {
	let today = new Date();
	let hours = today.getHours() - 12;
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();

	hourHand.style.transform = `rotate(${((hours / 12) * 360)+90}deg)`;
	minHand.style.transform = `rotate(${(minutes / 60) * 360 + 90}deg)`;
	secHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;

    digitalHour.textContent = ( hours <= 9 )? `0${hours}`:hours ;
    digitalMinute.textContent = ( minutes <= 9 )? `0${minutes}`:minutes ;
    digitalSecond.textContent = ( seconds <= 9 )? `0${seconds}`:seconds ;

};

setInterval(getTime, 1000);
