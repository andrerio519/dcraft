 // Hamburger Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
 });

 // Smooth Scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
         
         // Update active class
         document.querySelectorAll('.nav-links a').forEach(link => {
             link.classList.remove('active');
         });
         this.classList.add('active');
     });
 });

 // Active Section Detection
 const sections = document.querySelectorAll('section');
 const navLi = document.querySelectorAll('.nav-links a');

 window.addEventListener('scroll', () => {
     let current = '';
     sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (pageYOffset >= sectionTop - 300) {
             current = section.getAttribute('id');
         }
     });

     navLi.forEach(li => {
         li.classList.remove('active');
         if (li.getAttribute('href').includes(current)) {
             li.classList.add('active');
         }
     });
 });

// Script untuk FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle('active');
        item.querySelector('i').classList.toggle('fa-chevron-up');
    });
});

// Animasi scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.animate-fade-in').forEach(section => {
    observer.observe(section);
});