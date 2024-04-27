// Question no:01
var studentNames=[];
console.log(studentNames);

// Question no:02
var studentObjest=[];
console.log(studentObjest);

// Question no:03
var stringArr=["Shumaila" , "Naz"];
console.log("String Array= " + stringArr);

// Question no:04
var numberArr=[1 , 2 , 3 , 4 , 5];
console.log("Number Array= " + numberArr);

// Question no:05
var booleanArr=[True , False];
console.log("Boolean Array= "+ booleanArr);

// Question no:06
var mixedArr=["Shumaila" , 22 , True];
console.log("Mixed Array= "+ mixedArr);

// Question no:07
var qualifications=["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phill" , "PhD"]
document.write("<h2>Education qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");


// Question no:08
var studentsName=["Michael" , "John" , "Tony"];
var studentScores=[320 , 230 , 480];
var Percentage1=studentScores[0]*100/500;
var Percentage2=studentScores[1]*100/500;
var Percentage3=studentScores[2]*100/500;
document.write("Score of Michael " + studentScores[0] +"." + "Perchantage:" +Percentage1 + "%" + "<br>")
document.write("Score of John " + studentScores[1] +"." + "Perchantage:" +Percentage2 + "%" + "<br>")
document.write("Score of Tony " + studentScores[2] +"." + "Perchantage:" +Percentage3 + "%" + "<br>")


// Question no:09
var color=["Red " , "Black " , "Blue " , "Pink "];
var user1=prompt("what color you want to add to the beginning of an array");
color.unshift(user1)

var user2=prompt("What color you want to add in the last of an array");
color.push(user2);

var user3=prompt("Enter one or more colors in starting of an arrsy");
color.unshift(user3);

color.shift(1)

color.pop()

var index=prompt("Enter your desired index number")
var user4=prompt("Enter any color")
color.splice(index , 0 , user4)

var index2=prompt("Enter your desired index number");
var user5=prompt("How many colors you want to delete")
color.splice(index2 , user5)
document.write(color);


// Question no:10
var scores=[ 320 , 230 , 480 , 120 , "<br>"];
scores.sort()
document.write(scores)

// Question no =:11
var head="CITIES: ";
var cities=["Karachi" , "Lahore" , "Peshawar" , "Islamabad" , "Quetta" , "<br>"]
document.write(head + cities)

var heading="SELECTED CITIES: ";
var selectedcities=[cities[1] , cities[3] , cities[0]]
document.write(heading + selectedcities)

// Question no:12
var breakLine=["This" ,  " is ",   " my " ,  " cat"  ];
document.write(breakLine);

document.write('<br>'+ breakLine[0] + " " + breakLine[1] + "" + breakLine[2] + "" + breakLine[3] +".")




// Question no:13
var storelist1=[ "Keyboard" , "Mouse" , "Printer" , "Monitor"];
for ( i=0; i<storelist1.length; i++){
    
    document.write("<h5> Out </h5>" + storelist1[i])
}


// Question no:14
var storelist=[ "Keyboard" , "Mouse" , "Printer" , "Monitor"];
for ( i=0; i<storelist.length; i++){
    storelist.reverse()
    
    document.write("<h5> Out </h5>" + storelist[i])
}


// Question no:15
document.write("<h1> Phone Manufactures </h1> <select> <option value='Apple'> Apple </option> <option value='Samsung'>Samsung</option> <option value='Motorola'>Motorola</option> <option value='Nokia'>Nokia</option> <option value='Sony'>Sony</option> <option value='Haire'>Haier</option> </select>")
