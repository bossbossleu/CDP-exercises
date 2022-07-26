let btn = document.querySelector('button');
let btnGrp = document.querySelector('.button-group')

btn.addEventListener('click', addBtnToPage);

function createNewBtn(){
    const newBtn = document.createElement('button');
    newBtn.classList.add('flat')
    btnGrp.addendChild(newBtn)
}