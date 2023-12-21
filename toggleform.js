const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const toggleContainer = document.querySelector('.toggle-container');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    toggleContainer.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    toggleContainer.classList.remove("active");
});
