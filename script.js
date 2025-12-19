// ============================================
// SOLIS GREEN ENERGY - MAIN JAVASCRIPT FILE
// ============================================

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ====================
    // 1. INITIALIZE GTM
    // ====================
    window.dataLayer = window.dataLayer || [];
    
    // Track initial page view
    dataLayer.push({
        'event': 'page_view',
        'page_title': document.title,
        'page_path': window.location.pathname,
        'page_location': window.location.href,
        'page_type': getPageType(),
        'timestamp': new Date().toISOString()
    });
    
    // ====================
    // 2. PAGE LOADER
    // ====================
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        // Hide loader after page loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                pageLoader.style.opacity = '0';
                pageLoader.style.visibility = 'hidden';
                
                // Track page load time
                const perfData = window.performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                dataLayer.push({
                    'event': 'performance_metrics',
                    'page_load_time': loadTime,
                    'page_type': getPageType()
                });
                
            }, 500);
        });
        
        // Show loader on beforeunload
        window.addEventListener('beforeunload', function() {
            pageLoader.style.opacity = '1';
            pageLoader.style.visibility = 'visible';
        });
    }
    
    // ====================
    // 3. HEADER & NAVIGATION
    // ====================
    
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.setAttribute('aria-expanded', 'true');
            
            // Track mobile menu open
            dataLayer.push({
                'event': 'mobile_menu_interaction',
                'action': 'open',
                'menu_type': 'mobile'
            });
        });
        
        // Close mobile menu
        const closeMobileMenu = function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
        };
        
        // Close button
        if (mobileClose) {
            mobileClose.addEventListener('click', closeMobileMenu);
        }
        
        // Close on click outside
        document.addEventListener('click', function(event) {
            if (!mobileNav.contains(event.target) && 
                !mobileToggle.contains(event.target) && 
                mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Header scroll effect
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }
    
    // Active navigation highlighting
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check if this link corresponds to current page
        if (linkHref === currentPage || 
            (currentPage === '/' && linkHref === '/') ||
            (currentPage.includes(linkHref.replace('.html', '')) && linkHref !== '/')) {
            link.classList.add('active');
        }
        
        // Track navigation clicks
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.trim();
            const linkHref = this.getAttribute('href');
            
            dataLayer.push({
                'event': 'navigation_click',
                'link_text': linkText,
                'link_url': linkHref,
                'link_type': this.classList.contains('nav-cta') ? 'cta' : 'regular'
            });
        });
    });
    
    // ====================
    // 4. FORM HANDLING
    // ====================
    
    // Quote Form Validation and Submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        // Input validation
        const phoneInput = quoteForm.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = this.value.replace(/\D/g, '');
                if (value.length > 10) value = value.substring(0, 10);
                this.value = value;
            });
            
            phoneInput.addEventListener('blur', function() {
                if (this.value.length !== 10 && this.value.length > 0) {
                    showFormError(this, 'Please enter a valid 10-digit phone number');
                } else {
                    clearFormError(this);
                }
            });
        }
        
        // Form submission
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateQuoteForm(this)) {
                return;
            }
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // GTM Event for form submission
            dataLayer.push({
                'event': 'form_submission',
                'form_type': 'quote_request',
                'form_id': 'quoteForm',
                'service_type': data.service || '',
                'user_location': data.district || '',
                'form_timestamp': new Date().toISOString()
            });
            
            // Simulate API call (replace with actual FormSubmit.co or your backend)
            setTimeout(function() {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Thank you! Our solar expert will contact you within 30 minutes.', 'success');
                
                // Track successful submission
                dataLayer.push({
                    'event': 'lead_conversion',
                    'conversion_value': 1000,
                    'conversion_type': 'quote_request',
                    'lead_quality': 'high'
                });
                
                // Reset form
                quoteForm.reset();
                
                // Optionally redirect to thank you page
                // window.location.href = '/thank-you.html';
                
            }, 1500);
        });
    }
    
    // ====================
    // 5. ANIMATED COUNTERS
    // ====================
    const counters = document.querySelectorAll('.stat-number, .number[data-count]');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    const suffix = counter.textContent.includes('%') ? '%' : 
                                  counter.textContent.includes('+') ? '+' : '';
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                            
                            // Track stats view
                            dataLayer.push({
                                'event': 'stats_section_view',
                                'section': 'hero_stats',
                                'stats_counted': true
                            });
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
        
        counters.forEach(counter => observer.observe(counter));
    }
    
    // ====================
    // 6. COUNTDOWN TIMER
    // ====================
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Set offer end time (24 hours from now)
        const offerEndTime = new Date();
        offerEndTime.setHours(offerEndTime.getHours() + 24);
        
        function updateCountdown() {
            const now = new Date();
            const timeLeft = offerEndTime - now;
            
            if (timeLeft <= 0) {
                countdownElement.textContent = 'Offer Expired';
                clearInterval(countdownInterval);
                return;
            }
            
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            countdownElement.textContent = 
                `${hours.toString().padStart(2, '0')}:` +
                `${minutes.toString().padStart(2, '0')}:` +
                `${seconds.toString().padStart(2, '0')}`;
        }
        
        // Update every second
        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }
    
    // ====================
    // 7. BACK TO TOP BUTTON
    // ====================
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        // Show/hide button based on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Track back to top click
            dataLayer.push({
                'event': 'back_to_top_click',
                'scroll_position': window.scrollY
            });
        });
    }
    
    // ====================
    // 8. FLOATING CTA
    // ====================
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        // Track floating CTA interactions
        floatingCta.addEventListener('click', function(e) {
            if (e.target.closest('.floating-btn')) {
                const btn = e.target.closest('.floating-btn');
                const btnType = btn.classList.contains('floating-phone') ? 'phone' :
                              btn.classList.contains('floating-whatsapp') ? 'whatsapp' :
                              btn.classList.contains('floating-quote') ? 'quote' : 'unknown';
                
                dataLayer.push({
                    'event': 'floating_cta_click',
                    'cta_type': btnType,
                    'cta_position': 'floating'
                });
            }
        });
    }
    
    // ====================
    // 9. TESTIMONIAL SLIDER
    // ====================
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        // Manual controls
        const prevBtn = testimonialSlider.querySelector('.testimonial-prev');
        const nextBtn = testimonialSlider.querySelector('.testimonial-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentTestimonial);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            });
        }
    }
    
    // ====================
    // 10. SERVICE CARDS HOVER EFFECTS
    // ====================
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
        
        // Track service card clicks
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            const serviceName = this.querySelector('h3')?.textContent || 'Unknown Service';
            const serviceLink = this.querySelector('a')?.getAttribute('href');
            
            dataLayer.push({
                'event': 'service_card_click',
                'service_name': serviceName.trim(),
                'service_link': serviceLink || ''
            });
        });
    });
    
    // ====================
    // 11. TRACK ALL PHONE CALLS
    // ====================
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const phoneNumber = this.href.replace('tel:', '');
            const callLocation = this.closest('.hero-cta') ? 'hero' :
                               this.closest('.header-contact') ? 'header' :
                               this.closest('.emergency-notice') ? 'emergency' :
                               this.closest('.floating-cta') ? 'floating' :
                               this.closest('.quote-benefits') ? 'quote_section' : 'other';
            
            dataLayer.push({
                'event': 'phone_call_attempt',
                'phone_number': phoneNumber,
                'call_location': callLocation,
                'call_timestamp': new Date().toISOString()
            });
            
            // Track conversion after a short delay (assuming call was made)
            setTimeout(() => {
                dataLayer.push({
                    'event': 'phone_call_conversion',
                    'conversion_value': 5000,
                    'phone_number': phoneNumber
                });
            }, 3000);
        });
    });
    
    // ====================
    // 12. TRACK WHATSAPP CLICKS
    // ====================
    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const whatsappNumber = this.href.match(/wa\.me\/(\d+)/)?.[1] || 'unknown';
            const clickSource = this.textContent.trim() || 'WhatsApp Button';
            
            dataLayer.push({
                'event': 'whatsapp_click',
                'whatsapp_number': whatsappNumber,
                'click_source': clickSource,
                'click_location': getElementLocation(this)
            });
        });
    });
    
    // ====================
    // 13. SCROLL DEPTH TRACKING
    // ====================
    let scrollDepthTracked = {
        25: false,
        50: false,
        75: false,
        90: false
    };
    
    window.addEventListener('scroll', debounce(function() {
        const scrollPercentage = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        Object.keys(scrollDepthTracked).forEach(depth => {
            if (scrollPercentage >= parseInt(depth) && !scrollDepthTracked[depth]) {
                dataLayer.push({
                    'event': 'scroll_depth',
                    'scroll_percentage': depth,
                    'page_type': getPageType()
                });
                scrollDepthTracked[depth] = true;
            }
        });
    }, 250));
    
    // ====================
    // 14. TRACK OUTBOUND LINKS
    // ====================
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.href) {
            const link = e.target;
            if (link.hostname !== window.location.hostname && 
                !link.href.startsWith('tel:') && 
                !link.href.includes('whatsapp')) {
                
                dataLayer.push({
                    'event': 'outbound_link_click',
                    'link_url': link.href,
                    'link_text': link.textContent.trim(),
                    'link_hostname': link.hostname
                });
            }
        }
    });
    
    // ====================
    // 15. ERROR TRACKING
    // ====================
    window.addEventListener('error', function(e) {
        dataLayer.push({
            'event': 'javascript_error',
            'error_message': e.message,
            'error_url': e.filename,
            'error_line': e.lineno,
            'error_column': e.colno,
            'page_url': window.location.href
        });
    });
    
    // ====================
    // 16. OFFLINE/ONLINE DETECTION
    // ====================
    window.addEventListener('online', function() {
        showNotification('You are back online', 'info');
        dataLayer.push({
            'event': 'connection_status',
            'status': 'online'
        });
    });
    
    window.addEventListener('offline', function() {
        showNotification('You are currently offline. Some features may not work.', 'warning');
        dataLayer.push({
            'event': 'connection_status',
            'status': 'offline'
        });
    });
    
    // ====================
    // 17. COOKIE CONSENT (Basic)
    // ====================
    if (!localStorage.getItem('cookies_accepted')) {
        setTimeout(() => {
            showCookieConsent();
        }, 2000);
    }
    
    // ====================
    // 18. LAZY LOAD IMAGES
    // ====================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
    
    // ====================
    // 19. PRINT FUNCTIONALITY
    // ====================
    const printButtons = document.querySelectorAll('.print-btn');
    printButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            window.print();
            dataLayer.push({
                'event': 'print_page',
                'page_title': document.title
            });
        });
    });
    
    // ====================
    // 20. COPY CONTACT INFO
    // ====================
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy') || 
                              this.previousElementSibling?.textContent;
            
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showNotification('Copied to clipboard!', 'success');
                    
                    dataLayer.push({
                        'event': 'copy_to_clipboard',
                        'copied_text': textToCopy,
                        'element_type': 'contact_info'
                    });
                });
            }
        });
    });
    
    // ====================
    // 21. INITIALIZATION COMPLETE
    // ====================
    console.log('Solis Green Energy website initialized successfully');
    
    // Track initialization
    dataLayer.push({
        'event': 'website_initialized',
        'initialization_time': Date.now(),
        'page_ready': true
    });
    
});

