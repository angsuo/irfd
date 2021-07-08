// Import modules
//      Express
const express = require("express");

// Declare variables | Read environment variables
//      Port
const PORT = process.env.PORT || 3000

// Instantiate the modules
//      Express
const app = express();

// Server Methods
//      Response to Get request at "/" (Basic URL request)
app.get("/", (_, res) => {
    res.status(200).json("Hello from node server with Typescript")
})

// Start server
app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));