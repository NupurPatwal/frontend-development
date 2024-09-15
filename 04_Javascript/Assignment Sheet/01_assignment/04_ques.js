let str= prompt(`Enter the string...`);
// if ((str.charAt(0)==='a' ||'A') && (str.length > 5))  {
if (str[0] === 'A' || str[0] === 'a' && str.length > 5) {
    
    console.log("Congrats! Golden String.");
}else{
    console.log("Hnnn! Normal Strnig");
}

/*Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not*/