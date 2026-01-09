class Action {
	static lastIndex = 0;
	constructor(index, name, text) {
		this.index = index;
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

	getName(index){
		return this.actions[index].name;
  	}

} // End Choices Class


const locations = [
	{
		index: 1,
	 	name: "Main Entrance",
		text: "You are in the main entrance. You've just been let into the school when the receptionist tells you: \n \"We need your help, and quickly too.\" "
	},
	{
		index: 2,
	 	name: "Front Office",
		text: "The receptionist's stare, waiting for you to do something."
	},
	{
		index: 5,
	 	name: "Stairwell",
		text: "You enter the stairwell, the lights have been cut off and you hear terrible, monstrous groans."
	},
	{
		index: 2,
	 	name: "Library",
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


