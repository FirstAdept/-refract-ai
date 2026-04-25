// ===== PWA Service Worker =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// ===== i18n (RU/EN) =====
const translations = {
    ru: {
        'nav.projects': 'Проекты',
        'nav.approach': 'Подход',
        'nav.team': 'Команда',
        'nav.contact': 'Контакты',
        'hero.title': 'Разрабатываем<br>цифровые продукты<br>нового поколения',
        'hero.subtitle': 'Веб-приложения, мобильные решения и AI-системы.<br>Полный цикл от идеи до запуска.',
        'hero.cta': 'Обсудить проект',
        'stats.projects': 'Проектов реализовано',
        'stats.years': 'Лет на рынке',
        'stats.team': 'Специалистов в команде',
        'stats.return': '% клиентов возвращаются',
        'projects.label': '01 / Проекты',
        'projects.title': 'Наши работы',
        'approach.label': '02 / Подход',
        'approach.title': 'Как мы работаем',
        'team.label': '03 / Команда',
        'team.title': 'Люди, которые создают',
        'cta.title': 'Обсудим ваш проект?',
        'cta.subtitle': 'Расскажите о своей идее — мы предложим оптимальное решение и оценим сроки.',
        'form.name': 'Ваше имя',
        'form.phone': 'Телефон',
        'form.email': 'Email',
        'form.message': 'Расскажите о проекте',
        'form.submit': 'Отправить заявку',
        'proj.fitbody.tag': 'Мобильное приложение',
        'proj.fitbody.desc': 'Умный счётчик калорий: фотография блюда → AI определяет состав, калорийность и БЖУ',
        'proj.dream.tag': 'AI-сонник',
        'proj.dream.desc': 'AI-сонник с разбором символов сна и генерацией видео-визуализации в сюрреалистическом стиле',
        'proj.marqus.tag': 'Трейдинг-бот',
        'proj.marqus.desc': 'Автоматизированный грид-бот для криптотрейдинга с адаптивным спредом и риск-менеджментом',
        'proj.more': 'Подробнее →',
        'step1.title': 'Аналитика',
        'step1.desc': 'Погружаемся в бизнес, изучаем аудиторию, анализируем конкурентов. Формируем чёткое ТЗ.',
        'step2.title': 'Прототип',
        'step2.desc': 'Проектируем архитектуру, создаём интерактивные прототипы. Тестируем на пользователях.',
        'step3.title': 'Разработка',
        'step3.desc': 'Agile-спринты, код-ревью, автотесты. Прозрачный процесс с демо каждые 2 недели.',
        'step4.title': 'Запуск',
        'step4.desc': 'Деплой, мониторинг, поддержка. Остаёмся на связи и развиваем продукт вместе.',
        'role.fullstack': 'Fullstack разработчик',
        'role.pm': 'Project Manager',
        'role.ux': 'UI/UX Designer',
        'footer.copy': '© 2026 REFRACT.AI. Все права защищены.',
        'name.stas': 'Станислав Иванов',
        'name.alex': 'Алексей Ламышев',
        'name.sergey': 'Сергей Петоян',
        'name.lera': 'Лера Сафонова',
        'name.nastya': 'Анастасия Лещенко'
    },
    en: {
        'nav.projects': 'Projects',
        'nav.approach': 'Approach',
        'nav.team': 'Team',
        'nav.contact': 'Contact',
        'hero.title': 'We build<br>next-generation<br>digital products',
        'hero.subtitle': 'Web apps, mobile solutions and AI systems.<br>Full cycle from idea to launch.',
        'hero.cta': 'Discuss project',
        'stats.projects': 'Projects delivered',
        'stats.years': 'Years on market',
        'stats.team': 'Specialists in team',
        'stats.return': '% of clients return',
        'projects.label': '01 / Projects',
        'projects.title': 'Our work',
        'approach.label': '02 / Approach',
        'approach.title': 'How we work',
        'team.label': '03 / Team',
        'team.title': 'The people who create',
        'cta.title': 'Let\'s discuss your project?',
        'cta.subtitle': 'Tell us about your idea — we\'ll propose the optimal solution and estimate the timeline.',
        'form.name': 'Your name',
        'form.phone': 'Phone',
        'form.email': 'Email',
        'form.message': 'Tell us about the project',
        'form.submit': 'Send request',
        'proj.fitbody.tag': 'Mobile app',
        'proj.fitbody.desc': 'Smart calorie counter: photograph your meal → AI detects ingredients, calories and macros',
        'proj.dream.tag': 'AI dream interpreter',
        'proj.dream.desc': 'AI dream analyzer with symbol breakdown and surreal video visualizations for each dream',
        'proj.marqus.tag': 'Trading bot',
        'proj.marqus.desc': 'Automated grid bot for crypto trading with adaptive spread and risk management',
        'proj.more': 'Learn more →',
        'step1.title': 'Analysis',
        'step1.desc': 'We dive into the business, study the audience, analyze competitors. Form a clear specification.',
        'step2.title': 'Prototype',
        'step2.desc': 'We design architecture, create interactive prototypes. Test on users.',
        'step3.title': 'Development',
        'step3.desc': 'Agile sprints, code review, automated tests. Transparent process with demos every 2 weeks.',
        'step4.title': 'Launch',
        'step4.desc': 'Deployment, monitoring, support. We stay in touch and grow the product together.',
        'role.fullstack': 'Fullstack Developer',
        'role.pm': 'Project Manager',
        'role.ux': 'UI/UX Designer',
        'footer.copy': '© 2026 REFRACT.AI. All rights reserved.',
        'name.stas': 'Stanislav Ivanov',
        'name.alex': 'Alexey Lamyshev',
        'name.sergey': 'Sergey Petoyan',
        'name.lera': 'Lera Safonova',
        'name.nastya': 'Anastasia Leshchenko'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'ru';
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key]) {
            el.innerHTML = t[key];
            // Re-apply split-text if needed
            if (el.classList.contains('hero__title') && window.reapplySplitText) {
                window.reapplySplitText(el);
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
        btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Apply saved lang or auto-detect
const savedLang = localStorage.getItem('lang') ||
                  (navigator.language.startsWith('en') ? 'en' : 'ru');
if (savedLang === 'en') {
    setLanguage('en');
}

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
            btn.textContent = '✓ Отправлено';
            btn.style.background = '#4ade80';
            btn.style.color = '#000';
            btn.style.borderColor = '#4ade80';
            form.reset();
        } else {
            btn.textContent = 'Ошибка, попробуйте ещё';
            btn.style.background = '#ef4444';
            btn.style.color = '#fff';
            btn.style.borderColor = '#ef4444';
        }
    } catch {
        btn.textContent = 'Ошибка сети';
        btn.style.background = '#ef4444';
        btn.style.color = '#fff';
    }

    setTimeout(() => {
        btn.textContent = 'ОТПРАВИТЬ ЗАЯВКУ';
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    }, 3000);
});
