const showSearch = (filter) => {
    const search = document.getElementsByClassName(filter)[0];
    search.style.display = 'flex';
};

const filterCards = () => {
    const inputValue = document.getElementById('ingredient').value;
    const filteredPizzas = arrPizza.filter(({ingredients}) => {
        return ingredients.reduce((acc, {name}) => {
            return acc ||(name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
        }, false);
    });
    renderCards(filteredPizzas);
};