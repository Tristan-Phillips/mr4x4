const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

for (let year = new Date().getFullYear(); year >= 1990; year--) {
    yearElement.innerHTML += `<option value="${year}">${year}</option>`;
}

