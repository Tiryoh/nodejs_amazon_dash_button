// Simple nodejs app for Amazon Dash Button
// Licensed under The MIT License.
// https://tiryoh.mit-license.org

const DashButton = require("dash-button");
const MAC_ADDR = "ac:63:be:27:8c:4a"

let button = new DashButton(MAC_ADDR);

console.log("Wainting for Amazon Dash Button Signal...")
let i = 0;

button.addListener(() => {
	console.log("[" + (i++) + "] It works!");
});

