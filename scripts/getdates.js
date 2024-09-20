
const currentYear = new Date().getFullYear();

// Update the year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `©️${currentYear} 🌸Kam Yi Ching Vanessa🌸 Hong Kong SAR, China`;
}

const lastModifiedElement = document.createElement('p');
lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;


const footer = document.querySelector('footer');
if (footer) {
   lastModifiedElement.classList.add('LastModifiedElement'); // Add class for styling
    footer.appendChild(lastModifiedElement);
}