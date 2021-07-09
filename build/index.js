"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import modules
//      Express
var express_1 = __importDefault(require("express"));
// Declare variables | Read environment variables
//      Port
var PORT = process.env.PORT || 3000;
// Instantiate the modules
//      Express
var app = express_1.default();
// API Routes
//      Get "/" (Basic URL request)
app.get("/", function (_, res) {
    // Send the response from server
    res.send("<h1>Internet Restaurant and Food Database API</h1>");
});
//      Get "/restaurants"
//          Send a list of 10 restaurants
app.get("/restaurants", function (req, res) {
    // Get informations from the request (later the GPS coordinates)
    var reqInfos = req.headers;
    console.log("New request from browser : " + reqInfos["user-agent"]);
    /**
     * 10 restaurants near Request GPS position
     */
    var restaurants = ["resto 1", "resto 2", "resto 3", "resto 4", "resto 5", "resto 6", "resto 7", "resto 8", "resto 9", "resto 10"];
    /**
     * 10 restaurant names enclosed in <p> tag
     */
    var restaurantNames = restaurants.reduce(function (prev, curr, i) { return (i === 1 ? "<p>" + prev + "</p>" : prev) + "<p>" + curr + "</p>"; });
    // Send response back
    res.send(restaurantNames);
});
// Start server
app.listen(PORT, function () { return console.log("server running at http://localhost:" + PORT); });
