// ===== Custom Cursor (shared) =====
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

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('custom-cursor--active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('custom-cursor--active'));
});

// ===== Magnetic buttons =====
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

// ===== Header scroll effect =====
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) header.classList.add('header--scrolled');
        else header.classList.remove('header--scrolled');
    });
}

// ===== Smooth scroll for anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
