const inputs = document.getElementsByClassName('input')
const mods = document.getElementsByClassName('mod')

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