const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

for (let year = new Date().getFullYear(); year >= 1990; year--) {
    yearElement.innerHTML += `<option value="${year}">${year}</option>`;
}

const carData = {
    "Toyota": ["Camry", "Corolla", "Rav4"],
    "Honda": ["Civic", "Accord", "CR-V"],
    "Ford": ["F-150", "Escape", "Explorer"],
    "Chevrolet": ["Silverado", "Equinox", "Traverse"],
    "Nissan": ["Altima", "Rogue", "Sentra"],
    "Jeep": ["Grand Cherokee", "Wrangler", "Cherokee"],
    "Hyundai": ["Elantra", "Tucson", "Santa Fe"],
    "Kia": ["Optima", "Sorento", "Sportage"],
    "Subaru": ["Outback", "Forester", "Impreza"],
    "Volkswagen": ["Jetta", "Passat", "Tiguan"]
};

const carMakesDropdown = document.getElementById('make');
const carModelsDropdown = document.getElementById('model');

// Populate car makes dropdown
Object.keys(carData).forEach(make => {
    const option = document.createElement('option');
    option.text = make;
    carMakesDropdown.add(option);
});

// Handle car make selection
carMakesDropdown.addEventListener('change', function() {
    const selectedMake = carMakesDropdown.value;
    const models = carData[selectedMake];

    // Clear existing options
    carModelsDropdown.innerHTML = '';

    // Populate car models dropdown based on selected make
    models.forEach(model => {
        const option = document.createElement('option');
        option.text = model;
        carModelsDropdown.add(option);
    });
});

// Make Header Columns Slide
[...document.querySelectorAll('.column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});
