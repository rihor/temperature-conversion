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

	convertToFahrenheit() {}

	convertToKelvin() {}
}

class Fahrenheit extends Temperature {
	constructor(container, slider, info) {
		super(container, slider, info);
	}

	convertToCelsius() {}

	convertToKelvin() {}
}

class Kelvin extends Temperature {
	constructor(container, slider, info) {
		super(container, slider, info);
	}

	convertToCelsius() {}

	convertToFahrenheit() {}
}