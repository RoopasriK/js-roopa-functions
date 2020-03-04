
//Functions

//Addition
function add(num1,num2)
{
  return num1+num2;      
}
let addition=add(15,3);
console.log(addition);    //output:18

//Subtraction
function sub(num1,num2)
{
  return num1-num2;
}
let subtraction=sub(31,11);
console.log(subtraction);  //output:20

//Multiplication
function mul(num1,num2)
{
  return num1*num2;
}
let multiply=mul(17,19);
console.log(multiply);     //output:323

//Division
function div(num1,num2)
{
  return num1/num2;
}
let divide=div(100,9);
console.log(divide);      //output:11.11111111111111

//Modulus
function mod(num1,num2)
{
  return num1%num2;
}
let modulus=mod(24,5);
console.log(modulus);     //output:4

//Power
function pow(num1,num2)
{
  return num1**num2;
}
let power=pow(3,4);
console.log(power);      //output:81
//or
 pow1=(num1,num2) => (num1**num2);   //arrow function
 let power1=pow1(2,3);
 console.log(power1);    //output:8

//Compare string
function cmp(val1,val2)
{
  return (val1===val2);
}
let comp=cmp('live','life');
console.log(comp);        //output:false
let comp=cmp('lie','lie');
console.log(comp);        //output:true

//Compare Number
function cmpn(num1,num2)
{
  return (num1===num2);
}
console.log(cmpn(03,3));   //output:true
console.log(cmpn(12,120));   //output:false

//Compare Values
function cmpv(val1,val2)
{
  return(typeof(val1)==typeof(val2) && val1===val2);
}
console.log(cmpv('hii','ihi'));  //output:false
console.log(cmpv('a23','a23'));  //output:true

//Grade Finder
function grfind(val)
{
  if(val>=90)
    return 'A';
  else if(val>=80 && val<90)
    return 'B';
  else if(val>=70 && val<80)
    return 'D';
  else
    return 'pass';  
}
console.log(grfind(78));     //output:D
console.log(grfind(92));     //output:A
console.log(grfind(50));     //output:pass

//Check Vowels
let arr=['a','e','i','o','u'];
function vow(str)
{
  return 
}

//Find Prime Number
function isprime(no)
{
 
}
console.log(isprime(11));
console.log(isprime(18)); 

