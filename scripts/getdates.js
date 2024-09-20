
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `©️${currentYear} 🌸Kam Yi Ching Vanessa🌸 Hong Kong SAR, China`;
}

const summaryNote = document.createElement('p');
summaryNote.textContent = "Note this CodePen summary of using the Date object in different ways.";
const footer = document.querySelector('footer');
if (footer) {
    footer.appendChild(summaryNote);
}