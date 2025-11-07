// Function to handle the scroll-based animation (smooth fade-in)
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should be animated
    const animatedSections = document.querySelectorAll('.animated-section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, 
        // Trigger the animation when the element is 100px from the bottom of the viewport
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.1 
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is currently intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Stop observing the element once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply the observer to all selected elements
    animatedSections.forEach(section => {
        // Add a slight delay based on the element's position for staggered animation flow
        const index = Array.from(animatedSections).indexOf(section);
        section.style.transitionDelay = `${index * 0.1}s`;

        observer.observe(section);
    });
});