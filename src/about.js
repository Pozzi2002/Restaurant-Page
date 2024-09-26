import Map from "./map.jpg"
let about = function() {
    let body = document.querySelector("body");
    let content = document.createElement("div");
    let header = document.createElement("h2");
    let para = document.createElement("p")
    let iframe = document.createElement("iframe")
    let myIcon = new Image()
    
    content.setAttribute("id", "content");
    header.textContent = "Rich about";
    para.innerHTML = "Our number: 8-916-295-20-76<hr><br> Мы на карте:"
    myIcon.src = Map
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8973.846947268059!2d37.6359797!3d55.7852198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b880470e6bd%3A0x188debfee55a5e9!2z0KfQtdGA0LXRgtGC0L4g0JzRj9GB0L4!5e0!3m2!1sru!2sru!4v1727363666518!5m2!1sru!2sru"
    
    body.appendChild(content);
    content.appendChild(header);
    content.appendChild(para);
    content.appendChild(iframe)
}
export { about }