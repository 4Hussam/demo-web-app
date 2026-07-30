let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterValue = document.getElementById('counterValue');
const themeToggle = document.getElementById('themeToggle');

counterBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    counterBtn.style.transform = 'scale(0.95)';
    setTimeout(() => counterBtn.style.transform = 'scale(1)', 100);
});

const themes = [
    { primary: '#6366f1', accent: '#ec4899', bg: '#0a0c10' },
    { primary: '#10b981', accent: '#3b82f6', bg: '#061314' },
    { primary: '#f59e0b', accent: '#ef4444', bg: '#140c06' },
    { primary: '#8b5cf6', accent: '#06b6d4', bg: '#0d0914' }
];

let themeIndex = 0;

themeToggle.addEventListener('click', () => {
    themeIndex = (themeIndex + 1) % themes.length;
    const current = themes[themeIndex];
    document.documentElement.style.setProperty('--primary', current.primary);
    document.documentElement.style.setProperty('--accent', current.accent);
    document.body.style.backgroundColor = current.bg;
});
