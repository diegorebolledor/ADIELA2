// ========================================
// ADIELA - Luxury Website JavaScript
// Smooth interactions for premium experience
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initHeroVideo();
    initScrollEffects();
    initSmoothScrolling();
    initObservers();
});

// Navigation Management
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const searchBtn = document.getElementById('nav-search');
    const cartBtn = document.getElementById('nav-cart');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            console.log('Search clicked');
            // Aquí puedes agregar funcionalidad de búsqueda
        });
    }

    // Cart functionality
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            console.log('Cart clicked');
            // Aquí puedes agregar funcionalidad del carrito
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navigation scroll effect (mantener transparente sobre el video)
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > window.innerHeight - 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
        }
    });
}

// Hero Video Management
function initHeroVideo() {
    const video = document.querySelector('.hero__video-element');
    
    if (video) {
        // Ensure video plays on mobile devices when possible
        video.addEventListener('loadeddata', () => {
            if (video.readyState >= 3) {
                video.play().catch(error => {
                    console.log('Video autoplay prevented:', error);
                    // Fallback: show poster image
                    video.style.display = 'none';
                    const poster = video.getAttribute('poster');
                    if (poster) {
                        const videoContainer = video.parentElement;
                        videoContainer.style.backgroundImage = `url(${poster})`;
                        videoContainer.style.backgroundSize = 'cover';
                        videoContainer.style.backgroundPosition = 'center';
                    }
                });
            }
        });

        // Optimize video performance
        video.addEventListener('canplay', () => {
            video.play().catch(() => {
                // Silent fail - video will show poster instead
            });
        });

        // Pause video when not in viewport (performance optimization)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(video);
    }
}

// Scroll Effects and Animations
function initScrollEffects() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero__content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Scroll indicator animation
    const scrollLine = document.querySelector('.hero__scroll-line');
    if (scrollLine) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled > 100) {
                scrollLine.style.opacity = '0';
            } else {
                scrollLine.style.opacity = '1';
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
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
}

// Intersection Observer for Animations
function initObservers() {
    // Fade in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.collection, .about');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Observe collection items for staggered animation
    const collectionItems = document.querySelectorAll('.collection__item');
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Staggered delay
            }
        });
    }, observerOptions);

    collectionItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        itemObserver.observe(item);
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Preload critical images
    const criticalImages = [
        './assets/images/collection-1.jpg',
        './assets/images/collection-2.jpg',
        './assets/images/collection-3.jpg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize performance optimizations
initPerformanceOptimizations();

// Add smooth hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.collection__item')) {
        e.target.style.transform = 'translateY(-10px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.collection__item')) {
        e.target.style.transform = 'translateY(0)';
    }
});

// Error handling for video
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'VIDEO') {
        console.log('Video loading error - falling back to poster image');
        const video = e.target;
        const poster = video.getAttribute('poster');
        if (poster) {
            video.style.display = 'none';
            video.parentElement.style.backgroundImage = `url(${poster})`;
            video.parentElement.style.backgroundSize = 'cover';
            video.parentElement.style.backgroundPosition = 'center';
        }
    }
}, true); 