// ====================
// HELPER FUNCTIONS
// ====================

// Get current page type
function getPageType() {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('projects')) return 'projects';
    if (path.includes('contact')) return 'contact';
    if (path.includes('areas')) return 'areas';
    return 'other';
}

// Get element location in page
function getElementLocation(element) {
    if (element.closest('.hero')) return 'hero';
    if (element.closest('.header')) return 'header';
    if (element.closest('.footer')) return 'footer';
    if (element.closest('.quick-quote')) return 'quote_section';
    if (element.closest('.services-overview')) return 'services';
    if (element.closest('.testimonials')) return 'testimonials';
    return 'other';
}

// Form validation
function validateQuoteForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFormError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'tel' && field.value.length !== 10) {
            showFormError(field, 'Please enter a valid 10-digit phone number');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showFormError(field, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearFormError(field);
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show form error
function showFormError(field, message) {
    clearFormError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#dc3545';
    
    // Focus on the field
    field.focus();
}

// Clear form error
function clearFormError(field) {
    const existingError = field.parentNode.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    if (type === 'error') icon = 'times-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 9999;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                max-width: 400px;
                animation: slideIn 0.3s ease forwards;
            }
            
            @keyframes slideIn {
                from { transform: translateX(120%); }
                to { transform: translateX(0); }
            }
            
            .notification-info { border-left: 4px solid #2196F3; }
            .notification-success { border-left: 4px solid #4CAF50; }
            .notification-warning { border-left: 4px solid #FF9800; }
            .notification-error { border-left: 4px solid #F44336; }
            
            .notification i:first-child {
                font-size: 1.25rem;
            }
            
            .notification-info i:first-child { color: #2196F3; }
            .notification-success i:first-child { color: #4CAF50; }
            .notification-warning i:first-child { color: #FF9800; }
            .notification-error i:first-child { color: #F44336; }
            
            .notification span {
                flex: 1;
                font-size: 0.875rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                padding: 0.25rem;
                font-size: 0.875rem;
            }
            
            .notification-close:hover {
                color: #333;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
}

// Cookie consent
function showCookieConsent() {
    const consentHTML = `
        <div class="cookie-consent">
            <div class="cookie-content">
                <p>
                    We use cookies to enhance your experience. By continuing to visit this site, 
                    you agree to our use of cookies.
                    <a href="/privacy.html">Learn more</a>
                </p>
                <div class="cookie-buttons">
                    <button class="btn btn-sm btn-primary" id="acceptCookies">
                        Accept All
                    </button>
                    <button class="btn btn-sm btn-outline" id="rejectCookies">
                        Reject
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const consentDiv = document.createElement('div');
    consentDiv.innerHTML = consentHTML;
    document.body.appendChild(consentDiv);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .cookie-consent {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 1rem;
            z-index: 9998;
        }
        
        .cookie-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .cookie-content p {
            margin: 0;
            flex: 1;
        }
        
        .cookie-content a {
            color: #4CAF50;
            text-decoration: underline;
        }
        
        .cookie-buttons {
            display: flex;
            gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .cookie-content {
                flex-direction: column;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Handle accept
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookies_accepted', 'true');
        consentDiv.remove();
        
        dataLayer.push({
            'event': 'cookie_consent',
            'consent_type': 'accepted_all'
        });
    });
    
    // Handle reject
    document.getElementById('rejectCookies').addEventListener('click', function() {
        localStorage.setItem('cookies_accepted', 'false');
        consentDiv.remove();
        
        dataLayer.push({
            'event': 'cookie_consent',
            'consent_type': 'rejected'
        });
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ====================
// GLOBAL FUNCTIONS
// ====================

// Make some functions globally available
window.smoothScrollTo = smoothScrollTo;
window.formatPhoneNumber = formatPhoneNumber;
window.showNotification = showNotification;

// Service Worker Registration (Progressive Web App)
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
            dataLayer.push({
                'event': 'service_worker_registered',
                'scope': registration.scope
            });
        }).catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// ====================
// PERFORMANCE MONITORING
// ====================

// Monitor long tasks
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) { // 50ms threshold
                dataLayer.push({
                    'event': 'long_task_detected',
                    'task_duration': entry.duration,
                    'task_name': entry.name
                });
            }
        }
    });
    
    observer.observe({ entryTypes: ['longtask'] });
}

// Monitor largest contentful paint
if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        dataLayer.push({
            'event': 'lcp_measurement',
            'lcp_value': lastEntry.startTime,
            'lcp_element': lastEntry.element?.tagName || 'unknown'
        });
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
}
