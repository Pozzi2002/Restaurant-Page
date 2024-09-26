let home = function() {
let body = document.querySelector("body")
let content = document.createElement("div")
let header = document.createElement("h2")
let para1 = document.createElement("p")
let para2 = document.createElement("p")

header.innerHTML = "Rich Home"
para1.innerHTML = "&nbsp;&nbsp;Сеть ресторанов «Рич» в Москве — это совместный проект московского ресторанного холдинга и покойного репера Янг Траппы.\
 Это городской современный ресторан, где переплетается флоу, стиль и русские традиции гостеприимства с невероятно вкусными стейками и домашней итальянской кухней."
para2.innerHTML = "&nbsp;&nbsp;Наши главные принципы — вкусная, здоровая еда и натуральные, фермерские продукты. Некоторые виды сыров, включая домашнюю Буррату,\
 готовятся на нашей собственной сыроварне из молока коров Джерсейской породы, одной из старейших признанных молочных пород, отличающейся высокой жирностью."
content.setAttribute("id", "content")

body.appendChild(content)
content.appendChild(header)
content.appendChild(para1)
content.appendChild(para2)
};
export { home }