const createArrPizza = () => {
    for (let i = 0; i < 18; i++) {
        arrPizza.push(new Pizza(arrNames[i], products[i], arrImg[i]));
    }
    arrPizza = [...getFromLS('customPizzas'), ...arrPizza];
};

const Ingredients = (ingredients, readOnly = false) => {
    return ingredients.reduce((acc, {name}, i) => (
        acc + `<p class="ingredient" data-index=${i}>${name}${!readOnly ? `<a class="remove">&times</a></p>` : ''}`), '');
};

const Desc = ({name, ingredients, calorific, price}, readOnly = false) => (
    `<div class="card__description">
            <p class="name">${name}</p>
            ${Ingredients(ingredients, readOnly)}
            <p class="calorific">${calorific}ккл.</p>
            <p class="price">${price}грн.</p>
    </div>`);

const CardImg = ({name, img}) => (
    ` <div class="card__img">
        <img src = ${img}  alt=${name}>
    </div>`);

const Card = (pizza, index) => (
    `<div class="card" data-index=${index}>
        <div class="flipper">
            <div class="back">
                ${CardImg(pizza)}
                ${Desc(pizza)}
                <button class="ordering-pizza">Добавить в корзину</button>
            </div>
            <div class="front">
                <p class="name">${pizza.name}</p>
            </div>
        </div>
    </div>`);

const SelectedCard = (pizza, index) => (
    `<div class="card selected-card" data-index=${index}>
        <div class="front">
            ${CardImg(pizza)}
            ${Desc(pizza, true)}
            <button class="remove-pizza"><i class="fas fa-times"></i></button>
        </div>
    </div>`);

const renderPizzas = (pizzas, wrapper, cardComponent) => {
    const clearedCardsWrap = removeChildren(wrapper);
    clearedCardsWrap.classList.remove('col');
    pizzas.forEach((pizza, index) => clearedCardsWrap.appendChild(parseHTML(cardComponent(pizza, index))));
};

const renderCards = (pizzas = arrPizza) => renderPizzas(pizzas, cards, Card);

const renderOrderingCards = (pizzas = getFromLS('selectedPizzas')) => renderPizzas(pizzas, orderingBlock, SelectedCard);

const renderCardsForColumn = () => {
    renderCards();
    const card = [...document.getElementsByClassName('card')];
    const ingredients = [...document.getElementsByClassName('ingredient')];
    const calorie = [...document.getElementsByClassName('calorific')];
    const cardDescription = [...document.getElementsByClassName('card__description')];
    card.forEach((item) => {
        item.style.display = 'flex';
        item.style.width = '400px';
    });
    ingredients.forEach((item) => item.style.display = 'none');
    calorie.forEach((item) => item.style.display = 'none');
    cardDescription.forEach((item) => item.style.display = 'flex');
    cards.classList.add('col');
};