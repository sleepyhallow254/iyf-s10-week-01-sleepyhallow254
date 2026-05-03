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