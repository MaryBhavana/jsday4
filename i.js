//bitwise operators

console.log(2|3);//or - if any one bit is 1 then it should be 1
console.log(2&3);//and- above and below corresponding bits should be 1
console.log(2^3);//xor-  1 1 0 0
console.log(2<<3);//3 is shifter-shits to these many numbers----2-this is shifted in <<-direction
console.log(2>>3);//

//ternary operators
let x=2;
let y=3;
//x > y ? console.log("2 is greater than three") : console.log("2 is less than 3");
x > y ? x++ : x--;//1
console.log(x);//1

//if else blocks
//if else if and else blocks
//switch

//if blocks work
let g = 3;
//if a certain condition written inside the parenthesis of if block is true then we enter the body of if/
 //basically enters inside the curly braces of if loop
 //if can be used all alone but else is used with if blocks only,not alone
  //only if the If BLOCK CONDITION IS TRUE, IT WILL ENTER INSIDE THE IF BLOCK OTHERWISE IT will automayically
    //enter the inside else block


if(g>2) {
    console.log(g);
}
else{
    console.log("entered inside the else block");
}

//elseif block
if(g>4) {
    console.log(g);
}
else if(g==3){
    console.log("entered inside the else block");
}
else{
    console.log("entered inside the else block");
}

//switch case
