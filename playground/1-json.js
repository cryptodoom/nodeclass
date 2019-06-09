const fs = require('fs')

//Read file
const buffer = fs.readFileSync('1-json.json')

//Convert JSON data to JS string
const dataJSON = buffer.toString()

//Parse JS string and set to variable
const user = JSON.parse(dataJSON)

//Set new values
user.name = 'Josh'
user.age = 6969

//String for JSON file
const userJSON = JSON.stringify(user)

//Update file with JSON string
fs.writeFileSync('1-json.json', userJSON)

console.log('Updated')
// // const book = {
// //     title: 'title',
// //     author: 'bob'
// // }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json', bookJSON)

// //Read file
// const buffer = fs.readFileSync('1-json.json')

// //Convert JSON data to JS string
// const dataJSON = buffer.toString()

// //Parse JS string and set to variable
// const data = JSON.parse(dataJSON)

// //Read variable .pickwhatyouwantread
// console.log(data.name)


