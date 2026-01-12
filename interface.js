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
	
	goButtons();
	showPages();
  createNavCross();
}
function goButtons(){
	let pages=[["main", goMain],["admin", goAdmin],["player", goPlayer]];

	for (let i = 0; i < pages.length; i++){
		let newItem = document.createElement("li");
		newItem.textContent = pages[i][0];
		newItem.addEventListener("click", pages[i][1] )
		go.appendChild(newItem);
	}
}

function createNavCross() {
	document.getElementById("game");
	let navCross = document.createElement("div");
	game.appendChild(navCross);
	navCross.id = "navCross";
	document.getElementById("navCross");
	let navBox;
	for(let i = 0; i < 4; i++){
		navBox = document.createElement("div");
		navBox.id = "nav" + i;
		navCross.appendChild(navBox);
	}
	buttonLabels = ["top", "right", "bottom", "left"];

	navButtons = [];
	console.log(WHS.getName(0))
	console.log(player.getCurrentLocation());
	console.log(player.getCurrentCoords());
}

function showObjects() {
	showInventory(myObjects, objects, "objects");
}
function showName(pageId) {
  const page = document.getElementById(pageId);
  page.querySelector("#playerPageName").textContent = player.charName;
  page.querySelector("#playerPicture").src = player.image;
}

function showWeapons(){
	console.log(currentWeapon)
	showInventory(myWeapons, buildWeapons(), "weapons")
}
function showPages(){
	document.getElementById("main").style.display="block";
	document.getElementById("admin").style.display="none";
	document.getElementById("player").style.display="none";
	go.style.display="none";
	goShow.addEventListener("click" , showGo);
}
function createPlayerPage(){
	let playerP = document.createElement("p")
	playerP.innerHTML="Hello"
	playerPage.appendChild(playerP)
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
	showName("player");
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

function update(location) {
    monsterStats.style.display = "none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
    text.innerText = location.text;   
	player.setLocation(locations.indexOf(location)); 
}
