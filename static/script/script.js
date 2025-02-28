const inputs = document.getElementsByClassName('input')

for (e of inputs){
    e.addEventListener('focus', function (){
        if (this.innerText == 'Вопрос...' || this.innerText == 'Ответ...'){
            this.innerText = '\u00A0'
        }
    })
    e.addEventListener('blur', function (){
        if (this.innerText == '\u00A0' || this.innerHTML == '<br>'){
            console.log(this.id)
            this.getAttribute('name') == 'question' ? this.innerText = 'Вопрос...' : this.innerText = 'Ответ...'
        }
    })
}

