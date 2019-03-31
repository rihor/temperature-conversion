const rangeCelEl = document.getElementById('range-cel');
const rangeFahEl = document.getElementById('range-fah');
const rangeKelEl = document.getElementById('range-kel');

const tempCel = new Temperature(0);
const tempFah = new Temperature(0);
const tempKel = new Temperature(0);


rangeCelEl.oninput = () => {
    console.log(rangeCelEl.value);
}

rangeFahEl.oninput = () => {
    console.log(rangeFahEl.value);
}

rangeKelEl.oninput = () => {
    console.log(rangeKelEl.value);
}