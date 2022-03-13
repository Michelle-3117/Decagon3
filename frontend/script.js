let display = document.getElementById('display')
let clear = document.getElementById('clear')
let division = document.getElementById('division')
let multiplication = document.getElementById('multiplication')
let subtract = document.getElementById('subtract')
let add = document.getElementById('add')
let point = document.getElementById('point')
let openBrac = document.getElementById('open-brac')
let closeBrac = document.getElementById('close-brac')
let del = document.getElementById('delete')
let calculate = document.getElementById('calc')

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let num0 = document.getElementById('num0')

num1.addEventListener('click', () => {
    display.value = display.value + 1
    display.style.fontsize = '50px'  
})
num2.addEventListener('click', () => {
    display.value = display.value + 2
    display.style.fontsize = '50px'  
})
num3.addEventListener('click', () => {
    display.value = display.value + 3
    display.style.fontsize = '50px'  
})
num4.addEventListener('click', () => {
    display.value = display.value + 4
    display.style.fontsize = '50px'  
})
num5.addEventListener('click', () => {
    display.value = display.value + 5
    display.style.fontsize = '50px'  
})
num6.addEventListener('click', () => {
    display.value = display.value + 6
    display.style.fontsize = '50px'  
})
num7.addEventListener('click', () => {
    display.value = display.value + 6
    display.style.fontsize = '50px'  
})
num8.addEventListener('click', () => {
    display.value = display.value + 8
    display.style.fontsize = '50px'  
})
num9.addEventListener('click', () => {
    display.value = display.value + 9
    display.style.fontsize = '50px'  
})
num0.addEventListener('click', () => {
    display.value = display.value + 0
    display.style.fontsize = '50px'  
})
add.addEventListener('click', () => {
    display.value = display.value + "+"
    display.style.fontsize = '50px'  
})
subtract.addEventListener('click', () => {
    display.value = display.value + "-"
    display.style.fontsize = '50px'  
})
multiplication.addEventListener('click', () => {
    display.value = display.value + "*"
    display.style.fontsize = '50px'  
})
division.addEventListener('click', () => {
    display.value = display.value + "/"
    display.style.fontsize = '50px'  
})
point.addEventListener('click', () => {
    display.value = display.value + "."
    display.style.fontsize = '50px'  
})
openBrac.addEventListener('click', () => {
    display.value = display.value + "("
    display.style.fontsize = '50px'  
})
closeBrac.addEventListener('click', () => {
    display.value = display.value + ")"
    display.style.fontsize = '50px'  
})
clear.addEventListener('click', () => {
    display.value = "" 
})
del.addEventListener('click', () => {
    display.value = (display.value).substring(0,(display.value).length-1)   
})
calculate.addEventListener('click', () => {
    display.value = eval(display.value)  
})