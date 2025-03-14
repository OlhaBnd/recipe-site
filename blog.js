// Отримуємо елементи форми та списку постів
const blogForm = document.getElementById('blog-form');
const postsList = document.getElementById('posts-list');

// Масив для зберігання постів (завантажуємо з localStorage або створюємо новий)
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Функція для додавання нового посту
function addPost(title, content, image) {
    const post = {
        id: Date.now(), // Унікальний ID на основі часу
        title,
        content,
        image,
        likes: 0,
        dislikes: 0,
    };
    posts.push(post); // Додаємо пост до масиву
    savePosts(); // Зберігаємо пости в localStorage
    renderPosts(); // Оновлюємо список постів
}

// Функція для збереження постів у localStorage
function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Функція для відображення постів
function renderPosts() {
    postsList.innerHTML = ''; // Очищаємо список перед оновленням
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <div class="reactions">
                    <button onclick="likePost(${post.id})">👍 ${post.likes}</button>
                    <button onclick="dislikePost(${post.id})">👎 ${post.dislikes}</button>
                </div>
            </div>
        `;
        postsList.appendChild(postCard); // Додаємо пост до списку
    });
}

// Функція для лайку посту
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        savePosts();
        renderPosts();
    }
}

// Функція для дизлайку посту
function dislikePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.dislikes++;
        savePosts();
        renderPosts();
    }
}

// Обробник події для форми
blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Забороняємо стандартну поведінку форми

    // Отримуємо значення з полів форми
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const image = document.getElementById('post-image').value;

    // Додаємо новий пост
    addPost(title, content, image);

    // Очищаємо поля форми
    blogForm.reset();
});

// Відображаємо пости при завантаженні сторінки
renderPosts();