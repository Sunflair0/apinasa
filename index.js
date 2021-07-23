require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// const logger = require("./middleware/logger");
// const timestamp = require("./middleware/timestamp");

const favoritesRoutes = require("./server/routes/favorites.routes");
const purchasesRoutes =require("./server/routes/purchases.routes");
const testimonialsRoutes = require("./server/routes/testimonials.routes");
const usersRoutes = require("./server/routes/users.routes");
const ventfavRoutes = require("./server/routes/ventfav.routes");
const venturesRoutes = require("./server/routes/ventures.routes");

app.use(express.json());


app.use("/api/favorites", favoritesRoutes);
app.use("/api/purchases", purchasesRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/ventfav", ventfavRoutes);
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
console.log("Listening on port 3306");
})