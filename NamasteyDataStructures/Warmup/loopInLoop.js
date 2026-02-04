// loop inside loop
// i will run 5 times
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    // code
    // j will run 5 times for each i
  }
}
//so code will run 5 * 5 = 25 times
function checkij() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      // console.log("i=" + i + " " + "j=" + j);
    }
  }
}
checkij();
// j < i
function checkjislessthani() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < i; j++) {
      // console.log("i=" + i + " " + "j=" + j);
      // j0 !== j0 < i0
      // j0 == j0 < i1 -> i=1 , j=0
      // j0 == j0 < i2 -> i=2 , j=0 ; i=2 , j=1
    }
  }
}
checkjislessthani();
//
function checkjislessthanEqualtoi() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j <= i; j++) {
      // console.log("i=" + i + " " + "j=" + j);
      // j0 == j0 <= i0 -> i=0 , j=0
      // j0 == j0 <= i1 -> i=1 , j=0 ; i=1 , j=1
      // j0 == j0 <= i2 -> i=2 , j=0 ; i=2 , j=1 ; i=2 , j=2
    }
  }
}
checkjislessthanEqualtoi();
//
function check_jisEqualtoiAndjisGreaterthanzero() {
  for (i = 0; i < 3; i++) {
    for (j = i; j > 0; j--) {
      // console.log("i=" + i + " " + "j=" + j);
      // j0 !== j0 == i0 & j0 > 0 because j=0 and i=0
      // j0 == j0 == i0 & j0 > 0 -> i=1 , j=1
      // j0 == j0 == i0 & j0 > 0 -> i=2 , j=2
    }
  }
}
check_jisEqualtoiAndjisGreaterthanzero();
//
function reversei() {
  for (i = 5; i > 0; i--) {
    for (j = 0; j < i; j++) {
      console.log("i=" + i + " " + "j=" + j);
      // i5 j0 , i5 j1 , i5 j2 , i5 j3 , i5 j4
      // i4 j0 , i4 j1 , i4 j2 , i4 j3 
      // i3 j0 , i3 j1 , i3 j2 
      // i2 j0 , i2 j1 
      // i1 j0
    }
  }
}
reversei();
