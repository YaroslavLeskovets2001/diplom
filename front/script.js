const header = document.querySelector('.course-pages');
const introduction = document.querySelector('.main__info-course');
const firstChapter = document.querySelector('.main__first-page');
const secondChapter = document.querySelector('.main__second-page');
const thirdChapter = document.querySelector('.main__third-page');
const fourthChapter = document.querySelector('.main__fourth-page');
const fivethChapter = document.querySelector('.main__fiveth-page');
const buttonsChapter = document.querySelector('.course-pages__button-page');
const chapterSixth = document.querySelector('.main__sixth-page');
const buttonTest = document.querySelector('.block-test');
const username = document.querySelector('.profile__name');


username.innerHTML = localStorage.getItem('username')
const test = (event) => {
    let buttonId = Number(event.target.id);
    const button = event.target;
        if (buttonId || buttonId === 0) {
            buttonTest.style.display = 'none'
            introduction.style.display = 'none';
            firstChapter.style.display = 'none';
            secondChapter.style.display = 'none';
            thirdChapter.style.display = 'none';
            fourthChapter.style.display = 'none';
            fivethChapter.style.display = 'none';
            chapterSixth.style.display = 'none';
        if(buttonId === 1) {
            firstChapter.style.display = 'block';
            buttonTest.id = '0';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 0);
        } 
        else if (buttonId === 0)  introduction.style.display = 'block';
        else if (buttonId === 2)  {
            secondChapter.style.display = 'block';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 1);
        }
        else if (buttonId === 3)  {
            thirdChapter.style.display = 'block';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 2);
        }
        else if (buttonId === 4)  {
            fourthChapter.style.display = 'block';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 3);
        }
        else if (buttonId === 5)  {
            fivethChapter.style.display = 'block';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 4);
        }
        else if (buttonId === 6)  {
            chapterSixth.style.display = 'block';
            buttonTest.style.display = 'block'
            localStorage.setItem('actualPage', 5);
        }
}
};
header.addEventListener('click', test);