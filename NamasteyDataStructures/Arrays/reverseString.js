// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
    let length = Math.floor(s.length/2);
    let start = 0 ;
    let end = s.length - 1 ;
    for ( let i = 0 ; i < length ; i++){
        let temp = s[i];
        s[start] = s[end] ;
        s[end] = temp ;
        start = start + 1 ;
        end = end - 1 ;
    }
    return s ;
};
console.log(reverseString(["H","a","n","n","a","h"]));
console.log(reverseString(["h","e","l","l","o"]));