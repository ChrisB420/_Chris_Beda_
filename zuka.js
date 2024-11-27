let currentSlideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
    if (n > slides.length) { currentSlideIndex = 1 }
    if (n < 1) { currentSlideIndex = slides.length }
    
    const lightboxImg = document.getElementById("lightboxImg");
    lightboxImg.src = slides[currentSlideIndex - 1].src;
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
        return true; // Allow form submission
    }
    alert("Please fill in all fields.");
    return false; // Prevent form submission
}
// Lightbox functionality
let slideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    showSlide(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.gallery img');
    const lightboxImg = document.getElementById('lightboxImg');

    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    lightboxImg.src = slides[slideIndex - 1].src;
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }
    alert('Message sent successfully!');
    return true;
}function sendEmail(event) {
    event.preventDefault();  // Prevent the form from submitting traditionally
    
    const serviceID = 'YOUR_SERVICE_ID';  // Replace with your actual Service ID
    const templateID = 'YOUR_TEMPLATE_ID';  // Replace with your actual Template ID

    // Collect form data
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, params)
        .then(response => {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();  // Clear the form
        })
        .catch(error => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        });
}