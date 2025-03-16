function send(){
    let data = {}
    let i = -1
    for (section of sections){
        let key = true
        const inputs = section.getElementsByClassName('input')
        for (input of inputs){
            if (key){
                key = false
                data[i] = {
                    'question': input.innerHTML.trim(), 
                    'mod': section.querySelector('input').checked, 
                    'selfAnswer': section.getElementsByClassName('bottom-side')[0].querySelector('input').checked,
                    'answers': [],
                }
                }
            data[i]['answers'].push(input.innerHTML.trim())
        }
        i++
    }
    console.log(data)
}