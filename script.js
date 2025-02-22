 // Hamburger Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
 });

// Modal Handler
const modal = document.getElementById('productModal');
const spans = document.getElementsByClassName("close")[0];

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        document.getElementById('productTitle').innerText = title;
        modal.style.display = "block";
    });
});

spans.onclick = () => modal.style.display = "none";

// Back to Top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// WhatsApp Order
function sendWhatsAppOrder() {
    const product = document.getElementById('productTitle').innerText;
    const jumlah = document.querySelector('#orderForm input').value;
    const ukuran = document.querySelector('#orderForm select').value;
    
    const message = `Halo D'craft, saya ingin memesan:
Produk: ${product}
Jumlah: ${jumlah}
Ukuran: ${ukuran}
Alamat pengiriman: [isi alamat lengkap]`;
    
    window.open(`https://wa.me/6285822012709?text=${encodeURIComponent(message)}`, '_blank');
}

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