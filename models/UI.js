export class UI {
    constructor(){}


    /**
     * 
     * @param {string} text 
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices choices of the question 
     */
    showChoices(choices, cb) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for(let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => cb(choices[i]))

            choicesContainer.append(button);
        }
    }
}