// ===== Smooth Scroll (Lenis-style) =====
class SmoothScroll {
    constructor() {
        this.current = window.scrollY;
        this.target = window.scrollY;
        this.ease = 0.08;
        this.running = true;
        window.addEventListener('scroll', () => this.target = window.scrollY, { passive: true });
        this.animate();
    }
    animate() {
        this.current += (this.target - this.current) * this.ease;
        document.documentElement.style.setProperty('--scroll', this.current);
        if (this.running) requestAnimationFrame(() => this.animate());
    }
}
new SmoothScroll();

// ===== Split Text Animation =====
function splitText(el) {
    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = '';
    el.setAttribute('aria-label', text);

    words.forEach((word, wi) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.overflow = 'hidden';

        [...word].forEach((char, ci) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = char;
            charSpan.style.display = 'inline-block';
            charSpan.style.transform = 'translateY(105%) rotateX(-25deg)';
            charSpan.style.opacity = '0';
            charSpan.style.transition = `transform 0.6s cubic-bezier(0.13, 0.47, 0.13, 0.98) ${(wi * 4 + ci) * 0.03}s, opacity 0.4s ease ${(wi * 4 + ci) * 0.03}s`;
            wordSpan.appendChild(charSpan);
        });

        el.appendChild(wordSpan);
        if (wi < words.length - 1) {
            const space = document.createElement('span');
            space.innerHTML = '&nbsp;';
            space.style.display = 'inline-block';
            el.appendChild(space);
        }
    });
}

function revealChars(el) {
    el.querySelectorAll('.char').forEach(c => {
        c.style.transform = 'translateY(0) rotateX(0)';
        c.style.opacity = '1';
    });
}

// Apply split text to hero title
const heroTitle = document.querySelector('.hero__title');
if (heroTitle) {
    // Preserve <br> tags
    const lines = heroTitle.innerHTML.split('<br>');
    heroTitle.innerHTML = '';
    lines.forEach((line, i) => {
        const lineEl = document.createElement('span');
        lineEl.className = 'split-line';
        lineEl.textContent = line.trim();
        splitText(lineEl);
        heroTitle.appendChild(lineEl);
        if (i < lines.length - 1) heroTitle.appendChild(document.createElement('br'));
    });
    // Reveal after small delay
    setTimeout(() => {
        heroTitle.querySelectorAll('.split-line').forEach(l => revealChars(l));
    }, 300);
}

// Split text for section titles (on scroll)
document.querySelectorAll('.section-title').forEach(el => {
    splitText(el);
    el.dataset.splitReady = 'true';
});

// ===== Custom Cursor =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
const cursorDot = document.createElement('div');
cursorDot.className = 'custom-cursor__dot';
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

let cx = 0, cy = 0, dx = 0, dy = 0;

document.addEventListener('mousemove', e => {
    dx = e.clientX;
    dy = e.clientY;
    cursorDot.style.left = dx + 'px';
    cursorDot.style.top = dy + 'px';
});

function updateCursor() {
    cx += (dx - cx) * 0.12;
    cy += (dy - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(updateCursor);
}
updateCursor();

// Cursor grow on interactive elements
document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('custom-cursor--active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('custom-cursor--active'));
});

// ===== Magnetic Buttons =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)';
        setTimeout(() => btn.style.transition = '', 400);
    });
});

// ===== Parallax on Scroll =====
const parallaxElements = document.querySelectorAll('.hero__code, .project-card__bg, .stat__number');

function updateParallax() {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.speed || 0.05);
        const yOffset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${yOffset}px)`;
    });
    requestAnimationFrame(updateParallax);
}
updateParallax();

// ===== Header scroll effect =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== Scroll Reveal (stagger + split text) =====
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const siblings = [...el.parentElement.children].filter(c => c.hasAttribute('data-animate'));
            const index = siblings.indexOf(el);
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 120);
            observer.unobserve(el);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

animateElements.forEach(el => observer.observe(el));

// Section title reveal on scroll
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            revealChars(entry.target);
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section-title[data-split-ready]').forEach(el => titleObserver.observe(el));

// ===== Counter animation =====
const counters = document.querySelectorAll('[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(target * eased);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    el.textContent = target;
                }
            }

            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Tilt effect on project cards =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
        setTimeout(() => card.style.transition = 'all 0.3s ease', 600);
    });
});

// ===== Form submit via Telegram =====
const TELEGRAM_BOT_TOKEN = '8616092227:AAG0fc4s9YZ3bEaLnB6TswUOrqV1mwQ5wwc';
const TELEGRAM_CHAT_ID = '203791171';

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    const inputs = form.querySelectorAll('.form-input');

    const name = inputs[0].value.trim();
    const phone = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const message = inputs[3].value.trim();

    const text = [
        '--- НОВАЯ ЗАЯВКА С САЙТА ---',
        '',
        'Имя: ' + name,
        'Телефон: ' + phone,
        email ? 'Email: ' + email : '',
        message ? 'Сообщение: ' + message : '',
        '',
        'Источник: refract-ai.ru'
    ].filter(Boolean).join('\n');

    btn.textContent = 'Отправка...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    try {
        const res = await fetch(
            'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                    parse_mode: 'HTML'
                })
            }
        );

        if (res.ok) {
            btn.textContent = 'Отправлено!';
            form.reset();
        } else {
            btn.textContent = 'Ошибка, попробуйте ещё';
        }
    } catch {
        btn.textContent = 'Ошибка сети';
    }

    setTimeout(() => {
        btn.textContent = 'ОТПРАВИТЬ ЗАЯВКУ';
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, 3000);
});
