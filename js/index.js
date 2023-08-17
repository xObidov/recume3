let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let ulList = document.querySelector('#list')
let i = 0
let x = 0



btn.onclick = () => {
    list.innerHTML = ''
    for ( i = input.value; i <= input.value; i++){
        for ( x = 1; x <= 10; x++){
            list.innerHTML += `<div class="listUl"><li>${i} * ${x} = ${i * x}</li></div>`
        }
    }
    input.value = ''
}