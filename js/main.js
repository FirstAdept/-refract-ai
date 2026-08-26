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
        'ind.label': '04 / Отрасли',
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
        'free.label': '06 / С чего начать',
        'free.title': 'Первый модуль — бесплатно',
        'free.lead': 'Мы не предлагаем внедрение без подтверждённого результата. Выбираем один процесс, собираем на нём работающий модуль и показываем эффект на ваших данных. Дальнейшее сотрудничество — по итогам, без обязательств на старте.',
        'free.cta': 'Заполнить бриф',
        'free.alt': 'Просто написать',
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
        'hero.brief': 'Пройти бриф · 2 минуты',
        'hero.scroll': 'Ведите курсором',
        'hero.orb': 'Нажмите на кристалл',
        'hero.orbSub': '2 минуты · план автоматизации от ИИ',
        'chat.mail': 'Отправить на почту',
        'chat.team': 'Обсудить с командой',
        'chat.again': 'Заново',
        'chat.ph': 'Ваш ответ…',
        'chat.note': 'Фейбл — ИИ. План — отправная точка, а не оферта.',
        'chat.demo': 'Демо-сценарий',
        'stats.projects': 'Проектов реализовано',
        'stats.processes': 'Процессов автоматизировано',
        'stats.team': 'Специалистов в команде',
        'stats.return': '% клиентов возвращаются',
        'projects.label': '02 / Решения',
        'cases.label': '03 / Работы',
        'cases.title': 'Разборы, которые мы приносим на первую встречу',
        'cases.lead': 'Прежде чем что-то предлагать, мы разбираем бизнес по открытым источникам и показываем, где рутина стоит денег. Ниже — два таких разбора целиком.',
        'case.agro.tag': 'Агропром · оффер по открытым данным',
        'case.agro.t': 'ООО «Агроном-сад»',
        'case.agro.d': '2 500 га интенсивных садов, до 40 000 т яблок в год, 500+ сезонных рабочих и линия сортировки, которая делает 150 снимков каждого плода. Нашли шесть мест вокруг производства, где всё держится на звонках и ведомостях, и собрали четыре контура автоматизации — от сезонного найма до прогноза выхода партии.',
        'case.agro.m1': '13 экранов',
        'case.agro.m2': 'по открытым источникам',
        'case.agro.m3': 'август 2026',
        'case.rampa.tag': 'Логистика · собственный продукт',
        'case.rampa.t': 'РАМПА — кабинет перевозчика',
        'case.rampa.d': 'Живой экран водителя: рейс, шкала простоя, документы. Простои на приёмке становятся оплачиваемыми, документы уходят в день доставки, статусы — без звонков. Кабинеты водителя, логиста и заказчика.',
        'case.rampa.m1': 'PWA',
        'case.rampa.m2': 'OCR и геолокация',
        'case.rampa.m3': 'в работе',
        'cases.cta': 'Смотреть целиком →',
        'projects.title': 'Что мы автоматизируем',
        'approach.label': '05 / Подход',
        'team.label': '07 / Команда',
        'team.title': 'Люди, которые создают',
        'cta.title': 'Обсудим, что можно автоматизировать?',
        'cta.subtitle': 'Расскажите о своих процессах — покажем, где ИИ сэкономит время и деньги, и оценим сроки внедрения.',
        'form.name': 'Ваше имя',
        'form.phone': 'Телефон',
        'form.email': 'Email',
        'form.message': 'Опишите ваши процессы и задачи',
        'form.submit': 'Отправить заявку',
        'proj.docflow.t': 'AI-документооборот',
        'proj.agents.t': 'AI-ассистенты 24/7',
        'proj.analytics.t': 'Прогнозная аналитика',
        'stack.erp': '1С / CRM',
        'proj.docflow.tag': 'Автоматизация процессов',
        'proj.docflow.desc': 'Договоры, счета, заявки: ИИ распознаёт, извлекает данные, классифицирует и маршрутизирует документы без ручного разбора',
        'proj.agents.tag': 'AI-агенты',
        'proj.agents.desc': 'Чат-боты для поддержки и продаж: отвечают на типовые вопросы, квалифицируют лиды и передают сложные случаи людям',
        'proj.analytics.tag': 'Аналитика и прогнозы',
        'proj.analytics.desc': 'Прогноз спроса, управление запасами, дашборды для руководителей — решения на данных, а не на интуиции',
        'proj.rampa.t': 'РАМПА — кабинет перевозчика',
        'proj.rampa.tag': 'Отраслевой продукт',
        'proj.rampa.desc': 'Простои на приёмке становятся оплачиваемыми, документы уходят в день доставки, статусы — без звонков. Кабинеты водителя, логиста и заказчика',
        'stack.geo': 'Геолокация',
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
        'ind.label': '04 / Industries',
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
        'free.label': '06 / Where to start',
        'free.title': 'The first module is free',
        'free.lead': 'We do not propose a rollout without a proven result. We select one process, build a working module on it and demonstrate the effect on your own data. Further cooperation follows from the outcome, with no commitment upfront.',
        'free.cta': 'Fill in the brief',
        'free.alt': 'Just write to us',
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
        'hero.brief': 'Take the brief · 2 min',
        'hero.scroll': 'Move your cursor',
        'hero.orb': 'Tap the crystal',
        'hero.orbSub': '2 minutes · an AI-built automation plan',
        'chat.mail': 'Send to email',
        'chat.team': 'Talk to the team',
        'chat.again': 'Start over',
        'chat.ph': 'Your answer…',
        'chat.note': 'Fable is an AI. The plan is a starting point, not an offer.',
        'chat.demo': 'Demo scenario',
        'stats.projects': 'Projects delivered',
        'stats.processes': 'Processes automated',
        'stats.team': 'Specialists in team',
        'stats.return': '% of clients return',
        'projects.label': '02 / Solutions',
        'cases.label': '03 / Work',
        'cases.title': 'The analysis we bring to the first meeting',
        'cases.lead': 'Before proposing anything, we study the business from public sources and show where routine costs money.',
        'case.agro.tag': 'Agriculture · offer from public data',
        'case.agro.t': 'Agronom-Sad',
        'case.agro.d': '2,500 hectares of intensive orchards, up to 40,000 tonnes of apples a year, 500+ seasonal workers and a sorting line that takes 150 images of every fruit.',
        'case.agro.m1': '13 screens',
        'case.agro.m2': 'public sources only',
        'case.agro.m3': 'August 2026',
        'case.rampa.tag': 'Logistics · our own product',
        'case.rampa.t': 'RAMPA — carrier workspace',
        'case.rampa.d': 'A live driver screen: trip, idle-time meter, documents. Idle time becomes billable, statuses need no calls.',
        'case.rampa.m1': 'PWA',
        'case.rampa.m2': 'OCR and geolocation',
        'case.rampa.m3': 'in progress',
        'cases.cta': 'See the full deck →',
        'projects.title': 'What we automate',
        'approach.label': '05 / Approach',
        'team.label': '07 / Team',
        'team.title': 'The people who create',
        'cta.title': 'Let\'s discuss what to automate?',
        'cta.subtitle': 'Tell us about your processes — we\'ll show where AI saves time and money, and estimate the timeline.',
        'form.name': 'Your name',
        'form.phone': 'Phone',
        'form.email': 'Email',
        'form.message': 'Describe your processes and goals',
        'form.submit': 'Send request',
        'proj.docflow.t': 'AI document flow',
        'proj.agents.t': 'AI assistants 24/7',
        'proj.analytics.t': 'Predictive analytics',
        'stack.erp': 'ERP / CRM',
        'proj.docflow.tag': 'Process automation',
        'proj.docflow.desc': 'Contracts, invoices, requests: AI recognizes, extracts data, classifies and routes documents with no manual sorting',
        'proj.agents.tag': 'AI agents',
        'proj.agents.desc': 'Chatbots for support and sales: answer routine questions, qualify leads and hand complex cases to humans',
        'proj.analytics.tag': 'Analytics & forecasts',
        'proj.analytics.desc': 'Demand forecasting, inventory management, executive dashboards — decisions driven by data, not gut feeling',
        'proj.rampa.t': 'RAMPA — carrier cabinet',
        'proj.rampa.tag': 'Industry product',
        'proj.rampa.desc': 'Dock detention becomes billable, PODs arrive on delivery day, status updates need no phone calls. Cabinets for driver, dispatcher and shipper',
        'stack.geo': 'Geolocation',
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

