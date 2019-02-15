const parseHTML = (domString) => {
    const html = new DOMParser().parseFromString(domString, 'text/html');
    return html.body.firstChild;
};
const randomInteger = (min, max) => {
    const result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return result === 0 ? randomInteger(min, max) : result;
};
const closest = (node, className) => {
    return !!node && !!node.classList
        ? node.classList.contains(className) ? node : closest(node.parentNode, className)
        : null;
};

const removeChildren = (node) => {
    if (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
        return removeChildren(node);
    } else {
        return node;
    }
};