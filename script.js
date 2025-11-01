// Qs.1. Give the user input find the Grade

let userGrade = parseInt(prompt('enter your marks'))
let grade;
switch(true){
   case (userGrade <= 10):
    grade = 'E'; 
    break;
    case (userGrade <= 20):
    grade = 'D'; 
    break;
    case (userGrade <= 30):
    grade = 'C'; 
    break;
    case (userGrade <= 40):
    grade = 'B'; 
    break;
    case (userGrade <= 50):
    grade = 'A'; 
    break;
    default:
       grade = 'enter valid number'
}
console.log('your grade is',grade)
alert('your grade is = ' + grade)

// Qs 2. some characters and their corresponding values

let char = prompt('enter your digit')

switch(char){
    case 'P':
    case 'p':
        char = 'Prebytes'
        break;
    case 'X':
    case 'x':
        char = 'XMLHttpRequest'    
        break;
    case 'S':
    case 's':
        char = 'setInterval'
        break;
    case 'T':
    case 't':
        char = 'trustedTypes'    
        break;
    default :
    char = 'invalid'
}
console.log(char)

// Qs 3. Find the maximum out of three numbers.

let x = 1;
let y = 9;
let z = 2;

if(x===y && y===z){
   console.log('-1')
}else if(x>y && x>z){
    console.log(x)
}else if(y>x && y>z){
    console.log(y)
}else{
    console.log(z)
}

// Qs 4. second smallest number 
let x1 = 1;
let y1 = 9;
let z1 = 2;

if(x1===y1 && y1===z1){
   console.log('-1')
}else if(x1<y1 && x1>z1){
    console.log(x1)
}else if(y1>x1 && y1<z1){
    console.log(y1)
}else{
    console.log(z1)
}

//  Q5. Check whether the triangle is Acute or Obtuse:

let o=56;
let p=87;
let q=78
if(o<90 && p<90 && q<90){
    console.log("The triangle is Acute");
    
}
 else if(o>90 && p<90 && q<90){
    console.log("The triangle is obtuse");
    
 }





