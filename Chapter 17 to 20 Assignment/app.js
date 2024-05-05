// Question no:01
var multidimensionArray=[[],[],[],[]];
console.log(multidimensionArray);


// Question no:02
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
console.log(matrix);

// Question no:03
for(i=1; i<=10; i++){
    console.log(i);
}

// Question no:04
var table=prompt("Enter a number to show it's multiplication table");
var number=prompt("Enter length multiplication table");
    for (i=1; i<=number; i++){
        document.write("<br>" + table + " * " + i + " = " + table*i + "<br>");
}

// Question no:05
var fruits = ["apple", "mango", "orange", "strawberry"];
console.log("Element at index 0 is "+ fruits[0]);
console.log("Element at index 1 is "+ fruits[2]);
console.log("Element at index 2 is "+ fruits[1]);
console.log("Element at index 3 is "+ fruits[3]);


// Question no:06
document.write("Forward Counting:" + "<br>")
for(i=1; i<=15; i++){
    document.write(i+" , ");
}

document.write( "<br>" +"<br>" + "Reverse Counting:" +"<br>")
for(i=10; i>=1; i--){
    document.write(i+" , ")
}

document.write("<br>" +"<br>" + "Even Numbers:" +"<br>");
for(i=0; i<=20; i++){
    if (i%2 == 0)
    document.write(i + " , ");
    
}

document.write("<br>" + "<br>" + "Odd Numbers:" + "<br>")
for(i=0; i<20; i++){
    if(i%2 != 0){
        document.write(i+" , ")
    }
}

document.write("<br>" + "<br>" + "Series:" + "<br>" )
for(i=1; i<=20; i++){
    if(i%2 == 0){
        document.write(i +"k" + " , " )
    }
}

// Question no:07
var bakeryItems= ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
var customer=prompt("Welcome to ABC Bakery what do you want to order sir/Maam");
var tocheck = false;
for(i=0; i<bakeryItems.length; i++){
    if(customer === bakeryItems[i]){
        alert("Cake is avaiabe at index " + i + " in our bakery")
        tocheck=true;
    }else if(customer === bakeryItems[i]){
        alert("apple pie is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(customer === bakeryItems[i]){
        alert("Cookie is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(customer === bakeryItems[i]){
        alert("chips is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(customer === bakeryItems[i]){
        alert("Patties is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }
}

if (tocheck ===  false){
    console.log("We are Sorry. " + customer + " is not available in our bakery");
}


// Question no:08
var numbers=[24, 53, 78, 91 , 12];

var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write("<br>" + "<br>" + "Array Items: " + "<br>" + numbers);
document.write("<br>" + "The Largest number is: " + largest)


// Question no:09 
var numbers=[24, 53, 78, 91 , 12];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
document.write("<br>" + "<br>" + "Array Items: " + "<br>" + numbers )
document.write("<br>" + "The largest number is " + smallest)


// Question no:10
document.write("<br>" + "<br>" + "Multiple of '5' " + "<br>")
for(i=1; i<=100; i++){
    if(i%5 == 0){
        document.write(i + " , ")
    }
}