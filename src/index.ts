// Import modules
//      Express
import express from "express";
//      Typeorm imports
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Restaurant } from "./entity/Restaurant";
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

    // Get the Restaurant repository in DB
    const restaurantTable = connection.getRepository(Restaurant);

    // create new restaurant
    let newRestaurant = new Restaurant();
    newRestaurant.name = "KFC - Kentucky Fried Chicken";
    newRestaurant.description = "Enjoy unlimited Hot Wings 24/7!";
    newRestaurant.address = "in your lungs";

    // save new restaurant if doesn't exists
    //    count number of restaurants with same name & same address
    const duplicateCount = await restaurantTable.count({
      name: newRestaurant.name,
      address: newRestaurant.address,
    })
    //    Duplicate if count isn't 0
    const restaurantNameExists = duplicateCount > 0
    //    If isn't duplicate restaurant, create new entry
    if (!restaurantNameExists) {
      await restaurantTable.save(newRestaurant);
    }

    // // delete the third row (duplicate)
    // await restaurantTable.delete({id:3});

    // Get all restaurants in User repository
    const restaurants = await restaurantTable.find();

    console.log("Restaurants in DB:", restaurants);

    // Start server
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));
