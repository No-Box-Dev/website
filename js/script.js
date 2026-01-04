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

// How We Work - Scroll-based step highlighting
const stepItems = document.querySelectorAll('.step-item');
const howWeWorkSection = document.getElementById('how-we-work');

function updateActiveStep() {
    if (!howWeWorkSection || stepItems.length === 0) return;

    const sectionRect = howWeWorkSection.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionHeight = sectionRect.height;
    const windowHeight = window.innerHeight;

    // Only activate when section is in view
    if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
        return;
    }

    // Calculate which step should be active based on scroll position within the section
    const scrollProgress = Math.max(0, Math.min(1, (windowHeight / 2 - sectionTop) / sectionHeight));
    const activeIndex = Math.min(Math.floor(scrollProgress * stepItems.length), stepItems.length - 1);

    // Update active class
    stepItems.forEach((step, index) => {
        if (index === activeIndex) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Run on scroll and load
window.addEventListener('scroll', updateActiveStep);
window.addEventListener('load', updateActiveStep);

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
