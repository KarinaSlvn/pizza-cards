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

    cards.onclick = ({target}) => {
        const card = closest(target, 'card');
        const removeIcon = closest(target, 'remove');
        if (removeIcon) removeIngredient(removeIcon);
        else if (card) showImg(card);
    };

    ingredientSearch.addEventListener('click', () => filters('ingredient', 'ingredient'));
    priceSearchUp.addEventListener('click', () => sorting(sortPriceIncrease));
    priceSearchDown.addEventListener('click', () => sorting(sortPriceDecrease));
    nameSearchUp.addEventListener('click', () => sorting(sortNameIncrease));
    nameSearchDown.addEventListener('click', () => sorting(sortNameDecrease));
};
