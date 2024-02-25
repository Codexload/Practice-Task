const person = {
    name: "Tanjimul Hisham",
    nickName: "Fardin",
    age: 17,
    profession: "Web Developer",
    study: "Inter 2nd Year",
    id: 143,
    facebook: "Tanjimul Hisham",
    hobby: {
        first: "Coding",
        second: "Making Website",
        third: "Exploit Websites",
        forth: "Learning New Programming Language",
    },
    lovedFood: ["Icecream", "Burger", "Pizza", "Coffee"],
}
// console.log(person.facebook);
console.log(person.hobby.third);
person.lovedFood[1] = "Hotdog";
delete person.lovedFood[2]
console.log(person.lovedFood)