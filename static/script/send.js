function send(){
    let data = {}
    let i = -1
    for (section of sections){
        let key = true
        const inputs = section.getElementsByClassName('input')
        for (input of inputs){
            if (key){
                key = false
                if (input.innerHTML.trim() != 'Вопрос...'){
                    data[i] = {
                        'question': input.innerHTML.trim(),
                        'mod': section.querySelector('input').checked,
                        'selfAnswer': section.getElementsByClassName('bottom-side')[0].querySelector('input').checked,
                        'answers': [],
                    }
                }
                }
            if (input.innerHTML.trim() != 'Ответ...'){
                data[i]['answers'].push(input.innerHTML.trim())
            }
        }
        i++
    }
    console.log(data)
    if (data != {}){
        $.ajax({
            url: '/quiz',
            type: 'POST',
            data: {
                'Quize': JSON.stringify(data),
            },
            success: (response) => {
                console.log(response)
            },
            error: (response) => {
                console.log(response)
            }
        });
    }
}