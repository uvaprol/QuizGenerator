const mods = document.getElementsByClassName('mod')
const main = document.getElementsByTagName('main')[0]
const sections = main.getElementsByTagName('section')
const templates = main.getElementsByTagName('template')

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
// let question = 1
let quiz = {}
function addAnswer(n){
    if (quiz[n]){
        console.log(quiz[n])
        quiz[n]++
    } else {
        quiz[n] = 1
    }
    const parent = sections[n].getElementsByClassName('answers')[0]
    let child = templates[1].innerHTML
    parent.innerHTML += child.replaceAll('_id_', quiz[n])
    InputsMenager()
}

function addQuestion(){
    
}

function delAnswer(n, node){
    const parent = sections[n].getElementsByClassName('answers')[0]
    const nodes = parent.getElementsByClassName('answer-del')
    const fills = parent.getElementsByClassName('answer-fill')
    for (let i=0; i < nodes.length; i++){
        if (nodes[i] == node){
            parent.removeChild(fills[i])
        }
    }
    // parent.removeChild(child)
    // console.log(child)
}

function delQuestion(node){
    const nodes = main.getElementsByTagName('aside')
    for (let i=0; i < nodes.length; i++){
        if (nodes[i] == node){
            main.removeChild(sections[i+1])
        }
    }
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

