/* ============================================
   SOLIS GREEN ENERGY - COMPLETE CSS
   Modern, Professional, Solar-Themed Design
   ============================================ */

/* ===== CSS VARIABLES ===== */
:root {
    /* Primary Colors - Green Energy Theme */
    --primary: #0B8A3A;        /* Professional Green */
    --primary-dark: #086830;   /* Dark Green */
    --primary-light: #10B454;  /* Light Green */
    --primary-rgb: 11, 138, 58;/* RGB for transparency */
    
    /* Secondary Colors - Energy & Action */
    --secondary: #FF6B00;      /* Energy Orange */
    --secondary-dark: #E55A00; /* Dark Orange */
    --secondary-light: #FF8B33;/* Light Orange */
    
    /* Accent Colors */
    --accent-blue: #0077B6;    /* Trust Blue */
    --accent-yellow: #FFC107;  /* Warning/Sun Yellow */
    --accent-red: #DC3545;     /* Emergency Red */
    
    /* Neutral Colors */
    --white: #FFFFFF;
    --light-100: #F8F9FA;
    --light-200: #E9ECEF;
    --light-300: #DEE2E6;
    --gray-400: #6C757D;
    --gray-600: #495057;
    --gray-800: #343A40;
    --dark: #212529;
    --black: #000000;
    
    /* Gradients */
    --gradient-green: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    --gradient-orange: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%);
    --gradient-sun: linear-gradient(135deg, #FFC107 0%, #FF9800 100%);
    --gradient-hero: linear-gradient(135deg, rgba(11, 138, 58, 0.1) 0%, rgba(255, 107, 0, 0.08) 100%);
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
    --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 300ms ease;
    --transition-slow: 500ms ease;
    --transition-bounce: 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Typography */
    --font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-secondary: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    
    /* Layout */
    --header-height: 80px;
    --header-height-mobile: 70px;
    --container-max: 1200px;
    --container-padding: 1.5rem;
}

/* ===== RESET & BASE STYLES ===== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
}

body {
    font-family: var(--font-primary);
    line-height: 1.6;
    color: var(--dark);
    background-color: var(--white);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-md);
    color: var(--dark);
}

h1 {
    font-size: 3.5rem;
    line-height: 1.1;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 1.75rem;
}

h4 {
    font-size: 1.5rem;
}

h5 {
    font-size: 1.25rem;
}

h6 {
    font-size: 1rem;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
    
    h2 {
        font-size: 2rem;
    }
    
    h3 {
        font-size: 1.5rem;
    }
}

p {
    margin-bottom: var(--space-md);
    color: var(--gray-600);
}

.lead {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.7;
}

/* ===== LAYOUT UTILITIES ===== */
.container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

.section {
    padding: var(--space-3xl) 0;
}

.section-light {
    background-color: var(--light-100);
}

.section-dark {
    background-color: var(--dark);
    color: var(--white);
}

.section-dark h2,
.section-dark h3,
.section-dark p {
    color: var(--white);
}

.text-center {
    text-align: center;
}

.mt-0 { margin-top: 0 !important; }
.mt-1 { margin-top: var(--space-xs) !important; }
.mt-2 { margin-top: var(--space-sm) !important; }
.mt-3 { margin-top: var(--space-md) !important; }
.mt-4 { margin-top: var(--space-lg) !important; }
.mt-5 { margin-top: var(--space-xl) !important; }

.mb-0 { margin-bottom: 0 !important; }
.mb-1 { margin-bottom: var(--space-xs) !important; }
.mb-2 { margin-bottom: var(--space-sm) !important; }
.mb-3 { margin-bottom: var(--space-md) !important; }
.mb-4 { margin-bottom: var(--space-lg) !important; }
.mb-5 { margin-bottom: var(--space-xl) !important; }

/* ===== BUTTONS ===== */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: 0.875rem 1.75rem;
    font-family: var(--font-secondary);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left var(--transition-normal);
    z-index: -1;
}

