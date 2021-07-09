// Import modules
//      Express
import express from "express";
//      Typeorm imports
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

// Declare variables | Read environment variables
//      Port
const PORT = process.env.PORT || 3000;

// Instantiate the modules
//      Express
const app = express();

// API Routes
//      Get "/" (Basic URL request)
app.get("/", (_, res) => {
  // Send the response from server
  res.json("Welcome to the Internet Restaurants and Food Database");
});
//      Get "/restaurants"
//          Send an array of 10 restaurants objects
app.get("/restaurants", (req, res) => {
  // Get informations from the request (later the GPS coordinates)
  const agent = req.headers["user-agent"];
  console.log(`New request for restaurants from browser : ${agent}`);

  /**
   * 10 restaurants near Request GPS position
   */
  const restaurants = [
    { name: "resto 1" },
    { name: "resto 2" },
    { name: "resto 3" },
    { name: "resto 4" },
    { name: "resto 5" },
    { name: "resto 6" },
  ];

  // Send JSON response back
  res.json(restaurants);
});

// Connect to DB
createConnection()
  .then(async (connection) => {
    // Log the DB connection status
    console.log("Connected to DB");

    // Get the User repository in DB
    const userTable = connection.getRepository(User);

    // // create new user
    // let newUser = new User();
    // newUser.name = "JJJ";
    // newUser.description = "An awesome backend dev"

    // await userTable.save(newUser);

    // Get all users in User repository
    const users = await userTable.find();

    console.log("Users in DB:", users);
    
    // Start server
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));

