// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop();
    
    // Default to index.html if no path
    const activePage = currentPath || 'index.html';
    
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class to current page link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Enhance visualization responsiveness
    const visualizationIframes = document.querySelectorAll('.visualization-iframe');
    visualizationIframes.forEach(iframe => {
        // This helps to resize the iframe content when the parent container changes size
        window.addEventListener('resize', function() {
            // Trigger a refresh on resize
            iframe.src = iframe.src;
        });
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to handle iframe resizing for visualizations
function resizeIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}