.btn:hover::before {
    left: 100%;
}

.btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.25);
}

/* Button Sizes */
.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.btn-lg {
    padding: 1rem 2rem;
    font-size: 1.125rem;
}

.btn-xl {
    padding: 1.25rem 2.5rem;
    font-size: 1.25rem;
}

.btn-block {
    display: block;
    width: 100%;
}

/* Button Variants */
.btn-primary {
    background: var(--gradient-green);
    color: var(--white);
    border-color: transparent;
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: var(--gradient-orange);
    color: var(--white);
    border-color: transparent;
}

.btn-secondary:hover {
    background: linear-gradient(135deg, var(--secondary-dark) 0%, var(--secondary) 100%);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-outline {
    background: transparent;
    color: var(--primary);
    border-color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-light {
    background: var(--white);
    color: var(--primary);
    border-color: var(--white);
}

.btn-light:hover {
    background: var(--light-100);
    color: var(--primary-dark);
    transform: translateY(-2px);
}

/* Special Buttons */
.btn-whatsapp {
    background: #25D366;
    color: var(--white);
    border-color: #25D366;
}

.btn-whatsapp:hover {
    background: #128C7E;
    border-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-warning {
    background: var(--accent-yellow);
    color: var(--dark);
    border-color: var(--accent-yellow);
}

.btn-warning:hover {
    background: #FF9800;
    color: var(--white);
    transform: translateY(-2px);
}

.btn-support {
    background: var(--accent-blue);
    color: var(--white);
    border-color: var(--accent-blue);
}

.btn-support:hover {
    background: #0056A3;
    transform: translateY(-2px);
}

/* Button States */
.btn:disabled,
.btn.disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none !important;
}

/* ===== HEADER ===== */
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
    z-index: 1000;
    transition: all var(--transition-normal);
}

.main-header.scrolled {
    height: var(--header-height-mobile);
    box-shadow: var(--shadow-lg);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    transition: transform var(--transition-normal);
}

.logo:hover {
    transform: scale(1.05);
}

.logo-icon {
    font-size: 2rem;
    color: var(--primary);
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.logo-main {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    letter-spacing: -0.5px;
}

.logo-sub {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--gray-400);
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

/* Desktop Navigation */
.main-nav {
    display: flex;
    align-items: center;
}

.nav-list {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    font-weight: 500;
    color: var(--gray-600);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    position: relative;
}

.nav-link:hover {
    color: var(--primary);
    background-color: rgba(var(--primary-rgb), 0.05);
}

.nav-link.active {
    color: var(--primary);
    background-color: rgba(var(--primary-rgb), 0.1);
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: var(--primary);
    border-radius: 50%;
}

.nav-cta {
    background: var(--gradient-green);
    color: var(--white) !important;
    padding: 0.75rem 1.5rem;
}

.nav-cta:hover {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

/* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all var(--transition-normal);
    z-index: 100;
    padding: var(--space-sm) 0;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    color: var(--gray-600);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.dropdown-item:hover {
    background-color: var(--light-100);
    color: var(--primary);
    padding-left: calc(var(--space-lg) + 4px);
}

.dropdown-item .badge {
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    background: var(--primary);
    color: var(--white);
    border-radius: var(--radius-full);
}

/* Header Contact */
.header-contact {
    margin-left: var(--space-lg);
}

.phone-cta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: var(--gradient-green);
    color: var(--white);
    text-decoration: none;
    border-radius: var(--radius-lg);
    transition: all var(--transition-normal);
}

.phone-cta:hover {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.phone-cta i {
    font-size: 1.25rem;
}

.phone-cta div {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.phone-cta span {
    font-size: 0.75rem;
    opacity: 0.9;
}

.phone-cta strong {
    font-size: 1rem;
    font-weight: 700;
}

/* Mobile Toggle */
.mobile-toggle {
    display: none;
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    z-index: 1001;
}

.mobile-toggle span {
    display: block;
    width: 100%;
    height: 3px;
    background: var(--primary);
    border-radius: var(--radius-full);
    position: absolute;
    left: 0;
    transition: all var(--transition-normal);
}

.mobile-toggle span:nth-child(1) {
    top: 6px;
}

.mobile-toggle span:nth-child(2) {
    top: 13px;
}

.mobile-toggle span:nth-child(3) {
    top: 20px;
}

.mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
}

.mobile-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
}

/* Mobile Navigation */
.mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background: var(--white);
    box-shadow: var(--shadow-xl);
    z-index: 1000;
    transition: right var(--transition-normal);
    overflow-y: auto;
}

.mobile-nav.active {
    right: 0;
}

.mobile-nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-lg);
    border-bottom: 1px solid var(--light-200);
}

