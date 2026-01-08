/* UI Controls */
const controls = document.getElementById("controls");
const button1 = document.querySelector("#controls :nth-child(1)");
const go = document.getElementById("go");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const allPages= document.querySelector("#stats li:nth-child(3)"); 
const myObjects = document.querySelector("#stats li:nth-child(4)"); 
const myWeapons = document.querySelector("#stats li:nth-child(5)");
const stats = document.querySelector("#stats li:nth-child(6)");
const infoBox = document.getElementById('infoBox');
const goShow= document.getElementById("goShow");
// setup functions
setUp();
function setUp(){
	go.id="go";
	showPages();
}
function showObjects() {
	showInventory(myObjects, objects, "objects");
}
function showName(){
	document.getElementById("playerName").innerHTML=player.charName;
	document.getElementById("picture").innerHTML="<img src=\""+ player.image+"\">";
}
function showWeapons(){
	console.log(currentWeapon)
	showInventory(myWeapons, buildWeapons(), "weapons")
}	
function showPages(){//working on this//
	document.getElementById("main").style.display="block";
	document.getElementById("admin").style.display="none";
	document.getElementById("player").style.display="none";
	//let pages=["main", "admin", "player"];

	let pages=[["main", goMain],["admin", goAdmin],["player", goPlayer]];

	for (let i = 0; i < pages.length; i++){
		let newItem = document.createElement("li");
		newItem.textContent = pages[i][0];
		newItem.addEventListener("click", pages[i][1] )
		go.appendChild(newItem);
	}
	go.style.display="none";
	goShow.addEventListener("click" , showGo);
}
function goMain(){
	document.getElementById("main").style.display="block";
	document.getElementById("admin").style.display="none";
	document.getElementById("player").style.display="none";
}
function goPlayer(){
	document.getElementById("main").style.display="none";
	document.getElementById("admin").style.display="none";
	document.getElementById("player").style.display="block";
}
function goAdmin(){
document.getElementById("main").style.display="none";
	document.getElementById("admin").style.display="block";
	document.getElementById("player").style.display="none";
}
function showGo(){
	go.style.display="block";
	goShow.removeEventListener("click", showGo);
	goShow.addEventListener("click" , hideGo);
}
function hideGo(){
	go.style.display="none";
	goShow.removeEventListener("click", hideGo);
	goShow.addEventListener("click" , showGo);
}
function showInventory(container, items, listName){
	// Toggle the inventory list: if it already exists, remove it; otherwise create it
	const existing = container.querySelector(`#${listName}`);
	if (existing) {
		existing.remove();
		return;
	}
	let inventoryList = document.createElement("ul");
	inventoryList.id = listName;
	for (let i = 0; i < items.length; i++){
		let newItem = document.createElement("li");
		newItem.textContent = items[i];
		inventoryList.appendChild(newItem);
	}
	container.appendChild(inventoryList);
}

function buildWeapons(){
	let w = [];
	for(let weapon = 0; weapon<player.weapons.length;weapon++){
		w.push(allWeapons[weapon].name)
	}
	return w;
}

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    update(locations[1]);
}

function goTown() {
    update(locations[0]);
}

function goCave() {
    update(locations[2]);
}
function update(location) {
    monsterStats.style.display = "none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
    text.innerText = location.text;    
}
