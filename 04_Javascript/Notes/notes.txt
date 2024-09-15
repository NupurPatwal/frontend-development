                                LECTURE: 1 JAVASCRIPT (Basics)
primitive type datatypes:
1. number :- + - floating
2. Boolean :- "true"/"false"
3. string :- any sentecnce full or half
4. undefined :- let a;
5. Null :- let a= null; null is an empty value.

6. Symbol :-
7. Bigint :- any bada number.

NaN--> not a number.

operator precedence :-> ()> ** > *, /, %> + , -       (left to right) 


                                LECTURE: 2 JAVASCRIPT (else, if-else, truthy falsy etc..)

1. learning abt template literal. 
2. console window if else stt. and also about the switch case including alert and prompts.                  
3. it also contsains an assignment that i have to solve asap.
4. output var m + include hoga or console stt main ,
5. == operator ignore type and compares only vslue.
6. Primitive are copied by their values.
6. Reference are copied by their address.
7. For of loop are for the iterables.
8. For in loop are the object.
9. How to create objects ? factory fun (return keyword)and(this keyword) constructor functions.
10. What is the dynamic nature of objects? run time pe koi bhi prop + or delete

11. What is constructor property?
12. WHy functions are objects?
13.Iterating through objects14.
14. Object cloning k tarike:-> Iteration, Assign, Spread.
15. What is garbage collection?

                                LECTURE: 3 JAVASCRIPT (String and String Methods / Array and Array methods)

# STRINGS ARE IMMUTABLE . JO BN GYI SO BAN GYI
# Arrays are mutable.
# Strings are of two types Object strings and primitive strings.
This is a object string:
let str = new String("Nupur");
console.log(str);


Array Methods:
a. Adding new elements
b. Finding elements
c. Removing elements
d. Splitting elements
e. Combining elements
f. sorting elemenets
g. empting the array
h. join elemenet
how to copy the array?


# What is String object in js?
Ans: Whenever we use .notation in primitive string Js str converted in String object. It is the character of string.

JavaScript provides a rich set of methods for manipulating and working with strings. Here are some commonly used string methods:

1. charAt(index): Returns the character at the specified index.

code:
let str = "Hello";
console.log(str.charAt(0)); // "H"

2.charCodeAt(index): Returns the Unicode of the character at the specified index.

code:
let str = "Hello";
console.log(str.charCodeAt(0)); // 72


3.concat(...strings): Concatenates the string arguments to the calling string and returns a new string.

code:
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

4.includes(searchString, position): Checks if the string contains the specified string or characters.

code:
let str = "Hello World";
console.log(str.includes("World")); // true

5.endsWith(searchString, length): Checks if the string ends with the specified string/characters.

code:
let str = "Hello World";
console.log(str.endsWith("World")); // true

6. indexOf(searchValue, fromIndex): Returns the position of the first occurrence of a specified value in a string.

code:
let str = "Hello World";
console.log(str.indexOf("World")); // 6


7.lastIndexOf(searchValue, fromIndex): Returns the position of the last occurrence of a specified value in a string.

Code:
let str = "Hello World World";
console.log(str.lastIndexOf("World")); // 12

8.match(regexp): Searches a string for a match against a regular expression, and returns the matches.

code:
let str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); // ["ain", "ain", "ain"]

9. repeat(count): Returns a new string with a specified number of copies of an existing string.

code:
let str = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"

10. replace(searchValue, newValue): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

code:
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

11. search(regexp): Searches a string for a specified value, or regular expression, and returns the position of the match.

code:
let str = "Hello World";
console.log(str.search("World")); // 6

12.slice(beginIndex, endIndex): Extracts a part of a string and returns a new string.

Code:
let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"

13. split(separator, limit): Splits a string into an array of substrings.

Code:
let str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

14. startsWith(searchString, position): Checks if a string starts with the specified string/characters.

code:
let str = "Hello World";
console.log(str.startsWith("Hello")); // true

15. substring(indexStart, indexEnd): Extracts characters from a string, between two specified indices.

Code:
let str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"

16. toLowerCase(): Converts a string to lowercase letters.

Code:
let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"

17. toUpperCase(): Converts a string to uppercase letters.

Code:
let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"

18. trim(): Removes whitespace from both ends of a string.

Code:
let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

19. padStart(targetLength, padString): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

