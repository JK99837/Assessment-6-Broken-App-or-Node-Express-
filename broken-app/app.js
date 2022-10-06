const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json()) //<-- use JSON for the output

const devArray = [] //<-- save the promises returned into an array

// Need async for this funciton
app.post('/', async (req, res, next) => {
	try {
		// get developer promises from the url and save in array
		let devPromises = req.body.developers.map(async (devs) => {
			return await axios.get(`https://api.github.com/users/${devs}`)
		})

		await Promise.all(devPromises) //<-- resolve all promises at the same time
			.then((res) => res.map((dev) => devArray.push({ name: dev.data.name, bio: dev.data.bio })))
			.catch((err) => console.log(err)) //<-- catch any errors
		return res.json(devArray) //<-- respond with json
	} catch (err) {
		next(err)
	}
})

module.exports = app //<-- create an external listener for testing