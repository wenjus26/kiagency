/**
 * KANO IMPACT AGENCY - Main JavaScript
 * Dynamic Header/Footer, Menu mobile, navigation fluide, animations, preloader
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ── 1. Preloader & Dynamic Includes ─────────────────────────────────────
    const preloader = document.getElementById('preloader');
    
    Promise.all([
        fetch('header.html').then(res => res.ok ? res.text() : ''),
        fetch('footer.html').then(res => res.ok ? res.text() : '')
    ]).then(([headerHtml, footerHtml]) => {
        // Insert Header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder && headerHtml) {
            headerPlaceholder.outerHTML = headerHtml;
        }

        // Insert Footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder && footerHtml) {
            footerPlaceholder.outerHTML = footerHtml;
        }

        // Handle Active Links dynamically
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('header .nav-link').forEach(link => {
            const href = link.getAttribute('href');
            // Remove active classes everywhere first
            link.className = 'nav-link text-slate-600 font-medium hover:text-blue-600 transition-colors';
            
            // Apply active class if current path matches
            if (href === currentPath || href === `index.html#services` && currentPath === 'index.html' || (currentPath === '' && href === 'index.html')) {
                link.className = 'nav-link text-blue-700 font-bold border-b-2 border-blue-700 pb-1';
            }
        });

        // Initialize features that depend on the newly injected DOM
        initAppFeatures();

        // Reveal content / Hide preloader
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Re-trigger scroll event to animate cards correctly
                    window.dispatchEvent(new Event('scroll'));
                }, 500);
            }, 600); // Wait bit to let users see the logo
        }
    }).catch(err => {
        console.error("Erreur de chargement du header/footer", err);
        if(preloader) preloader.style.display = 'none';
    });

});

function initAppFeatures() {
    // ── Mobile Menu Toggle ────────────────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const existingMenu = document.querySelector('.mobile-menu-overlay');
            if (existingMenu) {
                existingMenu.remove();
                return;
            }

            const overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay fixed inset-0 bg-black/30 backdrop-blur-sm z-40';
            overlay.innerHTML = `
                <div class="fixed top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-2xl flex flex-col gap-3 animate-fade-in border border-blue-50 max-h-[85vh] overflow-y-auto">
                    <div class="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
                        <img src="assets/img/logo.jpeg" alt="Logo" class="h-10 w-auto rounded-lg">
                        <div>
                            <p class="text-sm font-black text-blue-900 leading-tight uppercase">KANO IMPACT</p>
                            <p class="text-xs font-bold text-blue-600 uppercase">AGENCY</p>
                        </div>
                    </div>
                    <a class="flex items-center gap-3 text-base font-bold text-primary border-b border-gray-50 pb-3" href="index.html">
                        <span class="material-symbols-outlined text-base">home</span> Accueil
                    </a>
                    <a class="flex items-center gap-3 text-base font-medium text-slate-700 border-b border-gray-50 pb-3" href="index.html#about">
                        <span class="material-symbols-outlined text-base">info</span> À Propos
                    </a>
                    <a class="flex items-center gap-3 text-base font-medium text-slate-700 border-b border-gray-50 pb-3" href="index.html#services">
                        <span class="material-symbols-outlined text-base">hub</span> Services
                    </a>
                    <a class="flex items-center gap-3 text-base font-medium text-slate-700 border-b border-gray-50 pb-3" href="formations.html">
                        <span class="material-symbols-outlined text-base">school</span> Formations
                    </a>
                    <a class="flex items-center gap-3 text-base font-medium text-slate-700 border-b border-gray-50 pb-3" href="evenements.html">
                        <span class="material-symbols-outlined text-base">event</span> Événements
                    </a>
                    <a class="flex items-center gap-3 text-base font-medium text-slate-700 border-b border-gray-50 pb-3" href="contact.html">
                        <span class="material-symbols-outlined text-base">mail</span> Contact
                    </a>
                    <a class="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-center mt-2 hover:opacity-90 transition-opacity" href="contact.html">
                        <span class="material-symbols-outlined text-base">chat</span> Nous contacter
                    </a>
                    <p class="text-center text-xs text-slate-400 mt-2">Tél : +229 01 43 64 83 05</p>
                </div>
            `;
            document.body.appendChild(overlay);

            // Fermer en cliquant sur le fond
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) overlay.remove();
            });
        });
    }

    // ── Smooth Scrolling ──────────────────────────────────────────────────────
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttr = this.getAttribute('href');
            // Allow default interaction if it navigates to another page
            if (hrefAttr.includes('.html') && !window.location.pathname.includes(hrefAttr.split('#')[0])) {
                return;
            }

            const targetId = hrefAttr.split('#')[1];
            if (!targetId) return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                const existingMenu = document.querySelector('.mobile-menu-overlay');
                if (existingMenu) existingMenu.remove();
            }
        });
    });

    // ── Header scroll effect ──────────────────────────────────────────────────
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
        // Trigger once on init
        window.dispatchEvent(new Event('scroll'));
    }

    // ── Intersection Observer: animate cards on scroll ────────────────────────
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('article, .formation-card, .event-card').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500');
        observer.observe(el);
    });

    // ── Form submission feedback ──────────────────────────────────────────────
    const contactForm = document.querySelector('form');
    if (contactForm && !contactForm.id.includes("mailto")) {
        contactForm.addEventListener('submit', () => {
            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Envoi en cours...';
                // Note: we do not disable it instantly if it's external, otherwise it blocks sumbission
            }
        });
    }
}
