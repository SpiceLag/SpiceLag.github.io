let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(links => {
    links.addEventListener('click', () =>{
        document.querySelector('.active')?.classList.remove('active');
        links.classList.add('active');
    });
});