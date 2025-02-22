// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector('i');
    
    answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
    icon.style.transform = answer.style.maxHeight ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

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
// Product Modal Handling
// JavaScript to handle product card clicks and modal display
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const product = {
            name: card.dataset.productName,
            price: card.dataset.productPrice,
            images: JSON.parse(card.dataset.productImages)
        };

        // Update modal content
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;

        // Set main image
        const mainImg = document.getElementById('mainProductImage');
        mainImg.src = product.images[0];

        // Create thumbnails
        const thumbnailContainer = document.querySelector('.thumbnail-container');
        thumbnailContainer.innerHTML = ''; // Clear previous thumbnails

        product.images.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.src = img;
            thumbnail.alt = `Thumbnail of ${product.name}`;
            thumbnail.onclick = () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                mainImg.src = img; // Change main image to the clicked thumbnail
            };
            thumbnailContainer.appendChild(thumbnail);
        });

        // Show the modal
        document.getElementById('productModal').style.display = 'block';
    });
});

// Close modal functionality
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('productModal').style.display = 'none';
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        document.getElementById('productModal').style.display = 'none';
    }
};

// WhatsApp Order Function
function sendWhatsAppOrder() {
    const product = document.getElementById('productTitle').textContent;
    const quantity = document.querySelector('input[type="number"]').value;
    const size = document.querySelector('select').value;
    const selectedImage = document.getElementById('mainProductImage').src;

    // Validate input before sending
    if (quantity < 1) {
        alert("Jumlah harus lebih dari 0.");
        return;
    }

    const message = `Halo D'craft Parcel, saya ingin memesan:
    
    Produk: ${product}
    Jumlah: ${quantity}
    Ukuran: ${size}
    Gambar: ${selectedImage}
    
    Mohon info lebih lanjut. Terima kasih!`;

    window.open(`https://wa.me/6285822012709?text=${encodeURIComponent(message)}`, '_blank');
}

// Add event listener to the button in the modal
document.querySelector('.whatsapp-order').addEventListener('click', sendWhatsAppOrder);

// TikTok Embed Handler
window.addEventListener('DOMContentLoaded', () => {
  const tiktokScript = document.createElement('script');
  tiktokScript.src = "https://www.tiktok.com/embed.js";
  document.body.appendChild(tiktokScript);
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');
  const scrolled = window.pageYOffset;
  parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
});