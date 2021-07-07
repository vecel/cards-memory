

const bottomCardsNavigation = Array.from(document.querySelectorAll('.bottom_nav_item'));

setUpBottomNav();

function setUpBottomNav() {
    for (let i = 0; i < bottomCardsNavigation.length; ++i) 
    bottomCardsNavigation[i].addEventListener('click', () => {
            console.log(i);
    })
}