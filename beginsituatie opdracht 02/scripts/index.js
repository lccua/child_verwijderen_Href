const setup = () => {
    let list = document.querySelector("#lstIngredients");

    for (let i = 0; i < list.children.length ; i++) {
        let link = list.children[i].querySelector('a');
        link.addEventListener("click", deleteListItem);
    }
}

const deleteListItem = (event) => {
    let listItem = event.target.closest('li');
    let list = listItem.parentNode;
    list.removeChild(listItem);
    event.preventDefault();
}

window.addEventListener('load', setup);
