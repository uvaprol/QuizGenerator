const inputs = document.getElementsByTagName('input')
for (input of inputs){
    input.addEventListener('input', function(){
        document.getElementById(`mirrow_${this.id.slice(6)}`).innerHTML = this.value
    })
    input.onselect = function(){

    }
}