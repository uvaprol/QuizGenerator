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

function ModManager(){
    const mods = document.getElementsByClassName('mod')
    console.log(mods)
    for (e of mods){
        e.addEventListener('mouseover', function (){
            this.getElementsByTagName('label')[0].style.display = 'none'
            this.getElementsByTagName('select')[0].style.display = 'block'
        })
        e.addEventListener('mouseout', function (){
            this.getElementsByTagName('label')[0].style.display = 'block'
            this.getElementsByTagName('select')[0].style.display = 'none'
        })
        e.addEventListener('change', function (){
            const m = this.getElementsByTagName('select')[0].value
            // определяем ноду родитель и получаем ее поле для ответов
            //меняем type у инпутов на m
            if (m == 'text'){
                /* меняем html содержимое на чистый шаблон 
                убираем кнопку добавить элемент новый ответ
                меняем type у инпута на m*/
            } else {
                //проверяем существование кнопки добавить ответ
            }
        })
    }
}

function addAnswer(node){
    const nodes = main.getElementsByClassName('addAnswerBtn')
    for (let i=0; i < nodes.length; i++){
        if (nodes[i] == node){
            const parent = sections[i+1].getElementsByClassName('answers')[0]
            parent.innerHTML += templates[1].innerHTML
            InputsMenager()
            break
        }
    }
}

function addQuestion(){
    const btn = document.getElementById('addQuestButton')
    main.removeChild(btn)
    main.innerHTML += templates[0].innerHTML
    InputsMenager()
    ModManager()
}

function delAnswer(node){
    console.log(node)
    for (section of sections){
        const childs = section.getElementsByClassName('answer-fill')
        for (child of childs){
            const btn = child.getElementsByClassName('answer-del')[0]
            if (btn == node){
                const parent = section.getElementsByClassName('answers')[0]
                parent.removeChild(child)
                break
            }
        }
    }
}

function delQuestion(node){
    const nodes = main.getElementsByTagName('aside')
    for (let i=0; i < nodes.length; i++){
        if (nodes[i] == node){
            main.removeChild(sections[i+1])
            break
        }
    }
}


InputsMenager()
ModManager()