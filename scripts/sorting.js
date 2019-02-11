const sortPriceIncrease = (firsItem, nextItem) => parseInt(firsItem.price) - parseInt(nextItem.price);
const sortPriceDecrease = (firsItem, nextItem) => parseInt(nextItem.price) - parseInt(firsItem.price);

const sortNameIncrease = (firsItem, nextItem) => firsItem.name.toLowerCase().localeCompare(nextItem.name.toLowerCase());
const sortNameDecrease = (firsItem, nextItem) => nextItem.name.toLowerCase().localeCompare(firsItem.name.toLowerCase());

const sorting = (sort) => {
    [...document.getElementsByClassName('card')].forEach((item) => item.remove());
    arrPizza.sort(sort);
    renderCardsForColumn();
};

