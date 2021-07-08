// Import modules
//      Express
import express from "express";

// Declare variables | Read environment variables
//      Port
const PORT = process.env.PORT || 3000

// Instantiate the modules
//      Express
const app = express();

// API Routes
//      Get "/" (Basic URL request)
app.get("/", (_, res) => {

    // Send the response from server
    res.send("<h1>Internet Restaurant and Food Database</h1>")
})
//      Get "/restaurants"
//          Send a list of 10 restaurants
app.get("/restaurants", (req, res) => {
    // Get informations from the request (later the GPS coordinates)
    const reqInfos = req.headers
    console.log(`New request from browser : ${reqInfos["user-agent"]}`);

    /**
     * 10 restaurants near Request GPS position
     */
    const restaurants = ["resto 1", "resto 2", "resto 3", "resto 4", "resto 5", "resto 6", "resto 7", "resto 8", "resto 9", "resto 10"];

    /**
     * 10 restaurant names enclosed in <p> tag
     */
    const restaurantNames = restaurants.reduce((prev, curr, i) => `${i === 1 ? "<p>" + prev + "</p>" : prev}<p>${curr}</p>`)

    // Send response back
    res.send(restaurantNames);
})

// Start server
app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));