// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function (x, y) {
	return x + y;
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function (x,y,z) {
	return (x + y + z)/3;
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function (text) {
	return "your number is " + text.length;
}

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function (x,y) {
	if (y>x) {
		return true
	} 
	else{ 
		return false
	}

}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
var greet = function (name) {
	return "hello," + name + "!";
}



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function (a,b,c,d,e) {
	return "quick brown fox jumps over the fence " + a + " " +  b + " " + c + " " + d + " " + e +".";
}


// ---------------------Exercise 2-----------------------
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
	if (x>y)
		return x
 else (y>x)
 		return y
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if (x>y && x>z){
    	return x;
    } else if (y>x && y>z){
    	return y;
    } else if (z>x && z>y){
    	return z;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	var vowels = ["a","e","i","o","u"];
	if (vowels.includes(char)){
		return true;
	}
	else{
		return false;
	}
    }
    // if (char == a || char == e || char == i || char ==o || char == U) 
    // 	{return true 
    // 	}
    // else{
    // 	return false
    // }

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse(){
// var reversal = str
//     reversal.reverse(str);
// }

function reverse(str) {
	var reversal = str.reverse
	return reversal;
}




