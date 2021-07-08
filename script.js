const navigationBefore = document.querySelector('#navigate_before');
const navigationNext = document.querySelector('#navigate_next');
const bottomCardsNavigation = Array.from(document.querySelectorAll('.bottom_nav_item'));

const cards = Array.from(document.querySelectorAll('.card'));

const primaryColor = getComputedStyle(document.querySelector(':root'))
    .getPropertyValue('--primary-color');

let currentCardIndex = 0;

const setUpNavigation = () => {
    navigationBefore.addEventListener('click', () => {
        switchToCard(currentCardIndex - 1);
    })
    
    navigationNext.addEventListener('click', () => {
        switchToCard(currentCardIndex + 1);
    })
    
    for (let i = 0; i < bottomCardsNavigation.length; ++i) 
        bottomCardsNavigation[i].addEventListener('click', () => {
            switchToCard(i);
        });

    deactivateNavigationItem(navigationBefore);
    bottomCardsNavigation[0].style.backgroundColor = primaryColor;
}

const switchToCard = (cardIndex) => {
    console.log(cardIndex);

    if (cardIndex === 0) {
        deactivateNavigationItem(navigationBefore);
    }

    if (cardIndex === 2) {
        deactivateNavigationItem(navigationNext);
    }

    if (cardIndex !== 0) {
        activateNavigationItem(navigationBefore);
    }

    if (cardIndex !== 2) {
        activateNavigationItem(navigationNext);
    }
    
    toggleCard(currentCardIndex, cardIndex);

    bottomCardsNavigation[currentCardIndex].style.backgroundColor = '#fff';
    bottomCardsNavigation[cardIndex].style.backgroundColor = primaryColor;
    currentCardIndex = cardIndex;
}

const deactivateNavigationItem = (item) => {
    item.style.pointerEvents = 'none';
    // item.style.backgroundColor = '#ddd';
}

const activateNavigationItem = (item) => {
    item.style.pointerEvents = 'auto';
    item.style.backgroundColor = primaryColor;
}

const toggleCard = (previousCardIndex, nextCardIndex) => {
    cards[previousCardIndex].style.display = 'none';
    cards[nextCardIndex].style.display = 'grid';
}

setUpNavigation();