.mobile-logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
}

.mobile-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--gray-600);
    cursor: pointer;
    transition: color var(--transition-fast);
}

.mobile-close:hover {
    color: var(--primary);
}

.mobile-nav-content {
    padding: var(--space-xl);
}

.mobile-nav-content ul {
    list-style: none;
    margin-bottom: var(--space-xl);
}

.mobile-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) 0;
    font-weight: 500;
    color: var(--gray-600);
    text-decoration: none;
    border-bottom: 1px solid var(--light-200);
    transition: all var(--transition-fast);
}

.mobile-link:last-child {
    border-bottom: none;
}

.mobile-link:hover,
.mobile-link.active {
    color: var(--primary);
    padding-left: var(--space-sm);
}

.mobile-dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--space-md) 0;
    background: none;
    border: none;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray-600);
    cursor: pointer;
    border-bottom: 1px solid var(--light-200);
    transition: color var(--transition-fast);
}

.mobile-dropdown-btn:hover {
    color: var(--primary);
}

.mobile-dropdown-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-normal);
}

.mobile-dropdown-content.active {
    max-height: 300px;
}

.mobile-dropdown-content a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) 0 var(--space-sm) var(--space-lg);
    color: var(--gray-500);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.mobile-dropdown-content a:hover {
    color: var(--primary);
    padding-left: calc(var(--space-lg) + 4px);
}

.mobile-contact {
    margin-top: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

/* ===== HERO SECTION ===== */
.hero {
    position: relative;
    min-height: 100vh;
    padding-top: var(--header-height);
    background: var(--gradient-hero);
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.hero-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.15;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, 
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(255, 255, 255, 0.9) 100%);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: var(--space-3xl) 0;
    text-align: center;
}

/* Trust Badges */
.trust-badges {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    flex-wrap: wrap;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-md);
    font-size: 0.875rem;
    font-weight: 500;
    background: var(--white);
    color: var(--primary);
    border: 1px solid rgba(var(--primary-rgb), 0.2);
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-sm);
}

.badge i {
    color: var(--primary);
}

/* Hero Typography */
.hero-title {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: var(--space-lg);
    color: var(--dark);
}

.hero-title .highlight {
    color: var(--primary);
    position: relative;
}

.hero-title .highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--secondary);
    opacity: 0.3;
    z-index: -1;
}

.hero-subtitle {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto var(--space-2xl);
    color: var(--gray-600);
}

/* Hero Stats */
.hero-stats {
    display: flex;
    justify-content: center;
    gap: var(--space-2xl);
    margin: var(--space-2xl) 0;
    flex-wrap: wrap;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary);
    line-height: 1;
    margin-bottom: var(--space-xs);
}

.stat-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Hero CTA */
.hero-cta {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
    margin: var(--space-2xl) 0;
    flex-wrap: wrap;
}

/* Emergency Notice */
.emergency-notice {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    background: rgba(220, 53, 69, 0.1);
    border: 1px solid rgba(220, 53, 69, 0.2);
    border-radius: var(--radius-lg);
    margin-top: var(--space-xl);
}

