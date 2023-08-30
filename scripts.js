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
// missing a condition that selected item is a container-item class
// best way seems to query for the selected items class
// and check if it the correct one
addEventListener("mouseover", (event) => {
    event.target.classList.add('colored')
    tmp = event.target.style.opacity
    event.target.style.opacity = +tmp + 0.1
});

const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', () => {
        const colored = document.querySelectorAll('.colored')
        colored.forEach(colored => {
            colored.classList.remove('colored')
        }) 
    });