let inputDirection = { x: 0, y:0 }
let lastInputDirection = {x: 0, y: 0}

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1}
            if (lastInputDirection.y !== 0)break
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1}
            if (lastInputDirection.y !== 0)break
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0}
            if (lastInputDirection.x !== 0)break
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0}
            if (lastInputDirection.x !== 0)break
            break
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}