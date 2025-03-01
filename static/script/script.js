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
            }
        })
    }
}
let quiz = {

}
function addAnswer(n){
    if (quiz[n]){
        console.log(quiz[n])
        quiz[n]++
    } else {
        quiz[n] = 1
    }
    const parent = sections[n].getElementsByClassName('answers')[0]
    let child = parent.getElementsByTagName('template')[0].innerHTML
    child = child.replaceAll('_id_', quiz[n])
    console.log(child)
    parent.innerHTML += child
    InputsMenager()
}

function delAnswer(n, node){
    const parent = sections[n].getElementsByClassName('answers')[0]
    const child = parent.getElementsByClassName(node.id)[0]
    parent.removeChild(child)
    console.log(child)
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

