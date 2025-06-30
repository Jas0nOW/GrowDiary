const form = document.getElementById('plant-form');
const nameInput = document.getElementById('plant-name');
const listEl = document.getElementById('plant-list');

// Pflanzen laden oder leeres Array
let plants = JSON.parse(localStorage.getItem('plants') || '[]');

// in <ul> rendern
function render() {
  listEl.innerHTML = '';
  for (const p of plants) {
    const li = document.createElement('li');
    li.textContent = `${p.name} (gelegt: ${new Date(p.date).toLocaleDateString()})`;
    listEl.append(li);
  }
}

// Neues Formular absenden
form.addEventListener('submit', e => {
  e.preventDefault();
  plants.push({ name: nameInput.value, date: Date.now() });
  localStorage.setItem('plants', JSON.stringify(plants));
  nameInput.value = '';
  render();
});

// initial rendern
render();