Code: 
let str = "5";
console.log(str.padStart(4, "0")); // "0005"

20. padEnd(targetLength, padString): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.


Code: 
let str = "5";
console.log(str.padEnd(4, "0")); // "5000"



                                   ARRAY METHODS:


JavaScript provides a wide range of methods for manipulating and working with arrays. Here are some commonly used array methods:

1. push(...elements): Adds one or more elements to the end of an array and returns the new length of the array.

code:
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

2. pop(): Removes the last element from an array and returns that element.

CODE:
let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]

3. shift(): Removes the first element from an array and returns that element.

CODE:
let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3]

4. unshift(...elements): Adds one or more elements to the beginning of an array and returns the new length of the array.

CODE:
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

5.concat(...arrays): Merges two or more arrays and returns a new array.

CODE:
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]

6.slice(start, end): Returns a shallow copy of a portion of an array into a new array.

CODE:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3);
console.log(newArr); // [2, 3]

7. splice(start, deleteCount, ...items): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Splice manipulats the array.

CODE:
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4, 5]

8.indexOf(element, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

CODE:
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2

9.lastIndexOf(element, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

CODE:
let arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2)); // 3


  *******************Array Callback  METHODS**************************
  1. forEach = to print each element using call back fun.
  2. map = same as foreach
  3. filter = 
  4. some
  5. every
  6. reduce


 // Javascript iterables:
 a. spread and rest op:


 2. destructuring the arrays - Storing the value of arrays into multiple variables. [] are used in array destructuring
 3. destructuring the objects. : {} are used in object destructuring.

 spread:-> spread kr deta hai
 rest :-> opp. of spread ye saare arugements ko collect krta h or unko ek arg m store krta h.

 4. harfunction k liye argument hote h wo arguments naam k variable ya collection k ander store hota hai.
 5. The arguments are not exactly an array.

10.forEach(callback): Executes a provided function once for each array element.

CODE:
let arr = [1, 2, 3];
arr.forEach((element) => {
  console.log(element); // 1, 2, 3
});

11. map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array.

CODE:
let arr = [1, 2, 3];
let newArr = arr.map((element) => element * 2);
console.log(newArr); // [2, 4, 6]

12.filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

CODE:
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter((element) => element > 2);
console.log(newArr); // [3, 4, 5]

13.reduce(callback, initialValue): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

CODE:
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

14. some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.

CODE:
let arr = [1, 2, 3, 4, 5];
let hasEvenNumber = arr.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // true


15. some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.

CODE:
let arr = [1, 2, 3, 4, 5];
let hasEvenNumber = arr.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // true

16.every(callback): Tests whether all elements in the array pass the test implemented by the provided function.

CODE:
let arr = [1, 2, 3, 4, 5];
let allPositive = arr.every((element) => element > 0);
console.log(allPositive); // true

17. find(callback): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

CODE:
let arr = [1, 2, 3, 4, 5];
let found = arr.find((element) => element > 3);
console.log(found); // 4

18.findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

CODE:
let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex((element) => element > 3);
console.log(index); // 3

19. sort(compareFunction): Sorts the elements of an array in place and returns the array.

CODE:
let arr = [5, 2, 4, 1, 3];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4, 5]

20.reverse(): Reverses the order of the elements in an array in place.

CODE:
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

21. join(separator): Joins all elements of an array into a string and returns this string.


CODE:
let arr = [1, 2, 3];
let str = arr.join("-");
console.log(str); // "1-2-3"


22.toString(): Returns a string representing the specified array and its elements.

CODE:
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

23. flat(depth) (ES2019): Flattens nested arrays up to the specified depth.

CODE:
let arr = [1, 2, [3, 4, [5, 6]]];
let flatArr = arr.flat();
console.log(flatArr); // [1, 2, 3, 4, [5, 6]]

24. copyWithin(target, start, end): Copies a portion of an array to another location within the same array.

CODE:

const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 5); // Now numbers contains [4, 5, 3, 4, 5]



                                LECTURE: 3 JAVASCRIPT (Object Literals and methods)

1. object Literals are used to store complex keywords.
2. object Literals are generally initiated by const.
3. They are started with curly braces {}
4. how to get values of the object ? 

Ans : tarika 1 and 2 console.log(xPost.username);
console.log(xPost["username"]);
object ki key ki naam.
5. unable to use dot op. jb assingning variable to object.

