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