import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"
import "./style.css"

home()

let tabbled = document.querySelectorAll("button")

tabbled[0].addEventListener("click", () => {
    tabbled[0].style.textDecoration = "underline"
    tabbled[1].style.textDecoration = "none"
    tabbled[2].style.textDecoration = "none"
    let content = document.querySelector("#content")
    if (content != null) {
    content.parentNode.removeChild(content)
    home()
} else {
    home()
}
})

tabbled[1].addEventListener("click", () => {
    tabbled[0].style.textDecoration = "none"
    tabbled[1].style.textDecoration = "underline"
    tabbled[2].style.textDecoration = "none"
    let content = document.querySelector("#content")
    if (content != null) {
    content.parentNode.removeChild(content)
    menu()
} else {
    menu()
}
})

tabbled[2].addEventListener("click", () => {
    tabbled[0].style.textDecoration = "none"
    tabbled[1].style.textDecoration = "none"
    tabbled[2].style.textDecoration = "underline"
    let content = document.querySelector("#content")
    if (content != null) {
    content.parentNode.removeChild(content)
    about()
} else {
    about()
}
})