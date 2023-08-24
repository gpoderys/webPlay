const body = document.querySelector('body')
for(let i= 0; i<4; i++) {
    const makeDiv = document.createElement('div')
    makeDiv.classList.add('container')
    body.appendChild(makeDiv)
}
const container = document.querySelectorAll('.container')
container.forEach(container => {
    for(let i= 0; i<4; i++) {
    const makeDiv = document.createElement('div')
    makeDiv.classList.add('container-item')
    container.appendChild(makeDiv)
}
}) 
