var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

if (playerHealth > 0) {
    console.log("Your player is still alive");
}

console.log(playerAttack, playerName, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function()  {
    window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + "attacked" + enemyName + "." + " now has" + enemyHealth + "health remaining"
    );
    //check enemy hp
    if (enemyHealth <= 0) {
        window.alert(enemyName + "Has died!")
    }
    else {
        window.alert(enemyName + "still has " + enemyHealth + " health left.");
    }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
    //checks player's hp
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + "still has " + playerHealth + " health left");
    }
};

fight();