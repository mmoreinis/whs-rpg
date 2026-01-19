/* UI Controls */
const board = document.getElementById("main");
const game = document.getElementById("game");
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
const allPages = document.querySelector("#stats li:nth-child(3)");
const myObjects = document.querySelector("#stats li:nth-child(4)");
const myWeapons = document.querySelector("#stats li:nth-child(5)");
const stats = document.querySelector("#stats li:nth-child(6)");
const infoBox = document.getElementById('infoBox');
const goShow = document.getElementById("goShow");


setUp();
function setUp() {
   goButtons();
   showPages();
   update(WHS.locations[0].index);
   createNavCross();
}

function goButtons() {
   let pages = [
      ["main", goMain],
      ["admin", goAdmin],
      ["player", goPlayer]
   ];
   for (let i = 0; i < pages.length; i++) {
      let newItem = document.createElement("li");
	  let newLink = document.createElement("a");
      newLink.textContent = pages[i][0];
      newLink.addEventListener("click", pages[i][1]);
	  newItem.appendChild(newLink);
      go.appendChild(newItem);
   }
   /* Create NavCross Container */
   let navCross = document.createElement("div");
	navCross.id = "navCross";
	board.appendChild(navCross);
}

function createNavCross() {
	let navCross = document.getElementById("navCross");
   navCross.innerHTML = ""; // clear previous buttons
   let possibles = getNavLocations();
	let navBox;	
	buttonLabels = ["Navigation", "forward", "right", "left", "back"];
	for(let i = 0; i < 5; i++){
		navBox = document.createElement("div");
		navBox.id = "nav" + i;
		navBox.innerHTML = buttonLabels[i];
		if(i > 0 && possibles[i-1] > 0){
			navBox.addEventListener("click", (event) => {
  			update(possibles[i-1]);
		});
		navBox.classList.add('clickable');
		}
	navCross.appendChild(navBox);
	}
	navButtons = [];
}

function getNavLocations() {
   let locationNow = player.getCurrentLocation(); // this is location.index
   let locationMatch = WHS.locations.find(location => location.index === locationNow); // this is a location object
	let coordsNow = locationMatch.getCoords();
   let proximals = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
   ];
   let testX;
   let testY;
   let possibles = [0, 0, 0, 0];
   for (let i = 0; i < proximals.length; i++) {
      testX = coordsNow[0] + proximals[i][0];
      testY = coordsNow[1] + proximals[i][1];
      if (testLocation(testX, testY) != -1) {
         possibles[i] = testLocation(testX, testY);
         console.log("possibles: " + possibles);
      }
   }
   return possibles;
}

function testLocation(x,y){
	for(let i = 0; i < WHS.locations.length; i++){
		if(WHS.locations[i].coords[0] == x && WHS.locations[i].coords[1] == y){
			console.log("match found: " + WHS.locations[i].coords);
			return i;
		}
	}
	return -1;
}

function showObjects() {
   showInventory(myObjects, objects, "objects");
}

function showName(pageId) {
   const page = document.getElementById(pageId);
   page.querySelector("#playerPageName").textContent = player.charName;
   page.querySelector("#playerPicture").src = player.image;
}

function showWeapons() {
   console.log(currentWeapon)
   showInventory(myWeapons, buildWeapons(), "weapons")
}

function showPages() {
   document.getElementById("main").style.display = "block";
   document.getElementById("admin").style.display = "none";
   document.getElementById("player").style.display = "none";
   go.style.display = "none";
   goShow.addEventListener("click", showGo);
}

function createPlayerPage() {
   let playerP = document.createElement("p")
   playerP.innerHTML = "Hello"
   playerPage.appendChild(playerP)
}

function goMain() {
   document.getElementById("main").style.display = "block";
   document.getElementById("admin").style.display = "none";
   document.getElementById("player").style.display = "none";
}

function showName(pageId) {
   const page = document.getElementById(pageId);
   page.querySelector("#playerPageName").textContent = player.charName;
   page.querySelector("#playerPicture").src = player.image;
}

function goAdmin() {
   document.getElementById("main").style.display = "none";
   document.getElementById("admin").style.display = "block";
   document.getElementById("player").style.display = "none";
}

function showGo() {
   go.style.display = "block";
   goShow.removeEventListener("click", showGo);
   goShow.addEventListener("click", hideGo);
}

function showPages() {
   document.getElementById("main").style.display = "block";
   document.getElementById("admin").style.display = "none";
   document.getElementById("player").style.display = "none";
   go.style.display = "none";
   goShow.addEventListener("click", showGo);
}

function createPlayerPage() {
   let playerP = document.createElement("p")
   playerP.innerHTML = "Hello"
   playerPage.appendChild(playerP)
}

function goMain() {
   document.getElementById("main").style.display = "block";
   document.getElementById("admin").style.display = "none";
   document.getElementById("player").style.display = "none";
}

function goPlayer() {
   document.getElementById("main").style.display = "none";
   document.getElementById("admin").style.display = "none";
   document.getElementById("player").style.display = "block";
   showName("player");
}

function goAdmin() {
   document.getElementById("main").style.display = "none";
   document.getElementById("admin").style.display = "block";
   document.getElementById("player").style.display = "none";
}

function showGo() {
   go.style.display = "block";
   goShow.removeEventListener("click", showGo);
   goShow.addEventListener("click", hideGo);
}

function hideGo() {
   go.style.display = "none";
   goShow.removeEventListener("click", hideGo);
   goShow.addEventListener("click", showGo);
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

function showInventory(container, items, listName) {
   // Toggle the inventory list: if it already exists, remove it; otherwise create it
   const existing = container.querySelector(`#${listName}`);
   if (existing) {
      existing.remove();
      return;
   }
   let inventoryList = document.createElement("ul");
   inventoryList.id = listName;
   for (let i = 0; i < items.length; i++) {
      let newItem = document.createElement("li");
      newItem.textContent = items[i];
      inventoryList.appendChild(newItem);
   }
   container.appendChild(inventoryList);
}

function buildWeapons() {
   let w = [];
   for (let weapon = 0; weapon < player.weapons.length; weapon++) {
      w.push(allWeapons[weapon].name)
   }
   return w;
}

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locationIndex) {
   let location = WHS.locations.find(loc => loc.index === locationIndex);
   text.innerText = location.getText();   
	player.setLocation(locationIndex); 
}