.emergency-notice i {
    color: var(--accent-red);
    font-size: 1.25rem;
}

.emergency-notice span {
    color: var(--gray-800);
    font-weight: 500;
}

.emergency-notice a {
    color: var(--accent-red);
    font-weight: 700;
    text-decoration: none;
    transition: color var(--transition-fast);
}

.emergency-notice a:hover {
    color: #BD2130;
    text-decoration: underline;
}

/* ===== URGENCY BANNER ===== */
.urgency-banner {
    background: var(--gradient-sun);
    color: var(--dark);
    padding: var(--space-md) 0;
}

.urgency-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-lg);
    flex-wrap: wrap;
}

.urgency-icon {
    font-size: 1.5rem;
}

.urgency-text {
    flex: 1;
    min-width: 300px;
}

.urgency-text p {
    margin: 0;
    font-weight: 500;
    color: var(--dark);
}

.urgency-text strong {
    color: var(--primary-dark);
}

.countdown {
    display: inline-block;
    margin-left: var(--space-md);
    padding: var(--space-xs) var(--space-sm);
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-sm);
    font-family: monospace;
    font-weight: 700;
}

/* ===== QUICK QUOTE SECTION ===== */
.quick-quote {
    background: var(--white);
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.section-header h2 {
    color: var(--primary);
    margin-bottom: var(--space-md);
}

.section-header p {
    max-width: 600px;
    margin: 0 auto;
    color: var(--gray-600);
}

.quote-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: start;
}

@media (max-width: 992px) {
    .quote-container {
        grid-template-columns: 1fr;
    }
}

/* Quote Form */
.quote-form {
    background: var(--white);
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
}

@media (max-width: 768px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}

.form-group {
    margin-bottom: var(--space-lg);
}

.form-group label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-xs);
    font-weight: 500;
    color: var(--gray-800);
}

.form-group label i {
    color: var(--primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: var(--space-md);
    border: 1px solid var(--light-300);
    border-radius: var(--radius-md);
    font-family: var(--font-primary);
    font-size: 1rem;
    color: var(--gray-800);
    transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--gray-400);
}

.form-group textarea {
    min-height: 120px;
    resize: vertical;
}

.form-actions {
    margin-top: var(--space-xl);
}

.form-note {
    margin-top: var(--space-md);
    font-size: 0.875rem;
    color: var(--gray-500);
    text-align: center;
}

.form-note i {
    color: var(--primary);
    margin-right: var(--space-xs);
}

/* Quote Benefits */
.quote-benefits {
    background: var(--light-100);
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--light-200);
}

.quote-benefits h3 {
    color: var(--primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.benefits-list {
    list-style: none;
    margin-bottom: var(--space-2xl);
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--light-200);
}

.benefit-item:last-child {
    border-bottom: none;
}

.benefit-item i {
    color: var(--primary);
    font-size: 1.25rem;
    margin-top: 2px;
}

.benefit-item strong {
    color: var(--gray-800);
    display: block;
    margin-bottom: 2px;
}

.benefit-item p {
    margin: 0;
    color: var(--gray-600);
    font-size: 0.875rem;
}

/* Immediate Contact */
.immediate-contact {
    background: var(--white);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    border: 1px solid var(--light-300);
}

.immediate-contact h4 {
    color: var(--primary);
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.contact-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
}

.contact-option {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: var(--light-100);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.contact-option:hover {
    background: var(--light-200);
    transform: translateX(4px);
}

.contact-option i {
    color: var(--primary);
    font-size: 1.25rem;
}

.contact-option span {
    color: var(--gray-800);
    font-weight: 500;
}

.emergency-note {
    margin: 0;
    font-size: 0.875rem;
    color: var(--gray-500);
    text-align: center;
}

.emergency-note i {
    color: var(--primary);
    margin-right: var(--space-xs);
}

/* ===== SERVICES SECTION ===== */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
    margin-top: var(--space-2xl);
}

.service-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
    position: relative;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}

