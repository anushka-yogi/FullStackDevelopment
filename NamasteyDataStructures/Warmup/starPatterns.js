// ....
// ....
// ....
// ....
function pattern1(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j < length; j++) {
      row = row + ".";
    }
    //console.log(row);
  }
}
pattern1(4);
// .
// ..
// ...
// ....
function pattern2(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + ".";
    }
    //console.log(row);
  }
}
pattern2(4);
// 1
// 12
// 123
// 1234
// 12345
function pattern3(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    // console.log(row);
  }
}
pattern3(5);
// 1
// 22
// 333
// 4444
// 55555
function pattern4(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    }
    // console.log(row);
  }
}
pattern4(5);
// 12345
// 1234
// 123
// 12
// 1
function pattern5(length) {
  for (let i = length; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1);
    }
    // console.log(row);
  }
}
pattern5(5);
// ....|
// ...||
// ..|||
// .||||
// |||||
function pattern6(length) {
  for (let i = length - 1; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < length; j++) {
      if (j < i) {
        row = row + ".";
      } else {
        row = row + "|";
      }
    }
    //console.log(row);
  }
}
pattern6(5);
// 1
// 10
// 101
// 1010
// 10101
// 101010
function pattern7(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        row = row + "1";
      } else {
        row = row + "0";
      }
    }
    // console.log(row);
  }
}
pattern7(6);
// 1
// 10
// 101
// 1010
// 10101
// 101010
function pattern8(length) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        row = row + "1";
      } else {
        row = row + "0";
      }
    }
    // console.log(row);
  }
}
pattern8(6);
// 1
// 01
// 010
// 1010
// 10101
// 010101
// 0101010
function pattern9(length, toggle) {
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle;
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
pattern9(7, 1);
