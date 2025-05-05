class HISTORY LangQuestion {
    constructor() {
        const questionPool = [
            {
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }
          {
                
                question: 'Хто був першим президентом незалежної України',
                correct: 'Леонід Кравчук',
                answers: ['Петро Порошенко','Леонід Кучма','Леонід Кравчук','Віктор Ющенко']
            }
      {
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }{
                
                question: 'Коли була прийнята Конституція України?',
                correct: '1996',
                answers: ['1991','1996','2004','2014']
            }
        ];

        const randomIndex = UkrLangQuestion.counter++;
        const data = questionPool[randomIndex];

        this.question = data.question;
        this.correct = data.correct;
        this.answers = [...data.answers];
        this.shuffle(this.answers);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
UkrLangQuestion.counter = 0;

const startBtn = document.querySelector('.start');
const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.answers');
const resultEl = document.querySelector('.result');
const container = document.querySelector('.container');
const mainContainer = document.querySelector('.main-container');

let questions = [];
let current = 0;
let score = 0;

startBtn.addEventListener('click', () => {
    questions = [];
    UkrLangQuestion.counter = 0;
    for (let i = 0; i < 12; i++) {
        questions.push(new UkrLangQuestion());
    }
    current = 0;
    score = 0;
    mainContainer.style.display = 'none';
    container.style.display = 'block';
    showQuestion();
});

function showQuestion() {
    if (current >= questions.length) {
        container.style.display = 'none';
        mainContainer.style.display = 'block';
        resultEl.textContent = `Ваш результат: ${score} з ${questions.length}`;
        return;
    }

    const q = questions[current];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';

    q.answers.forEach(ans => {
        const div = document.createElement('div');
        div.className = 'answer';
        div.textContent = ans;
        div.addEventListener('click', () => {
            if (ans === q.correct) score++;
            current++;
            showQuestion();
        });
        answersEl.appendChild(div);
    });
}
