function redirectToHome(event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми
    window.location.href = "index.html"; // Перенаправлення на головну сторінку
}
<form onsubmit="redirectToHome(event)">
    <div class="form-group">
        <label for="name">Ім'я:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">Електронна пошта:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" name="password" required>
    </div>
<div class="form-group">
        <label for="confirm-password">Підтвердіть пароль:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
    </div>
    <button type="submit" class="btn">Зареєструватися</button>
</form>