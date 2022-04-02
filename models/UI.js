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


    /**
     * 
     * @param {number} score total score
     */
    showScore(score) {
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
        `;
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;

    }


    /**
     * 
     * @param {number} curretIndex  current index
     * @param {number} total total questions
     */
    showProgress(curretIndex, total) {
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${curretIndex} of ${total}`;
    }
}