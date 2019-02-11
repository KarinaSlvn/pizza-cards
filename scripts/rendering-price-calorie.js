const removeIngredient = (node) => {
    const currentCard = closest(node, 'card');
    const ingredient = node.parentNode;
    const ingredientIndex = ingredient.getAttribute('data-index');
    const cardIndex = currentCard.getAttribute('data-index');
    const currentPizza = arrPizza[cardIndex];
    currentPizza.removeIngredient(ingredientIndex);
    const desc = currentCard.getElementsByClassName('card__description')[0];
    const wrap = currentCard.getElementsByClassName('back')[0];
    desc.remove();
    wrap.appendChild(parseHTML(Desc(currentPizza)));
    ingredient.remove();
};