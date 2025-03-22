// Mobile menu functionality
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.featured-section, .articles-section, .tools-section, .newsletter-section').forEach((section) => {
    observer.observe(section);
});

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Validate email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically send the email to your server
    alert('Thank you for subscribing! You will receive our newsletter soon.');
    this.reset();
});

// Tool card interactions
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize tool buttons
document.querySelectorAll('.tool-button').forEach(button => {
    button.addEventListener('click', function() {
        const toolName = this.parentElement.querySelector('h3').textContent;
        alert(`Starting ${toolName}... This feature will be available soon!`);
    });
});