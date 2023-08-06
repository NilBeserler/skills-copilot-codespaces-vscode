//Create web server
const express = require('express');
const app = express();
const port = 3000;

// Importing our comments.js module
const comments = require('./comments.js');

// Setting up the public directory
app.use(express.static('public'));

// Setting up the route to get the comments
app.get('/comments', comments.getComments);

// Setting up the route to post a comment
app.post('/comments', comments.postComment);

// Setting up the route to delete a comment
app.delete('/comments/:id', comments.deleteComment);

// Setting up the route to update a comment
app.put('/comments/:id', comments.updateComment);

// Starting the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
