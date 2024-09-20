const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `©️${currentYear} 🌸Kam Yi Ching Vanessa🌸 Hong Kong SAR, China`;
}

const lastModifiedElement = document.createElement('p');
lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
lastModifiedElement.classList.add('last-modified'); // Add class for styling

const footer = document.querySelector('footer'); 

if (footer) {
    footer.appendChild(lastModifiedElement);
}