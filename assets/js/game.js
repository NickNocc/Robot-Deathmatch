var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName)  {
  while(enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP to choose.");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playermoney = playermoney - 2;
      }
      else{
          fight();
      }
      window.alert(playerName + " has chosen to skip the fight!");
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
}
//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedEnemyName);

        if (playerHealth > 0 && i < enemyNames.length - 1) {
          // confirm for shop
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          if (storeConfirm) {
            shop();
          }
        }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
    endGame();
};

//function to end the entire game
var endGame = function() {
  if (playerHealth > 0) {
    window.alert*("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restarts the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  //asks the player what they want to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerMoney > 7) {  
        window.alert("Refilling player's health by 20 for 7 dollars.");
        //increase and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney > 7) {  
        window.alert("Increasing player's attack by 6 for 7 dollars.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You dont have nough money!");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not picka a valid option. Try again.");
      shop();
      break;
  }
};

startGame();

