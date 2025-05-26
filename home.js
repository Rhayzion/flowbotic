document.addEventListener("DOMContentLoaded", () => {
    // Utility: Safe query selector
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => context.querySelectorAll(selector);

    // Navigation Scroll Effect
    const navbar = $("#navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = $("#mobile-menu-btn");
    const mobileMenu = $("#mobile-menu");
    const mobileMenuClose = $("#mobile-menu-close");
    const mobileMenuLinks = $$(".mobile-menu-link a", mobileMenu);

    if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
        let isMenuOpen = false; // Track menu state

        const toggleMenu = (open) => {
            isMenuOpen = open;
            mobileMenu.classList.toggle("open", open);
            mobileMenu.setAttribute("aria-hidden", !open);
            document.body.style.overflow = open ? "hidden" : "";
            mobileMenuBtn.setAttribute("aria-expanded", open); // Accessibility
        };

        // Toggle menu on hamburger click
        mobileMenuBtn.addEventListener("click", () => {
            toggleMenu(!isMenuOpen);
        });

        // Close menu on close button click
        mobileMenuClose.addEventListener("click", () => toggleMenu(false));

        // Close menu on link click
        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", () => toggleMenu(false));
        });

        // Keyboard accessibility for hamburger button
        mobileMenuBtn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu(!isMenuOpen);
            }
        });
    }

    // GSAP Animations
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion) {
            // Hero Animation
            gsap.from(".hero-text", {
                opacity: 0,
                y: 80,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.3
            });

            gsap.from(".hero-image-container", {
                opacity: 0,
                x: 80,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.5
            });

            gsap.from(".floating-element", {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.8
            });

            // Feature, Pricing, and Testimonial Cards
            $$(".feature-card, .pricing-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: i * 0.1
                });
            });

            // FAQ Animation
            $$(".faq-item").forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: i * 0.1
                });
            });
        }
    }

    // Stats Counter Animation
    const animateCounters = () => {
        $$(".stat-number").forEach(counter => {
            const target = +counter.getAttribute("data-count");
            gsap.to(counter, {
                innerText: target,
                duration: 1.5,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: () => {
                    counter.innerText = Math.ceil(counter.innerText);
                }
            });
        });
    };

    if ($(".stats")) {
        ScrollTrigger.create({
            trigger: ".stats",
            start: "top 80%",
            onEnter: animateCounters,
            once: true
        });
    }

    // Testimonial Slider
    if (typeof Swiper !== "undefined" && $(".swiper")) {
        new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 }
            }
        });
    }

    // FAQ Toggle
    const faqQuestions = $$(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains("active");
            faqItem.classList.toggle("active", !isActive);
            question.setAttribute("aria-expanded", !isActive);

            // Smooth height animation
            const answer = faqItem.querySelector(".faq-answer");
            if (!isActive) {
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            } else {
                answer.style.maxHeight = "";
            }
        });

        // Keyboard accessibility
        question.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                question.click();
            }
        });
    });

    // Particle Animation (Optimized)
    const particlesContainer = $("#particles");
    if (particlesContainer) {
        const maxParticles = 20;
        let particleCount = 0;

        const createParticle = () => {
            if (particleCount >= maxParticles) return;

            const particle = document.createElement("div");
            particle.classList.add("particle");
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
            particlesContainer.appendChild(particle);
            particleCount++;

            setTimeout(() => {
                particle.remove();
                particleCount--;
            }, 8000);
        };

        const interval = window.innerWidth < 768 ? 500 : 300;
        setInterval(createParticle, interval);
    }

    // Custom Cursor (Desktop Only)
    if (window.innerWidth >= 768) {
        const cursor = document.createElement("div");
        cursor.classList.add("custom-cursor");
        document.body.appendChild(cursor);

        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.clientX - 7,
                y: e.clientY - 7,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        $$(".btn, .feature-card, .pricing-card, .testimonial-card, .social-link").forEach(el => {
            el.addEventListener("mouseenter", () => cursor.classList.add("active"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
        });
    }
});
