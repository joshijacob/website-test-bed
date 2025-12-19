// ===== COMMON JAVASCRIPT FOR SOLIS GREEN INDIA WEBSITE =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
            
            // Toggle hamburger icon
            const icon = this.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when clicking on a nav link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger icon
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mainNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger icon
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== FLOATING CTA TOGGLE =====
    const floatingCta = document.getElementById('floatingCta');
    const ctaMainBtn = document.getElementById('ctaMainBtn');
    
    if (ctaMainBtn && floatingCta) {
        ctaMainBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            floatingCta.classList.toggle('active');
        });
        
        // Close floating CTA when clicking outside
        document.addEventListener('click', function(event) {
            if (!floatingCta.contains(event.target)) {
                floatingCta.classList.remove('active');
            }
        });
        
        // Prevent closing when clicking inside CTA
        floatingCta.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // ===== MODAL FUNCTIONALITY =====
    const quickFormBtn = document.getElementById('quickFormBtn');
    const quickQuoteModal = document.getElementById('quickQuoteModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (quickFormBtn && quickQuoteModal) {
        quickFormBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            quickQuoteModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    if (closeModal && quickQuoteModal) {
        closeModal.addEventListener('click', function() {
            quickQuoteModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    if (quickQuoteModal) {
        window.addEventListener('click', function(event) {
            if (event.target === quickQuoteModal) {
                quickQuoteModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && quickQuoteModal.classList.contains('active')) {
                quickQuoteModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }
    
    // ===== FORM SUBMISSION HANDLING =====
    const mainQuoteForm = document.getElementById('mainQuoteForm');
    const modalQuoteForm = document.getElementById('modalQuoteForm');
    const contactPageForm = document.getElementById('contactPageForm');
    
    function handleFormSubmission(form, formName) {
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.phone) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate API call (replace with actual fetch/axios call)
            setTimeout(() => {
                // In production, replace this with actual API call
                // Example: fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(data) })
                
                // Reset form
                form.reset();
                
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification(`Thank you for your ${formName} request! Our team will contact you shortly at ${data.phone}.`, 'success');
                
                // Close modal if applicable
                if (formName === 'modal' && quickQuoteModal) {
                    quickQuoteModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }, 1500);
        });
    }
    
    // Initialize form handlers
    if (mainQuoteForm) handleFormSubmission(mainQuoteForm, 'quote');
    if (modalQuoteForm) handleFormSubmission(modalQuoteForm, 'modal');
    if (contactPageForm) handleFormSubmission(contactPageForm, 'contact');
    
    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Close notification on button click
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
        }
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Add notification styles dynamically
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            padding: 15px 20px;
            z-index: 9999;
            transform: translateX(150%);
            transition: transform 0.3s ease;
            max-width: 400px;
            border-left: 4px solid #0b8a3a;
        }
        
        .notification-error {
            border-left-color: #ff6b00;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-content i {
            font-size: 20px;
            color: #0b8a3a;
        }
        
        .notification-error .notification-content i {
            color: #ff6b00;
        }
        
        .notification-content span {
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 0;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-close:hover {
            color: #333;
        }
        
        @media (max-width: 576px) {
            .notification {
                left: 20px;
                right: 20px;
                max-width: none;
                transform: translateY(-150%);
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(notificationStyles);
    
    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process internal anchor links
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (mainNav && mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        if (mobileMenuBtn) {
                            mobileMenuBtn.setAttribute('aria-expanded', 'false');
                            const icon = mobileMenuBtn.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-times');
                                icon.classList.add('fa-bars');
                            }
                        }
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === '/' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Set active nav link on page load
    setActiveNavLink();
    
    // ===== PHONE NUMBER FORMATTING =====
    function formatPhoneNumber(phone) {
        // Remove all non-digit characters
        const cleaned = ('' + phone).replace(/\D/g, '');
        
        // Check if the number is Indian (starts with 91 or +91)
        if (cleaned.length === 10) {
            return cleaned.replace(/(\d{5})(\d{5})/, '$1 $2');
        } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
            return '+91 ' + cleaned.substring(2, 7) + ' ' + cleaned.substring(7);
        } else if (cleaned.length === 13 && cleaned.startsWith('919')) {
            return '+91 ' + cleaned.substring(3, 8) + ' ' + cleaned.substring(8);
        }
        
        return phone;
    }
    
    // Format phone numbers on page
    document.querySelectorAll('.phone-number').forEach(element => {
        const originalText = element.textContent;
        const formatted = formatPhoneNumber(originalText);
        if (formatted !== originalText) {
            element.textContent = formatted;
        }
    });
    
    // ===== COUNTER ANIMATION (for stats on About page) =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    // Initialize counters when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElement = entry.target;
                const target = parseInt(counterElement.getAttribute('data-count') || '0');
                animateCounter(counterElement, target);
                observer.unobserve(counterElement);
            }
        });
    }, observerOptions);
    
    // Observe all counter elements
    document.querySelectorAll('.counter').forEach(counter => {
        observer.observe(counter);
    });
    
    // ===== TESTIMONIAL SLIDER =====
    function initTestimonialSlider() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (!testimonialSlider) return;
        
        const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
        const dots = testimonialSlider.querySelectorAll('.testimonial-dot');
        const prevBtn = testimonialSlider.querySelector('.testimonial-prev');
        const nextBtn = testimonialSlider.querySelector('.testimonial-next');
        
        let currentSlide = 0;
        
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show current slide and activate corresponding dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        // Next slide function
        function nextSlide() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            showSlide(nextIndex);
        }
        
        // Previous slide function
        function prevSlide() {
            let prevIndex = currentSlide - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            showSlide(prevIndex);
        }
        
        // Event listeners for buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto slide every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-slide on hover
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Initialize first slide
        showSlide(0);
    }
    
    // Initialize testimonial slider if it exists
    initTestimonialSlider();
    
    // ===== LAZY LOADING FOR IMAGES =====
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
            });
        }
    }
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // ===== CURRENT YEAR IN FOOTER =====
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // ===== INITIALIZE TOOLTIPS =====
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                const tooltipText = this.getAttribute('data-tooltip');
                const tooltip = document.createElement('div');
                tooltip.className = 'custom-tooltip';
                tooltip.textContent = tooltipText;
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.position = 'fixed';
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
                tooltip.style.opacity = '1';
                
                this._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.remove();
                    this._tooltip = null;
                }
            });
        });
        
        // Add tooltip styles
        const tooltipStyles = document.createElement('style');
        tooltipStyles.textContent = `
            .custom-tooltip {
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 10000;
                pointer-events: none;
                transition: opacity 0.2s;
                opacity: 0;
            }
            
            .custom-tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
            }
        `;
        document.head.appendChild(tooltipStyles);
    }
    
    // Initialize tooltips
    initTooltips();
    
    // ===== GOOGLE MAPS INITIALIZATION =====
    function initGoogleMaps() {
        const mapElement = document.getElementById('googleMap');
        if (!mapElement) return;
        
        // This would be replaced with actual Google Maps API initialization
        // For now, we'll just ensure the iframe is responsive
        
        // Make iframe responsive
        const mapIframe = mapElement.querySelector('iframe');
        if (mapIframe) {
            mapIframe.style.width = '100%';
            mapIframe.style.height = '450px';
            mapIframe.setAttribute('loading', 'lazy');
        }
    }
    
    // Initialize Google Maps
    initGoogleMaps();
    
    // ===== PULSE ANIMATION FOR IMPORTANT CTAs =====
    function addPulseAnimation() {
        const pulseElements = document.querySelectorAll('.pulse-animation');
        
        pulseElements.forEach(element => {
            // Add pulsing effect
            setInterval(() => {
                element.classList.add('pulse');
                setTimeout(() => {
                    element.classList.remove('pulse');
                }, 1000);
            }, 3000);
            
            // Add CSS for pulse animation
            const pulseStyle = document.createElement('style');
            if (!document.querySelector('#pulse-animation-style')) {
                pulseStyle.id = 'pulse-animation-style';
                pulseStyle.textContent = `
                    .pulse {
                        animation: pulse 1s ease-in-out;
                    }
                    
                    @keyframes pulse {
                        0% { box-shadow: 0 0 0 0 rgba(11, 138, 58, 0.7); }
                        70% { box-shadow: 0 0 0 10px rgba(11, 138, 58, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(11, 138, 58, 0); }
                    }
                `;
                document.head.appendChild(pulseStyle);
            }
        });
    }
    
    // Add pulse animation
    addPulseAnimation();
    
    // ===== PAGE LOAD ANIMATIONS =====
    function initPageAnimations() {
        // Add fade-in animation to main content
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Animate elements when they come into view
        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            animateOnScroll.observe(el);
        });
    }
    
    // Initialize page animations
    initPageAnimations();
    
});

// ===== WINDOW LOAD EVENT =====
window.addEventListener('load', function() {
    // Remove preloader if exists
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
    
    // Initialize any libraries or plugins here
    console.log('Solis Green India website loaded successfully');
});
