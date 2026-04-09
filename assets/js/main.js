/**
 * KI AGENCY - Main JavaScript
 * Handling mobile menu and form animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const navMenu = document.querySelector('nav .hidden.md\\:flex');
    
    // Create a mobile menu if it doesn't exist
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const menuContent = navMenu.cloneNode(true);
            menuContent.classList.toggle('hidden');
            menuContent.classList.add('fixed', 'top-20', 'left-0', 'w-full', 'bg-white', 'p-8', 'flex-col', 'space-x-0', 'space-y-4', 'shadow-xl', 'z-50', 'flex', 'md:hidden');
            
            // Toggle existing mobile menu if it exists
            const existingMenu = document.querySelector('.mobile-menu-overlay');
            if (existingMenu) {
                existingMenu.remove();
            } else {
                const overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity';
                overlay.innerHTML = `
                    <div class="fixed top-20 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
                        <div class="flex items-center gap-3 mb-2 border-b border-primary/10 pb-4">
                            <img src="assets/img/logo.jpeg" alt="Logo" class="h-8 w-auto rounded">
                            <span class="text-lg font-bold text-primary">KI AGENCY</span>
                        </div>
                        <a class="text-lg font-bold text-primary border-b border-primary/10 pb-2" href="index.html">Accueil</a>
                        <a class="text-lg font-medium text-slate-600 dark:text-slate-400 border-b border-primary/10 pb-2" href="index.html#about">À Propos</a>
                        <a class="text-lg font-medium text-slate-600 dark:text-slate-400 border-b border-primary/10 pb-2" href="formations.html">Formations</a>
                        <a class="text-lg font-medium text-slate-600 dark:text-slate-400 border-b border-primary/10 pb-2" href="dashboard.html">Tableau de bord</a>
                        <a class="px-6 py-3 bg-primary text-white rounded-full font-bold text-center mt-2" href="index.html#contact">Contact Us</a>
                    </div>
                `;
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        overlay.remove();
                    }
                });
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const existingMenu = document.querySelector('.mobile-menu-overlay');
                if (existingMenu) existingMenu.remove();
            }
        });
    });

    // Form submission styling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // We use Formspree, so we don't preventDefault if it's the real submission
            // but we can add UI feedback.
            console.log('Sending message...');
        });
    }
});