6. Object m value store in the form of key : value pair.
7. JS auto converts keys to strings.
8. Object of Objects.
9. Arrya of Objects
10. Objects k bahar ki taraf curly {} hote hai.

LECTURE: 6 JAVASCRIPT (Functions:-)

1. function wale arguments and uske niche wale parameters.
2. return stt print nahi hoti log karana padta hai.
3. Types of scopes in js:
         a. Function scopes- function k ander defined or function k outside kisi kaam k nahi.
         b. Block scope= block k ander hi kaamh=gaar
         c. lexical scope = nested function.
         d. global scope - kahi bhi define kro always in  ok report.
4. what is the concept of function expression?
Ans - const num = function(){}
5. what is higher order function?
Ans- a. takes one or multiple function as arguments.
     b. returns a function.
  
6. factory function is a kind of function that creates new function. What are factory function?
7. jo functions objects (k:value pairs) k ander defined hote h aka methods.
8. js k ander maximum everything is an object

//  shorthand of using a method
let num2 = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

console.log(num2.sub(5, 10));

# Hoisting is the process of moving function decleration to the top of file and this happens automatically through js egine.

#function declartion and function assignment. are two different things
#function declartion can be run from anywhere.
# function assignment can only be run after assignment.
# Rest and default parameters


                                LECTURE: 7 JAVASCRIPT (this,try catch arrow)

1. this is a type of keyword that referes to an object which is currently exceuting.
2. jb bbhi hum apni kisi bhi js file k ander koi bhi function define krte hai. uss function k ander "this" ki jo value hoti hai by default genral cases m wo hamari window object hoti hai.
3. tab k ander high level aka high priority object is window object.
4. jb bhi hamare pass koi bhi object nahi hoti toh by default we have window object in ourselves. 
or this k ander window object ki value store hoti hai.
jo bhi object kisi bhi method ko exceute kr ri h. wahi hamara this hai.

5. try m error toh catch run or vice- versa.


                                LECTURE: 7 JAVASCRIPT (Miscellaneous Topics)
 1. Arrow functions: they are not stand alone functions. 
 they are usually used as a value.
 
 2. Implicit return in arrow function: jb hamara arrow func bss return kr rha ho stt.(no print no calculate )

 3. remove the return stt.
 4. implicit return mtlb easy toh understood.
 5. explicit return mtlb have to written clearly something.
 6. What is set timeout?
 ans-> set timeout is a function of window object. jb hame aisa koi kaam krna hota hai jisme thoda time lagega.
 7. set timeout is an inbuilt function.


 8. callback koi bhi aisa function hota hai jo dusre function m as an argument pass hota hai.
 9. what is set interval?
 ans: set interval do the works repetedly after every interval.


10. what is the d/f b/w normal fun and arrow funcs?
11. what is this with arrow functions?
 ans- the "this" keyword behave differnly with arrow functions owing to their commonly known differentiablty with normal func.
 
12. jo func k this hoga depend upon the calling object.
13. pr arrow func k "this" is based on lexical scope. mtlb parent k kya scope hai. --> parent k jo bhi scope hai wo arrow fun inherit kr lete hai.
14. normal function caling object ko apna this banate H
15. arrow func calling object k this ko apna this banate hai.

16. what is the important usage of this?
ans- jb bhi hum settimeout setinterval in sb jaise inbuilt funcs ko use krna chahte hai apni normal obj k ander. toh wha agr hum arrow func ko le apne call back k ander than we are actuallu accessing the right this.


 
                       LECTURE: 9 DOM

1. All the selection and manipulation work in the file has to be done with js alone.
2. console.dir se hamari document object print hoto hai. ya phir jb bhi kisi ki object form chaiye ho toh.
3. HTML all collection gives us all the tags which are used in the document. ye thode se arrays k similar hote h but not exactly arrays toh arrays wale metho doesnt works but....
document.all[2].innerTExt == works

4. All the tags which are used in this page are individually an object.
5. kuki jb DOM create hota hai toh saare k saare html elements individually ek object bante hai.
6. the document is also an object.

7.how the things Changes inthe javascript? what is the reason
ans-> Js k ander automatically document naam ki object banti hai. or uss document namak object k ader kai saari properties hoti h jo hame allow krti hai html k elements ko access select or change krne k liye.



