// quate arry
// random number
// get array item by random number
// div inner html assign krdo jo array sy mila hai
// let quotes= ["Everything youve ever wanted is sitting on the other side of fear",
//         "The question isn't who is going to let me; it's who is going to stop me",
//         "Every strike brings me closer to the next home run",
//         "I have not failed",
//         "Don't worry about failure; you only have to be right once",
// ]

// document.getElementById("demo").innerHTML = quotes[

//     Math.round(Math.random() * quotes.length)
// ]
var add = document.getElementById('add');
var del = document.getElementById('del');
function btn(){
      var addquate = document.getElementById('task').value;
      add.innerHTML += `<div>${addquate}</div>`
    }
function del(){
    del.innerHTML -= ""
}    


// make a input bar
// add a button
// call function on btn click 
// get input value and push 
// add a div to display item 
// push input value in div.innerhtml