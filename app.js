/******************** Javascript Loop Practice ********************/
/************* For Loop ***************/
//aghir hum apnay code ko zyada say zyada repeat karana chatay hai ya likhna chatay hai tu uss kay liye hum for loop ka use kertay hai
/*Example
for (let i=10; i>=1; i = i-3) {
     console.log(i);
}*/

/*for (let i=1; i<=15; i=i+2) {
    console.log(i);
}
console.log("backword");

for (let i=15; i>=1; i=i-2) {
    console.log(i);
}*/
/*for (let i=2; i<=10; i=i+2) {
    console.log(i);
}
console.log("backword");
for (let i=10; i>=2; i=i-2){
    console.log(i);
}*/
/*for (let j=4; j<=40; j=j+4) {
    console.log(j);
}*/
/*let n = prompt("Write your number");
n = parseInt(n);
for (let i=n; i<=n*10; i=i+n) {
    console.log(i);
}*/


/******************* Nested Loop ******************/
//hum iss kay andar loop kay andar multiple loop likh sakhtay hai bahir walay loop ko outer loop kehay gay aur andar walay loop ko inner loop kehay gay
/*for (let i=1; 1>=3; i++) {
    for (let j=1; j>=3; j++) {
        console.log(j);
    }
}*/


/***************** While Loop *****************/
//jesay humarah for loop hota hai ussi tarah ka aik alag syntax hota hai humaray pass jesay hum while loop kehtay hai while loop aik loop ko likhnay ka alag tareeqa hota hai humarah loop ki condition jab true hoti hai tu uss kay andar ka code work hota hai aghir while loop ki condition false hai tu andar ka koi code work nahi kerta hai aur while loop kay liye humay alag say variable ko create kerna hota hai 
/*Example
let i=5;

while(i>=1) {
    console.log(i);
    i--;
}*/

/*let i=0;

while(i<=20) {
    console.log(i);
    i = i+2;
}*/

//const favMovie = "avator";
//let guess = prompt("Guess my favourite Movie");
//while ((guess != favMovie)) {
//if(guess == "quit"){
//console.log("you quite");
//break;
//}
    //guess = prompt("Wrong guess. Please try again");
//}

//if(guess == favMovie) {
   // console.log("Congrat!!");
//}

/**************** Break Keyword ***************/
//break ko likhnay say loop humarah jo execute ho raha tha udhar hi stop ho jye ga aur uss ki jagah break likha a jye ga
//Example
//let i=1;
//while(i<=5) {
   // if(i == 3) {
     //   break;
    //}
    //console.log(i);
    //i++;
//}
//console.log("we used break at 3")


/******************* Loop with Array *******************/
//Array kay andar generally humaray pass loop hi use hotay hai means array kay aik aik element ko ja ker access kerna hota hai array humaray pass kitnay bhi baray aur chotay ho sakhtay hai tu assay mai hum array kay element mai index kay bajai Loop ka use ker sakhtay hai  
//let fruits = ["orange", "banana", "Apple", "pineApple"];

//for(let i=2; i<fruits.length; i=i+2) {
    //console.log(i, fruits[i]);
//}

//for(let i=fruits.length-1; i>=0; i--) {
  //  console.log(i, fruits[i]);
//}


/**************** Nested Array & Nested Loop ****************/
//ab jab humaray pass simple Array kay bajai nested Array hotay hai tu iss mai hum apnay element ko access kernay kay liye nested loop ko use kertay hai 
//Example
//let heros = [
  //  ["Spiderman", "thor", "ironman"],
   // ["Wonder Woman", "superman", "Flash"]
//]
//for(i=0; i<heros.length; i++){
 //   console.log(i, heros[i], heros[i].length);
  //  for(let j=0; j<heros[i].length; j++) {
     //   console.log(`j=${j}, ${heros[i][j]}`);
    //}
//}
//let students = [["Mano", 100], ["Sharda", 94.4], ["Akram", 88]];

  //   for(let i=0; i<students.length; i++){
    //console.log(`info of student #${i+1}`);
    //for(let j=0; j<student[i].length; j++){
      //  console.log(student[i][j]);
    //}
//}

/************** For of loop ***************/
//jab bhi humay kisi collection kay atom ko access kerna hota hai iss mai aghir humay Array kay individual itom ko acess kerna hai ya string kay individual character ko acess kerna chatay hai tu uss kay liye iss loop ka use kertay hai 
//Use for Array
//Example
//let fruit = ["mango", "banana", "orange", "pineApple"]
//for(fruits of fruit) {
  //  console.log(fruits);
//}
//Use for String Character
//for(char of "college")
//console.log(char);


//let heros =[["Spiderman", "thor", "ironman"], ["Wonder Woman", "superman", "Flash"]];
//for(list of heros) {
  //  for(hero of list){
    //console.log(hero);
    //}
//}


/****************** Todo App ******************/
//Todo App aik list ki tarah hoti hai aur iss App kay andar 4 function hotay hai 
//Example
//list- to show all todos iss kay hum todos ko list mai converted ker sakhtay hai 
//add- to add a todo aur iss kay naye todos add ker sakhtay hai 
//delete- to delete a task iss mai hum apnay todo kay task ko delete ker sakhtay hai 
//quit- to exist the todo iss mai hum apnay todo ko quit bhi ker sakhtay hai kay yeh app band ho jye
//Practice

//let todo = [];

//let req = prompt("Please enter your request");

//while(true) {
    //if(req == "quit") {
       // console.log("quitting app");
      //  break;
    //}
     //if(req == "list") {
     //console.log("-------------");
    // for(let i=0; i<todo.length; i++) {
      //  console.log(i, todo[i]);
     //}
     //console.log("-----------");
     //} else if(req == "add") {
     //let task = prompt("Please enter the task you want to add");
     //todo.push(task);
     //console.log("task added"); 
     //} else if(req == "delete") {
      //  prompt("Please enter the task index");
       // todo.splice(idx, 1);
       // console.log("task delete");
     //} else {
     //   console.log("Wrong request");
     //}
    //req = prompt("Please enter your request");
//}