const recipesList = document.getElementById('recipes-list');
const filterButtons = document.querySelectorAll('.filter-btn');

// Масив для зберігання рецептів (завантажуємо з localStorage або створюємо новий)
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    recipes = [
        {
            id: 1,
            title: "Борщ",
            category: "soups",
            ingredients: "буряк, капуста, картопля, морква, цибуля, м'ясо, сметана",
            instructions: "Зваріть м'ясо, додайте овочі, доведіть до готовності. Подавайте зі сметаною.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE68ADfGC4PZTHubj4VgP5uy9HDfpZ6jfyzg&s", // Працююче посилання
        },
        {
            id: 2,
            title: "Пельмені",
            category: "main-courses",
            ingredients: "тісто, фарш, цибуля, сметана",
            instructions: "Зліпіть пельмені, зваріть у підсоленій воді. Подавайте зі сметаною.",
            image: "https://myastoriya.com.ua/upload/iblock/4fc/4fcfbca6695cc1d2d75414812a08ac7b.jpg", // Працююче посилання
        },
        {
            id: 3,
            title: "Окрошка",
            category: "soups",
            ingredients: "квас, картопля, огірки, яйця, ковбаса, зелень, сметана",
            instructions: "Всі інгредієнти наріжте кубиками, змішайте з квасом, додайте сметану.",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0_Okroshka_05.jpg",
        },
        {
            id: 4,
            title: "Грибний суп",
            category: "soups",
            ingredients: "гриби, картопля, цибуля, морква, часник, бульйон",
            instructions: "Гриби обсмажити з цибулею і морквою, додати бульйон і картоплю, варити до готовності.",
            image: "https://static.espreso.tv/uploads/photobank/317000_318000/317309_above-view-delicious-food-on-tab_new_960x380_0.webp", // Працююче посилання
        },
        {
            id: 5,
            title: "Суп-пюре з броколі",
            category: "soups",
            ingredients: "броколі, картопля, цибуля, бульйон, сметана",
            instructions: "Броколі і картоплю варити в бульйоні до м'якості, потім збити в пюре. Додати сметану перед подачею.",
            image: "https://rud.ua/uploads/under_recipe/600%D1%85300-krem-sup-iz-brokoli_5fe47356c4d19.jpg", // Працююче посилання
        },
        {
            id: 6,
            title: "Курячий суп",
            category: "soups",
            ingredients: "курка, картопля, морква, цибуля, спеції",
            instructions: "Зваріть курку, додайте картоплю і моркву, варіть до готовності. Посоліть і поперчіть за смаком.",
            image: "https://static.nv.ua/shared/system/Article/posters/002/926/631/original/a0f5f39f25c5889e6cbcb911eccbee10.jpg?q=85&stamp=20240729084337", 
        },
        {
            id: 7,
            title: "Шашлик з курки",
            category: "main-courses",
            ingredients: "куряче філе, спеції, олія, лимонний сік",
            instructions: "Маринуйте курку у спеціях і олії, нанизуйте на шпажки і грилюйте до готовності.",
            image: "https://img3.zakaz.ua/uploadf9621ba668c6cb8001aec6ba867d90c0.jpg.350x.jpg", 
        },
        {
            id: 8,
            title: "Стейк із яловичини",
            category: "main-courses",
            ingredients: "яловичина, спеції, олія",
            instructions: "Підсмажте стейк на гарячій сковороді з обох боків до бажаного ступеня готовності.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmRybRPYnejOnDsD_9f_ys2IsTXOD4NUAUQ&s", 
        },
        {
            id: 9,
            title: "Лазанья",
            category: "main-courses",
            ingredients: "тісто для лазаньї, м'ясо, томатний соус, сир",
            instructions: "Чергуйте шари тіста, м'яса і сиру, запікайте до золотистої скоринки.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDELm9REwFYIimMlKFEdG1YFye_f6twTQuUA&s",
        },
        {
            id: 10,
            title: "Котлети по-київськи",
            category: "main-courses",
            ingredients: "куряче філе, масло, зелень, панірувальні сухарі",
            instructions: "Формуємо котлети, обвалюємо в панірувальних сухарях і смажимо на сковороді.",
            image: "https://rud.ua/uploads/under_recipe/02_600x300_5f686cb1bd6ca.jpg",
        },
        {
            id: 11,
            title: "Гречка з куркою",
            category: "hot-dishes",
            ingredients: "гречка, куряче філе, цибуля, морква, спеції",
            instructions: "Обсмажте куряче філе з цибулею і морквою, додайте гречку та воду, варіть до готовності.",
            image: "https://cdn.abo.media/upload/article/fauydtaagtuodf7pdazl.jpg",
        },
        {
            id: 12,
            title: "Плов з яловичиною",
            category: "hot-dishes",
            ingredients: "яловичина, рис, морква, цибуля, спеції",
            instructions: "Обсмажте яловичину з овочами, додайте рис і воду, варіть до готовності.",
            image: "https://i.obozrevatel.com/food/recipemain/2019/1/21/oamp.jpg?size=636x424",
        },
        {
            id: 13,
            title: "Тушковане м'ясо з картоплею",
            category: "hot-dishes",
            ingredients: "свинина, картопля, цибуля, морква, спеції",
            instructions: "Обсмажте м'ясо з овочами, додайте картоплю та воду, тушкуйте до готовності.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRoMFofmpZ49gpKRec0Gw3t8R8U2lPVvT9g&s",
        },
        {
            id: 14,
            title: "Смажені кабачки з часниковим соусом",
            category: "hot-dishes",
            ingredients: "кабачки, часник, олія, спеції",
            instructions: "Кабачки наріжте кружечками, обсмажте з часником і подавайте з соусом.",
            image: "https://img.tsn.ua/cached/187/tsn-ef193642135c1378f91261f26d18fb96/thumbs/1200x630/95/9b/7a3ec8d3fb930c49a1459a42b6a79b95.jpeg",
        },
        {
            id: 15,
            title: "Запечені овочі з куркою",
            category: "hot-dishes",
            ingredients: "курка, картопля, морква, броколі, спеції",
            instructions: "Овочі та курку запечіть у духовці при 180°C до готовності.",
            image: "https://zaxid.net/resources/photos/news/500_DIR/202309/1571731_3015342.jpg?20230929162050",
        },
        {
            "title": "Тірамісу",
            "category": "desserts",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Classic_Italian_Tiramisu-3_%2829989504485%29.jpg/640px-Classic_Italian_Tiramisu-3_%2829989504485%29.jpg",
            "description": "Класичний італійський десерт з кави та сиру маскарпоне.",
            "ingredients": "сир маскарпоне, кава еспресо, яйця, цукор, печиво савоярді, какао",
            "instructions": "Збийте маскарпоне з жовтками і цукром, змочіть савоярді в каві, викладіть шарами та охолодіть."
        },
        {
            "title": "Чізкейк",
            "category": "desserts",
            "image": "https://klopotenko.com/wp-content/uploads/2023/03/cheesecake-new-york_sitewebukr-img-1000x600.jpg?v=1720545631",
            "description": "Ніжний чізкейк з ягідним соусом.",
            "ingredients": "сир вершковий, печиво, вершкове масло, яйця, цукор, ваніль, ягідний соус",
            "instructions": "Подрібніть печиво, змішайте з маслом і утрамбуйте основу. Збийте сир з яйцями і цукром, випікайте при 160°C."
        },
        {
            "title": "Мохіто",
            "category": "drinks",
            "image": "https://img.freepik.com/free-photo/tasty-caipirinha-cocktail-with-mint_23-2149451506.jpg?uid=R186596994&ga=GA1.1.346372246.1725123198&semt=ais_hybrid",
            "description": "Освіжаючий коктейль з м'ятою, лаймом та содою.",
            "ingredients": "лайм, м'ята, цукор, газована вода, лід, ром (опціонально)",
            "instructions": "Розімніть лайм і м'яту з цукром, додайте лід і газовану воду. Перемішайте."
        },
        {
            "title": "Кава по-італійськи",
            "category": "drinks",
            "image": "https://img.freepik.com/free-photo/front-view-cup-tea-with-cookies-macarons-blue-surface-cake-bisciut-sugar-pie-sweet_140725-66721.jpg?uid=R186596994&ga=GA1.1.346372246.1725123198&semt=ais_hybrid",
            "description": "Ароматна кава з вершками.",
            "ingredients": "мелена кава, вода, вершки, цукор",
            "instructions": "Зваріть каву в турці або кавоварці, додайте вершки та цукор за смаком."
        },
        {
            "title": "Омлет",
            "category": "breakfast",
            "image": "https://klopotenko.com/wp-content/uploads/2018/03/yaichnica-omlet_siteWeb.jpg",
            "description": "Пушений омлет з зеленню та сиром.",
            "ingredients": "яйця, молоко, сир, зелень, сіль, перець, олія",
            "instructions": "Збийте яйця з молоком, додайте сир і зелень. Обсмажте на сковороді до готовності."
        },
        {
            "title": "Гранола",
            "category": "breakfast",
            "image": "https://klopotenko.com/wp-content/uploads/2017/11/Granola_siteWebUkr.jpg",
            "description": "Домашня гранола з медом та горіхами.",
            "ingredients": "вівсяні пластівці, горіхи, мед, сухофрукти, кориця",
            "instructions": "Змішайте всі інгредієнти, запікайте при 160°C 20 хвилин, періодично помішуючи."
        },

    ];
    saveRecipes(); // Зберігаємо початкові рецепти