// ===== Rotating 3D crystal (logo solid) =====
(function () {
    const mounts = [...document.querySelectorAll('[data-prism]')];
    if (!mounts.length) return;

    const R = 30.75, YU = -19.1, YL = 18.5, YT = -36.4, YB = 36.4;
    const MODEL_W = 61.5;
    const PHI = 20 * Math.PI / 180;
    const cosP = Math.cos(PHI), sinP = Math.sin(PHI);

    const V = [];
    V.push([0, YT, 0]);                                  // 0  верхняя вершина
    for (let i = 0; i < 6; i++) {                        // 1..6  верхнее кольцо
        const a = i * Math.PI / 3;
        V.push([R * Math.cos(a), YU, R * Math.sin(a)]);
    }
    for (let i = 0; i < 6; i++) {                        // 7..12 нижнее кольцо
        const a = i * Math.PI / 3;
        V.push([R * Math.cos(a), YL, R * Math.sin(a)]);
    }
    V.push([0, YB, 0]);                                  // 13 нижняя вершина

    const FACES = [];
    for (let i = 0; i < 6; i++) {
        const n = (i + 1) % 6;
        FACES.push([0, 1 + i, 1 + n]);                   // корона
        FACES.push([1 + i, 7 + i, 7 + n, 1 + n]);        // пояс
        FACES.push([13, 7 + n, 7 + i]);                  // павильон
    }

    const LIGHT = (() => {
        const v = [-0.35, -0.72, 0.6];
        const m = Math.hypot(v[0], v[1], v[2]);
        return [v[0] / m, v[1] / m, v[2] / m];
    })();

    // палитра бренда: глубокий фиолетовый в тени, мятный на свету
    const DARK = [38, 34, 66], MID = [98, 90, 170], LIT = [155, 225, 203];

    function shade(k) {
        let c;
        if (k < 0.55) {
            const u = k / 0.55;
            c = DARK.map((d, i) => d + (MID[i] - d) * u);
        } else {
            const u = (k - 0.55) / 0.45;
            c = MID.map((d, i) => d + (LIT[i] - d) * u);
        }
        return 'rgb(' + c.map(n => Math.round(n)).join(',') + ')';
    }

    function rot(p, ry, rx) {
        let [x, y, z] = p;
        let c = Math.cos(ry), s = Math.sin(ry);
        let nx = x * c - z * s, nz = x * s + z * c;
        x = nx; z = nz;
        c = Math.cos(rx); s = Math.sin(rx);
        const ny = y * c - z * s; nz = y * s + z * c;
        return [x, ny, nz];
    }

    const NS = 'http://www.w3.org/2000/svg';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = mounts.map(g => {
        const [cx, cy, size] = g.dataset.prism.split(',').map(Number);
        const speed = parseFloat(g.dataset.speed || '1');
        const phase = parseFloat(g.dataset.phase || '0');
        const s = size / MODEL_W;

        const wrap = document.createElementNS(NS, 'g');
        wrap.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + s.toFixed(4) + ')');

        const polys = FACES.map(() => {
            const p = document.createElementNS(NS, 'polygon');
            p.setAttribute('stroke-width', (1.1 / s).toFixed(2));
            p.setAttribute('stroke-linejoin', 'round');
            wrap.appendChild(p);
            return p;
        });
        g.appendChild(wrap);

        return { polys, speed, phase, visible: true, host: g.closest('section') || g };
    });

    items.forEach(it => {
        new IntersectionObserver(es => { it.visible = es[0].isIntersecting; }, { threshold: 0 })
            .observe(it.host);
    });

    function render(it, t) {
        const ry = t;
        const rx = Math.sin(t * 0.53) * 0.42 - 0.12;     // кувырок вокруг второй оси

        const P = V.map(v => {
            const r = rot(v, ry, rx);
            return { x: r[0], y: r[1] * cosP + r[2] * sinP, z: r[2] * cosP - r[1] * sinP, w: r };
        });

        const drawn = FACES.map((f, idx) => {
            const a = P[f[0]].w, b = P[f[1]].w, c = P[f[2]].w;
            const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
            const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
            let n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
            const m = Math.hypot(n[0], n[1], n[2]) || 1;
            n = [n[0] / m, n[1] / m, n[2] / m];
            let k = n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2];
            k = Math.max(0, Math.abs(k));
            const depth = f.reduce((acc, i) => acc + P[i].z, 0) / f.length;
            const pts = f.map(i => P[i].x.toFixed(2) + ',' + P[i].y.toFixed(2)).join(' ');
            const back = n[2] < 0;          // грань отвёрнута от камеры
            return { idx, depth, k, pts, back };
        }).sort((p, q) => p.depth - q.depth);

        drawn.forEach((d, order) => {
            const el = it.polys[order];
            el.setAttribute('points', d.pts);
            el.setAttribute('fill', shade(d.k));
            el.setAttribute('fill-opacity', d.back ? '0.24' : '0.82');
            el.setAttribute('stroke', d.back ? 'rgba(155,225,203,0.35)' : '#ffffff');
            el.setAttribute('stroke-opacity', d.back ? '1' : '0.85');
        });
    }

    const stat = document.querySelector('.lg-prism-static');
    if (stat) stat.style.display = 'none';

    if (reduce) {
        items.forEach(it => render(it, 0));
        return;
    }

    const t0 = performance.now();
    function loop(now) {
        const sec = (now - t0) / 1000;
        for (const it of items) {
            if (!it.visible) continue;
            render(it, sec * it.speed * 0.38 + it.phase);
        }
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
})();

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

