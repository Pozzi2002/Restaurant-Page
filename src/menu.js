import Icon from "./menu.jpg"
let menu = function() {
let body = document.querySelector("body");
let content = document.createElement("div");
let header = document.createElement("h2");
let para1 = document.createElement("p");
let myIcon = new Image()
myIcon.src = Icon

header.textContent = "Rich menu"
para1.textContent = Icon

content.setAttribute("id", "content");
body.appendChild(content)
content.appendChild(header)
content.appendChild(myIcon)
};
export { menu }

