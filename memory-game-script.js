const settings = document.querySelector('li #settings');
const settingsList = document.querySelector('ul.settings-options');

console.log(settings)

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