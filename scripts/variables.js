const cards = document.getElementsByClassName('cards')[0];
const orderingBlock = document.getElementsByClassName('selected__cards')[0];
let arrPizza = [];
const buttonGrid = document.getElementById('sort__grid');
const buttonColumn = document.getElementById('sort__column');
const filter = document.getElementsByClassName('filters')[0];
const ingredientSearch = document.getElementById('ingredient__search');
const priceSearchUp = document.getElementById('price__search-up');
const priceSearchDown = document.getElementById('price__search-down');
const nameSearchUp = document.getElementById('name__search-up');
const nameSearchDown = document.getElementById('name__search-down');
const addCardButton = document.getElementById('add-card__button');
const addCard = document.getElementsByClassName('add-card')[0];
const orderingPage = document.getElementsByClassName('ordering-page')[0];
const basketPage = document.getElementsByClassName('basket-page')[0]
const basketButton = document.getElementById('basket-icon');
const buttonOnHome = document.getElementById('button__main-page');
const sumOrder = document.getElementsByClassName('sum-order')[0];
const countPizzas = document.getElementsByClassName('count-orders')[0];
const sendOrder = document.getElementsByClassName('sendOrder')[0];
let selectedCard;