/* ============ Фейбл: кристалл-чат на первом экране ============ */
(function(){
  if(!document.getElementById('crystal')||!document.getElementById('chatLayer'))return;
/* ---------- кристалл: живой объект ---------- */
  const crystal=(function(){
    const g=document.getElementById('crystal'),halo=document.getElementById('halo'),
          orbEl=document.getElementById('orb');
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const NS='http://www.w3.org/2000/svg';
    const R=30.75,YU=-19.1,YL=18.5,YT=-36.4,YB=36.4,PHI=20*Math.PI/180;
    const cosP=Math.cos(PHI),sinP=Math.sin(PHI);
  
    const V=[[0,YT,0]];
    for(let i=0;i<6;i++){const a=i*Math.PI/3;V.push([R*Math.cos(a),YU,R*Math.sin(a)]);}
    for(let i=0;i<6;i++){const a=i*Math.PI/3;V.push([R*Math.cos(a),YL,R*Math.sin(a)]);}
    V.push([0,YB,0]);
    const F=[];for(let i=0;i<6;i++){const n=(i+1)%6;F.push([0,1+i,1+n],[1+i,7+i,7+n,1+n],[13,7+n,7+i]);}
    const L=(()=>{const v=[-.35,-.72,.6],m=Math.hypot(...v);return v.map(x=>x/m);})();
    const DK=[38,34,66],MD=[98,90,170],LT=[155,225,203];
    const shade=k=>{k=Math.max(0,Math.min(1,k));let c;
      if(k<.55){const u=k/.55;c=DK.map((d,i)=>d+(MD[i]-d)*u);}
      else{const u=(k-.55)/.45;c=MD.map((d,i)=>d+(LT[i]-d)*u);}
      return 'rgb('+c.map(Math.round).join(',')+')';};
    const rot=(p,ry,rx)=>{let[x,y,z]=p,c=Math.cos(ry),s=Math.sin(ry),nx=x*c-z*s,nz=x*s+z*c;x=nx;z=nz;
      c=Math.cos(rx);s=Math.sin(rx);const ny=y*c-z*s;nz=y*s+z*c;return[x,ny,nz];};
    const mk=(tag,parent)=>{const e=document.createElementNS(NS,tag);parent.appendChild(e);return e;};
  
    /* слои: хвосты частиц сзади → призрак → грани → частицы спереди → блики */
    const root=mk('g',g);root.setAttribute('transform','translate(31.75 35.26)');
    const gOrbBack=mk('g',root), gGhost=mk('g',root), gFaces=mk('g',root),
          gOrbFront=mk('g',root), gSparks=mk('g',root);
  
    const ghostA=mk('polygon',gGhost), ghostB=mk('polygon',gGhost);
    ghostA.setAttribute('fill','none');ghostA.setAttribute('stroke','#7f77dd');
    ghostB.setAttribute('fill','none');ghostB.setAttribute('stroke','#9be1cb');
    for(const gh of[ghostA,ghostB]){gh.setAttribute('stroke-width','1');gh.setAttribute('opacity','0');}
  
    const polys=F.map(()=>{const p=mk('polygon',gFaces);
      p.setAttribute('stroke-width','1.1');p.setAttribute('stroke-linejoin','round');return p;});
  
    /* орбитальные частицы со шлейфами */
    const TRAIL=7;
    const orbs=[
      {r:46,incl:.45,ph:0,   sp:.9, col:'155,225,203'},
      {r:54,incl:-.32,ph:2.1,sp:.62,col:'127,119,221'},
      {r:61,incl:.15,ph:4.2, sp:.45,col:'155,225,203'}
    ].map(o=>{
      o.trail=[];o.dots=[];
      for(let i=0;i<TRAIL;i++){const c=mk('circle',gOrbBack);c.setAttribute('r','1');o.dots.push(c);}
      o.head=mk('circle',gOrbBack);
      return o;
    });
  
    /* пул бликов: четырёхлучевые звёздочки на ярких гранях */
    const sparks=Array.from({length:3},()=>{
      const grp=mk('g',gSparks);grp.setAttribute('opacity','0');
      const l1=mk('line',grp),l2=mk('line',grp);
      for(const l of[l1,l2]){l.setAttribute('stroke','#fff');l.setAttribute('stroke-width','.8');
        l.setAttribute('stroke-linecap','round');}
      l1.setAttribute('x1','-4');l1.setAttribute('x2','4');l1.setAttribute('y1','0');l1.setAttribute('y2','0');
      l2.setAttribute('x1','0');l2.setAttribute('x2','0');l2.setAttribute('y1','-4');l2.setAttribute('y2','4');
      return {grp,life:0};
    });
    let sparkTimer=0;
  
    /* выпуклая оболочка для хроматического дубля */
    function hull(pts){
      pts=pts.slice().sort((p,q)=>p.x-q.x||p.y-q.y);
      const cross=(o,a,b)=>(a.x-o.x)*(b.y-o.y)-(a.y-o.y)*(b.x-o.x);
      const lo=[];for(const p of pts){while(lo.length>1&&cross(lo[lo.length-2],lo[lo.length-1],p)<=0)lo.pop();lo.push(p);}
      const up=[];for(let i=pts.length-1;i>=0;i--){const p=pts[i];
        while(up.length>1&&cross(up[up.length-2],up[up.length-1],p)<=0)up.pop();up.push(p);}
      return lo.slice(0,-1).concat(up.slice(0,-1));
    }
  
    /* наклон к курсору */
    const tilt={x:0,y:0,tx:0,ty:0};
    addEventListener('mousemove',e=>{
      const r=orbEl.getBoundingClientRect();
      const cx=r.left+r.width/2,cy=r.top+r.height/2;
      tilt.tx=Math.max(-1,Math.min(1,(e.clientX-cx)/240));
      tilt.ty=Math.max(-1,Math.min(1,(e.clientY-cy)/240));
    });
  
    const state={speed:.38,boost:0};
    const t0=performance.now();let t=0,last=t0;
  
    function frame(now){
      now=now||t0;let dt=(now-last)/1000;last=now;
      if(dt>0.1)dt=0.016;
      state.boost*=.95;
      t+=dt*.85*(state.speed+state.boost);
  
      tilt.x+=(tilt.tx-tilt.x)*.06;
      tilt.y+=(tilt.ty-tilt.y)*.06;
  
      const bob=reduce?0:Math.sin(t*1.7)*2.2;
      root.setAttribute('transform','translate(31.75 '+(35.26+bob).toFixed(2)+')');
  
      const ry=t+tilt.x*.35;
      const rx=Math.sin(t*.53)*.42-.12+tilt.y*.3;
  
      const P=V.map(v=>{const r=rot(v,ry,rx);
        return{x:r[0],y:r[1]*cosP+r[2]*sinP,z:r[2]*cosP-r[1]*sinP,w:r};});
  
      /* грани с мерцанием */
      F.map((f,idx)=>{const a=P[f[0]].w,b=P[f[1]].w,c=P[f[2]].w;
        const u=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],v=[c[0]-a[0],c[1]-a[1],c[2]-a[2]];
        let n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
        const m=Math.hypot(...n)||1;n=n.map(x=>x/m);
        let k=Math.abs(n[0]*L[0]+n[1]*L[1]+n[2]*L[2]);
        k+= .14*Math.sin(t*2.3+idx*1.05) + state.boost*.18;
        const cx=f.reduce((s,ix)=>s+P[ix].x,0)/f.length;
        const cy=f.reduce((s,ix)=>s+P[ix].y,0)/f.length;
        return{d:f.reduce((s,ix)=>s+P[ix].z,0)/f.length,k,back:n[2]<0,cx,cy,
          pts:f.map(ix=>P[ix].x.toFixed(1)+','+P[ix].y.toFixed(1)).join(' ')};})
        .sort((a,b)=>a.d-b.d)
        .forEach((d,o)=>{const el=polys[o];el.setAttribute('points',d.pts);
          el.setAttribute('fill',shade(d.k));el.setAttribute('fill-opacity',d.back?'.24':'.82');
          el.setAttribute('stroke',d.back?'rgba(155,225,203,.35)':'#fff');
          el._front=!d.back;el._k=d.k;el._cx=d.cx;el._cy=d.cy;});
  
      /* хроматический дубль при разгоне */
      const off=state.boost*2.6;
      if(off>.12){
        const h=hull(P.map(p=>({x:p.x,y:p.y})));
        const str=h.map(p=>p.x.toFixed(1)+','+p.y.toFixed(1)).join(' ');
        ghostA.setAttribute('points',str);ghostB.setAttribute('points',str);
        ghostA.setAttribute('transform','translate('+(-off)+' '+(off*.4)+')');
        ghostB.setAttribute('transform','translate('+off+' '+(-off*.4)+')');
        const go=Math.min(.6,state.boost*.55);
        ghostA.setAttribute('opacity',go);ghostB.setAttribute('opacity',go);
      }else{ghostA.setAttribute('opacity','0');ghostB.setAttribute('opacity','0');}
  
      /* частицы на орбитах */
      for(const o of orbs){
        const ang=o.ph+t*o.sp*(1+state.boost*.8);
        const p3=[o.r*Math.cos(ang),0,o.r*Math.sin(ang)];
        const ci=Math.cos(o.incl),si=Math.sin(o.incl);
        const q=[p3[0],p3[2]*si,p3[2]*ci];
        const pr={x:q[0],y:q[1]*cosP+q[2]*sinP,z:q[2]*cosP-q[1]*sinP};
        o.trail.unshift({x:pr.x,y:pr.y});
        if(o.trail.length>TRAIL)o.trail.pop();
        const front=pr.z<0;
        const parent=front?gOrbFront:gOrbBack;
        if(o.head.parentNode!==parent)parent.appendChild(o.head);
        o.head.setAttribute('cx',pr.x.toFixed(1));o.head.setAttribute('cy',pr.y.toFixed(1));
        o.head.setAttribute('r',(front?1.9:1.3)+state.boost*.6);
        o.head.setAttribute('fill','rgba('+o.col+','+(front?.95:.4)+')');
        o.dots.forEach((d,i)=>{
          const tp=o.trail[i+1];
          if(!tp){d.setAttribute('r','0');return;}
          if(d.parentNode!==parent)parent.appendChild(d);
          d.setAttribute('cx',tp.x.toFixed(1));d.setAttribute('cy',tp.y.toFixed(1));
          d.setAttribute('r',(1.3*(1-i/TRAIL)).toFixed(2));
          d.setAttribute('fill','rgba('+o.col+','+((front?.5:.22)*(1-i/TRAIL)).toFixed(2)+')');
        });
      }
  
      /* блики */
      sparkTimer-=dt;
      if(sparkTimer<=0&&!reduce){
        sparkTimer=.9+Math.random()*1.4-Math.min(.6,state.boost*.4);
        const bright=polys.filter(p=>p._front&&p._k>.62);
        const slot=sparks.find(s=>s.life<=0);
        if(bright.length&&slot){
          const p=bright[(Math.random()*bright.length)|0];
          slot.grp.setAttribute('transform','translate('+p._cx.toFixed(1)+' '+p._cy.toFixed(1)+')');
          slot.life=1;
        }
      }
      for(const sp of sparks){
        if(sp.life>0){
          sp.life-=dt*2.2;
          const l=Math.max(0,sp.life);
          sp.grp.setAttribute('opacity',(l*.9).toFixed(2));
          const sc=.5+ (1-l)*1.1;
          const tr=sp.grp.getAttribute('transform').split(' scale')[0];
          sp.grp.setAttribute('transform',tr+' scale('+sc.toFixed(2)+') rotate('+((1-l)*40).toFixed(0)+')');
        }else sp.grp.setAttribute('opacity','0');
      }
  
      /* гало дышит и вспыхивает */
      if(halo){
        const breath=.42+Math.sin(t*1.1)*.1+Math.min(.5,state.boost*.5);
        halo.style.opacity=breath.toFixed(2);
        const sc=1+Math.min(.35,state.boost*.3);
        halo.style.transform='translate(-50%,-50%) scale('+sc.toFixed(2)+')';
      }
  
      if(!reduce)requestAnimationFrame(frame);
    }
    frame();
    if(reduce){state.boost=0;}
    return state;
  })();
  
  /* ---------- каталог, цены-заглушки ---------- */
  const CATALOG={
    'M-01':{name:'События с геометкой',does:'Время + координаты + фото в момент события',price:60000},
    'M-02':{name:'Документы: распознавание и сверка',does:'OCR + LLM достают данные из сканов и находят расхождения',price:120000},
    'M-03':{name:'Голос → структура',does:'Речь сотрудника превращается в статус, причину, срок',price:90000},
    'M-04':{name:'Автоответы по статусу',does:'Клиент узнаёт статус заказа без звонка менеджеру',price:80000},
    'M-05':{name:'Прогноз срыва срока',does:'ML предупреждает о риске опоздания заранее',price:150000},
    'M-06':{name:'Ролевые кабинеты (PWA)',does:'Кабинеты по ролям, установка по ссылке',price:180000},
    'M-07':{name:'Прозрачный заработок',does:'Исполнитель видит свой заработок онлайн',price:90000},
    'M-08':{name:'Каналы уведомлений',does:'Telegram, SMS, почта — события находят людей',price:40000},
    'M-09':{name:'Видеоаналитика площадки',does:'ИИ разбирает записи камер: нарушения техпроцесса, простои, посторонние предметы',price:220000},
    'M-10':{name:'Зрение на линии',does:'Машинное зрение считает, сортирует и отбраковывает прямо на потоке',price:340000},
    'M-11':{name:'Мониторинг состояния животных',does:'Камеры и датчики следят за активностью, поедаемостью и ранними признаками болезни',price:380000},
    'M-12':{name:'Телеметрия оборудования',does:'Съём данных со станков и техники: наработка, простои, предиктивное обслуживание',price:260000},
    'M-13':{name:'Роботизация участка',does:'Связка ИИ с механикой: автоподача, паллетайзер, конвейер под ваш техпроцесс',price:450000}
  };
  const fmt=n=>n.toLocaleString('ru-RU')+' ₽';
  
  /* ---------- диалог ---------- */
  (function(){
    const stage=document.getElementById('stage'),orb=document.getElementById('orb'),
          flow=document.getElementById('flow'),bar=document.getElementById('bar'),
          inp=document.getElementById('inp'),send=document.getElementById('send'),
          acts=document.getElementById('acts'),badge=document.getElementById('demoBadge'),
          stLabel=document.getElementById('stLabel'),stDots=document.getElementById('stDots'),
          pulse=document.getElementById('pulse'),aMail=document.getElementById('aMail'),
          aAgain=document.getElementById('aAgain');
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    const history=[];
    let demo=false,demoStep=0,busy=false,started=false,askCount=0;
    const TOTAL_Q=3;
  
    function dots(n){let s='';for(let i=0;i<TOTAL_Q;i++)s+=i<n?'<b>●</b>':'<i>●</i>';
      stDots.innerHTML=s;}
  
    function ripple(){pulse.classList.remove('go');void pulse.offsetWidth;pulse.classList.add('go');}
  
    function flyFrom(el){
      if(reduce)return;
      const o=orb.getBoundingClientRect(),r=el.getBoundingClientRect();
      const dx=(o.left+o.width/2)-(r.left+r.width/2);
      const dy=(o.top+o.height/2)-(r.top+r.height/2);
      el.animate([
        {transform:'translate('+dx+'px,'+dy+'px) scale(.1)',opacity:0,filter:'blur(8px)'},
        {transform:'none',opacity:1,filter:'blur(0)'}
      ],{duration:700,easing:'cubic-bezier(.19,1,.22,1)'});
    }
  
    async function dissolveOld(){
      const old=flow.firstElementChild;
      if(!old)return;
      if(!reduce){
        const o=orb.getBoundingClientRect(),r=old.getBoundingClientRect();
        const dx=(o.left+o.width/2)-(r.left+r.width/2);
        const dy=(o.top+o.height/2)-(r.top+r.height/2);
        old.animate([
          {transform:'none',opacity:1},
          {transform:'translate('+dx+'px,'+dy+'px) scale(.08)',opacity:0,filter:'blur(6px)'}
        ],{duration:450,easing:'cubic-bezier(.5,0,.75,0)'});
        await sleep(430);
      }
      flow.innerHTML='';
    }
  
    const GLYPHS='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789<>/|{}[]#$%&*+=~';
    function escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

    function typeInto(el,text){
      if(reduce){ el.textContent=text; return Promise.resolve(); }
      const chars=[...text];
      const n=chars.length;
      const step=Math.max(2,Math.ceil(n/170));
      const tail=14;
      let done=0;
      return new Promise(function(resolve){
        function frame(){
          done+=step;
          let settled='',scr='',rest='';
          for(let i=0;i<n;i++){
            const c=chars[i];
            if(i<done) settled+=c;
            else if(i<done+tail&&c!=='\n'&&c!==' ') scr+=GLYPHS[(Math.random()*GLYPHS.length)|0];
            else if(i<done+tail) scr+=c;
            else rest+=(c==='\n')?'\n':' ';
          }
          el.innerHTML=escHtml(settled)+'<i class="scr">'+escHtml(scr)+'</i>'+escHtml(rest);
          if(done<n) requestAnimationFrame(frame);
          else { el.textContent=text; resolve(); }
        }
        requestAnimationFrame(frame);
      });
    }
  
    async function showQuestion(text){
      await dissolveOld();
      ripple();crystal.boost=1.4;
      const q=document.createElement('div');q.className='q';
      flow.appendChild(q);
      flyFrom(q);
      const span=document.createElement('span');q.appendChild(span);
      await sleep(reduce?0:260);
      await typeInto(span,text);
      bar.classList.add('on');inp.focus();
    }
  
    function thinking(on){
      if(on){
        const t=document.createElement('div');t.className='q';t.id='thk';
        t.innerHTML='<span class="tdots"><i></i><i></i><i></i></span>';
        flow.appendChild(t);flyFrom(t);
        crystal.boost=2;
      }else{
        const t=document.getElementById('thk');if(t)t.remove();
      }
    }
  
    const DEMO_Q=[
      'Понял. Теперь про объём: сколько таких операций проходит за день и сколько минут съедает каждая? И кто этим занят — один человек или вся смена?',
      'Последний вопрос. Завтра клиентов вдвое больше — что сломается первым: люди, учёт или сроки?'
    ];
  
    function pickModules(){
      const text=history.filter(m=>m.role==='user').map(m=>m.content).join(' ').toLowerCase();
      const kw={'M-02':['докум','счет','счёт','скан','договор','накладн','бумаг','1с','бухгалт'],
        'M-04':['клиент','ответ','звон','статус','заявк','поддерж','вопрос'],
        'M-05':['срок','опозд','срыв','дедлайн','слома'],
        'M-03':['голос','поле','водител','брига','цех'],
        'M-01':['доставк','курьер','объект','выезд','стройк','склад'],
        'M-08':['уведомл','телеграм','смс','почт'],
        'M-06':['кабинет','приложени','портал'],
        'M-07':['зарплат','сдельн','исполнител','текучк']};
      const score={};
      for(const id in kw)score[id]=kw[id].reduce((s,w)=>s+(text.includes(w)?1:0),0);
      const top=Object.entries(score).sort((a,b)=>b[1]-a[1]).filter(x=>x[1]>0).map(x=>x[0]);
      while(top.length<3)for(const id of ['M-02','M-04','M-08'])if(!top.includes(id)){top.push(id);break;}
      return top.slice(0,3).map(id=>({id}));
    }
  
    async function finale(list,summary){
      bar.classList.remove('on');
      stLabel.textContent='ваша конфигурация';dots(TOTAL_Q);
      await dissolveOld();
      ripple();crystal.boost=2.4;
      const head=document.createElement('div');head.className='q';
      head.innerHTML='Готово. Вот что соберём для вас'+
        '<span class="sub">Первый модуль — бесплатно, на ваших данных</span>';
      flow.appendChild(head);flyFrom(head);
      await sleep(500);
      const wrap=document.createElement('div');wrap.className='mods';flow.appendChild(wrap);
      const CORE=Math.min(3,list.length);
      let total=0;
      for(let i=0;i<list.length;i++){
        const it=list[i],m=CATALOG[it.id];if(!m)continue;
        if(i===0){
          const l=document.createElement('div');l.className='modlab';
          l.textContent='Начать с этого';wrap.appendChild(l);
        }
        if(i===CORE&&list.length>CORE){
          const l=document.createElement('div');l.className='modlab';
          l.textContent='Следующий шаг';wrap.appendChild(l);
        }
        total+=m.price;
        const d=document.createElement('div');d.className='mod';
        d.innerHTML='<div class="id">'+it.id+'</div><div class="nm">'+m.name+'</div>'+
          '<div class="ds">'+m.does+'</div>'+
          (it.why?'<div class="why">— '+it.why+'</div>':'')+
          '<div class="pr">подключение от '+fmt(m.price)+'</div>';
        wrap.appendChild(d);ripple();flyFrom(d);
        await sleep(reduce?0:240);
      }
      const t=document.createElement('div');t.className='mod total';
      t.innerHTML='<div class="id">Итого</div><div class="nm">от '+fmt(total)+'</div>'+
        '<div class="ds">'+(summary||'Начнём с бесплатного модуля — увидите эффект на своих данных до каких-либо решений.')+'</div>';
      wrap.appendChild(t);flyFrom(t);
      acts.style.display='flex';
      flow.scrollTop=flow.scrollHeight;
    }
  
    function parsePlan(text){
      const m=text.match(/###PLAN###\s*(\{[\s\S]*\})/);
      if(!m)return null;
      try{const p=JSON.parse(m[1]);
        if(Array.isArray(p.modules)&&p.modules.length)return p;}catch(_){}
      return null;
    }
  
    async function reply(){
      busy=true;bar.classList.remove('on');
      thinking(true);
      let text=null;
      if(!demo){
        try{
          const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify({messages:history})});
          if(r.ok){text=(await r.json()).reply;}
          else if(r.status===503||r.status===404)demo=true;
          else text='Я перегружен — повторите через минуту.';
        }catch(_){demo=true;}
      }
      if(demo&&text===null){
        badge.style.display='block';
        await sleep(650);
        if(demoStep<DEMO_Q.length){text=DEMO_Q[demoStep++];}
        else{thinking(false);await finale(pickModules());busy=false;return;}
      }
      thinking(false);
      history.push({role:'assistant',content:text});
      const plan=parsePlan(text);
      if(plan){
        const list=plan.modules.filter(m=>CATALOG[m.id]);
        await finale(list.length?list:pickModules(),plan.summary);
        busy=false;return;
      }
      askCount++;dots(Math.min(askCount,TOTAL_Q));
      stLabel.textContent='вопрос '+Math.min(askCount,TOTAL_Q)+' из '+TOTAL_Q;
      await showQuestion(text);
      busy=false;
    }
  
    const INTRO_RU='Я — искусственный интеллект REFRACT.AI. Задам три вопроса о вашей работе и по вашим же цифрам соберу конкретный план: какие процессы можно снять с людей и сколько времени это вернёт.\n\nЧем занимается ваша компания и какая рутина съедает в ней больше всего времени?';
    const INTRO_EN='I am the REFRACT.AI artificial intelligence. I will ask three questions about your work and build a concrete plan from your own numbers: which processes can be taken off people, and how much time that gives back.\n\nWhat does your company do, and which routine eats the most time in it?';

    async function start(){
      if(started)return;started=true;
      openLayer();
      stage.classList.add('started');
      ripple();crystal.boost=3;
      var en=(document.documentElement.lang==='en');
      var intro=en?INTRO_EN:INTRO_RU;
      askCount=1;dots(1);
      stLabel.textContent=en?('question 1 of '+TOTAL_Q):('вопрос 1 из '+TOTAL_Q);
      await new Promise(function(r){setTimeout(r,650);});
      await showQuestion(intro);
      history.push({role:'assistant',content:intro});
    }
    var layer=document.getElementById('chatLayer'),
        slot=document.getElementById('orbSlot'),
        home=document.getElementById('orbHome'),
        closeBtn=document.getElementById('chatClose');
  
    function openLayer(){
      try{ scrollTo({top:0,behavior:'instant'}); }catch(_){ scrollTo(0,0); }
      slot.appendChild(orb);
      layer.classList.add('on');
      var _h=document.querySelector('.header');
      if(_h)_h.style.setProperty('display','none','important');
      layer.setAttribute('aria-hidden','false');
      document.documentElement.classList.add('chat-open');
    }
    function closeLayer(){
      layer.classList.remove('on');
      var _h2=document.querySelector('.header');
      if(_h2)_h2.style.removeProperty('display');
      layer.setAttribute('aria-hidden','true');
      document.documentElement.classList.remove('chat-open');
      home.appendChild(orb);
    }
    function resetChat(){
      flow.innerHTML='';
      acts.style.display='none';
      bar.classList.remove('on');
      inp.value='';
      stage.classList.remove('started');
      history.length=0;
      demo=false;demoStep=0;busy=false;started=false;askCount=0;
      badge.style.display='none';
      stLabel.textContent='диагностика';
      dots(0);
    }
    closeBtn.addEventListener('click',function(){closeLayer();resetChat();});
    addEventListener('keydown',function(e){if(e.key==='Escape'&&layer.classList.contains('on')){closeLayer();resetChat();}});
  
    orb.addEventListener('click',start);
    orb.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')start();});
    orb.addEventListener('mouseenter',()=>{if(!started)crystal.boost=1.2;});
  
    function submit(){
      const v=inp.value.trim();
      if(!v||busy)return;
      inp.value='';inp.style.height='50px';
      history.push({role:'user',content:v});
      reply();
    }
    send.addEventListener('click',submit);
    inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();submit();}});
    inp.addEventListener('input',()=>{inp.style.height='50px';inp.style.height=Math.min(inp.scrollHeight,110)+'px';});
  
    aAgain.addEventListener('click',e=>{e.preventDefault();resetChat();});
    aMail.addEventListener('click',async e=>{
      e.preventDefault();
      const email=prompt('Куда отправить конфигурацию?');
      if(!email)return;
      aMail.textContent='Отправляем…';
      const dialog=history.map(m=>(m.role==='user'?'Клиент: ':'Фейбл: ')+m.content).join('\n\n');
      const conf=[...document.querySelectorAll('.mod')].map(m=>m.textContent.trim().replace(/\s+/g,' ')).join('\n');
      try{
        const r=await fetch('https://formsubmit.co/ajax/hello.refract@gmail.com',{
          method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
          body:JSON.stringify({_subject:'Конфигурация от Фейбла',_captcha:'false',
            'Почта клиента':email,'Конфигурация':conf,'Диалог':dialog})});
        aMail.textContent=r.ok?'✓ Отправлено':'Не вышло — напишите нам';
      }catch(_){aMail.textContent='Не вышло — напишите нам';}
    });
    dots(0);
  })();
  
})();
