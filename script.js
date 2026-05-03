// Simple JavaScript for interactivity

// Add a click event to the footer to show an alert
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (footer) {
        const button = document.createElement('button');
        button.textContent = 'Click Me!';
        button.style.marginLeft = '10px';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#333';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        footer.appendChild(button);

        button.addEventListener('click', function() {
            alert('Hello from JavaScript! Welcome to my portfolio.');
        });
    }
});

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not on the same page, navigate normally
            window.location.href = this.getAttribute('href');
        }
    });
});

// Add a simple animation to the hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    hero.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}