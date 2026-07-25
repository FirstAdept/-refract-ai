// ===== PWA Service Worker =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// ===== i18n (RU/EN) =====
const translations = {
    ru: {
        'nav.projects': 'Решения',
        'nav.ind': 'Отрасли',
        'pains.label': '01 / Диагностика',
        'pains.title': 'С чем к нам обращаются чаще всего',
        'pain1.t': 'Обращения обрабатываются с задержкой',
        'pain1.d': 'Объём входящих запросов превышает пропускную способность отдела. Часть обращений остаётся без ответа в нерабочие часы и в пиковые периоды.',
        'pain2.t': 'Данные переносятся между системами вручную',
        'pain2.d': 'Сотрудники дублируют информацию из почты в учётную систему и обратно в отчётность. Ручной ввод расходует рабочее время и остаётся источником ошибок.',
        'pain3.t': 'Адаптация новых сотрудников занимает месяцы',
        'pain3.d': 'Экспертиза не формализована и хранится у опытных специалистов. При смене состава качество работы снижается, а регламенты приходится восстанавливать заново.',
        'pain4.t': 'Управленческие решения принимаются без опоры на данные',
        'pain4.d': 'Отчётность формируется вручную и поступает с задержкой. Информация в системах накоплена, но не превращается в основу для планирования.',
        'ind.label': '03 / Отрасли',
        'ind.title': 'Что автоматизируем в вашей сфере',
        'ind1.n': 'Розница и e-commerce',
        'ind1.a': 'Прогноз спроса и точки дозаказа',
        'ind1.b': 'Ассистент на все каналы: сайт, мессенджеры, маркетплейсы',
        'ind1.c': 'Автоописания и категоризация товаров',
        'ind2.n': 'Производство',
        'ind2.a': 'Планирование загрузки и закупок сырья',
        'ind2.b': 'Предсказание простоев по данным оборудования',
        'ind2.c': 'Обработка спецификаций и технической документации',
        'ind3.n': 'Логистика и дистрибуция',
        'ind3.a': 'Разбор накладных и актов без ручного ввода',
        'ind3.b': 'Оптимизация остатков по складам',
        'ind3.c': 'Ответы перевозчикам и статусы отгрузок',
        'ind4.n': 'Услуги и клиники',
        'ind4.a': 'Запись и напоминания без участия администратора',
        'ind4.b': 'Ответы на типовые вопросы 24/7',
        'ind4.c': 'Контроль качества диалогов с клиентами',
        'ind5.n': 'Финансы и бухгалтерия',
        'ind5.a': 'Обработка первички и сверка с учётной системой',
        'ind5.b': 'Прогноз кассовых разрывов',
        'ind5.c': 'Проверка договоров на расхождения',
        'ind6.n': 'Вашей сферы здесь нет?',
        'ind6.d': 'Опишите процесс — посмотрим, что в нём можно снять с людей.',
        'ind6.cta': 'Описать задачу →',
        'free.label': '05 / С чего начать',
        'free.title': 'Первый модуль — бесплатно',
        'free.lead': 'Мы не предлагаем внедрение без подтверждённого результата. Выбираем один процесс, собираем на нём работающий модуль и показываем эффект на ваших данных. Дальнейшее сотрудничество — по итогам, без обязательств на старте.',
        'free.cta': 'Забрать модуль',
        'free1.t': 'Разбор процесса',
        'free1.d': 'Созвон на час. Разбираем, где у вас уходит время, и выбираем участок с самой быстрой отдачей.',
        'free2.t': 'Рабочий модуль',
        'free2.d': 'Собираем решение под выбранный участок и запускаем на ваших реальных данных. Не презентация, а работающий инструмент.',
        'free3.t': 'Замер и решение',
        'free3.d': 'Считаем, сколько времени сэкономлено. Дальше вы решаете, масштабировать это на остальные процессы или нет.',
        'nav.approach': 'Подход',
        'nav.team': 'Команда',
        'nav.contact': 'Контакты',
        'hero.title': 'Внедряем ИИ<br>в процессы<br>вашего бизнеса',
        'hero.subtitle': 'Автоматизация рутины, AI-агенты и прогнозная аналитика.<br>Полный цикл: от аудита процессов до внедрения.',
        'hero.cta': 'Обсудить задачу',
        'hero.scroll': 'Ведите курсором',
        'stats.projects': 'Проектов реализовано',
        'stats.years': 'Лет на рынке',
        'stats.team': 'Специалистов в команде',
        'stats.return': '% клиентов возвращаются',
        'projects.label': '02 / Решения',
        'projects.title': 'Что мы автоматизируем',
        'approach.label': '04 / Подход',
        'approach.title': 'Как мы работаем',
        'team.label': '06 / Команда',
        'team.title': 'Люди, которые создают',
        'cta.title': 'Обсудим, что можно автоматизировать?',
        'cta.subtitle': 'Расскажите о своих процессах — покажем, где ИИ сэкономит время и деньги, и оценим сроки внедрения.',
        'form.name': 'Ваше имя',
        'form.phone': 'Телефон',
        'form.email': 'Email',
        'form.message': 'Опишите ваши процессы и задачи',
        'form.submit': 'Отправить заявку',
        'proj.docflow.tag': 'Автоматизация процессов',
        'proj.docflow.desc': 'Договоры, счета, заявки: ИИ распознаёт, извлекает данные, классифицирует и маршрутизирует документы без ручного разбора',
        'proj.agents.tag': 'AI-агенты',
        'proj.agents.desc': 'Чат-боты для поддержки и продаж: отвечают на типовые вопросы, квалифицируют лиды и передают сложные случаи людям',
        'proj.analytics.tag': 'Аналитика и прогнозы',
        'proj.analytics.desc': 'Прогноз спроса, управление запасами, дашборды для руководителей — решения на данных, а не на интуиции',
        'proj.more': 'Подробнее →',
        'step1.n': '01 / Аудит',
        'step2.n': '02 / Пилот',
        'step3.n': '03 / Внедрение',
        'step4.n': '04 / Партнёрство',
        'step1.title': 'Сначала изучаем ваши процессы',
        'step1.desc': 'Находим рутину и узкие места. Считаем, где ИИ даст измеримую экономию.',
        'step2.title': 'Запускаем прототип на ваших данных',
        'step2.desc': 'Две-четыре недели. Измеряем результат до того, как масштабировать.',
        'step3.title': 'Соединяем ИИ с вашими системами',
        'step3.desc': '1С, CRM, ERP. Обучаем сотрудников работе с новым инструментом.',
        'step4.title': 'Человек и машина работают вместе',
        'step4.desc': 'Мониторим качество, дообучаем модели, масштабируем на новые процессы.',
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
        'nav.projects': 'Solutions',
        'nav.ind': 'Industries',
        'pains.label': '01 / Diagnostics',
        'pains.title': 'What companies come to us with',
        'pain1.t': 'Enquiries are handled with delay',
        'pain1.d': 'Incoming volume exceeds the department\'s capacity. A share of enquiries goes unanswered outside business hours and during peak periods.',
        'pain2.t': 'Data moves between systems manually',
        'pain2.d': 'Staff duplicate information from email into the accounting system and back into reporting. Manual entry consumes working hours and remains a source of errors.',
        'pain3.t': 'Onboarding new staff takes months',
        'pain3.d': 'Expertise is undocumented and held by senior specialists. When the team changes, quality drops and procedures have to be rebuilt from scratch.',
        'pain4.t': 'Decisions are made without reliable data',
        'pain4.d': 'Reporting is compiled manually and arrives late. The data is accumulated in your systems but never becomes a basis for planning.',
        'ind.label': '03 / Industries',
        'ind.title': 'What we automate in your field',
        'ind1.n': 'Retail and e-commerce',
        'ind1.a': 'Demand forecasting and reorder points',
        'ind1.b': 'One assistant across site, messengers and marketplaces',
        'ind1.c': 'Automatic product copy and categorisation',
        'ind2.n': 'Manufacturing',
        'ind2.a': 'Capacity planning and raw material purchasing',
        'ind2.b': 'Downtime prediction from equipment data',
        'ind2.c': 'Processing specifications and technical documents',
        'ind3.n': 'Logistics and distribution',
        'ind3.a': 'Parsing waybills and delivery notes with no manual entry',
        'ind3.b': 'Stock optimisation across warehouses',
        'ind3.c': 'Carrier replies and shipment statuses',
        'ind4.n': 'Services and clinics',
        'ind4.a': 'Booking and reminders without a receptionist',
        'ind4.b': 'Answers to routine questions 24/7',
        'ind4.c': 'Quality control across client conversations',
        'ind5.n': 'Finance and accounting',
        'ind5.a': 'Processing source documents and reconciling with the ledger',
        'ind5.b': 'Cash gap forecasting',
        'ind5.c': 'Checking contracts for discrepancies',
        'ind6.n': 'Your field is not listed?',
        'ind6.d': 'Describe the process and we will see what can be taken off people.',
        'ind6.cta': 'Describe the task →',
        'free.label': '05 / Where to start',
        'free.title': 'The first module is free',
        'free.lead': 'We do not propose a rollout without a proven result. We select one process, build a working module on it and demonstrate the effect on your own data. Further cooperation follows from the outcome, with no commitment upfront.',
        'free.cta': 'Claim the module',
        'free1.t': 'Process review',
        'free1.d': 'A one-hour call. We map where your time goes and pick the area with the fastest payback.',
        'free2.t': 'A working module',
        'free2.d': 'We build a solution for that area and run it on your real data. Not a demo deck — a working tool.',
        'free3.t': 'Measure and decide',
        'free3.d': 'We count the hours saved. Then you decide whether to scale it to the rest of your processes.',
        'nav.approach': 'Approach',
        'nav.team': 'Team',
        'nav.contact': 'Contact',
        'hero.title': 'We bring AI<br>into your<br>business processes',
        'hero.subtitle': 'Routine automation, AI agents and predictive analytics.<br>Full cycle: from process audit to deployment.',
        'hero.cta': 'Discuss your case',
        'hero.scroll': 'Move your cursor',
        'stats.projects': 'Projects delivered',
        'stats.years': 'Years on market',
        'stats.team': 'Specialists in team',
        'stats.return': '% of clients return',
        'projects.label': '02 / Solutions',
        'projects.title': 'What we automate',
        'approach.label': '04 / Approach',
        'approach.title': 'How we work',
        'team.label': '06 / Team',
        'team.title': 'The people who create',
        'cta.title': 'Let\'s discuss what to automate?',
        'cta.subtitle': 'Tell us about your processes — we\'ll show where AI saves time and money, and estimate the timeline.',
        'form.name': 'Your name',
        'form.phone': 'Phone',
        'form.email': 'Email',
        'form.message': 'Describe your processes and goals',
        'form.submit': 'Send request',
        'proj.docflow.tag': 'Process automation',
        'proj.docflow.desc': 'Contracts, invoices, requests: AI recognizes, extracts data, classifies and routes documents with no manual sorting',
        'proj.agents.tag': 'AI agents',
        'proj.agents.desc': 'Chatbots for support and sales: answer routine questions, qualify leads and hand complex cases to humans',
        'proj.analytics.tag': 'Analytics & forecasts',
        'proj.analytics.desc': 'Demand forecasting, inventory management, executive dashboards — decisions driven by data, not gut feeling',
        'proj.more': 'Learn more →',
        'step1.n': '01 / Audit',
        'step2.n': '02 / Pilot',
        'step3.n': '03 / Deployment',
        'step4.n': '04 / Partnership',
        'step1.title': 'First we study your processes',
        'step1.desc': 'We find routine work and bottlenecks, and calculate where AI delivers measurable savings.',
        'step2.title': 'We launch a prototype on your data',
        'step2.desc': 'Two to four weeks. We measure the result before scaling it up.',
        'step3.title': 'We connect AI to your systems',
        'step3.desc': 'ERP, CRM, accounting. We train your team to work with the new tool.',
        'step4.title': 'People and machines work together',
        'step4.desc': 'We monitor quality, fine-tune models and scale to new processes.',
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

// ===== Neural network background (hero + team) =====
function initNeuralNet(canvasId, hostId, opts) {
    const cv = document.getElementById(canvasId);
    const host = document.getElementById(hostId);
    if (!cv || !host) return;

    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cfg = Object.assign({ density: 15500, link: 132, radius: 190, max: 96 }, opts || {});

    let W = 0, H = 0, nodes = [], links = [], pulses = [], visible = true;
    const mouse = { x: -9999, y: -9999, active: false };
    const rand = (a, b) => a + Math.random() * (b - a);

    function build() {
        const count = Math.max(26, Math.min(cfg.max, Math.round((W * H) / cfg.density)));
        nodes = [];
        for (let i = 0; i < count; i++) {
            nodes.push({
                x: rand(0, W), y: rand(0, H), hx: 0, hy: 0,
                vx: rand(-0.16, 0.16), vy: rand(-0.16, 0.16),
                r: rand(1.1, 2.6), e: 0, accent: Math.random() < 0.24
            });
        }
        pulses = [];
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = host.clientWidth; H = host.clientHeight;
        if (!W || !H) return;
        cv.width = Math.floor(W * dpr); cv.height = Math.floor(H * dpr);
        cv.style.width = W + 'px'; cv.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        build();
    }
    window.addEventListener('resize', resize);

    function nearest(x, y) {
        let best = null, bd = Infinity;
        for (const n of nodes) {
            const d = (n.x - x) * (n.x - x) + (n.y - y) * (n.y - y);
            if (d < bd) { bd = d; best = n; }
        }
        return best;
    }

    function spawn(x, y, burst) {
        const a = nearest(x, y);
        if (!a) return;
        const cands = nodes.filter(b => b !== a && Math.hypot(b.x - a.x, b.y - a.y) < cfg.link);
        for (const b of (burst ? cands.slice(0, 5) : cands.slice(0, 1))) {
            if (pulses.length > 80) break;
            pulses.push({ a: a, b: b, t: 0, sp: rand(0.012, 0.026), hop: burst ? 2 : 1 });
        }
    }

    host.addEventListener('mousemove', e => {
        const r = host.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
        if (Math.random() < 0.16) spawn(mouse.x, mouse.y);
    });
    host.addEventListener('mouseleave', () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });
    host.addEventListener('touchmove', e => {
        const r = host.getBoundingClientRect(), t = e.touches[0];
        mouse.x = t.clientX - r.left; mouse.y = t.clientY - r.top; mouse.active = true;
    }, { passive: true });
    host.addEventListener('click', e => {
        const r = host.getBoundingClientRect();
        spawn(e.clientX - r.left, e.clientY - r.top, true);
    });

    new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(host);

    function step() {
        for (const n of nodes) {
            if (!reduce) { n.x += n.vx; n.y += n.vy; }
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
            n.x = Math.max(0, Math.min(W, n.x));
            n.y = Math.max(0, Math.min(H, n.y));
            let pull = 0;
            if (mouse.active) {
                const dx = mouse.x - n.x, dy = mouse.y - n.y, d2 = dx * dx + dy * dy;
                if (d2 < cfg.radius * cfg.radius) {
                    pull = 1 - Math.sqrt(d2) / cfg.radius;
                    n.hx += dx * 0.0016 * pull; n.hy += dy * 0.0016 * pull;
                }
            }
            n.hx *= 0.90; n.hy *= 0.90;
            n.x += n.hx; n.y += n.hy;
            n.e += (pull - n.e) * 0.12;
        }
        links.length = 0;
        for (let i = 0; i < nodes.length; i++) {
            for (let k = i + 1; k < nodes.length; k++) {
                const a = nodes[i], b = nodes[k];
                const dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < cfg.link) links.push({ a: a, b: b, d: d });
            }
        }
        for (let i = pulses.length - 1; i >= 0; i--) {
            const p = pulses[i];
            p.t += p.sp;
            if (p.t >= 1) {
                if (p.hop > 0) {
                    const next = nodes.filter(c => c !== p.b && c !== p.a && Math.hypot(c.x - p.b.x, c.y - p.b.y) < cfg.link);
                    if (next.length && pulses.length < 80) {
                        pulses.push({ a: p.b, b: next[Math.floor(Math.random() * next.length)], t: 0, sp: p.sp, hop: p.hop - 1 });
                    }
                }
                pulses.splice(i, 1);
            }
        }
        if (!reduce && Math.random() < 0.045) spawn(rand(0, W), rand(0, H));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (const l of links) {
            const t = 1 - l.d / cfg.link;
            const heat = Math.max(l.a.e, l.b.e);
            ctx.strokeStyle = 'rgba(' + Math.round(140 + heat * 115) + ',' + Math.round(136 + heat * 120) + ',' + Math.round(210 + heat * 45) + ',' + (t * 0.20 + heat * 0.42) + ')';
            ctx.lineWidth = 0.6 + heat * 0.9;
            ctx.beginPath(); ctx.moveTo(l.a.x, l.a.y); ctx.lineTo(l.b.x, l.b.y); ctx.stroke();
        }
        for (const p of pulses) {
            const e = p.t < 0.5 ? 2 * p.t * p.t : 1 - Math.pow(-2 * p.t + 2, 2) / 2;
            const x = p.a.x + (p.b.x - p.a.x) * e, y = p.a.y + (p.b.y - p.a.y) * e;
            const fade = Math.sin(p.t * Math.PI);
            ctx.fillStyle = 'rgba(155,225,203,' + (fade * 0.95) + ')';
            ctx.beginPath(); ctx.arc(x, y, 2.1, 0, 6.2832); ctx.fill();
            ctx.strokeStyle = 'rgba(155,225,203,' + (fade * 0.3) + ')';
            ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(p.a.x, p.a.y); ctx.lineTo(x, y); ctx.stroke();
        }
        for (const n of nodes) {
            const base = n.accent ? [127, 119, 221] : [168, 166, 196];
            const g = n.e;
            ctx.fillStyle = 'rgba(' + Math.round(base[0] + (255 - base[0]) * g) + ',' + Math.round(base[1] + (255 - base[1]) * g) + ',' + Math.round(base[2] + (255 - base[2]) * g) + ',' + (0.45 + g * 0.55) + ')';
            ctx.beginPath(); ctx.arc(n.x, n.y, n.r + g * 2.4, 0, 6.2832); ctx.fill();
            if (g > 0.28) {
                ctx.strokeStyle = 'rgba(155,225,203,' + ((g - 0.28) * 0.5) + ')';
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 7 + g * 9, 0, 6.2832); ctx.stroke();
            }
        }
    }

    function loop() {
        if (visible) { step(); draw(); }
        requestAnimationFrame(loop);
    }
    resize();
    loop();
}

