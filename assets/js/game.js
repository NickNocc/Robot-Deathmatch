//ended 3.5.6


var fight = function(enemy)  {
  while(enemy.health > 0) {
  fightOrSkip();
  if (fightOrSkip) {
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0,enemy.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    } 
  }
  if (!fightOrSkip){

  }
  }
}
//function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyObj = enemyInfo[i];

        pickedEnemyObj.health = randomNumber(40, 60);

        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert*("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    debugger;
    switch(shopOptionPrompt){
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.UpgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      break;
  }
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var getPlayerName = function() {
  var name = "";
  while(name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    }
    else {
      window.alert("You don't have enough money!");
    }
  },

  UpgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

var fightOrSkip = function() {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP to choose.");
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again");
    return fightOrSkip();
  }
  promptFight = promptFight.toLowerCase();
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    // if player choses to skip
  }
  if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
       playerInfo.money = Math.max(0, playerInfo.money - 10);
       return true;
      }
      else{
          fight();
      }
      window.alert(playerInfo.name + " has chosen to skip the fight!");
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
    return false;
}

startGame();

