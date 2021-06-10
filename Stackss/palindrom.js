
var stacksWords = []
var reverseWords = ""
function isPalindrom(words){
    for(var i = 0 ; i < words.length; i++){
        stacksWords.push(words[i]);
}
console.log(stacksWords);

    while(stacksWords.length > 0){
        reverseWords += stacksWords.pop();
}


console.log(reverseWords);

    if(words == reverseWords){
        console.log("Is palindrome");
    }else{
        console.log("Not a palindrome");
    }
    }

isPalindrom("LopL")

