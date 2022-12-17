const dataBtn = document.querySelectorAll('[data-btn');
const dataBox = document.querySelectorAll('[data-atrb');

hideBox = () => {
    dataBox.forEach(atrb => atrb.classList.add('hide'));
}

hideBtn = () => {
    dataBtn.forEach(btn => btn.classList.remove('active'));
}

showBox = (id) => {
    const idBox = document.querySelector(`[data-atrb="${id}"]`)
    idBox.classList.remove('hide');
}

showBtn = (id) => {
    const idBtn = document.querySelector(`[data-btn="${id}"]`)
    idBtn.classList.add('active');
}

//EXECUTE
dataBtn.forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.btn;
    console.log(id);
    hideBox();
    hideBtn();
    showBox(id);
    showBtn(id);
}))


// const btnLogin = document.querySelector('.btn-login');
// const boxLogin = document.querySelector('.login');
// const btnSingUp = document.querySelector('.btn-sing-up');
// const boxSingUp = document.querySelector('.sing-up');

// //LOGIN
// btnLogin.addEventListener('click', function(event) {
//     btnLogin.classList.add('active');
//     btnSingUp.classList.remove('active');

//     boxLogin.classList.remove('hide');
//     boxSingUp.classList.add('hide');
// })

// //SING UP
// btnSingUp.addEventListener('click', function(event) {
//     btnSingUp.classList.add('active');
//     btnLogin.classList.remove('active');
    
//     boxSingUp.classList.remove('hide');
//     boxLogin.classList.add('hide');
// })
