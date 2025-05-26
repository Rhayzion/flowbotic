         // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Swiper
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-menu-link a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // FAQ accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
                
                // Close other open items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });

        // Hero Animation
        gsap.to(".hero-title", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.to(".hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.6
        });

        gsap.to(".cta-buttons", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.9
        });

        gsap.to(".hero-image-container", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: 1.2
        });

        // Floating elements animation
        const floatingElements = document.querySelectorAll(".floating-element");
        floatingElements.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 1,
                delay: 1.5 + index * 0.3,
                ease: "power3.out"
            },
            {
                opacity: 1,
                y: 0,
            }
        );
        });

        // Features animation
        gsap.utils.toArray(".feature-card").forEach((card, i) => {
            gsap.fromTo(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out"
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        // Stats animation
        gsap.utils.toArray(".stat-item").forEach((stat, i) => {
            gsap.fromTo(stat, {
                scrollTrigger: {
                    trigger: ".stats",
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power3.out",
                onComplete: () => animateCounters()
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }
        
        );
        });

        // Animate counter numbers
        function animateCounters() {
            const counters = document.querySelectorAll(".stat-number");
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }

        // Create particles
        function createParticles() {
            const container = document.getElementById("particles");
            const particleCount = window.innerWidth < 768 ? 20 : 40;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.classList.add("particle");
                
                // Random properties
                const size = Math.random() * 6 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 15 + 15;
                const opacity = Math.random() * 0.4 + 0.1;
                
                // Apply styles
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.background = `rgba(255, 255, 255, ${opacity})`;
                particle.style.borderRadius = `${size}px`;
                
                container.appendChild(particle);
                
                // Animate particle
                gsap.to(particle, {
                    x: `${Math.random() * 100 - 50}px`,
                    y: `${Math.random() * 100 - 50}px`,
                    duration: duration,
                    delay: delay,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }

        // Initialize
        document.addEventListener("DOMContentLoaded", () => {
            createParticles();
        });
  
