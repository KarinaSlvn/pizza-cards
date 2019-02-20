const showPage = (pageRemove, pageShow) => {
    pageRemove.remove();
    document.getElementsByTagName('main')[0].appendChild(pageShow);
    renderOrderingCards();
    sumOrders();
};

const addToBasket = (card) => {
    const pizza = arrPizza[card.getAttribute('data-index')];
    saveInLS(pizza, 'selectedPizzas');
    alert('Вы добавили пиццу ' + pizza.name);
    countOrders();
};

const removePizzaFromBasket = (node) => {
    const currentCard = closest(node, 'card');
    const cardIndex = currentCard.getAttribute('data-index');
    const selectedPizza = JSON.parse(localStorage.getItem('selectedPizzas'));
    selectedPizza.splice(cardIndex, 1);
    currentCard.remove();
    localStorage.clear();
    localStorage.setItem('selectedPizzas', JSON.stringify(selectedPizza),);
    sumOrders();
    countOrders();
};

const sumOrders = () => {
    const prices = getFromLS('selectedPizzas').reduce((acc, item) => acc + item.price, 0);
    sumOrder.innerHTML = `Ваша сумма заказа: ${prices}грн.`;
};

const removeAllOrders = () => {
    localStorage.removeItem('selectedPizzas');
    document.querySelectorAll('.card.selected-card').forEach(item => item.remove());
    sumOrders();
};
