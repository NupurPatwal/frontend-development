# LECTURE: 1 JAVASCRIPT (Basics)

## primitive type datatypes:

1. number :- + - floating
2. Boolean :- "true"/"false"
3. string :- any sentecnce full or half
4. undefined :- let a;
5. Null :- let a= null; null is an empty value.

6. Symbol :-
7. Bigint :- any bada number.

NaN--> not a number.

operator precedence :-> ()> \*_ > _, /, %> + , - (left to right)

# LECTURE: 2 JAVASCRIPT (else, if-else, truthy falsy etc..)

1. learning abt template literal.
2. console window if else stt. and also about the switch case including alert and prompts.
3. it also contsains an assignment that i have to solve asap.
4. output var m + include hoga or console stt main ,
5. == operator ignore type and compares only vslue.

## LECTURE: 3 JAVASCRIPT (String and String Methods / Array and Array methods)

# STRINGS ARE IMMUTABLE . JO BN GYI SO BAN GYI

# Arrays are mutable.

JavaScript provides a rich set of methods for manipulating and working with strings. Here are some commonly used string methods:

1. charAt(index): Returns the character at the specified index.

code:

```javascript
let str = "Hello";
console.log(str.charAt(0)); // "H"
```

2.charCodeAt(index): Returns the Unicode of the character at the specified index.

code:

```javascript
let str = "Hello";
console.log(str.charCodeAt(0)); // 72
```

3.concat(...strings): Concatenates the string arguments to the calling string and returns a new string.

code:

```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
```

4.includes(searchString, position): Checks if the string contains the specified string or characters.

code:

```javascript
let str = "Hello World";
console.log(str.includes("World")); // true
```

5.endsWith(searchString, length): Checks if the string ends with the specified string/characters.

code:

```javascript
let str = "Hello World";
console.log(str.endsWith("World")); // true
```

6. indexOf(searchValue, fromIndex): Returns the position of the first occurrence of a specified value in a string.

code:

```javascript
let str = "Hello World";
console.log(str.indexOf("World")); // 6
```

7.lastIndexOf(searchValue, fromIndex): Returns the position of the last occurrence of a specified value in a string.

Code:

```javascript
let str = "Hello World World";
console.log(str.lastIndexOf("World")); // 12
```

8.match(regexp): Searches a string for a match against a regular expression, and returns the matches.

code:

```javascript
let str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); // ["ain", "ain", "ain"]
```

9. repeat(count): Returns a new string with a specified number of copies of an existing string.

code:

```javascript
let str = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"
```

10. replace(searchValue, newValue): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

code:

````javascript

let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

11. search(regexp): Searches a string for a specified value, or regular expression, and returns the position of the match.

code:
```javascript

let str = "Hello World";
console.log(str.search("World")); // 6

````

12.slice(beginIndex, endIndex): Extracts a part of a string and returns a new string.

Code:

```javascript
let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
```

13. split(separator, limit): Splits a string into an array of substrings.

Code:

```javascript
let str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]
```

14. startsWith(searchString, position): Checks if a string starts with the specified string/characters.

code:

```javascript
let str = "Hello World";
console.log(str.startsWith("Hello")); // true
```

15. substring(indexStart, indexEnd): Extracts characters from a string, between two specified indices.

Code:

```javascript
let str = "Hello World";
console.log(str.substring(0, 5)); // "Hello"
```

16. toLowerCase(): Converts a string to lowercase letters.

Code:

```javascript
let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
```

17. toUpperCase(): Converts a string to uppercase letters.

Code:

```javascript
let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
```

18. trim(): Removes whitespace from both ends of a string.

Code:

```javascript
let str = " Hello World ";
console.log(str.trim()); // "Hello World"
```

19. padStart(targetLength, padString): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

Code:

```javascript
let str = "5";
console.log(str.padStart(4, "0")); // "0005"
```

20. padEnd(targetLength, padString): Pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.

Code:

```javascript
let str = "5";
console.log(str.padEnd(4, "0")); // "5000"
```
