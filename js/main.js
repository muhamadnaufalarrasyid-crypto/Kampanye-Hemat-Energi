// main.js - Interaksi UI & Mobile Menu untuk Fase 1

document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoVolt Campaign UI Initialized.');

    // 1. Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
        });
    }

    // 2. Alert Ramah untuk Menu Fase 2 & Fase 3
    const disabledLinks = document.querySelectorAll('.nav-link.disabled');

    disabledLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const message = link.getAttribute('data-tooltip') || 'Halaman ini akan dibuka pada fase berikutnya!';
            alert(`ℹ️ Info: ${message}.\n\nSaat ini website masih berada pada Fase 1 (Tampilan & Kerangka).`);
        });
    });
});