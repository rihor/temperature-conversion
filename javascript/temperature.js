class Temperature {
	constructor(container, slider, info) {
		this.container = container;
		this.slider = slider;
		this.info = info;
	}
}

class Celsius extends Temperature {
	constructor(container, slider, info) {
		super(container, slider, info);
	}

	toFahrenheit(value) {
		return (value * 1.8 + 32).toFixed(2);
	}

	toKelvin(value) {
		return (value + 273.15).toFixed(2);
	}
}

class Fahrenheit extends Temperature {
	constructor(container, slider, info) {
		super(container, slider, info);
	}

	toCelsius(value) {
		return ((value - 32) * 5/9).toFixed(2);
	}

	toKelvin(value) {
		return ((value - 32) * 5/9 + 273.15).toFixed(2); 
	}
}

class Kelvin extends Temperature {
	constructor(container, slider, info) {
		super(container, slider, info);
	}

	toCelsius(value) {
		return (value - 273.15).toFixed(2);
	}

	toFahrenheit(value) {
		return ((value - 273.15) * 9/5 + 32).toFixed(2);
	}
}