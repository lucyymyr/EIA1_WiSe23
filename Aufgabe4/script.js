let bookSelection;
let end;


console.log(bookSelection)



let genreSelection = prompt ("Would you like to read Fantasy or Romance?");

console.log(genreSelection);
if (genreSelection == "Fantasy") {
   let bookSelection = prompt("Would you like to read Forth Wing or Lord of the rings?");
if (bookSelection == "Forth Wing"){
    let end = prompt("Great choice! It`s my favorite book!");
}
else if (bookSelection == "Lord of the rings"){
    let end = prompt("Oh I need to read those books too!")}
}



else if (genreSelection == "Romance") {
   let bookSelection = prompt("Would you like to read The spanish love deception or Love on the brain");
if (bookSelection == "The spanish love deception"){
    let end = prompt("Nice! Who doesn`t love a simple romance book!");
}
else if (bookSelection == "Love on the brain"){
    let end = prompt("I love this book! I´ve read it in two days!");
}
}


else {
   console.log("Error");
} 

