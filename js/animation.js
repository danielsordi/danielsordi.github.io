window.addEventListener("load", function () {

    window.scrollTo(0, 0);

    // Get all elements inside the nav bar
    const navItems = document.querySelectorAll('nav .nav-link');

    // Add the desired class to each element
    navItems.forEach(item => {
        item.classList.add('black-text');
    }); 

    const sectionContainers = document.querySelectorAll('.section');

    sectionContainers.forEach(function(section) {
        const showMoreBtn = section.querySelector('.showMoreBtn');
        const showLessBtn = section.querySelector('.showLessBtn');
        const fullTexts = section.querySelector('.full-text');
        const previewTexts = section.querySelector('.preview-text')
    
        showMoreBtn.addEventListener('click', function() {
           
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline-block';
            previewTexts.style.display = 'none';
            fullTexts.style.display = 'block'
        });
    
        showLessBtn.addEventListener('click', function() {
            
            showMoreBtn.style.display = 'inline-block';
            showLessBtn.style.display = 'none';
            previewTexts.style.display = 'block';
            fullTexts.style.display = 'none'
        });
    });
    

});



