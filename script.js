document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const menuIcon = document.querySelector('.menu');
    const navMenu = document.querySelector('ul');

    // Toggle the visibility of the ul when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            menuIcon.src = 'starter-code\assets\shared\icon-hamburger.svg'; // Change to hamburger icon
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column'; // Set flex direction to column
            menuIcon.src = 'starter-code\assets\shared\icon-close.svg'; // Change to close icon
        }
    });
});