const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
const cellContainer = document.querySelector('.cellContainer')
const cells =document.querySelectorAll('.cell')
const newGameButton = document.querySelector('.newGame')
const resetButton = document.querySelector('.reset')
const displayMessage = document.querySelector('.displayMessage')
const message = document.querySelector('.message')

let turn=true;
let count=0

function reset(){
    enable()
    turn=true
    count=0
    displayMessage.classList.add('show')
    document.querySelector('.container').classList.remove('show')
    
   
}
function draw(){
    message.innerText =`The Game was Draw`
    displayMessage.classList.remove('show')
    document.querySelector('.container').classList.add('show')
    disable()
}
function disable(){
    for (let cell of cells) {
        cell.disabled = true
    }
}
function enable(){
for (let cell of cells) {
    cell.disabled =false
    cell.innerText =''
}
}
function showWinner(cell){
    message.innerText = `${cell} is the Winner,
                         Don't get sad Play Again `
    displayMessage.classList.remove('show') 
    document.querySelector('.container').classList.add('show')
    disable()

}
function checkWinner(){
    for (let pattern of winPatterns) {
        let pat1 = cells[pattern[0]].innerText
        let pat2 = cells[pattern[1]].innerText
        let pat3 = cells[pattern[2]].innerText

        if(pat1!=''&&pat2!=''&&pat3!=''){
        if(pat1==pat2&&pat2==pat3){
                showWinner(pat1)
                return true
        }
        }
    }
}
cells.forEach(cell => {
    cell.addEventListener('click',()=>{
        if(turn){
            cell.innerText = 'X'
            cell.style.color='black'
            turn=false
        }else{
            cell.innerText ='O'
            cell.style.color='black'
            turn=true
        }
        cell.disabled = true
        count++

        let winner = checkWinner()
        if(count==9&&!winner){
            draw()
        }
    })
});
newGameButton.addEventListener('click',reset)
resetButton.addEventListener('click',reset)