initNeuralNet('heroNet', 'hero');
initNeuralNet('teamNet', 'team', { density: 22000, max: 60, radius: 165 });

// ===== Logo: снять пунктир после отрисовки =====
(function () {
    const logo = document.querySelector('.hero__logo');
    if (!logo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        logo.classList.add('lg-done');
        return;
    }
    setTimeout(() => logo.classList.add('lg-done'), 2900);
})();

// ===== Approach: scroll-driven handshake sequence (no dependencies) =====
(function () {
    const cv = document.getElementById('shakeCanvas');
    const section = document.querySelector('.approach');
    if (!cv || !section) return;

    const steps = [...document.querySelectorAll('.approach-step')];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        steps.forEach(s => s.classList.add('approach-step--on'));
        return;
    }

    const TOTAL = 113;
    const ctx = cv.getContext('2d');
    const prog = document.getElementById('approachProg');
    const stage = section.querySelector('.approach__stage');
    const imgs = [];

    const load = document.createElement('div');
    load.className = 'approach__load';
    load.textContent = 'Загрузка';
    if (stage) stage.appendChild(load);

    let loaded = 0, pos = 0, target = 0, visible = false;

    const ready = i => { const m = imgs[i]; return m && m.complete && m.naturalWidth > 0; };

    function draw(f) {
        const i = Math.max(0, Math.min(TOTAL - 1, Math.floor(f)));
        const frac = f - i;
        const j = Math.min(TOTAL - 1, i + 1);
        ctx.globalAlpha = 1;
        if (ready(i)) ctx.drawImage(imgs[i], 0, 0, cv.width, cv.height);
        if (frac > 0.01 && ready(j)) {
            ctx.globalAlpha = frac;
            ctx.drawImage(imgs[j], 0, 0, cv.width, cv.height);
        }
        ctx.globalAlpha = 1;
    }

    for (let i = 0; i < TOTAL; i++) {
        const im = new Image();
        im.onload = () => {
            loaded++;
            if (loaded === 1) draw(0);
            if (loaded === TOTAL) load.classList.add('approach__load--done');
        };
        im.onerror = () => {
            loaded++;
            if (loaded === TOTAL) load.classList.add('approach__load--done');
        };
        im.src = 'assets/handshake/h' + String(i).padStart(3, '0') + '.webp';
        imgs.push(im);
    }

    function setStep(p) {
        const idx = Math.max(0, Math.min(steps.length - 1, Math.floor(p * steps.length)));
        steps.forEach((s, i) => s.classList.toggle('approach-step--on', i === idx));
    }
    setStep(0);

    const vh = () => window.innerHeight;

    function layout() {
        const r = section.getBoundingClientRect();
        const h = vh();
        if (r.top <= 0 && r.bottom >= h) {
            stage.classList.add('approach__stage--pin');
            stage.classList.remove('approach__stage--end');
        } else if (r.bottom < h) {
            stage.classList.remove('approach__stage--pin');
            stage.classList.add('approach__stage--end');
        } else {
            stage.classList.remove('approach__stage--pin', 'approach__stage--end');
        }
        const total = r.height - h;
        return total <= 0 ? 0 : Math.max(0, Math.min(1, -r.top / total));
    }

    function onScroll() {
        const p = layout();
        target = p * (TOTAL - 1);
        setStep(p);
        if (prog) prog.style.width = (p * 100).toFixed(1) + '%';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: 0 })
        .observe(section);

    function loop() {
        if (visible || Math.abs(target - pos) > 0.001) {
            pos += (target - pos) * 0.14;
            if (Math.abs(target - pos) < 0.001) pos = target;
            draw(pos);
        }
        requestAnimationFrame(loop);
    }

    onScroll();
    loop();
})();

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
const parallaxElements = document.querySelectorAll('.project-card__bg, .stat__number');

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

// ===== Header scroll + Progress bar =====
const header = document.getElementById('header');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }

    // Scroll progress
    if (scrollProgress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollY / docHeight) * 100;
        scrollProgress.style.width = Math.min(progress, 100) + '%';
    }
}, { passive: true });

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
