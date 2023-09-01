let squareLength = 60

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

addEventListener("mouseover", (event) => {
    if (event.target.classList.value === 'container-item' || event.target.classList.value === 'container-item colored'){
        event.target.classList.add('colored')
        // tmp = event.target.style.opacity
        // event.target.style.opacity = +tmp + 0.2
    } 
});

const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', () => {
        const colored = document.querySelectorAll('.container-item.colored')
        colored.forEach(colored => {
            colored.classList.remove('colored')
            // colored.style.opacity = 1
        }) 
    });