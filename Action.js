class Action {
	
	constructor(name, text) {
		this.name = name;
		this.text = text;
		// this.getCurrentCoords = this.getCurrentCoords.bind(this);
  	}
  getName(){
	return this.name;
  }
  getText(){
	return this.text;
  }
  
} // End Action Class

/* This is a collection of all the locations which can be referenced from other classes */

class Choices {
    constructor(name) {
        this.name = name;
        this.actions = []; 
    }
	addAction(choices) {
        if (choices instanceof Action) {
            this.actions.push(choices);
            console.log(`Added "${choices.name}" to choices.`);
        } else {
            console.error("Invalid object: only Action instances allowed.");
        }
    }

    listChoices() {
        console.log(`\n--- Choices in ${this.name} ---`);
        this.actions.forEach(choices => {
            // We can call methods directly on the stored instances
           choices.displayInfo(); 
        });
    }

	getName(){
		return this.actions.name;
  	}

} // End Choices Class


const actions = [
	{
	 	name: "Eat Lunch",
		text: "You go to the cafe and take a tray. You will never know what you will find, how much it would cost, how would it affect your health and XP, and whether it'll give you any magic powers.",
		choices: ["Read Menu", "Fill Tray Randomly", "Steal Pocket Foods"] 
	},
	{
	 	name: "Read Menu",
		text: "Here are the items on the menu. Pick one to start.",
		choices: generateMenu()
	},
	{
	 	name: "Fill Tray Randomly",
		text: "You filled your tray with random items. Now you're at the register.",
		choices: ["Pay With Gold", "Sneak Out"]
	},
	{
	 	name: "Get Pass",
		text: "The receptionist's stare, waiting for you to do something."
	},
	{
	 	name: "Lie",
		text: "You enter the stairwell, the lights have been cut off and you hear terrible, monstrous groans."
	},
	{
	 	name: "Buy Weapon",
		text: "You're attacked as you enter the library."
	},
	{
	 	name: "Sell Weapon",
		text: "You're attacked as you enter the library."
	},
	{
	 	name: "Attack",
		text: "You're attacked as you enter the library."
	},
	{
	 	name: "Dodge",
		text: "You're attacked as you enter the library."
	},
	{
	 	name: "Run",
		text: "You're attacked as you enter the library."
	}
]



const WHSchoices = new Choices('WHS');
this.actions.forEach(data => {
    const newChoices = new Action(data.index, data.name, data.coords);
    WHSchoices.addAction(newChoices);
});

console.log("WHSactions is created!");
console.log("First one: " + JSON.stringify(WHS.actions[0].name));


function goStore() {
    update(locations[1]);
}

function goTown() {
    update(locations[0]);
}

function goCave() {
    update(locations[2]);
}
function actionButtons(location) {
    // monsterStats.style.display = "none";
	// button1.innerText = location["button text"][0];
	// button2.innerText = location["button text"][1];
	// button3.innerText = location["button text"][2];
	// button1.onclick = location["button functions"][0];
	// button2.onclick = location["button functions"][1];
	// button3.onclick = location["button functions"][2];
    text.innerText = location.text;   
	player.setLocation(locations.indexOf(location)); 
}

