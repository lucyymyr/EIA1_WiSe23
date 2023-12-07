


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

let genreSelection = prompt(startArray[0]);


console.log(genreSelection);
if (genreSelection == startArray[1]) {
    let bookSelection = prompt(fantasyArray[0]);
    if (bookSelection == fantasyArray[1]) {
        alert(endArray[0]);
    }
    else if (bookSelection == fantasyArray[2]) {
        alert(endArray[1])
    }
}


else if (genreSelection == startArray[2]) {
    let bookSelection = prompt(romanceArray[0]);
    if (bookSelection == romanceArray[1]) {
        alert(endArray[2]);
    }
    else if (bookSelection == romanceArray[2]) {
        alert(endArray[3]);
    }
}


else {
    console.log("Error");
} 