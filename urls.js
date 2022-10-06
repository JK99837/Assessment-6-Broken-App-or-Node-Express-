const fs = require('fs')
const axios = require('axios')
const process = require('process')

// Get url and remove the HTTP and other symbols
// USING REGEX
// const getName = (str) => {
// 	let match = str.match(
// 		/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
// 	)
// 	return match[3] //<-- use the third index after splitting the URL
// }

// Using SLICE
const getName = (str) => {
	return str.split('/').slice(2, 3) //<-- slicing array to retrive only name.abc
}

function commandLine(path) {
	// Read the file
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log('Unable to read file', err)
			process.kill(1)
		}
		// make the urls.txt links into an array by splitting at the new lines
		let urls = data.split('\n')
		// request the url values and save the promises to variable
		let links = urls.map((val) => axios.get(val).catch((err) => err))

		Promise.all(links) //<-- try to resolve all promises at the same time
			.then((res) =>
				res.forEach((r) => {
					// Write the files names as new files
					fs.writeFile(`${getName(r.config.url)}`, r.data, 'utf8', (err) => {
						if (err) console.log('unable to create file', err)
					})
				})
			)
			// Catch any errors
			.catch((err) => console.log('Unable to get response from URL', err))
	})
}

commandLine('urls.txt') //<-- run the commandLine function