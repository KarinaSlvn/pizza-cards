const parseHTML = (domString) => {
    const html = new DOMParser().parseFromString(domString, 'text/html');
    return html.body.firstChild;
};
const randomInteger = (min, max) => {
    const result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return result === 0 ? randomInteger(min, max) : result;
};

class Product {
    constructor(name, price, calorific) {
        this.name = name;
        this.price = price;
        this.calorific = calorific;
    }
}

const products = [['колбаса', 'помидоры', 'сыр'], ['салями', 'грибы', 'сыр', 'соус'], ['салат', 'курица', 'помидоры', 'яйца'],
    ['салями', 'грибы', 'сыр', 'соус'], ['колбаски', 'помидоры', 'сыр', 'грибы'], ['овощи', 'соус', 'сыр'], ['соус', 'колбаса', 'ветчина', 'помидор', 'зелень'],
    ['грибы', 'соус', 'салями', 'сыр'], ['курица', 'соус', 'ананас', 'зелень'], ['помидор', 'кукуруза', 'горох', 'соус', 'сыр'], ['зелень', 'соус', 'тофу'],
    ['чернила корокатицы', 'колбаса', 'помидор', 'сыр'], ['сыр', 'соус', 'тесто'], ['овощи', 'сметана', 'нежирный сыр'], ['чеснок', 'перец чили', 'колбаса', 'соус'],
    ['фрукты', 'мороженое', 'желе', 'крем'], ['ананас', 'грибы', 'сыр', 'соус'], ['сыр', 'кетчуп', 'куриное филе']];

const arrNames = ['Маргарита', 'Пеперони', 'Цезарь', 'Салями', 'Охотничья', 'Гавайская', 'Барбекю', 'Грибная', 'Куриная',
    'Овощная', 'Веганская', 'Черная', 'Сырная', 'Фитнес', 'Чесночная', 'Сладкая', 'Ананас-грибы', 'Детская'];
const arrImg = ['img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg', 'img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg',
    'img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg', 'img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg',
    'img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg', 'img/pizza-1.jpg', 'img/pizza-2.jpg', 'img/pizza-3.jpg'];
const cards = document.getElementsByClassName('cards')[0];
let arrPizza = [];
const buttonGrid = document.getElementById('sort__grid');
const buttonColumn = document.getElementById('sort__column');
const filter = document.getElementsByClassName('filters')[0];
const ingredientSearch = document.getElementById('ingredient__search');
const priceSearchUp = document.getElementById('price__search-up');
const priceSearchDown = document.getElementById('price__search-down');
const nameSearchUp = document.getElementById('name__search-up');
const nameSearchDown = document.getElementById('name__search-down');
let selectedCard;

function Pizza(name, ingredients, img) {
    this.calculateProperty = property => this.ingredients.reduce((sum, item) => sum + item[property], 0);
    this.removeIngredient = (index) => {
        this.ingredients.splice(index, 1);
        this.price = this.calculateProperty('price');
        this.calorific = this.calculateProperty('calorific');
    };
    this.name = name;
    this.ingredients = ingredients.map(name => new Product(name, randomInteger(7, 35), randomInteger(40, 60)));
    this.price = this.calculateProperty('price');
    this.calorific = this.calculateProperty('calorific');
    this.img = img;
}

const createArrPizza = () => {
    for (let i = 0; i < 18; i++) {
        arrPizza.push(new Pizza(arrNames[i], products[i], arrImg[i]));
    }
};

const Ingredients = (ingredients) => {
    return ingredients.reduce((acc, {name}, i) => {
        return acc + `<p class="ingredient" data-index=${i}>${name}<a class="remove">&times</a></p>`;
    }, ``);
};

const Desc = ({name, ingredients, calorific, price}) => (
    `<div class="card__description">
            <p class="name">${name}</p>
            ${Ingredients(ingredients)}
            <p class="calorific">${calorific}ккл.</p>
            <p class="price">${price}грн.</p>
        </div>`);

