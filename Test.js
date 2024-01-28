var ourArray = [[1, 2, 3, ], [4, 5, 6], [7, 8, 9]];

function move(r, c, newr){
    if (ourArray.length<=newr){
        ourArray.push([]);
    }
    ourArray[newr].push(ourArray[r][c]);
   ourArray[r].splice(c,1);
 }
let a = 0;
let b = 2;
let c = 3;

 move(a, b, c);
console.log(ourArray);
console.log("a: " + a + "\nb: " + b + "\nc: " + c);
