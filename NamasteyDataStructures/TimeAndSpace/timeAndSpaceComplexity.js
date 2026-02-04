/// Time Complexity
// -> used to measure efficiency of algorithm in terms of speed as the input size grows
// low tc means better speed
// tc != time taken
// speed efficiency when input size grows ?

// linear search =>  [2,1,3,5,4,7] search 5 => works in a linear fashion -> loop through the array one by one and find if present or not 
// in 4 steps i found 5
// my iterations will run n times 

// binary search => [1,3,4,7,9,15] its a sorted array  -> search 10 -> keeps dividing array into two parts => middle element is 7 => 7 < 10 => number will be on right hand side of array => [9,10,15] => middle is 10 it will. return 
// only in 2 steps i found 10
// n , n/2 , n/4 , n/4.... -> dividing my sample space
// my iterations will run n/2**x times where x is number of times i am dividing my array
// x = log of n base 2

// binary search >>>> linear search

//Big O Notation
// measures time complexity in worst case of an algorithm
//linear Search = O(n)
//binary Search = O(log n)
// O(log n) >>>> O(n)

// O(n) => linear search => for(i=o ; i < n ; i++) => n operations => x=n

//O(log n) => binary search => n , n/2 , n/4 ....1 => x = log n

//O(n**2) => for(i=o ; i < n ; i++) {for(j=o ; j < n ; j++)} => n * n => O(n**2) => nested loops

// O(n log n) => merge sort

// O(n**3)

//O(2**n)

//O(n!)

// O(log n) >>>> O(n) >>>> O(n**2)

// constant time complexity => O(1)

// MOST I WILL SEE
//O(n) , O(log n ) , O(n log n ) , O(n**2) , O(n***3)

// o(1) >> o( log n ) > o(n) > o(n log n) > o (n**2) > o (2**n) > o(n!)

///Space Complexity
// find max in an array -> using variable to store max will give me space complexity as constant => o(1) even i for iteration counts as taking space
//double each element of an array -> new array means space will be o(n)

