// Question no:01
var firstname=prompt("Enter your first name");
var secondname=prompt("Enter your second name");
var fullname= firstname + " " + secondname;
alert(fullname);


// Questioon no:02
var mobile=prompt("Whta is your favourite mobile?");
var length=mobile.length;
alert("My favourite mobile is: " + mobile + "\n" + "Length: " + length)


// Questioon no:03
var pak="pakistani";
var index=pak.indexOf("n");
document.write("Stirng: " + pak + "<br>" + "The index of 'n' is: " + index);


// Questioon no:04
var hello="Hello World";
var lastindex=hello.lastIndexOf("l");
document.write("String:" + hello + "<br>" + "Last index of 'l' is: " + lastindex);

// Questioon no:05
var pakistan="Pakistsni";
var result=pakistan.charAt(3);
document.write("Strinng: " + pakistan + "<br>" + "Character at index 3: " + result)


// Questioon no:06
var firstname=prompt("Enter your first name");
var secondname=prompt("Enter your second name");
var fullname= firstname + " " + secondname;
alert(full)


// Questioon no:07
var text="Hyderabad";
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 5) === "Hyder") {
        text = text.slice(0,i) + "Islam" + text.slice(5);
    }
}
document.write("City: Hyderabad" + "<br>" + "After Replacement: " + text);


// Question no:08
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newmessage=message.replace(/and/g , "&")
document.write(newmessage);


// Question no:09
var number=472;
document.write("Value: " + number + "<br>" + "Type: String")
var replace=number.toString();
document.write("<br>" + "Value: " +   replace + "<br>" + "Type: Number")


// Question no:10
var dryfruit=prompt("Enter your favourite thing...");
var upper=dryfruit.toUpperCase();
document.write("User Input: " + dryfruit + "<br>");
document.write("Uppercase: " + upper);


// Question no:11
var title=prompt("Enter any text?");
var titlecase=title.charAt(0).toUpperCase()+ title.slice(1).toLowerCase()
document.write("User input: " + title + "<br>");
document.write("Title Case: " + titlecase)


// Queston no:12
var num=35.36;
document.write("Number: " + num + "<br>");
var convert=num.toString().replace("." , "");
document.write("Result: " + convert);


// Question no:13
var input=prompt("Enter your name");
for (i=0; i<input.length; i++){
    if(input.charAt(i) === "!"){
        alert("Please inter valid username");
    }else if(input.charAt(i) === "@"){
        alert("Please inter valid username");
    }else if(input.charAt(i) === "$"){
        alert("Please inter valid username");
    }else if(input.charAt(i) === "#"){
        alert("Please inter valid username")
    }
    else{
        alert("You have intered a good username")
    }
}



// Question no:14
var bakeryItems= ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
var customer=prompt("Welcome to ABC Bakery what do you want to order sir/Maam");
var lower= customer.toLowerCase();
var tocheck = false;

for(i=0; i<bakeryItems.length; i++){
    if(lower === bakeryItems[i]){
        alert(lower + " is avaiabe at index " + i + " in our bakery")
        tocheck=true;
    }else if(lower === bakeryItems[i]){
        alert(lower + " is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(lower === bakeryItems[i]){
        alert(lower  + " is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(lower === bakeryItems[i]){
        alert(lower + " is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }else if(lower === bakeryItems[i]){
        alert(lower +" is avaiabe at index" + i + " in our bakery")
        tocheck=true;
    }
}

if (tocheck ===  false){
    alert("We are Sorry. " + lower + " is not available in our bakery");
}

// Question no:15
var password=/^(?!^\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
var userInput = prompt("Enter your password: ");
if(password.test(userInput)){
    console.log("Valid Password");
}
else{
    console.log("Please enter the valid Password...");
}

// Question no:16 
var university = "University of Karachi";
var universityArray = university.split("");
document.write("<h3>University Name (Letters):</h3>");
for (var i = 0; i < universityArray.length; i++) {
    document.write("<li>" + universityArray[i] + "</li>");
}


// Question no:17
var country=prompt("Enter any string");
var lastChar = country.charAt("<br>" + country.length - 1  + "<br>");
document.write("Input: " + country)
document.write("<br>" + "Last character of input is: " + lastChar + "<br>");


// Question no:18
var quick1="The quick brown fox jumps over the lazy dog"
var quick=quick1.toLowerCase();
for (var i = 0; i < quick.length; i++) {
    if (quick.slice(i, i + 3) === "the") {
    quick = quick.slice(0, i) + "the" + quick.slice(i + 3);
        console.log(i);
}
}
    