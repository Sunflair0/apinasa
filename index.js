require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 63306;

const userRoutes = require("./server/routes/users.routes");
const favoritesRoutes = require("./server/routes/favorites.routes");
const apodRoutes = require("./server/routes/apod.routes");
const testimonialsRoutes = require("./server/routes/testimonials.routes");
const venturesRoutes = require("./server/routes/ventures.routes");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/apod", apodRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/ventures", venturesRoutes);

app.get("/", (req, res) =>{
console.log(req.url);
res.send("<h4><hello></h4>");
});

app.use(express.static(__dirname + "/build"));
app.use(express.urlencoded({extended :false}));


app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, function(){
console.log("Listening on port 63306");
})