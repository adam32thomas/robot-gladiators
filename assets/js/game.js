

let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    //subtract the value of 'playerAttack' from value of 'enemyHealth' and update enemy health variable
    enemyHealth = enemyHealth - playerAttack;
    //log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //subtract the value of 'enemyAttack' from the value or 'playerHealth' and update player health variable
    playerHealth = playerHealth - enemyAttack;
    //log a resulting message the the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // put new code under this
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } 
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // put new code under this
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}


fight();
