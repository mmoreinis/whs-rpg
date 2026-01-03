/* Melee related functions  - COULD be a Melee object */

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
	  monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + player.getCurrentWeapon().name + ".";
    if (isMonsterHit()) {
        health -= getMonsterAttackValue(monsters[fighting].level);
    } else {
		text.innerText += " You miss.";
	}
    monsterHealth -= player.getCurrentWeapon().power + Math.floor(Math.random() * xp) + 1;
  	healthText.innerText = health;
  	monsterHealthText.innerText = monsterHealth;   
  	if (health <= 0) {
  		lose();
  	} else if (monsterHealth <= 0) {
  		fighting === 2 ? winGame() : defeatMonster();
  	}
  	if (Math.random() <= .1 && inventory.length !== 1) {
          text.innerText += " Your " + player.setWeaponsLoss() + " breaks.";
          currentWeapon--;
  	}
}

function getMonsterAttackValue(level) {
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
}

function isMonsterHit() {
	return Math.random() > .2 || health < 20;
}


function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level;
    goldText.innerText = gold;
	  xpText.innerText = xp;
    update(locations[4]);
}
