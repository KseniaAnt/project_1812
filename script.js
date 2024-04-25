
// Анимация для навигационных элементов при наведении
const navItems = document.querySelectorAll('.navbar ul li a');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        anime({
            targets: item,
            scale: 1.1, // Увеличение масштаба элемента
            duration: 300, // Длительность анимации в миллисекундах
            easing: 'easeOutQuad' // Эффект анимации
        });
    });

    item.addEventListener('mouseleave', () => {
        anime({
            targets: item,
            scale: 1, // Возвращение масштаба к исходному
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const bioButtons = document.querySelectorAll('.btn-bio');

    bioButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bioText = button.dataset.bio;
            alert(bioText); // Замените на ваш код отображения биографии
        });
    });
});

