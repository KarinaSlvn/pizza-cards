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

const renderCards = (pizzas = arrPizza) => {
    const clearedCardsWrap = removeChildren(cards);
    clearedCardsWrap.classList.remove('col');
    if (clearedCardsWrap.hasChildNodes()) {
        [...document.getElementsByClassName('card')].forEach((item) => item.remove());
    }
    pizzas.forEach((pizza, index) => {
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
        clearedCardsWrap.appendChild(parseHTML(card));
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
    const calorie = [...document.getElementsByClassName('calorific')];
    calorie.forEach((item) => item.style.display = 'none');
    const cardDescription = [...document.getElementsByClassName('card__description')];
    cardDescription.forEach((item) => item.style.display = 'flex');
    cards.classList.add('col');
};