const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

for (let year = new Date().getFullYear(); year >= 1990; year--) {
    yearElement.innerHTML += `<option value="${year}">${year}</option>`;
}

//TODO FIX TOP OF LIST NOT BOTTOM
// Add default car year option
const defaultYearOption = document.createElement('option');
    defaultYearOption.text = "Select Year";
    defaultYearOption.disabled = true;
    defaultYearOption.selected = true;
    yearElement.add(defaultYearOption);

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

// Add default car make option
const defaultCarMakeOption = document.createElement('option');
    defaultCarMakeOption.text = "Select Make";
    defaultCarMakeOption.disabled = true;
    defaultCarMakeOption.selected = true;
    carMakesDropdown.add(defaultCarMakeOption);

// Add default car make option
const defaultCarModelOption = document.createElement('option');
    defaultCarModelOption.text = "Select Model";
    defaultCarModelOption.disabled = true;
    defaultCarModelOption.selected = true;
    carModelsDropdown.add(defaultCarModelOption);

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

    // Add default option
    const defaultOption = document.createElement('option');
        defaultOption.text = "Select Model";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        carModelsDropdown.add(defaultOption);

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

// Add accessories to the #accessories-grid based on the selected car model and make
const accessoriesGrid = document.getElementById('accessories-grid');
const accessoriesData = {
    "Camry": ["All-Weather Floor Liners", "Cargo Net", "Door Edge Guards", "Paint Protection Film"],
    "Corolla": ["All-Weather Floor Liners", "Cargo Tote", "Door Edge Guards", "Paint Protection Film"],
    "Rav4": ["All-Weather Floor Liners", "Cargo Liner", "Door Edge Guards", "Paint Protection Film"],
    "Civic": ["All-Season Floor Mats", "Cargo Net", "Door Edge Film", "Paint Protection Film"],
    "Accord": ["All-Season Floor Mats", "Cargo Hook", "Door Edge Film", "Paint Protection Film"],
    "CR-V": ["All-Season Floor Mats", "Cargo Tray", "Door Edge Film", "Paint Protection Film"],
    "F-150": ["All-Weather Floor Mats", "Bed Extender", "Bed Mat", "Bed Step"],
    "Escape": ["All-Weather Floor Mats", "Cargo Area Protector", "Cargo Net", "Cargo Organizer"],
    "Explorer": ["All-Weather Floor Mats", "Cargo Mat", "Cargo Net", "Cargo Organizer"],
    "Silverado": ["All-Weather Floor Mats", "Bed Liner", "Bed Net", "Bed Rug"],
    "Equinox": ["All-Weather Floor Mats", "Cargo Area Organizer", "Cargo Net", "Cargo Security Shade"],
    "Traverse": ["All-Weather Floor Mats", "Cargo Area Mat", "Cargo Net", "Cargo Organizer"],
    "Altima": ["All-Season Floor Mats", "Cargo Net", "Cargo Organizer", "Trunk Protector"],
    "Rogue": ["All-Season Floor Mats", "Cargo Area Protector", "Cargo Net", "Cargo Organizer"],
    "Sentra": ["All-Season Floor Mats", "Cargo Area Protector", "Cargo Net", "Cargo Organizer"],
    "Grand Cherokee": ["All-Weather Floor Mats", "Cargo Area Mat", "Cargo Net", "Cargo Organizer"],
    "Wrangler": ["All-Weather Floor Mats", "Cargo Net", "Cargo Organizer", "Cargo Tote"],
    "Cherokee": ["All-Weather Floor Mats", "Cargo Area Liner", "Cargo Net", "Cargo Organizer"],
    "Elantra": ["All-Weather Floor Mats", "Cargo Net", "Cargo Organizer", "Cargo Tray"]
};
// Make sure the accessories grid is empty
accessoriesGrid.innerHTML = '';

// const accessories = accessoriesData["Camry"];
const accessories = accessoriesData[String(carModelsDropdown.value)];
carModelsDropdown.addEventListener('change', function() {
    console.log(carModelsDropdown.value);
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
    const accessories = accessoriesData[String(carModelsDropdown.value)];
    accessoriesGrid.innerHTML = '';
    accessories.forEach(accessory => {
        const div = document.createElement('div');
        div.className = 'accessory';
        div.innerHTML = `
            <img src="https://picsum.photos/300/300?image=841" alt="${accessory}">
            <h3>${accessory}</h3>
            <p>$${Math.floor(Math.random() * 100) + 50}</p>
            <button>Request a quote</button>
        `;
        accessoriesGrid.appendChild(div);
    });
});

// Handle form submission
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});

// Handle form reset
form.addEventListener('reset', function() {
    carModelsDropdown.innerHTML = '';
    accessoriesGrid.innerHTML = '';
});