.service-card-header {
    background: var(--gradient-green);
    padding: var(--space-xl);
    text-align: center;
    position: relative;
}

.service-card.featured .service-card-header {
    background: var(--gradient-orange);
}

.service-icon {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: var(--space-md);
}

.service-badge {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
    padding: var(--space-xs) var(--space-md);
    background: var(--white);
    color: var(--primary);
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: var(--radius-full);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.service-card-body {
    padding: var(--space-xl);
}

.service-card h3 {
    color: var(--primary);
    margin-bottom: var(--space-md);
}

.service-description {
    color: var(--gray-600);
    margin-bottom: var(--space-lg);
}

.service-features {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.feature {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background: var(--light-100);
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    color: var(--gray-600);
}

.feature i {
    color: var(--primary);
    font-size: 0.75rem;
}

.service-card-footer {
    padding: 0 var(--space-xl) var(--space-xl);
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    transition: gap var(--transition-normal);
}

.service-link:hover {
    gap: var(--space-md);
}

/* ===== AREAS SERVED ===== */
.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
    margin-top: var(--space-2xl);
}

.area-card {
    background: var(--white);
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal);
}

.area-card:hover {
    transform: translateY(-5px);
}

.area-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.area-header i {
    font-size: 2rem;
    color: var(--primary);
}

.area-header h3 {
    margin: 0;
    color: var(--primary);
}

.area-locations {
    list-style: none;
    margin-bottom: var(--space-lg);
}

.area-locations li {
    padding: var(--space-xs) 0;
    color: var(--gray-600);
    border-bottom: 1px solid var(--light-200);
}

.area-locations li:last-child {
    border-bottom: none;
}

.area-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    transition: gap var(--transition-normal);
}

.area-link:hover {
    gap: var(--space-md);
}

/* ===== TESTIMONIALS ===== */
.testimonials-slider {
    max-width: 800px;
    margin: var(--space-2xl) auto 0;
    position: relative;
}

.testimonial {
    display: none;
    animation: fadeIn 0.5s ease;
}

.testimonial.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.testimonial-content {
    background: var(--white);
    padding: var(--space-2xl);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    text-align: center;
}

.rating {
    color: var(--accent-yellow);
    font-size: 1.5rem;
    margin-bottom: var(--space-lg);
}

.quote {
    font-size: 1.125rem;
    font-style: italic;
    color: var(--gray-600);
    margin-bottom: var(--space-xl);
    position: relative;
}

.quote::before,
.quote::after {
    content: '"';
    font-size: 3rem;
    color: var(--primary-light);
    opacity: 0.3;
    position: absolute;
}

.quote::before {
    top: -20px;
    left: -10px;
}

.quote::after {
    bottom: -40px;
    right: -10px;
}

.author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);
}

.author-info {
    text-align: left;
}

.author-info strong {
    display: block;
    color: var(--primary);
    margin-bottom: 2px;
}

.author-info span {
    color: var(--gray-500);
    font-size: 0.875rem;
}

.verification {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--primary);
    font-size: 0.875rem;
}

.testimonial-controls {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    margin-top: var(--space-xl);
}

.testimonial-prev,
.testimonial-next {
    background: var(--white);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-md);
}

.testimonial-prev:hover,
.testimonial-next:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
}

/* ===== FOOTER ===== */
.main-footer {
    background: var(--dark);
    color: var(--white);
    padding: var(--space-3xl) 0 var(--space-xl);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-2xl);
    margin-bottom: var(--space-2xl);
}

.footer-col h3 {
    color: var(--white);
    margin-bottom: var(--space-lg);
    font-size: 1.25rem;
}

/* Footer Logo */
.footer-logo img {
    max-width: 180px;
    margin-bottom: var(--space-lg);
}

