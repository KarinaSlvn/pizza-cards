window.onload = () => {
    createArrPizza();
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
        if (removeIcon) removeIngredient(removeIcon);
        else if (!description && card) showImg(card);
        // setPizzasName(card);
        // setPizzasIngredients(card);
    };
    ingredientSearch.addEventListener('click', () => filterCards());
    priceSearchUp.addEventListener('click', () => sorting(sortPriceIncrease));
    priceSearchDown.addEventListener('click', () => sorting(sortPriceDecrease));
    nameSearchUp.addEventListener('click', () => sorting(sortNameIncrease));
    nameSearchDown.addEventListener('click', () => sorting(sortNameDecrease));
    addCardButton.addEventListener('click', () => addCustomCard());
};