// Функція для збереження рецептів у localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Функція для відображення рецептів
function renderRecipes(category = "all") {
    recipesList.innerHTML = ''; // Очищаємо список перед оновленням

    const filteredRecipes = category === "all" 
        ? recipes 
        : recipes.filter(recipe => recipe.category === category);

    filteredRecipes.forEach(recipe => {
        // Створюємо картку рецепту
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        // Додаємо зображення, якщо воно є
        if (recipe.image) {
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.title;
            recipeCard.appendChild(img);
        }

        // Додаємо контент рецепту
        const recipeContent = document.createElement('div');
        recipeContent.className = 'recipe-content';

        const title = document.createElement('h4');
        title.textContent = recipe.title;
        recipeContent.appendChild(title);

        const ingredients = document.createElement('p');
        ingredients.innerHTML = `<strong>Інгредієнти:</strong> ${recipe.ingredients}`;
        recipeContent.appendChild(ingredients);

        const instructions = document.createElement('p');
        instructions.innerHTML = `<strong>Приготування:</strong> ${recipe.instructions}`;
        recipeContent.appendChild(instructions);

        // Додаємо контент до картки
        recipeCard.appendChild(recipeContent);

        // Додаємо картку до списку
        recipesList.appendChild(recipeCard);
    });
}

