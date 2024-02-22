// -------------------------------------------------Main-Array------------------------------------------------------
const peopleName = ["Jonny", "Ronny", "Tanjimul", "Hisham", "Fardin", "Tonny", "Tommy", "Sins", "Doggy", "Pussy-Cat"];
// ------------------------------------------------Array-indexOf-----------------------------------------------------
console.log(peopleName.indexOf("Tanjimul"));
console.log(peopleName.indexOf("Hisham"));
console.log(peopleName.indexOf("Jonny"));
// --------------------------------------------------Array-pop--------------------------------------------------------
peopleName.pop();
console.log(peopleName);
// -------------------------------------------------Array-push--------------------------------------------------------
peopleName.push("Jonny Sins");
console.log(peopleName);
// ------------------------------------------------Array-Length-----------------------------------------------------
const lengths = peopleName.length;
console.log(lengths);
// --------------------------------------------------Array-Get------------------------------------------------------
console.log(peopleName[4]);
// -------------------------------------------------Array-Shift------------------------------------------------------
peopleName.shift();
console.log(peopleName);
// ------------------------------------------------Array-Unshift-----------------------------------------------------
peopleName.unshift("Abdul Karim");
console.log(peopleName);
// -------------------------------------------------JS-Condition------------------------------------------------------
const number1 = 105;
if(number1 >= 18 && number1 <= 59){
    console.log("You Are An Adult");
}
else if(number1 < 18){
    console.log("You Are A Child / Underage");
}
else if(number1 >= 60 && number1 <= 100){
    console.log("You Are A Old Man");
}
else{
    console.log("You Are Legend");
}