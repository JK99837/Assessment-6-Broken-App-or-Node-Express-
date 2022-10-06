Conceptual Exercise
Answer the following questions below:

What are some ways of managing asynchronous code in JavaScript? 1- Callbacks (allows a function to be called once the asynchronous method is complete) 2- Promises (allows you to chain methods together) 3- Async/Await keyword functions (works on the concept of promises)

What is a Promise? A promise is one-time guarantee of future value. These are objects and can have one of three states: pending, resolved and rejected.

What are the differences between an async function and a regular function? Async functions are declared with the "async" keyword, which makes sure JavaScript will return with a promise.
What is the difference between Node.js and Express.js? Node.js is a library that allows JavaScript applications to be run externally for server-side programming. Express.js is small Node.js framework that comes with a robust set of features for web and mobile applications, it is similar to Flask and is the most popular ecosystem in Node.js.
What is the error-first callback pattern? This is a pattern where the function takes an error as the first argument in a callback function. If error occurs, the operation ends (example an incoming AJAX response). The result of the request is an extra argument.

What is middleware? Middleware is a function that is called when an Express.js route is hit, and before the response is received. Middleware functions has full access to the request and response objects and can modify either of them.

What does the next function do? "next" ensures that the next part of the function runs. When next is invoked, it executes the succeeding the current middleware. It basically finds the "next" matching route or functions to run.

What does RETURNING do in SQL? When would you use it? "Returning" allows you to retrive values of columns that were modified by an insert, delete or update. This helps avoid a new SELECT clause in the DB.

What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

async function getUsers() {
	const elie = await $.getJSON('https://api.github.com/users/elie')
	const joel = await $.getJSON('https://api.github.com/users/joelburton')
	const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt')

	return [elie, matt, joel]
}
A better approach would be to use promise.all.