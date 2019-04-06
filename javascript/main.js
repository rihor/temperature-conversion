const [celSlide, fahSlide, kelSlide] = document.getElementsByClassName('div-temp-slider');
const [celContainer, fahContainer, kelContainer] = document.getElementsByClassName('div-temp-bg');
const [infoCel, infoFah, infoKel] = document.getElementsByClassName('temp-degrees');

const body = document.querySelector('body');

const celsius = new Celsius(celContainer, celSlide, infoCel);
const fahrenheit = new Fahrenheit(fahContainer, fahSlide, infoFah);
const kelvin = new Kelvin(kelContainer, kelSlide, infoKel);

// recebe o objeto do termometro selecionado
let thermSelected = null;

celsius.container.addEventListener('mousedown', mousePressed, false);
fahrenheit.container.addEventListener('mousedown', mousePressed, false);
kelvin.container.addEventListener('mousedown', mousePressed, false);



body.addEventListener('mouseup', clickLifted, false);



function getThermSelected() {
	if (thermSelected == null) {
		console.warn('No thermometer was selected!');
	}
	return thermSelected;
}

function setThermSelected(therm) {
	switch (therm.target) {
		case celsius.container:
		case celsius.slider:
			thermSelected = celsius;
			break;
		case fahrenheit.container:
		case fahrenheit.slider:
			thermSelected = fahrenheit;
			break;
		case kelvin.container:
		case kelvin.slider:
			thermSelected = kelvin;
			break;
		default:
			console.warn('No thermometer was selected!');
			thermSelected = null;
			break;
	}
}

function mousePressed(event) {
	event.preventDefault();
	setThermSelected(event);
	body.addEventListener('mousemove', mouseMoved, false);
	setSlidePosition(event, getContainerSelected());
}

function mouseMoved(event) {
	event.preventDefault();
	let container = getContainerSelected();
	setSlidePosition(event, container);
}

function clickLifted(event) {
	if(getThermSelected() == null){
		return;
	}
	body.removeEventListener('mousemove', mouseMoved, false);
	setSlidePosition(event);
}

function setSlidePosition(event) {
	let position = getPosition(event, getContainerSelected());
	let slider = getSlider();
	slider.style.height = position + 'px';
}

function getContainerSelected() {
	return thermSelected.container;
}

function getSlider() {
	return thermSelected.slider;
}

// calcula a posição invertida, depois pega o valor absoluto
function getPosition(event, container) {
	let pos = event.pageY - container.offsetTop - container.clientHeight;
	pos = pos > 0 ? 0 : pos;
	pos = pos < -200 ? -200 : pos;
	return Math.abs(pos);
}
