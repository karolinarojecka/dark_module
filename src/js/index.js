import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

//change mode

let isDark = true;

const switchMode = document.querySelector('.block__switch');

switchMode.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--color-background', '#F9F5F1'); 
        document.documentElement.style.setProperty('--color-text', '#2B1F12'); 
        isDark = true;
    } else {
        document.documentElement.style.setProperty('--color-background', '#2B1F12'); 
        document.documentElement.style.setProperty('--color-text', '#ffffff'); 
        isDark = false;
    }
})