.footer-description {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--space-lg);
    font-size: 0.875rem;
}

/* Social Links */
.social-links {
    display: flex;
    gap: var(--space-sm);
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border-radius: 50%;
    text-decoration: none;
    transition: all var(--transition-fast);
}

.social-links a:hover {
    background: var(--primary);
    transform: translateY(-3px);
}

/* Footer Links */
.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: var(--space-sm);
}

.footer-col ul li a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color var(--transition-fast);
    font-size: 0.875rem;
}

.footer-col ul li a:hover {
    color: var(--white);
    padding-left: 4px;
}

/* Contact Info */
.contact-info p {
    margin-bottom: var(--space-sm);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
}

.contact-info i {
    color: var(--primary);
    margin-top: 3px;
    flex-shrink: 0;
}

.contact-info a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.contact-info a:hover {
    color: var(--white);
    text-decoration: underline;
}

/* Footer Bottom */
.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--space-xl);
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: var(--space-sm);
    font-size: 0.875rem;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
}

.footer-links a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--transition-fast);
}

.footer-links a:hover {
    color: var(--white);
}

/* ===== FLOATING CTA ===== */
.floating-cta {
    position: fixed;
    bottom: var(--space-xl);
    right: var(--space-xl);
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.floating-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
    position: relative;
}

.floating-btn:hover {
    transform: scale(1.1);
}

.floating-phone {
    background: var(--primary);
    color: var(--white);
    animation: pulse 2s infinite;
}

.floating-whatsapp {
    background: #25D366;
    color: var(--white);
}

.floating-quote {
    background: var(--secondary);
    color: var(--white);
}

.floating-btn i {
    font-size: 1.5rem;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(var(--primary-rgb), 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
    }
}

/* ===== BACK TO TOP ===== */
.back-to-top {
    position: fixed;
    bottom: calc(var(--space-xl) + 200px);
    right: var(--space-xl);
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all var(--transition-normal);
    z-index: 998;
    box-shadow: var(--shadow-lg);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--primary-dark);
    transform: translateY(-5px) scale(1.1);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .form-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    :root {
        --header-height: var(--header-height-mobile);
    }
    
    .mobile-toggle {
        display: block;
    }
    
    .main-nav {
        display: none;
    }
    
    .header-contact {
        display: none;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.125rem;
    }
    
    .hero-stats {
        gap: var(--space-xl);
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-cta .btn {
        width: 100%;
        max-width: 300px;
    }
    
    .urgency-content {
        flex-direction: column;
        text-align: center;
    }
    
    .urgency-text {
        min-width: 100%;
    }
    
    .testimonial-content {
        padding: var(--space-xl);
    }
    
    .author {
        flex-direction: column;
        gap: var(--space-md);
    }
    
    .floating-cta {
        bottom: var(--space-md);
        right: var(--space-md);
    }
    
    .back-to-top {
        bottom: calc(var(--space-md) + 200px);
        right: var(--space-md);
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
    }
    
    .trust-badges {
        flex-direction: column;
        align-items: center;
    }
    
    .services-grid,
    .areas-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonial-content {
        padding: var(--space-lg);
    }
    
    .floating-btn {
        width: 50px;
        height: 50px;
    }
    
    .floating-btn i {
        font-size: 1.25rem;
    }
}

/* ===== PRINT STYLES ===== */
@media print {
    .main-header,
    .floating-cta,
    .back-to-top,
    .urgency-banner,
    .mobile-nav {
        display: none !important;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
    }
    
    .container {
        max-width: 100%;
        padding: 0;
    }
    
    .section {
        padding: 1cm 0;
        break-inside: avoid;
    }
    
    a {
        color: #000;
        text-decoration: underline;
    }
    
    .btn {
        display: none;
    }
    
    .contact-info a[href^="tel:"]::after {
        content: " (" attr(href) ")";
    }
}
