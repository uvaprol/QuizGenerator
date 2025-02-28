const inputs = document.getElementsByClassName('input')

for (e of inputs){
    e.addEventListener('click', function (){
        if (e.innerText == 'Вопрос...'){
            e.innerText = ''
        }
    })
    e.addEventListener('blur', function (){
        if (e.innerText == '' | e.innerHTML == '<br>'){
            e.innerText = 'Вопрос...'
        }
    })
}
