const header = document.querySelector('.course-pages');
const introduction = document.querySelector('.main__info-course');
const firstChapter = document.querySelector('.main__first-page');
const secondChapter = document.querySelector('.main__second-page');
const thirdChapter = document.querySelector('.main__third-page');

const test = (event) => {
    console.log(event.target.id)
    let buttonId = Number(event.target.id);
        if (buttonId) {
            introduction.style.display = 'none';
            firstChapter.style.display = 'none';
            secondChapter.style.display = 'none';
            thirdChapter.style.display = 'none'
        if(buttonId === 1)  firstChapter.style.display = 'block';            
        else if (buttonId === 0)  introduction.style.display = 'block';
        else if (buttonId === 2)  secondChapter.style.display = 'block';
        else if (buttonId === 3)  thirdChapter.style.display = 'block'
}
};

header.addEventListener('click', test);