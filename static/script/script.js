const inputs = document.getElementsByClassName('input')
const mods = document.getElementsByClassName('mod')

for (e of inputs){
    e.addEventListener('focus', function (){
        if (this.innerText == 'Вопрос...' || this.innerText == 'Ответ...'){
            this.innerText = ''
            this.style.borderBottom = '1px #4da33c solid'
        }
    })
    e.addEventListener('blur', function (){
        if (this.innerText == '' || this.innerHTML == '<br>'){
            this.getAttribute('name') == 'question' ? this.innerText = 'Вопрос...' : this.innerText = 'Ответ...'
            this.style.borderBottom = 'none'
        }
    })
}

for (e of mods){
    e.addEventListener('mouseover', function (){
        this.getElementsByTagName('label')[0].style.display = 'none'
        this.getElementsByTagName('select')[0].style.display = 'block'
    })
    e.addEventListener('mouseout', function (){
        this.getElementsByTagName('label')[0].style.display = 'block'
        this.getElementsByTagName('select')[0].style.display = 'none'
    })
}