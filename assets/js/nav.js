function toggleMenu() {
    const menu = document.getElementById('nav-ul');
    const hamburger = document.querySelector('.hamburger');

    if (menu.classList.contains('active')) {
        closeMenu();
        hamburger.classList.remove('open');
    } else {
        menu.style.animation = 'slideInRight 0.3s forwards';
        menu.classList.add('active');
        menu.style.transform = 'translateX(0)';
        hamburger.classList.add('open');
    }
}

function closeMenu() {
    const menu = document.getElementById('nav-ul');
    const hamburger = document.querySelector('.hamburger');

    menu.style.animation = 'slideOutRight 0.3s forwards';
    menu.addEventListener('animationend', function () {
        menu.classList.remove('active');
        menu.style.transform = 'translateX(0)';
        menu.style.animation = 'unset';
    }, { once: true });
    hamburger.classList.remove('open');
}