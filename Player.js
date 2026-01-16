/* Player constructor and methods go here */
// Player class to encapsulate player state
class Player {
  constructor() {
    this.xp = 0;
    this.gold = 50;
    this.health = 100;
    //this.charName = prompt("Enter your character name:");
    //  let img = prompt("Enter your character image URL (http(s)://...):");
    this.charName="Megan";
    this.image = "https://live.staticflickr.com/7497/15777223905_56fc88d315_b.jpg";
	this.currentWeapon = 0;
	this.buyWeapon = this.buyWeapon.bind(this); // ← bind once so button knows which player to use
	this.weapons = [0];
    this.locations = [0];
    this.currentLocation = -1;
	this.setLocation = this.setLocation.bind(this);
  }

  setLocation(index){
    this.currentLocation = index;
    let newLocation = WHS.locations.find(location => location.index === index);
    console.log("player is at " + newLocation);
  }


  getCurrentWeapon(){
    return allWeapons[this.currentWeapon];
  }

  getCurrentLocation(){
    return this.currentLocation;
  }

  getCurrentCoords(){
     let locationMatch = WHS.locations.find(location => location.getIndex() === this.currentLocation);
     return locationMatch.getCoords();
  }

  getCurrentLocationObject(){
    let currentLocationObject = WHS.locations.find(location => location.index === this.currentLocation);
    return currentLocationObject;
  }

   setWeaponsLoss(){
      return allWeapons[this.weapons.pop()].name;
  }

  buyWeapon() {
	console.log("buy weapon");
	console.log(this.currentWeapon) // + ":" + allWeapons.length)
    if (this.currentWeapon < allWeapons.length - 1) {
		console.log("weapon check");
    	if (this.gold >= 30) {
			console.log("gold check");
            this.gold -= 30;
            this.currentWeapon++;
			this.weapons.push(this.currentWeapon);
            goldText.innerText = this.gold;
            let newWeapon = allWeapons[this.currentWeapon].name;
    		text.innerText = "You now have a " + newWeapon + ".";
    	} else {
    		text.innerText = "You do not have enough gold to buy anew weapon.";
    	} 
		} else {
			text.innerText = "You already have the most powerful weapon!";
			button2.innerText = "Sell weapon for 15 gold";
			button2.onclick = sellWeapon;
		}
	}

}

const allWeapons = [
	{
		name: "stick",
		power: 5
	},
	{
		name: "dagger",
		power: 30
	},
	{
		name: "claw hammer",
		power: 50
	},
	{
		name: "sword",
		power: 100
	}
];


/* Need OOP Integration */

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
    	healthText.innerText = health;       
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }

}

function sellWeapon() {
	if (inventory.length > 1) {
		gold += 15;
		goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
	} else {
    	text.innerText = "Don't sell your only weapon!";
  	}
}

/* Does this below go in Location.js or stay here? */

function fightSlime() {
	fighting = 0;
	goFight();
}

function fightBeast() {
	fighting = 1;
	goFight();    
}

function fightDragon() {
	fighting = 2;
	goFight();
}

function lose() {
    update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
	inventory = ["stick"];
	goldText.innerText = gold;
	healthText.innerText = health;
	xpText.innerText = xp;
	goTown();
}

function easterEgg() {
	update(locations[7]);
}

function pickTwo() {
 pick(2);
}

function pickEight() {
 pick(8);
}

function pick(guess) {
    let numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }

    if (numbers.indexOf(guess) !== -1) {
        text.innerText += "Right! You win 20 gold!"
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!"
        health -= 10;
        healthText.innerText = health
        if (health <= 0) {
          lose();
        }
    }
}
