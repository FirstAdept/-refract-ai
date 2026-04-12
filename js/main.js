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

// ===== Scroll animations =====
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animateElements.forEach(el => observer.observe(el));

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
