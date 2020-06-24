//Task # 1
//Q:1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName =  firstName + " " + lastName;
// alert("Hello " + fullName)

//Q:2
//  var phone = prompt("What's your favourite Mobile Phone model?");
//  document.write("My favourite phone is: " + phone +"<br>Length of String: " + phone.length + "<br><br>" );

//Q:3
//  var n = "Pakistani";
//  var indexOfN = n.indexOf("n");
//  document.write("String: "+n + "<br>Index of 'n': "+ indexOfN + "<br><br>");

//Q:4
// var h = "Hello World";
// var lastIndex = h.lastIndexOf("l");
// document.write("String: " + h + "<br>Last index of 'l': " + lastIndex + "<br><br>");

//Q:5
//  var n = "Pakistani";
//  var index3 = n.charAt(3);
// document.write("String: " + n + "<br>Character at index 3: " + index3 + "<br><br>");

//Q:6
// var firstName = prompt("Enter your first name");
// var lastName = " " + prompt("Enter your last name");
// var strinConcat = firstName.concat(lastName);
// alert(strinConcat);

//Q:7
// var city = "Hyderabad";
// var city1 = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br>After replacement: " + city1 + "<br><br>");

//Q:8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g,"&");
// document.write(message + "<br>" + message1 + "<br>" + message1 + "<br><br>");

//Q:9
// var num = Number("472");
// document.write("Value: " + num + "<br>Type: string<br>"+"Value: " + num + "<br>Type: number<br><br>");

//Q:10
// var uCase = prompt("Enter any word");
// var uCase2 = uCase.toUpperCase();
// document.write("User input: " + uCase + "<br>Upper case: " + uCase2 + "<br><br>");

//Q:11
// var titleCase = prompt("Enter any word");
// var firstletter = titleCase.slice(0,1)
// var otherletters = titleCase.slice(1)
// firstletter = firstletter.toUpperCase()
// otherletters = otherletters.toLowerCase()
// var titleCase2 = firstletter + otherletters;
// document.write("User input: " + titleCase + "<br>Title case: " + titleCase2 + "<br><br>");

//Q:12
// var num = 35.36;
// document.write("Number: " + num + "<br>Result: " + num.toString().replace(".",""));

//Q:13
//  var userName = prompt("Enter your name");
//  for(i=0; i < userName.length; i++){
//  if(userName[i] === "@" ||userName[i] ===  "." ||userName[i] ===  "," ||userName[i] ===  "!" ){
//         alert("Please enter a valid username\n\n Prevent this page from creating additional dilogs.")
//     } 
//  }

//Q:14
// var ushop = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");
// ushop = ushop.toLowerCase()
// var shop = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var matchfound = 'no';
// for (i = 0; i < shop.length; i++) {
//     if (ushop === shop[i]) {
//         matchfound = 'yes';
//         alert(shop[i] + " is available at index "+ shop.indexOf(shop[i]) + " in our bakery ")
//         break;
//     };
// };
// if (matchfound === 'no') {
//     alert("We are sorry."+ushop + " is not available in our bakery");
// }

//Q:15
// var password = prompt("Enter Your Password ");
// var i = 0;
// while(i < password.length){
//     if (password.length < 6){
//     alert("Your Password must be at least 6 characters long");
//     password = prompt("Enter Your Password ");
    
//     }else if (password[i] >=0 && password[i]<=9){
//         alert("Your Password cannot begin with a number");
//         password = prompt("Enter Your Password ");    
        
//     } else if(password.search(/[0-9]/) < 0){
//         alert("Your Password Must Contain One Digit");
//         password = prompt("Enter Your Password ");    
        
//     }else {
//         break;
//     }
// }

//Q:16
// var university = ["University of Karachi"];
// var split = university.split("o");
// document.write(split);

// var university = "University of Karachi";
// var split = university.split("");
// for (i=0; i < university.length; i++){
//     document.write("<br>" + split[i]);
// }

//Q:17
// var input = prompt("Write any character");
// var lastchar = input.charAt()
// document.write(lastchar) 



//Task#26-30
//Q:1
// var a = prompt("Enter a positive integer");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e);

//Q:2
// var a = prompt("Enter a negative floating point number");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e + "<br><br>");

//Q:3
// var absolute = Math.abs(-4);
// var y = Math.abs(5);
// document.write("The absolute value of -4 is " + absolute + "<br>The absolute value of 5 is " + y + "<br><br>");

//Q:4
// var value5 = Math.random()*5;
// var floor5 = Math.floor(value5);
// document.write("random dice value: " + floor5 + "<br>");
// var value7 = Math.random()*7;
// var floor7 = Math.floor(value7);
// document.write("random dice value: " + floor7 + "<br><br>");

//Q:5
// var value = Math.floor( Math.random() * 2 ) +1;
// document.write("<br><br>Random dice Value : " + value);
// if(value === 2){
//     document.write("<br>Random coin Value : Heads")
// } else{
//     document.write("<br>Random coin Value : Tails")
// }


//Q:6
// var random = Math.floor( Math.random() * 100 ) +1;
// document.write("<br><br>Random Dice Value : " + random);

//Q:7
// var input = prompt("Enter your weight in kilograms");
// var p = parseInt(input);
// document.write("The weight of user is " + input  + " kilograms");

//Q:8
// var sceret = Math.floor(Math.random() * 10) +1;
// var guess = +prompt('Enter a Number Between 1 to 10 ');
// if(sceret === guess){
//     alert('You Win!');
// } else{
//     alert('Try Again!');
// }

