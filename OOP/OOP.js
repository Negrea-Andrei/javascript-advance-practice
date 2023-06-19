//!Keep in mind that there is not usually a very clear answer to your application design questions. 
//!Some patterns and ideas are obviously better than others, but there is often some trade-off when deciding where to put a specific function. 
//!In other words… these principles are not rules- they’re helpful guidelines.  

//!Single Responsibility

//*As you craft your objects, one of the most important things to remember is the Single Responsibility Principle which states that a class (or object or module… you get the point) should only have one responsibility. 
//*This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

//?NOT THIS
function isGameOver() {

    // game over logic goes here!

    if (gameOver) {
        const gameOverDiv = document.createElement('div');
        gameOverDiv.classList.add('game-over');
        gameOverDiv.textContent = `${this.winner} won the game!`;
        document.body.appendChild(gameOverDiv);
    }
}

//?THIS!
function isGameOver() {

    // game over logic goes here!

    if (gameOver) {
        DOMStuff.gameOver(this.winner);
    }
}

//!The Single Responsibility Principle is the first of a commonly found set of 5 design principles called the SOLID principles. 
//!You will read more about these principles in the assignment articles below.