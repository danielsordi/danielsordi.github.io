window.addEventListener("load", function () {

    // Get all elements inside the nav bar
    const navItems = document.querySelectorAll('nav .nav-link');

    // Add the desired class to each element
    navItems.forEach(item => {
        item.classList.add('black-text');
    }); 


});

