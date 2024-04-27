// Question no:01
var city = prompt( " Enter your city name " );
if(city === "karachi"){
    alert("Welcome to city of lights")
}


// Question no:02
var gender = prompt( " Enter your Gender " );
if (gender === "male") {
    alert( " Good Morning sir" )
}
if(gender === "female"){
    alert( "Good Morning ma'am" )
} 


// Question no:03
var signal=prompt("What is your signal color?");
if(signal === "red"){
    document.write(signal + " Must stop")
}else if(signal === "yellow"){
    document.write(signal + " Ready to move")
}else if(signal === "green"){
    document.write(signal+" Move now")
}


// Question noL04
var fuel=prompt("Enter your fuel level");
if(fuel <= 0.25 ){
    alert("Please refill the fuel in your car")
}
else{
    alert("You have enough fuel you can move on")
}


// Question no:05
// Case:A
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Output=This code is correct

// Case:B
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// Output=This code is not correct because is is post increment and it will be remain 82 when is stement runs it will become 83 but in next round when code will run again.
// the correct code is if (b++ != 83)

// Case:C
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// output=This code is remain same as 82
// the correct code is
// if(c++ != 13)

if (c === 13){
    alert("condition 2 is true");
}
// Output= c is not equal to 13 because the value of c is 12

if (++c < 14){
    alert("condition 3 is true");
}
// Output=This code is true because it's pre incremet and it is  smaller then 14

if(c === 14){
    alert("condition 4 is true");
}
// Output=12 will never be equal to 14 so it's false statement    
      
// Case:D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Output=This is correct code

// Case:E
if (true){
    alert("True");
}
if (false){
   alert("false");
}
// Output=This code is dead and i don't know the reason

// case:F
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output=Cat is smaller then cat this is the mistake the correst code is ("cat" < "car")
    

// Question no:06
// var marks1=prompt("Enter marks obtained in first subject");
// var marks2=prompt("Enter marks obtained in second subject");
// var marks3=prompt("Enter marks obtained in third subject");
// console.log(marks1);
// console.log(marks2);
// console.log(marks3);
// var TotalMarks =marks1+marks2+marks3;
// var MarksObtained = prompt("Enter total marks of all subject");
// var Percentage = (TotalMarks % MarksObtained ) * 100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total Marks: " + TotalMarks + "</p>");
// document.write("<p>Marks Obtained: " + MarksObtained + "</p>");
// document.write("<p><strong>Percentage: " + Percentage + "%</strong></p>");



// Question no:07
var num = Math.floor(Math.random() * 10);
var guess = prompt("guess the number");
    
 if (guess==num){
    alert("Bingo! Correctanswer");
}else if ((guess+1)==num){ 
    alert("Close enough to the correct answer");
}
else{
    alert(`wrong answer number is: ` + num);
}


// Question no:08
var divide=prompt("Enter a number?");
if(divide/3 == 0){
    alert("It's divisible by 3")
}
else{
    alert("It's not divisible by 3")
}


// Question no:09
var num=prompt("Enter any number...");
if( num%2 == 0 ){
    alert("It's even")
}
else if(input%2 != 0){
    alert("It's odd")
}


// Question no:10
var temperture = prompt("Enter your temperature");
if(temperture > 40){
    alert("It's too hot outside.")
}else if(temperture > 30){
    alert("“The Weather today is Normal.")
}else if(temperture > 20){
    alert("Today’s Weather is cool.")
}else if(temperture > 10){
    alert("OMG! Today’s weather is so Cool.”")
}


// Question no:11
var num1=+prompt("Enter your first number");
var assigningoperator=prompt("Enter any assigning operator");
var num2=+prompt("Enter your second number");
if (assigningoperator === "+") {
    alert(num1+(+num2))
}
else if (assigningoperator === "-") {
    alert(num1-num2)
}
else if (assigningoperator === "*"){
    alert(num1*num2)
}
else if(assigningoperator === "/"){
    alert(num1/num2)
}else{
    alert("error")
}