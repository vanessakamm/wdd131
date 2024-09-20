
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `©️${currentYear} 🌸Kam Yi Ching Vanessa🌸 Hong Kong SAR, China`;
}


// Get the last modified date and add it to the second paragraph
const lastModifiedElement = document.createElement('p');
lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
if (footer) {
    footer.appendChild(lastModifiedElement);
}