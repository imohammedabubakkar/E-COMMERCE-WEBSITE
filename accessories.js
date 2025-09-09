// script.js
// Example: Image hover animation (already using CSS, JS is optional)
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Product selected: ' + card.querySelector('h3').innerText);
        });
    });
});