// Відображаємо рецепти при завантаженні сторінки
renderRecipes();

// Додаємо обробники подій для фільтрації
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        
        // Додаємо або забираємо клас "active"
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Рендеримо рецепти в залежності від обраної категорії
        renderRecipes(category);
    });
});

// Додаємо новий рецепт через форму
const addRecipeForm = document.getElementById('add-recipe-form');
addRecipeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('recipe-title').value;
    const category = document.getElementById('recipe-category').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    const image = document.getElementById('recipe-image').value;

    const newRecipe = {
        id: recipes.length + 1,
        title,
        category,
        ingredients,
        instructions,
        image
    };

    recipes.push(newRecipe);
    saveRecipes(); // Зберігаємо новий рецепт
    renderRecipes(); // Оновлюємо відображення рецептів

    // Закриваємо форму після додавання
    document.getElementById('add-recipe-form-container').style.display = 'none';
});

// Закриваємо форму при натисканні на кнопку "Закрити"
document.getElementById('close-form').addEventListener('click', () => {
    document.getElementById('add-recipe-form-container').style.display = 'none';
});

// Показуємо форму для додавання рецепту при натисканні на кнопку "+"
document.getElementById('add-recipe-icon').addEventListener('click', () => {
    document.getElementById('add-recipe-form-container').style.display = 'block';
});
