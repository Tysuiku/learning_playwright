// conditional statement

// if(condition){
//     //execute some code here
// } else {
//     //execute some code here
// }

// if hour between 6 and 12 print "good morning"
// if hour between 12 and 18 print "good afternoon"
// otherwise: "good evening"

let hour = 6

if(hour >= 6 && hour < 12){
    console.log("good morning")
} else if (hour >= 12 && hour < 18){
    console.log("good afternoon")
} else {
    console.log("good evening")
}