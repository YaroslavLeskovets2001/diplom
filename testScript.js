firstAnswer = document.querySelector('.first-text');
secondAnswer = document.querySelector('.second-text');
thirdAnswer = document.querySelector('.third-text');
answersButton = document.querySelector('.list');
questionText = document.querySelector('.question');
blockResult = document.querySelector('.result')
textResult = document.querySelector('.result-text')
blockHeader = document.querySelector('.main__header')


const actualPage = Number(localStorage.getItem('actualPage'))

const allQuestions = {
    firstPage: []
}

const questions = [
    'Какой вид компьютеров предназначен для решения различных задач типы которых не оговариваются:',
    'Какой вид компьютеров служит для решения более узкого круга задач, связанных, как правило, с управлением технологическими объектами, регистрацией, накоплением и обработкой небольших объемов данных, выполнением расчетов по несложным правилам:',
    'Какой вид компьютеров позволяет специализировать структуру задач и снизить стоимость и сложность при сохранении высокой производительности и надежности:',
    'Для решения различных задач кроме ЭВМ требуется так же и...',
    'Супер ЭВМ это-',
    'Для чего требуется многопроцессорные компьютеры?',
    'Какие по назначению могут быть МикроЭВМ?',
    'Какие по числу пользователей могут быть МикроЭВМ?',
    'По конструктировным особенностям Пк делятся на…',
    'Типовая конфигурация Пк включает в себя',


];
const answers = [
    'Универсальный', 'Проблемно ориентированные', 'Специализированный',
    'Универсальный','Проблемно-ориентированные', 'Специализированный',
    'Универсальный', 'Проблемно ориентированные', 'Специализированный',
    'Вычислительная техника', 'Ничего', 'Программист',
    'Мощные многопроцессорные компьютеры с огромным быстродействием', 'Слабые компьютеры', 'Ноутбуки',
    'Для решения экспериментальных задач', 'Для игр', 'Для фотошопа',
    'Многопользовательскими', 'Проблемно-ориентированные', 'Универсальными и специализированными',
    'Однодоступные и двухдоступные.', 'Однодоступные и Многопользовательские', 'Многопользовательские и Однопользовательские',
    'Не переносные и переносные','Стационарные и переносные','Игровые и не игровые',
    'Клавиатура дисплей','Колонки наушники', 'Системный блок,дисплей,клавиатуру'
];

const trueAnswers = [1, 2, 3, 1, 1, 1, 3, 3, 2, 3];
let userAnswers = [] 


let numberQuestion = 0;

const render = () => {
    questionText.innerHTML = questions[numberQuestion];
    firstAnswer.innerHTML = answers[numberQuestion * 3];
    secondAnswer.innerHTML = answers[numberQuestion * 3 + 1];
    thirdAnswer.innerHTML = answers[numberQuestion * 3 + 2];
};

const moveToNextQuestion = (e) => {
    const userAnswer = e.target.id;
    if (userAnswer) {
        if (numberQuestion < 9) {
        userAnswers.push(userAnswer);
        numberQuestion++;
        render()
        }  else {
            let counterTrueAnswer = 0;
            for (let i = 0; i < 10; i++) {
                if (trueAnswers[i] === Number(userAnswers[i])) {
                    counterTrueAnswer++;
                }
            }
            questionText.style.display = 'none'
            answersButton.style.display = 'none'
            blockHeader.style.display = 'none'
            blockResult.style.display = 'flex'
            textResult.innerHTML = `Вы ответили правильно на ${counterTrueAnswer} вопросов, поздраваляем!`
        }
    }
};
render()
answersButton.addEventListener('click', moveToNextQuestion)