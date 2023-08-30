let squareLength = 50

const body = document.querySelector('.sketch-window')
for(let i= 0; i<squareLength; i++) {
    const makeDiv = document.createElement('div')
    makeDiv.classList.add('container')
    body.appendChild(makeDiv)
}

const container = document.querySelectorAll('.container')
container.forEach(container => {
    for(let i= 0; i<squareLength; i++) {
    const makeDiv = document.createElement('div')
    makeDiv.classList.add('container-item')
    container.appendChild(makeDiv)
}
}) 

const containerItem = document.querySelectorAll('.container-item')
for (let i = 0; i < containerItem.length; i++){
    // containerItem[i].style.maxHeight = 
}

addEventListener("mouseover", (event) => {
    const text = console.log(event.target)
    event.target.classList.add('colored')
});
