const buttonIn = document.querySelector('.button-in');
const buttonUp = document.querySelector('.button-up')
const textFieldLogin = document.querySelector('.login')
const passwordField = document.querySelector('.password')

let statusCheck = false
let logInStatus = false
URL_SITE = 'http://127.0.0.1:8000/todo/todos/'


const makeUser = (e) => {
    let allUserNames = []
    const username = textFieldLogin.value.trim();
    const UserPassword = passwordField.value.trim();
    if (username && UserPassword) {
        fetch(URL_SITE)
        .then((response) => response.json())
        .then((response) => {
            allUserNames = response
            console.log(allUserNames)
            allUserNames.forEach((element) => {
                console.log(element.name)
                if(username === element.name)
                {
                    statusCheck = true
                }
            })
            if(statusCheck === true){
                alert('Это имя уже занято, выберите другое')
            }  else {
                fetch(URL_SITE, {
                    method: "POST",
                    body: JSON.stringify({
                    name: username,
                    password: UserPassword
                    })
                })
                localStorage.setItem('username', `${username}`);
                document.location.href = 'http://127.0.0.1:5500/front/index.html?'
            }
            
        })
    }
    else {
        alert('Введите логин и пароль')
    }
};

const signUser = (e) => {
    const username = textFieldLogin.value.trim();
    const UserPassword = passwordField.value.trim();
    let allUsers = []
    fetch(URL_SITE)
        .then((response) => response.json())
        .then((response) => {
            allUsers = response
            allUsers.forEach((element) => {
                if(username === element.name && UserPassword === element.password) {
                    logInStatus = true;
                }
            })
            if(logInStatus === true) {
                localStorage.setItem('username', `${username}`);
                document.location.href = 'http://127.0.0.1:5500/front/index.html?'
            }  else {
                alert('Неверные данные повторите попытку снова');
            }
        })
};

buttonIn.addEventListener('click', signUser)
buttonUp.addEventListener('click', makeUser)