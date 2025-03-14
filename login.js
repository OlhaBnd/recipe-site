function redirectToHome(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми
    window.location.href = "index.html"; // Перенаправляємо на головну сторінку
}