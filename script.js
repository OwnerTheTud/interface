const container = document.querySelector('.container');
const sign = document.querySelector('.signup-section header');
const login = document.querySelector('.login-section header');

login.addEventListener('click', ()=>{
    container.classList.add('active')
})

sign.addEventListener('click', ()=>{
    container.classList.remove('active')
})
