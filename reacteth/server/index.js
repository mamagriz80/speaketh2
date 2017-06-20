const express = require("express")
const Mystery = require("../src/lib/MysteryWordFrequency.js")
const fs = require("fs")
const NUMBER_OF_WORDS = 100;

const range = (n) => [...Array(n).keys()]

const processFile = (err, stream) => {
	console.log("I read the file", err, stream)
	if (err){
		throw err;
	}
	const completeText = stream.toString();
  const mysteryShakes = new Mystery(completeText)
	const app = express()

  app.get("/Shake_Rap", (req, res) => {
		const barderator = range(NUMBER_OF_WORDS).map((x) => mysteryShakes.randomWord(x)).join(" ")
		 res.json({words: barderator})
  })

  app.listen(3001)
  console.log('ermagerd berdererter!!')
}
console.log('I haven\'t read the file yet', __dirname)
fs.readFile( __dirname + '/../public/shakespeare.txt', processFile);
