//123
//12
//1
for (let row=1;row<=3;row++){
    let str=""
    for(let col=1;col<=(4-row);col++){
        str+=col
    }
    console.log(str)
}

//321
//32
//3
let n = 3; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);


//another method
for(let row=1;row<=3;row++){
    let str=""
    for(let col=3;col>=row;col--){
        str+=col
    }console.log(str)
}

//hollow full pyramid
//full pyramid