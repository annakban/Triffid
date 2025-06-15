const weightSample = document.getElementById('weightSample');
const weightSize = document.getElementById('weightSize');
const weightSlider = document.getElementById('weightSlider');

const crnvSample = document.getElementById('crnvSample');
const crnvSize = document.getElementById('crnvSize');
const crnvSlider = document.getElementById('crnvSlider');

function updateWeightSample() {
  weightSample.style.fontSize = `${weightSize.value}px`;
  weightSample.style.fontVariationSettings = `'wght' ${weightSlider.value}`;
  weightSample.style.fontWeight = weightSlider.value; // Important for variable axis to apply
}

function updateCrnvSample() {
  crnvSample.style.fontSize = `${crnvSize.value}px`;
  crnvSample.style.fontVariationSettings = `'CRNV' ${crnvSlider.value}`;
}

[weightSize, weightSlider].forEach(input => {
  input.addEventListener('input', updateWeightSample);
});

[crnvSize, crnvSlider].forEach(input => {
  input.addEventListener('input', updateCrnvSample);
});

updateWeightSample();
updateCrnvSample();
