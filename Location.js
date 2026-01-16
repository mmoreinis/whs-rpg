class Location {
	static lastIndex = 0;
	constructor(index, name, coords, text) {
		this.index = index;
		this.name = name;
		this.coords = coords;
		this.text = text;
		// this.actions = actions;
		// this.npcs = npcs;
		// this.dialogue = dialogue
  	}
	getName(){
		return this.name;
  	}

	getIndex(){
		return this.index;
  	}

	getText(){
		return this.text;
  	}
  
	getCoords(){
		console.log("Coords = "+ this.coords);
    	return this.coords;
  	}
	
} // End Location Class

/* This is a collection of all the locations which can be referenced from other classes */

class Place {
    constructor(name) {
        this.name = name;
        this.locations = []; 
    }
	addLocation(place) {
        if (place instanceof Location) {
            this.locations.push(place);
            console.log(`Added "${place.name}" to Place.`);
        } else {
            console.error("Invalid object: only Location instances allowed.");
        }
    }

    listPlaces() {
        console.log(`\n--- Locations in ${this.name} ---`);
        this.locations.forEach(place => {
            // We can call methods directly on the stored instances
           place.displayInfo(); 
        });
    }

	getName(index){
		return this.locations[index].name;
  	}

} // End Place Class



const locations = [
	{
		index: -1,
	 	name: "Main Entrance",
		coords: [0,0],
		text: "You are in the main entrance. You've just been let into the school when the receptionist tells you: \n \"We need your help, and quickly too.\" "
		// "button text": ["Go to store", "Go to cave", "Fight dragon"],
		// "button functions": [goStore, goCave, fightDragon],
		},
	{
		index: 1,
	 	name: "Front Office",
		coords: [0,1],
		text: "The receptionist's stare, waiting for you to do something."
		// "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		// "button functions": [buyHealth, player.buyWeapon, goTown],
	},
	{
		index: 2,
	 	name: "Stairwell",
		coords: [-1,1],
		text: "You enter the stairwell, the lights have been cut off and you hear terrible, monstrous groans."
		// "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
		// "button functions": [fightSlime, fightBeast, goTown],
	},
	{
		index: 3,
	 	name: "Library",
		coords: [1,1],
		text: "You're attacked as you enter the library."
		// "button text": ["Attack", "Dodge", "Run"],
		// "button functions": [attack, dodge, goTown],
		
	}
]
	// {
	// 	index: 3,
	//  	name: "Gymnasium",
	// 	// "button text": ["Go to town square", "Go to town square", "Go to town square"],
	// 	// "button functions": [goTown, goTown, easterEgg],
	// 	// text: 'The dragon has made the gym it\'s new home, are you ready to cast it away?'
	// },
	// {
	// 	index: 4,
	//  	name: "Admin Office",
	// 	// "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
	// 	// "button functions": [restart, restart, restart],
	// 	// text: "The dragon exiles you to the principal's office, good luck explaining your way out of this one... you lose. 💀"
	// },
	// {
	// 	index: 6,
	//  	name: "Guidance Office",
	// 	// "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
	// 	// "button functions": [restart, restart, restart],
	// 	// text: "You defeated the dragon and saved the school! YOU WIN THE GAME! 🎉"
	// },
	// {
	// 	index: 7,
	//  	name: "Nurse's Office",
	// 	// "button text": ["2", "8", "Go to town square?"],
	// 	// "button functions": [pickTwo, pickEight, goTown],
	// 	// text: "As you enter the nurse's office you that the nurse's are playing a secret game. They invite you to join: \n \"Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!\""
	// }
// ]


const WHS = new Place('WHS');
locations.forEach(data => {
    const newPlace = new Location(data.index, data.name, data.coords, data.text);
    WHS.addLocation(newPlace);
});

console.log("WHS is created!");
console.log("First one: " + WHS.locations[0].text);


function goStore() {
    update(locations[1]);
}

function goTown() {
    update(locations[0]);
}

function goCave() {
    update(locations[2]);
}



