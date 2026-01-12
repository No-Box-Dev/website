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

// Mobile dropdown toggle
const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
const mobileNavDropdown = document.querySelector('.mobile-nav-dropdown');

if (mobileDropdownToggle && mobileNavDropdown) {
    mobileDropdownToggle.addEventListener('click', () => {
        mobileNavDropdown.classList.toggle('active');
    });

    // Close mobile menu when clicking a dropdown link
    mobileNavDropdown.querySelectorAll('.mobile-dropdown-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileNavDropdown.classList.remove('active');
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

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    // Gibberish detection functions
    function hasRepeatedChars(str, threshold = 4) {
        return /(.)\1{3,}/i.test(str);
    }

    function hasKeyboardMashing(str) {
        const patterns = ['asdf', 'qwer', 'zxcv', 'hjkl', 'uiop', 'fghj', 'bnm,', '1234', 'abcd'];
        const lower = str.toLowerCase();
        return patterns.some(p => lower.includes(p));
    }

    function hasTooManyConsonants(str) {
        return /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(str);
    }

    function hasRandomCharPattern(str) {
        // Check for random special char patterns
        const specialCount = (str.match(/[^a-zA-Z0-9\s.,!?'-]/g) || []).length;
        return specialCount > str.length * 0.3;
    }

    function countWords(str) {
        return str.trim().split(/\s+/).filter(w => w.length > 1).length;
    }

    function isGibberish(str) {
        if (!str || str.length < 3) return true;
        if (hasRepeatedChars(str)) return true;
        if (hasKeyboardMashing(str)) return true;
        if (hasTooManyConsonants(str)) return true;
        if (hasRandomCharPattern(str)) return true;
        return false;
    }

    function validateName(name) {
        if (!name || name.length < 2) return false;
        if (isGibberish(name)) return false;
        // Name should mostly be letters and spaces
        const letterCount = (name.match(/[a-zA-Z]/g) || []).length;
        return letterCount >= name.replace(/\s/g, '').length * 0.7;
    }

    function validateMessage(message) {
        if (!message || message.length < 20) return false;
        if (countWords(message) < 3) return false;
        if (isGibberish(message)) return false;
        return true;
    }

    contactForm.addEventListener('submit', function(e) {
        const nameInput = this.querySelector('#name');
        const emailInput = this.querySelector('#email');
        const messageInput = this.querySelector('#message');
        const submitBtn = this.querySelector('button[type="submit"]');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Validate name
        if (!validateName(name)) {
            e.preventDefault();
            alert('Please enter a valid name.');
            nameInput.focus();
            return false;
        }

        // Validate message
        if (!validateMessage(message)) {
            e.preventDefault();
            alert('Please enter a meaningful message (at least 20 characters and 3 words).');
            messageInput.focus();
            return false;
        }

        // All good - show sending state
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
