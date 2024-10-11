const express = require('express'); // Import the Express framework
const app = express(); // Initialize the Express app

// Basic GET route (This is where you define what happens when someone visits the home page)
app.get('/', (req, res) => {
  res.send('Hello, this is your delivery app!'); // Respond with a simple message
});

// Start server (This tells the app to listen on a specific port)
const port = process.env.PORT || 3000; // Port 3000 or any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log message when server starts
});
