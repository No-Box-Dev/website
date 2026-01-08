/**
 * NoBoxDev Website JavaScript
 */

// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Coming Soon overlay for case study cards
const caseStudyCards = document.querySelectorAll('.case-study-card[data-coming-soon]');

caseStudyCards.forEach(card => {
    const linkWrapper = card.querySelector('.case-study-link-wrapper');
    const link = card.querySelector('.case-study-link');
    const overlay = card.querySelector('.coming-soon-overlay');

    if (link && overlay && linkWrapper) {
        // Show overlay when clicking the case study link
        link.addEventListener('click', (e) => {
            e.preventDefault();
            card.classList.add('show-coming-soon');
        });

        // Hide overlay when clicking on it
        overlay.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('show-coming-soon');
        });
    }
});


// How We Work - Accordion functionality
const stepHeaders = document.querySelectorAll('.step-header');

stepHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const stepItem = header.parentElement;
        const isExpanded = stepItem.classList.contains('expanded');

        // Close all other items
        document.querySelectorAll('.step-item').forEach(item => {
            item.classList.remove('expanded');
        });

        // Toggle current item
        if (!isExpanded) {
            stepItem.classList.add('expanded');
        }
    });
});

// FAQ - Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isExpanded = faqItem.classList.contains('expanded');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('expanded');
        });

        // Toggle current item
        if (!isExpanded) {
            faqItem.classList.add('expanded');
        }
    });
});

// Form submission feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .case-study-card').forEach(el => {
    observer.observe(el);
});
