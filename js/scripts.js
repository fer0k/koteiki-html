'use strict';
/**
 * Уменьшает высоту фиксированного меню за счет изменения отступов у логотипа
 * */
const shortLogo = document.getElementById('js-logo');
window.addEventListener('scroll', function() {
    if (pageYOffset > 71) {
        shortLogo.classList.add('header__logo--mini');
    } else {
        shortLogo.classList.remove('header__logo--mini');
    }
});


/**
 * Переключение сортировки
 * */
const selectSort = document.getElementsByClassName('sorting__item');

const setSort = function(event) {
    for (let i = 0; i < selectSort.length; i++) {
        const itemList = selectSort[i]
        if (itemList.style.removeProperty) {
            itemList.style.removeProperty('display');
        } else {
            itemList.style.removeAttribute('display');
        }
        itemList.classList.remove('sorting__item--active');
    }
    let activeItem = event.target || event.srcElement;
    activeItem.classList.add('sorting__item--active');
};

for (let i = 0; i < selectSort.length; i++) {
    selectSort[i].addEventListener('click', setSort);
}