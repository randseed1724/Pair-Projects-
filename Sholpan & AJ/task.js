
var hacker1 = "Sholpan";
 console.log("The driver name is " + hacker1);


var hacker2 = window.prompt("Write navigator's name");
 console.log("The navigator's name is " + hacker2);

 var entry = prompt("Write a Palindrome");

// var commands = prompt();
function reverse(str){
  return str.split("").reverse().join("");
}
var backwards = reverse(entry);

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters"); }
      else if (hacker2.length > hacker1.length)  {
        console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
      } else {
           console.log("Wow, you both got equally long names " + hacker2.length + " characters!!"); }


var driver = "";                  // Loop # 1
for(var i = 0; i < hacker1.length ; i++) {
  driver += hacker1[i] + " ";
}

console.log( '"' + driver.toUpperCase() + '"');

var navigatorA = hacker2;                            // Loop # 2

console.log('"' + navigatorA.split("").reverse().join("") + '"');


if (hacker1 > hacker2) {
        console.log("The driver's name (" + hacker1 + ") goes first"); }
      else if (hacker2.toLowerCase() > hacker1.toLowerCase())  {
        console.log("Yo, the navigator (" + hacker2 + ") goes first definitely ");
      } else {
           console.log("What?! You both got the same name?"); }



  if (entry === entry.split("").reverse().join("")) {
   console.log("You have wrote a Palindrome");
} else {
  console.log("The word you wrote is not a Palindrome");
}

var paragraph1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function psLength(paragraph) {
  return paragraph.split(" ").length;
}

console.log(psLength(paragraph1));

var et = paragraph1;
var countEt = (et.match(/et/g) || []).length;
console.log(countEt);

// var lexicoHackers;
//
//    for(var h = 0; h < hacker1.length || h < hacker2.length ; h++) {
//       if (lexicoHacker1[h] > lexicoHacker2[h]) {
//          console.log("The driver's name (" + hacker1 + ") goes first"); }
//          else if (lexicoHacker2[h] > lexicoHacker1[h])  {
//                  console.log("Yo, the navigator (" + hacker2 + ") goes first definitely ");
//              }
//            }

// function lexicoHackers(lexicoHacker1,lexicoHacker2)
//    this = this.[0]   {
//     console.log("The driver's name (" + hacker1 + ") goes first"); }
//       else if (hacker1[0] < hacker2[0])  {
//         console.log("Yo, the navigator (" + hacker2 + ") goes first definitely ");
//       } else {
//            console.log("What?! You both got the same name?");
//          }


// function lexiz(a, b){
//   return a.name.toLowerCase() > b.name.toLowerCase()
// }



// function driver(){
//   for (var i = 0; i < obstacles.length; i++){
//     if (hacker1.position[0] === obstacles[0] &&
//       myRover.position[1] === obstacles[1]){
//        console.log("sorry, obstacle");
//        goBackward(myRover);
//        }
//     }
//   }
