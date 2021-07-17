const settings = document.querySelector('li #settings');
const settingsList = document.querySelector('ul.settings-options');

const progressBar = document.querySelector('.progress-bar');
const progressInfo = document.querySelector('.progress-info');

const startButton = document.querySelector('button.start-game');
const stopButton = document.querySelector('button.stop-game');
const nextButton = document.querySelector('button.next');

settings.addEventListener('click', () => {
    console.log('123');
    const currentDisplay = getComputedStyle(settingsList).getPropertyValue('display');
    if (currentDisplay === 'none') {
        settingsList.style.display = 'flex';
    }
    if (currentDisplay === 'flex') {
        settingsList.style.display = 'none';
    }
})

startButton.addEventListener('click', () => {
    console.log('start');
    startGame();
})

stopButton.addEventListener('click', () => {
    console.log('stop');
    // stop playing game
})

nextButton.addEventListener('click', () => {
    console.log('next');
    round++;
    updateProgress();
})


let round = 0;



function startGame() {
    setUpButtons();
}

function setUpButtons() {
    setDisplayNone(startButton);
    setDisplayBlock(stopButton);
    setDisplayBlock(nextButton);
}

function setDisplayNone(element) {
    element.style.display = 'none';
}

function setDisplayBlock(element) {
    element.style.display = 'block';
}

function updateProgress() {
    updateProgressInfo();
    updateProgressBar();
}

function updateProgressInfo() {
    if (round > 13) return;
    progressInfo.textContent = `${round} / 13`;
}

function updateProgressBar() {
    const progressValue = parseInt(round * 100 / 13);
    if (progressValue > 100) return;
    if (progressValue === 100) {
        progressBar.style.borderRadius = '4px';
    }
    progressBar.style.width = `${progressValue}%`;
}