8. HOW TO SELECT ELEMENTS?
a. get element by id:
 isse jo bhi bhi object jiki wo id hogi wo return hoke mil jaayegi. mtlb html element nahi milega uski ek obj form milegi jo dom k ander prepare hui hai.

b. get element by classname : 

when ever we put galat id we got null as result 
but when we put galat classname we got an empty classname.

c. get element by tagname
d. document.queryselector / document.queryselectorAll
e.manipulating Attributes:

1. obj.getAttribute(get):
2. obj.setAttribute(value, set)

9. What is the classList property in the javascripts elements?
10. What is Navigation in javascript?
Ans- In navigation in html we basically learnt about 3 props:
a. parent element = 

let ulList = document.queryselector("ul)
ulList.parentelement;
Its gives the parent element. 

b. child element:
let ulList = document.queryselector("ul)
ulList.childelement;

It gives the child element of the object.

childelementCount => count of child element.

c. previous element sibling/ next element sibling:
console.log(ulList.children[1].nextElementSibling);


10. How to add document in the page? Important

1. appendChild
2. append: apppend any text and element at the last
3.prepend: insert things at the begning.
4.insertAdjacent:
                  a. beforebegin
                  b. afterbegin
                  c.beforeend
                  d. afterend
p.insertAdjacentElement("beforebegin",btn)


11. 10. How to remove document in the page? Important
ans: by using remove(ele) / removeChild(ele)





  Lecture 10: DOM Events:
a.Dom events are signals that something has occured.
1. inline events: When the js events are written in the html.
isko  islie use nahi krte kuki isse html code become bulky.


2. Whenever we are using dir the object is printeed in the console window.

3. Genrally our event properties are strted with O:

Dusra tarika: when the events are stored in functions.
4. Bss function k naam assign krna hai uss property ko.Hum function ko exactly exceute nahi kr rhe.

iss method ko islie reject krte h bc it doesnt took multiple elements.


# Redundancy : Aaisi cheez jo baar baar repeat hori ho.
Types of DOM events:-

a. onclick :-
b. onmouseenter :- When mouse eneter on  the element.


Teesra tarika is event listeners:-
Why do we need event listeners? Event listners ki jarurat ko pdti hai.

5.element/add eventlistners(events, callbacks)

#this in event listeners.
2. keyboard events:- In the call back there is always an default argument called event argument.

a. click is an pointer event.
b. double click is an mouse event.

b key up/ down / key press.

#form event:
a. submit:-

jb hum chahte h ki hum ussi same page pe rhe form submit hone k baadbhi toh we use.

###############event.preventDefault.#####################

# whenever we are using the value which is give to us by the user we basically use :
input. value.
#jb bhi jiss cheez ko console.dir krwate h toh uska object print hota hai.
# call back this ki wajah se exceute hota hai.

# change event: Change event occurs when th evalue of an input element has been changed only works on <input>, <textarea> and <select> elements..

track the final and initial value in theobject.

# input event: input event tb fire hota hai jb hamari <input>, <select>, <textarea> has been changed.



CONCLUSION:
track small small changes inout event or  major changes change event.
non character keys doesnot triggers the input event.


                  JAVASCRIPT EVENT BUBBLING:
    
1.  Jb bhi bhot saare nested html elements k liye alag- 2 event listeners create krte h toh event bubbling hoti hai.

  event.stopPropagation;
2. We use event.stopPropagation jb hum nahi chahte ki event parent ko repeat kre.

3. point to remember: style property se wahi style show hota h jo inline style m likha jata hai.

4. What is event delegation?
Ans: Agar hum chahte h ki hamare child element k liye koi cheez trigerr ho jae toh uske liye wahi same trigger hum apne parent element ko likhte hai.


:-> naye wale elements k liye purane eventlistners apply kre toh we use event delegation
:-Event delegation k traika hota h programming krne k jisme hum bubbling wali property ko use krege.

# factory function ek asia type k function hota hai jo ek object banata h or usse return kr deta hai.

#factory obj bana k return krti hai.

# form. element[5] is used to track the value of details present in the form.

# whenever we trigger the event listner of any element toh uska parent element ka bhi eventlistner automatically call hoga.


# Hum eventlistners k dwara koi bhi cheez apne page prr add krte hai wo sirf existing elements k liye add hote hai.
Naye wale elemenets k liye ye apply nahi krre.

# Event delegation is a phenomenon/ process/ concept in programming in Js in which Event bubbling is used.

# Event is a default parameter. Iske ander ek especial property hoti hai jiska naam hai evenet.target



 #####################################################
                 Simon Says:

1. We make a heading and a sub heading and we also creates 4 buttons.


PArt 1:
step 1: make heading
step 2: Make subheading.
step 3: make 4 divs & add the button prop to it.

Steps in javascript for the simon says:-
step 1: Any key press , toh the game is start.
step 2: button flash and heading2 m level1 aa jaaye.

 * jo btn flash h wo multiple times hora hai toh hum
 *toh hum kya krege ek btnFlash naam k function bna denge
step 3: 2 empty array ek game Seq or ek user Seq.



                  JAVASCRIPT PART : 11 ADVANCE JS

async. nature of js:
1. callstack: they exists in every programming language whenever we are dealing with fun and fun calls.

2. stack is based on LIFO. mtlb jo last m gya tha wo first bahar aaya hai.

3. All  the function calls are stored in the form of stacks.

4. Function ki call stack k form h store hoti hai.
5. Call stack generally dikahi nahi deta.
6. har website k pass apna ek call stck hota hai jo track krta h js k konsa func call chl raha hai.

*** so call stack is  a datastructure jo track krta h ki ab konse func ki call chl rahi hai.
7. Js callstack can be track through browser with the help of breakpoints.

8. JS single threaded nature: -> js m hum ek time pe ek hi kaam kr skte h or yahi mtlb h single threaded hone ka.
9. Api k kaam hota h ki wo request leti h or kuch /response/data send krti hai.

Eg: js k code API ko kuch request bhejta h ki usse kuch chaiye or wapas m api usse kuch response deti hai.

2. ab ho skta h ye Api jaha hosted ho wha server down ho/ ya internet connection weak ho/ ya connection ban hi na paae.


10. To deal with this single threaded nature of js hamre pass kuch kuch features hote h inme se ek hai==> call backs.

11. What are call back?
Ans:- Call back hamre aise function hote hai jo dusre function m as a argument jaate hai.

Eg: let suppose ki hame API ki completion pr kuch kaam karwana hai.
ya is DB k ander kuch add hone k completion m kuch kaam karwana hai. Toh uss kaam ko hum call back bhej skte h apne API op.function call wale function ko.

# ya phir hum set time out ko use kr skte hai. jo apne aap exceute hoga kuch set of time baad.

Ques: If js is single threaded toh how the set timeout function run?
Ans: Toh ye jo set timeout wala waiting k kaam h wo js nahi kreati ye hamara browser karwata hai. or browser is written in cpp and languages like cpp and java are capable of doing multi- threaded works.

toh jitne time k delay h utne time k liye browser usse store krke rakhega or complete hone k throw kr dega.

12. Js synchronous nature jb ek saath saare ki saari cheeje sync m chl rahi hoti hai.

13. Pr jab hum set time out jaisi call back jaisi ya set interva jaise fux se krte hai. Toh waha pr hum js k nature ko async bna rahe hote hai.


PROBLEM DUE TO THE ASYNC NATURE OF JS:-
1. call back hell:=  call backs ki nesting ko call backhell kehte hai.
# sometimes third thing is dependent on the first two.
# to show the dependency we uses callbacks

Ques: what is a call back?
Ques what is callback hell?

2. There are many things which are invented in js to prevnet us from the callback hell.
  a. async b. await c. promises

3. Promises are the best thing which is happend in js. They save us from the problem of call back hell.

4.Databases are like a floder in our computer jiske ander hum apna data save kr skte hai.

5. Promises are the object in js represents the eventual completion(or failure ) of an async. operation and its resulting value.

6. Promises are js ki object.

7. asynchronous situation means ki kaafi saari cheeze ek dusre pe dependent hai.

8.in desi bhasa Promise k mtlb hai ya toh wo cheez complete hori hogi yaa fail...agr complete hori h.
or agar success ho gya ya fail hogya toh kya result hamare pass aayega. wo resulting value object k ander store hogi.

9. promises ko use krne se level of nesting km ho jaati hai.

10. promise object k ander do callback hote hai:=
   a. resolve.
   b. reject.

11. States of promises: - a. pending b. rejected, c. fulfilled

12. Promise is a object or object k pass apne methods bhi hote hai.
   # methods in promise a. then b .catch

13. jb hum chahte hai ki resolve hone baad kuch kaam ho toh then use krte or jb hum chahte h ki reject hone k baad kuch kaam ho toh catch method k use krte hai.

14. What is promise chaining?
Ans: ek k baad ek bhot saare promises ko chain karna.

15. Promises helps use from the heavy and bulky code and make the code compact and easy.

16. Promises are resolved and rejected with some data(valid result or errors.)    




               JavaScript part : 12

1. What are Async functions?
Ans: async function asynctareeke se kaam krne ka ya code krne k ek cleaner tarika hai.
# compact and esily understandable code.
# saare k saare async functions promise return krte hai.
# throw keyword k kaa hot ah kisi random error ko throw karna. jb bhi error dena hota h toh throw use krte hai.s

There are two ways to understand async keyword:
a. async keyword 
b. await keyword :- pauses the exceution of its surrounding async function until the promised is settled (resolve or rejected).

#Await keyword : await jis bhi fun call k saamne likh diya.
Toh wo apne aas pass k saare async function call ko pass kr dega.

# jb hamare pass async hoga tbhi we are able to use await.
Jb tk humari func call chl ri hai usne promise settle nhi ho jata.

when we have to throw some error. toh throw function is used.

2. The code started with call back hell get better with the help of promises and again get optimised with the help of async and await.

# jaha promises use hota h waha async & await bhi use hota hh iss type ki situation ko deal krne k liye.

3. Handling rejections:  Handling rejections with await.
 error can be handled with the help of try and catch.

4. What is an API:- Appliction programming interface because it act as a layer b/w the user and the server.

user aka js ka code.
    req        order
user ----->     API -----> server
user <-------- API <--- server
     resp.
    req        order
we ------> waiter -------> kitchen


# Jo user hai wo server ko access nahi krta wo uski api ko access krta hai.
# js k code api ko request karega ki muje ye ye data chaiye.
# Or ApI hamari request k hisaab se hame data de degi.
# generally 2 software are interactted with the help of API>
# But those API which are interacting with the help of internet are called web API.


# Genrally we are using web API those are using http protocol.
# web api contains some data and the data is structured in especial formate called JSON.


# ApI gives us data in the form of JSON.
# API request response cycle.
              request         url
user/ client ---------------> API ---------->endpoint.


5. Accessing some API:-
a. twitter api= bot account on twitter are made with this api.
   random company page/ personal acc. which is tagged can automated reply with the help of this api.

b. mEta api = fake likes and share.
# some apis are free and some are not they are using key to access it.

c. Cat fact Api : https://catfact.ninja/fact
d.dogs.ceo
e. google maps api 



# the formate of data in an API callled json and it is more or less like object but they are not objects.
# json data are not for humnans to read.

6. What is JSON : FF javascript object notation.
generally hum kisi ko bhi data return krege toh wo hamara json m hi hota hai.

 json k ander bhi key value pairs hot ehai.
 www.json.org

  What are json validators? konsa json k code sahi h or konsa galat hai


7.Accessing Data from JSON:
 # Jb bhi hame json k data milta h toh generally pura k pura string formate m hota hai.

 # API se response aayega in th form of a string.


PArse k mtlb hota hai ek data formate se dusre data formate m transfer karna.

 a. JSON.parse(data) METHODS :- To parse a string data into a js object.

json data ---> js object
 mtlb sara data jo string form m h use object m change kr dega jisse JS usse use kr paaye.

 b.JSON.stringify(json) Method : - To parse js object data into JSON.

 js object ---> json data
 generally ye kaam tb krte h jb khud ki api banate hai,


 8. API testing request:
 Tools: these tools are used to call the API.
        a. Hoppscoth: https://hoppscotch.io/ to us e this website.
        b.Postman : download and cumbersome to use.

 # API testing tools are basically not for the common user . It is for the web developers.

 9. What is Ajax?
 asynchronous  javascript and XML
 Whenever we are callling an api we are doing Ajax calls.

 Toh jb bhi hum Ajax keh rhe iska mtlb yahi h ki hum apis ko call kr rhe hai or ye calls asynchronously work kr rahi hai or hamare pass kuch response aa rha h in the form of json jiske saath hum deal kr rhr hai.

9. http verbs:
  a. get: Jb bhi hame koi information leni hoti hai.
  b. Post : API req k saath kuch data post krna chaha rhe hai.
  c. delete : Waha pe kisi na kisi cheez ko delete krne ki kosis krte hai.

  Jb khud ki api ko build krege toh d/f http verbs ko use krege.

10. Status codes:
   a. 200 - OK
   b. 404 - Not found
   c. 400 - bad request
   d. 500 - Internal server error.
   e. 503 - service unavilable.

11. Additional information in Api urls:-

www.google.com/search?q=mango
q is the query string.
api k saath Additional information share krni hoti h toh we us e query string.
# HArru potter api.
# university API: github k uper when we have to know any university api.
github.com/Hipo/university-domains-list


11. Https headers: Headers k basically kaam hota hai ki ye Additional information supply krte hai.
Both in request and in reaponse.
Two types of headers:
a. Response header : Abhi iske baare m baat nhi krege.
b. Request Header

12. Fetch Request:-> Ab tk all the Request in API are done throufh hoppscotch but now we use js code to fetch the request.
  

         CHAPTER 13: final part:

1. What is Axios?
ans: it is a type of library jiski help se http req. ko create krte hai.
# ye internally fetch ko hi use krti hai pr again it is another compact and better way to writing a code.


2. Why there is need of using Axios if there is already fetch method?

Jb hamara fetch k ander response aara tha toh wo ek readeable stream m tha pr wo hamara exact json data nahi tha.
In that case we have to parse that data.
# But in Axios :- directly exact response aata hai jo hame chaiye.

let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
let para = document.querySelector(".result");

btn.addEventListener("click", async () => {
  let fact = await getFacts(url);
  console.log(fact);

  //   para.innerHTML = fact;
  para.innerHTML = `The fact is ${fact}`;

  console.log("button was clicked.");
});
async function getFacts(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (error) {
    console.log(error);
  }
}

# How to update query strings in data:-
To fetch axios in the js folder either we install the package or adding the script.
https://github.com/axios/axios



           Miscellaneous:
1. htmlcollections to array : Array.from(classListName).   document.classname(".class-list")
2. Learn more about child Nodes.
3. when we have to create a new elemenet from scratch:-
  let createNode = document.createTextNode("chaiAur code);
  div.appendChild(createNode) instead of div.innerTExt = "chaiAurcode"



4.   DOM edit and remove:

function addLanguage(langName) {
            const li = document.createElement('li');
            li.innerHTML=`${langName}`
            document.querySelector('.language').
            appendChild(li)
        }
        addLanguage("Java")
        addLanguage("phython")
        function addOptiLanguage(LangName) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(LangName))
            document.querySelector('.language').appendChild(li);
        }
        addOptiLanguage("Cpp")

        // to edit values:
       const secongLang= document.querySelector("li:nth-child(3)")
       secongLang.innerHTML="mojo"
    //    second approach
   const newLi=  document.createElement('li');
   newLi.textContent="jomi"
   secongLang.replaceWith(newLi)

//    another approach: to edit
const lastLang= document.querySelector("li:last-child")
lastLang.outerHTML='<li>Typescript</li>'


// remove aproach:
const firstL= document.querySelector("li:first-child")
firstL.remove()

5. What is a mark down file?

code file link:- https://stackblitz.com/edit/dom-project-chaiaurcode
react router dom,

create browse router 

code generatpr projrct.
# code state and .
use state use effect and api xalling
api list fun


Browser Events:-

1. What are events?
What i sinterface in js-> they are like blueprint.
# Event target is a kind of interface implemented by objects that can receive events and may have listener for them.
# Event hone k baad k action listener define krta hai.
Event target are of 3 types: addEventListener , removeEventListner, dispatch event
#Window is a global object. and event target is an interface.
Remove event listner:-
a. Same target 
b. same type
c. same function

2. how to respond to an event?
3. data stored in the event?
4. stop an event?
5. lifecycle of an event.
6. What re event types?

7. The event object:- whenever an event occurs jo hamara add event listener wala fun hai usko  ek event object milta hai.
8. event.preventDefault kisi ki event ko hone se prevent krta hai.
9. Avoid using too many event listeners
10. add event listners on the parent elemenet with the help of phases.