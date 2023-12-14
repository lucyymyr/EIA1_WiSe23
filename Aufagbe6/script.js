let startArray = [
    "Would you like to read Fantasy or Romance?",
    "Fantasy",
    "Romance"
]

let fantasyArray = [
    "Would you like to read Fourth Wing or Lord of the rings?",
    "Fourth Wing",
    "Lord of the rings",
]

let romanceArray = [
    "Would you like to read The spanish love deception or Love on the brain",
    "The spanish love deception",
    "Love on the brain"
]

let endArray = [
    "Great choice! It`s my favorite book!",
    "Oh I need to read those books too!",
    "Nice! Who doesn`t love a simple romance book!",
    "I love this book! I´ve read it in two days!"
]

let state = 0;

const input = document.querySelector(".inputForm_field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && state == 0) {
        console.log("test")
        if (input.value == "Fantasy") {
            output.innerHTML = fantasyArray[0]
            state++
        } else if (input.value == "Romance") {
            output.innerHTML = romanceArray[0]
            state++
        }
    } 
})

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && state == 1) {
        if (input.value == "Fourth Wing") {
            output.innerHTML = endArray[0]
        } else if (input.value == "Lord of the rings") {
            output.innerHTML = endArray[1]
        } else if (input.value == "The spanish love deception") {
            output.innerHTML = endArray[2]
        } else if (input.value == "Love on the brain") {
            output.innerHTML = endArray[3]
        }
    }
})




