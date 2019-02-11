const showSearch = (filter) => {
    const search = document.getElementsByClassName(filter)[0];
    search.style.display = 'flex';
};

const filters = (input, arr) => {
    const inputs = document.getElementById(input).value;
    const array = [...document.getElementsByClassName(arr)];
    const desc = [...document.getElementsByClassName('card__description')];
    desc.map(item => {
        if (item.firstElementChild.nextElementSibling.classList.contains('ingredient') !== true) {
            item.parentNode.parentNode.parentNode.style.display = 'none';

        }
    });
    array.forEach((item) => {
        item.parentNode.parentNode.parentNode.parentNode.style.display = 'block';
        if (item.innerText.toLowerCase().indexOf(inputs.toLowerCase()) === -1) {
            item.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
};