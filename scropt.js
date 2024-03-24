const textareaEl = document.querySelector('.textarea');
const wordsNumberEl = document.querySelector('.stat__number--words');
const charactersNumberEl = document.querySelector('.stat__number--Characters');
const xNumberEl = document.querySelector('.stat__number--x');
const facebookNumberEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => {
        // validate user input
        if(textareaEl.value.includes('<script>')){
            alert('Don\'t hack us');
            textareaEl.value = textareaEl.value.replace('<script>', '');
        }
    
        const numberOfCharacter = textareaEl.value.length;
        const xCharactersLeft = 280 - numberOfCharacter;
        const facebookCharactersLeft = 2200 - numberOfCharacter;
        const numberOfWords = textareaEl.value.split(' ').length;
        if (numberOfWords === 0) {
            numberOfWords = 0;
        }
    
        if (xCharactersLeft < 0) {
            xNumberEl.classList.add('stat__number--limit');
        } else {
            xNumberEl.classList.remove('stat__number--limit');
        }
    
        if (facebookCharactersLeft < 0) {
            facebookNumberEl.classList.add('stat__number--limit');
        } else {
            facebookNumberEl.classList.remove('stat__number--limit');
        }
    
        charactersNumberEl.textContent = numberOfCharacter;
        wordsNumberEl.textContent = numberOfWords;
        xNumberEl.textContent = xCharactersLeft;
        facebookNumberEl.textContent = facebookCharactersLeft;
}

textareaEl.addEventListener('input', inputHandler);