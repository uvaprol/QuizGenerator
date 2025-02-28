const mods = document.getElementsByClassName('mod')
const sections = document.getElementsByTagName('main')[0].getElementsByTagName('section')

function InputsMenager(){
    const inputs = document.getElementsByClassName('input')
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
                alert()
            }
        })
    }
}

function addAnswer(n){
                    // InputsMenager()
                                // sections[this.id].removeChild(sections[this.id].getElementsByClassName('answers')[sections[this.id].getElementsByClassName('answers').length - 1])
    sections[n].getElementsByClassName('answers')[0].innerHTML += 
    sections[n].getElementsByClassName('answers')[0].getElementsByTagName('template')[0].innerHTML

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

InputsMenager()