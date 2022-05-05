const buttonIn = document.querySelector('.button-in');
const buttonUp = document.querySelector('.button-up')
const textFieldLogin = document.querySelector('.login')


const makeUser = (e) => {
    username = textFieldLogin.value
    localStorage.setItem('username', `${username}`);
};

const signUser = (e) => {
    console.log(e.target)
    username = textFieldLogin.value
    localStorage.setItem('username', `${username}`);
};

buttonIn.addEventListener('click', signUser)
buttonUp.addEventListener('click', makeUser)