const now = new Date();
console.log(`today's date : ${now}`)
const hours = now.getHours().toString()
const minutes = now.getMinutes().toString();
const seconds = now.getSeconds().toString();
console.log(`${hours}/${minutes}/${seconds}`)
const randomNumber = parseFloat(Math.random() * 3 ).toFixed(2)
console.log(randomNumber)