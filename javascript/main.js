const [celSlide, fahSlide, kelSlide] = document.getElementsByClassName('div-temp-slider');
const [celContainer, fahContainer, kelContainer] = document.getElementsByClassName('div-temp-bg');
const [infoCel, infoFah, infoKel] = document.getElementsByClassName('temp-degrees');

const body = document.querySelector('body');

const celsius = new Temperature(celContainer, celSlide, infoCel);
const fahrenheit = new Temperature(fahContainer, fahSlide, infoFah);
const kelvin = new Temperature(kelContainer, kelSlide, infoKel);

celsius.container.addEventListener('mousedown', startDrag, false);
fahrenheit.container.addEventListener('mousedown', startDrag, false);
kelvin.container.addEventListener('mousedown', startDrag, false);

body.addEventListener('mouseup', stopSlide, false);

function startDrag(event) {
	event.preventDefault();
	body.addEventListener('mousemove', moveSlide, false);
	setSlidePosition(event, getContainer(event));
}

function moveSlide(event) {
    event.preventDefault();
	setSlidePosition(event, getContainer(event));
}

function stopSlide(event) {
	event.preventDefault();	
	getContainer(event).removeEventListener('mousemove', moveSlide, false);
    setSlidePosition(event, getContainer(event));
}

function setSlidePosition(event, container) {
	let position = getPosition(event, container);
	let slider = getSlider(event);
	slider.style.height = position + 'px';
}

function getContainer(event) {
	if (event.target.children[0] == undefined) {		
		return event.target.parentNode;
	}
	if (event.srcElement.tagName == 'LI'){
		return event.srcElement.firstElementChild;
	}
	return event.target;
}

function getSlider(event) {
	if (event.target.children[0] == undefined) {
		return event.target;
	} else {
		return event.target.children[0];
	}
}

// retorn a posição dentro do container
function getPosition(event, container) {
	let pos = (event.pageY - container.offsetTop) - container.clientHeight;
	pos = pos > 0 ? 0 : pos;
	pos = pos < -200 ? -200 : pos;
	return Math.abs(pos);
}