const renderCards = () => {
    cards.classList.remove('col');
    if (cards.hasChildNodes()) {
        [...document.getElementsByClassName('card')].forEach((item) => item.remove());
    }
    arrPizza.forEach((pizza, index) => {
        const card = `<div class="card" data-index=${index}>
            <div class="flipper">
                <div class="back">
                    <div class="card__img">
                        <img src = ${pizza.img}  alt="pizza">
                    </div>
                    ${Desc(pizza)}
                </div>
                <div class="front">
                    <p class="name">${pizza.name}</p>
                </div>
            </div>
        </div>`;
        cards.appendChild(parseHTML(card));
    });
};
const renderCardsForColumn = () => {
    renderCards();
    const card = [...document.getElementsByClassName('card')];
    card.forEach((item) => {
            item.style.display = 'flex';
            item.style.width = '400px';
        }
    );
    const ingredients = [...document.getElementsByClassName('ingredient')];
    ingredients.forEach((item) => item.style.display = 'none');
    const calorifics = [...document.getElementsByClassName('calorific')];
    calorifics.forEach((item) => item.style.display = 'none');
    const cardDescription = [...document.getElementsByClassName('card__description')];
    cardDescription.forEach((item) => item.style.display = 'flex');
    cards.classList.add('col');
};

const showSearch = (filter) => {
    const search = document.getElementsByClassName(filter)[0];
    search.style.display = 'flex';
};

const filters = (input, arr) => {
    const inputs = document.getElementById(input).value;
    const array = [...document.getElementsByClassName(arr)];
    array.forEach((item) => {
        item.parentNode.parentNode.parentNode.parentNode.style.display = 'block';
        if (item.innerText.toLowerCase().indexOf(inputs.toLowerCase()) === -1) {
            item.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
};
const sortPriceIncrease = (firsItem, nextItem) => parseInt(firsItem.price) - parseInt(nextItem.price);
const sortPriceDecrease = (firsItem, nextItem) => parseInt(nextItem.price) - parseInt(firsItem.price);

const sortNameIncrease = (firsItem, nextItem) => firsItem.name.toLowerCase().localeCompare(nextItem.name.toLowerCase());
const sortNameDecrease = (firsItem, nextItem) => nextItem.name.toLowerCase().localeCompare(firsItem.name.toLowerCase());

const sorting = (sort) => {
    [...document.getElementsByClassName('card')].forEach((item) => item.remove());
    arrPizza.sort(sort);
    renderCardsForColumn();
};

/* Task 5b*/

const showImg = (node) => {
    selectedCard = node;
    if (selectedCard.classList.contains('rotate:hover')) {
        selectedCard.classList.remove('rotate:hover');
        selectedCard.firstElementChild.classList.remove('rotate');
    }
    else {
        selectedCard.classList.add('rotate:hover');
        selectedCard.firstElementChild.classList.add('rotate');
    }
};

const removeIngredient = (node) => {
    const ingredient = node.parentNode;
    const ingredientIndex = ingredient.getAttribute('data-index');
    const cardIndex = selectedCard.getAttribute('data-index');
    const currentPizza = arrPizza[cardIndex];
    currentPizza.removeIngredient(ingredientIndex);
    const desc = selectedCard.getElementsByClassName('card__description')[0];
    const wrap = selectedCard.getElementsByClassName('back')[0];
    desc.remove();
    wrap.appendChild(parseHTML(Desc(currentPizza)));
    ingredient.remove();
};

window.onload = () => {
    createArrPizza();
    buttonGrid.addEventListener('click', () => {
        if (filter.hasChildNodes()) {
            document.getElementsByClassName('filters__column')[0].style.display = 'none';
        }
        showSearch('filters__ingredient');
        renderCards();
    });
    buttonColumn.addEventListener('click', () => {
        if (filter.hasChildNodes()) {
            document.getElementsByClassName('filters__ingredient')[0].style.display = 'none';
        }
        showSearch('filters__column');
        renderCardsForColumn();
    });

    cards.onclick = (event) => {
        let target = event.target;
        while (target !== cards) {
            if (target.classList.contains('card')) {
                showImg(target);
                return;
            }
            if (target.classList.contains('remove')) {
                removeIngredient(target);
                return;
            }
            target = target.parentNode;
        }
    };

    ingredientSearch.addEventListener('click', () => filters('ingredient', 'ingredient'));
    priceSearchUp.addEventListener('click', () => sorting(sortPriceIncrease));
    priceSearchDown.addEventListener('click', () => sorting(sortPriceDecrease));
    nameSearchUp.addEventListener('click', () => sorting(sortNameIncrease));
    nameSearchDown.addEventListener('click', () => sorting(sortNameDecrease));
};
