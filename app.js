const boxes = document.querySelectorAll('.box')
const input = document.getElementById('weight')
const kg = document.getElementById('kg')
const gr = document.getElementById('gr')
const ou = document.getElementById('ou')

input.addEventListener('input', function(){
    const pounds = parseFloat(input.value)
    let kilograms = 0.453 * pounds
    let grams = 453.6 * pounds
    let ounces = 16 * pounds
    boxes.forEach((box)=>{
        if(pounds > 0){
            box.classList.remove('hide')
        }
        else if(pounds === 0 || isNaN(pounds)){
            box.classList.add('hide')
        }
    })
    gr.textContent = grams.toFixed(2)
    kg.textContent = kilograms.toFixed(2)
    ou.textContent = ounces.toFixed(2)
})