//Task#31-34
//Q:1
// var a = new Date();
//  document.write(a + "<br>");

 //Q:2 
//   var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  document.write("<br><br> Current Month : " + month[a.getMonth()]); 

// //Q:3
//var day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
// document.write("<br><br>Today is " + day[a.getDay()].substr(0,3));

 //Q:4
// var d = day[a.getDay()];
// if(d === "Saturday" || d === "Sunday" ){
//     alert("It's Fun Day");
// } 

//Q:5
// var i = a.getDate()
// if (a < 16){
//     document.write("<br><br>First fifteen days of the month<br><br>")
// }
// else{
//     document.write("<br><br>Last fifteen days of the month<br><br>");
// }

//Q:6
// var date = new Date();
// var milli = date.getTime();
// document.write("<br><br>Current Date : " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970 : " + milli);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + milli / (1000 * 60 * 60));
 
 //Q:7
//  var hours = a.getHours()
//  if(hours < 12){
//      alert("Its AM")
//  }
//  else{
//      alert("Its PM")
//  }

//Q:8
//  var laterDate = new Date("Dec 31, 2020");
//  document.write("Later date: " + laterDate + "<br><br>");

// Q:9
// var ram = new Date("24,Apr,2020");
// var cdate = new Date();
// var difft = cdate.getTime() - ram.getTime();
// var diffd = difft / (1000*60*60*24);
// document.write('<br /><br />',Math.round(diffd),' days have passed since 1st Ramdan, 2020');

//Q:10
// var dt = new Date("01/01/2020");
// var dd = new Date();
// var milli = dd.getTime() - dt.getTime();
// document.write("<br><br>On reference date " + dt);
// document.write("<br>" + Math.round(milli / (1000*60))+' Seconds had passed since begining of 2020')

 // Q:11
// var dt = new Date();
// document.write("<br><br>Current date " + dt);
// dt.setHours(dt.getHours() - 1);
// document.write("<br>1 hour ago, it was " + dt);

//Q:12
// var a = new Date();
// document.write("<br><br>current date: " + a);
// a.setFullYear(a.getFullYear() - 100);
// document.write("<br>100 years back, it was " + a);

//Q:13
// var age = +prompt("Enter your age:","Your age is")
// var current = new Date();
// var year = current.getFullYear()-age;
// document.write("Your age is " + age + "<br>Your birthyear is " + year)

//Q:14
//  var a = new Date();
// var name = prompt("Enter your name");
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter number of units");
// var charges = 16;
// var netAmount = units*charges;
// var latePay = 350;
// var grossAmount = netAmount + latePay;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>"  +  name + "</b><br>Month: <b>" + month[a.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Units per charge: <b>" + charges + "</b>");
// document.write("<br><br>Net amount payable (within Due Date): <b>" + netAmount + "</b><br>Late payment surcharge: <b>" + latePay + "</b><br>Gross Amount payable (after Due Date): <b>" + grossAmount + "</b>")


//Task#35-38

//Q:1
// function date(currentDate){
// document.write(currentDate);
// }
// date(new Date);

//Q:2
// var a = prompt("Enter your first name");
// var b =  prompt("Enter your last name");
// function name(greet){
//     alert("Hello " + a + " " + b); 
// }
// name();

// Q:3
// var input = +prompt("Enter first number");
// var input1 = +prompt("Enter second number");
// function sum(input,input2){
//     alert(input+input1);
// }
// sum(input,input1)

//Q:4
// var num1 = prompt("Enter first value");
// var oper = prompt("Enter your operator");
// var num2 = prompt("Enter second value");
// function calc(num1,oper,num2){
// if(oper === "+"){
//     return +num1 + +num2 
// }
// else if(oper === "-"){
//     return num1 - num2
// }
// else if(oper === "*"){
//     return num1 * num2
// }

// else if(oper === "/"){
//     return num1 / num2
// }

// else if(oper === "%"){
//    return num1 / num2*100
// }
// }
// document.write("The output is: " + calc( num1 , oper , num2))

// Q:5
// function s(num) {
//     for (i=0; i<=num; i++){
//         var sum=0;
//         var j = i*i;
//         sum = j;
//         document.write('<br>Squares Number : '+sum);
//     }
//     document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
// }

// var num = +prompt("Enter a number for Squares :");
// s(num);

// Q6
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// var factor = +prompt("Enter a Factorial Number ")
// document.write("<br><br>" + factorial(factor) + "<br><br>");

// Q:7
// function counting (startnum,endnum){
//     for (i=startnum; i <= endnum; i++){
//         document.write("<br>" + i);
//     }
// }
// var startnum = +prompt('Enter a number for Start Counting ');
// var endnum = +prompt('Enter a number for End Counting ');
// document.write("<h2>Counting</h2>");
// document.write("Starting number : " + startnum +"Ending number is : "+endnum);
// counting(startnum,endnum);

//Q:10
// var  word = prompt("Enter your word")
// var drome = "";
// function palindrome(palin,drome){
//     for(var i = palin.length - 1;i <= 0;i--){
// drome += [i]
//     }
//     if(word === drome){
//         return word + " is palindrome word"
//     }
//     else{
//         return "This is not a palindrome word"
//     }
// }
//     alert(palindrome(word , drome ,i))

//Q:11
// function upper(string){
// document.write("the quick brown fox".ucwords())
// }
// document.write(upper())