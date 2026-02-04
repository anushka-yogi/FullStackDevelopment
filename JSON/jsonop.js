console.log("this is my json operation");
const json = `{
  "name": "Anushka",
  "phone": 9191919191,
  "skills": ["html", "css", "js"],
  "address": {
    "city": "gurgaon",
    "pincode": 121121
  }
}`;
console.log(json);
// pass this json to perform operations
const user = JSON.parse(json);
console.log(typeof json);
console.log(typeof user);
let name = user.name;
let skills = user.skills;
let skills1 = user.skills[0];
let skills2 = user.skills[1];
let skills3 = user.skills[2];
let phone = user.phone;
let address = user.address;
let city = user.address.city;
let pincode = user.address.pincode;
console.log(name + " , " + skills);
console.log(skills1 + " , " + skills2 + " , " + skills3);
console.log(
  phone + " , " + JSON.stringify(address) + " , " + city + " , " + pincode
);
// convert js object to js string
