

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
    }
}


fight();
