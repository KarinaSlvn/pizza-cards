window.onload = () => {
    document.getElementsByTagName('main')[0].querySelector('.basket-page').remove();
    createArrPizza();
    countOrders();
    buttonGrid.addEventListener('click', () => {
        if (filter.hasChildNodes()) {
            document.getElementsByClassName('filters__column')[0].style.display = 'none';
        }
        showSearch('filters__ingredient');
        showAddButton();
        renderCards();
    });
    buttonColumn.addEventListener('click', () => {
        if (filter.hasChildNodes()) {
            document.getElementsByClassName('filters__ingredient')[0].style.display = 'none';
        }
        showSearch('filters__column');
        showAddButton();
        renderCardsForColumn();
    });

    cards.onclick = ({target}) => {
        const card = closest(target, 'card');
        const description = closest(target, 'card__description');
        const removeIcon = closest(target, 'remove');
        const ordering = closest(target, 'ordering-pizza');
        if (removeIcon) removeIngredient(removeIcon);
        else if (ordering) addToBasket(card);
        else if (!description && card && !card.classList.contains('selected-card')) showImg(card);
    };
    orderingBlock.onclick = ({target}) => {
        const removeIcon = closest(target, 'remove-pizza');
        if (removeIcon) removePizzaFromBasket(removeIcon);

    };
    ingredientSearch.addEventListener('click', () => filterCards());
    priceSearchUp.addEventListener('click', () => sorting(sortPriceIncrease));
    priceSearchDown.addEventListener('click', () => sorting(sortPriceDecrease));
    nameSearchUp.addEventListener('click', () => sorting(sortNameIncrease));
    nameSearchDown.addEventListener('click', () => sorting(sortNameDecrease));
    addCardButton.addEventListener('click', () => addCustomCard());
    basketButton.addEventListener('click', () => {
        showPage(orderingPage, basketPage);
        basketPage.style.display = 'flex';
    });
    buttonOnHome.addEventListener('click', () => showPage(basketPage, orderingPage));
};
