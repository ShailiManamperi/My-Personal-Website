//====================toggale icon navbar ===============//

let menuicon = document.querySelector('#menu-icon');
let navbr = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbr.classList.toggle('active');
}

//==================== scroll sections active link===============//

let sections = document.querySelectorAll('section');
let navliks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navliks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)

//====================remove toggle icon and navbar when click navbar link(scroll) ===============//
    menuicon.classList.remove('bx-x');
    navbr.classList.remove('active');
};

//==================== scroll reveal ===============//
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .qulification-container, .card-container, .contact form, .assignment-container, .contact-right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//==================== typed js ===============//

const typed = new Typed('.multiple-text',{
    strings : ['Back-end Developer','Blogger','Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
});

//====================swiper object=========//


