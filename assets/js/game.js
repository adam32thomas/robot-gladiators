
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

console.log("Our robot's name is " + playerName);
window.alert(playerName);

let fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining. ");
    playerHealth = playerHealth - enemyAttack;
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    console.log(enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining. ");
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT"){
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
    }   else if (promptFight === "skip" || promptFight === "SKIP") {
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney -2;
        }
        else {
            fight();
        }
    }   else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

fight();
