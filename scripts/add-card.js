const showAddButton = () => {
    const addCard = document.getElementsByClassName('add-card')[0];
    addCard.style.display = 'block';
};

const Custom = () => (
    `<div class="ingredients">
        <p class="ingredient"><input type="checkbox">Сыр</p>
        <p class="ingredient"><input type="checkbox">Колбаса</p>
        <p class="ingredient"><input type="checkbox">Помидоры</p>
        <p class="ingredient"><input type="checkbox">Грибы</p>
        <p class="ingredient"><input type="checkbox">Салями</p>
        <p class="ingredient"><input type="checkbox">Ананас</p>
        <p class="ingredient"><input type="checkbox">Чеснок</p>
        <p class="ingredient">Тесто</p>
        <p class="ingredient">Соус</p>
        <p class="ingredient">Лук</p>
     </div>
     <button class="submit-ingredients">Подтвердить</button>`
);

const CustomCardDesc = () => (
    `<div class="card__description">
        <p class="name">
            <input type="text" class="name-custom-pizza" placeholder="Введите имя">
        </p>
        ${Custom()}
        <p class="calorific"></p>
        <p class="price"></p>
    </div>`);

const addCustomCard = () => {
    const customCard = parseHTML(`
    <div class="card custom-card rotate:hover">
        <div class="flipper rotate">
            <div class="back">
                <div class="card__img">
                        <img src = 'img/pizza-1.jpg'  alt="pizza">
                </div>
                ${CustomCardDesc()}
            </div>
            <div class="front">
              <p class="name"></p>
            </div>
         </div>
    </div>
    `);
    cards.insertBefore(customCard, cards.firstElementChild);
    customCard.querySelector('.submit-ingredients').addEventListener('click', () => createCustomPizza(customCard));
};

const getPizzaName = (node) => node.querySelector('.name-custom-pizza').value;

const getCheckedIngredients = (node) => {
    const allIngredients = [...node.querySelectorAll('.ingredient')];
    const isChecked = ing => (ing.firstElementChild && ing.firstElementChild.checked) || !ing.firstElementChild;
    return allIngredients.reduce((acc, ing) => isChecked(ing) ? [...acc, ing.textContent] : acc, [])
};

const isValid = (node) => getPizzaName(node) !== '';

const parsedPizza = (node) => new Pizza(getPizzaName(node), getCheckedIngredients(node), 'img/pizza-1.jpg');

const getCustomPizzas = () => JSON.parse(localStorage.getItem('customPizzas')) || [];

const saveCustomPizza = (pizza) => {
    localStorage.setItem('customPizzas', JSON.stringify([...getCustomPizzas(), pizza]))
};

const createCustomPizza = (node) => {
    if (!isValid(node)) alert('Вы забыли ввести имя пиццы');
    else {
        const pizza = parsedPizza(node);
        saveCustomPizza(pizza);
        arrPizza = [pizza, ...arrPizza];
        renderCards();
    }
};


// const showParametersPizza = (node) => {
//     node.querySelector('.price').innerHTML = customPizzas[i].price + 'грн.';
//     node.querySelector('.calorific').innerHTML = customPizzas[i].calorific + 'ккл.';
//     node.querySelector('.front').firstElementChild.innerHTML = customPizzas[i].name;
//     i += 1;
//
// };
// const setPizzasIngredients = (node) => {
//     node.querySelector('#submit-ingredients').onmousedown = () => {
//         if (node.querySelector('.name').firstElementChild) alert('Вы забыли ввести имя пиццы');
//         else {
//             [...node.querySelectorAll('.ingredient')].map((item) => {
//                 if (item.firstElementChild && item.firstElementChild.checked) {
//                     item.firstElementChild.remove();
//                 }
//                 if (item.firstElementChild && item.firstElementChild.checked === false) item.remove();
//             });
//             node.querySelector('.ingredients').style.flexDirection = 'column';
//             node.querySelector('.ingredients').style.marginTop = '0px';
//             node.querySelector('#submit-ingredients').remove();
//             createdCustomArray(node);
//             showParametersPizza(node);
//         }
//     };
// };