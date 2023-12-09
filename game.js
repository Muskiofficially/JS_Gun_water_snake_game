//let's create a function to generate the random letters from W, S and G.


let generateRandomNumber = ()=>{

    let randomNumber = Math.floor(Math.random()*3)
    let Letters = ['S','W','G']
    var randomLetters = Letters[randomNumber]
    return randomLetters
   
}
let userName = prompt("Hey stranger...!what's your name?")

let userScore = 0;
let computerScore = 0;
let totalAttempts = 6;

for(let Attempt = 1; Attempt<=totalAttempts; Attempt++){
    let computTurn = generateRandomNumber()
    console.log(generateRandomNumber())
let userTurn = prompt("Heyyaaa...." + userName+' ' + "what will you choose, Water, Snake or Gun?:  'W','S' or 'G'")

if(computTurn === 'G' && userTurn === 'S'){
    alert("Sorry"+ ' '+ userName+ ' '+ "You lost this game,try your best to win next time")
    computerScore++
    
}
else if (computTurn === 'G' && userTurn === 'W')
{
    alert("Congratulations...." + userName+ ' '+ "You won this game")
    userScore++
}
else if (computTurn === 'G' && userTurn === 'G')
{
    alert("opps..."+ userName +' '+ "Actually this is denined because you both have selected the same thing...")
    
}
else if(computTurn === 'S' && userTurn === 'W')
{
    alert("Sorry"+ ' '+ userName+ ' '+ "You lost this game,try your best to win next time")
    computerScore++
}
else if(computTurn ==='S' && userTurn === 'G'){

    alert("Congratulations...." + userName+ ' '+ "You won this game")
    userScore++
    
}
else if(computTurn === 'S' && userTurn === 'S'){

    alert("opps..."+ userName +' '+ "Actually this is denined because you both have selected the same thing...")
}
else if(computTurn === 'W' && userTurn === 'S'){

    alert("Congratulations...." + userName+ ' '+ "You won this game")
    userScore++
   
}
else if( computTurn ==='W' && userTurn === 'G'){

    alert("Sorry"+ ' '+ userName+ ' '+ "You lost this game,try your best to win next time")
    computerScore++
   
}
else if(computTurn === 'W' && userTurn === 'W'){

    alert("opps..."+ userName +' '+ "Actually this is denined because you both have selected the same thing...")
   
}

}

document.getElementById("totalScore").innerHTML = ("Game Over! Final Scores\n" + userName + ": " + userScore + "\nComputer: " + computerScore);

if(computerScore > userScore){
    
    document.getElementById("losser").innerHTML = ("Sorry...." + ' '+ userName +' '+  "! You lost this game, try your luck for next time....😕");
}
else if(computerScore < userScore){
    document.getElementById("Winner").innerHTML= ("Congratulations....."+ ' '+ userName +' ' + "You won this game....😍")
}
else {
    document.getElementById("tie").innerHTML = ("It's a tie! " + userName + " and the computer have the same score....🤦‍♀️🤦‍♂️");
}


