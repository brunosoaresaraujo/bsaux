// Init Lucide Icons
lucide.createIcons();

// Reveal on scroll logic for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Dynamic Timeline Line Growth
window.addEventListener('scroll', () => {
    const section = document.getElementById('experience');
    const line = document.getElementById('timeline-line');
    if (!section || !line) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate how much of the section has been scrolled.
    let progress = (viewportHeight / 2 - rect.top) / (sectionHeight - 100);

    progress = Math.max(0, Math.min(1, progress));
    line.style.transform = `scaleY(${progress})`;
});

// Portfolio Video Hover Control
document.querySelectorAll('.project-stack-item').forEach(card => {
    const videos = card.querySelectorAll('video');
    
    card.addEventListener('mouseenter', () => {
        videos.forEach(v => v.play());
    });

    card.addEventListener('mouseleave', () => {
        videos.forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
    });
});

// Dynamic Cursor Glow & Parallax Logic
const cursorGlow = document.getElementById('cursor-glow');
const mainMockup = document.getElementById('main-mockup');
const subCard1 = document.getElementById('sub-card-1');
const subCard2 = document.getElementById('sub-card-2');

document.addEventListener('mousemove', (e) => {
    // Cursor Glow
    if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    }

    // Hero Parallax Effect
    const xVal = Math.min(Math.max((window.innerWidth / 2 - e.clientX) / 50, -15), 15);
    const yVal = Math.min(Math.max((window.innerHeight / 2 - e.clientY) / 50, -15), 15);

    if (mainMockup) {
        mainMockup.style.transform = `rotateY(${xVal}deg) rotateX(${-yVal}deg) translateZ(50px)`;
    }
    if (subCard1) {
        subCard1.style.transform = `translateX(${-xVal * 1.5}px) translateY(${-yVal * 1.5}px) translateZ(100px)`;
    }
    if (subCard2) {
        subCard2.style.transform = `translateX(${xVal * 0.8}px) translateY(${yVal * 0.8}px) translateZ(-50px)`;
    }
});
