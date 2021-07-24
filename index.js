require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const logger =require("morgan");
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const session = require("express-session");

const favoritesRoutes = require("./server/routes/favorites.routes");
const purchasesRoutes =require("./server/routes/purchases.routes");
const testimonialsRoutes = require("./server/routes/testimonials.routes");
const clientsRoutes = require("./server/routes/clients.routes");
const venturesRoutes = require("./server/routes/ventures.routes");
const ventfavRoutes = require("./server/routes/ventfav.routes");

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());
app.use(session());



app.use("/api/favorites", favoritesRoutes);
app.use("/api/purchases", purchasesRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/ventfav", ventfavRoutes);
app.use("/api/ventures", venturesRoutes);



app.get("/", (req, res) =>{
console.log(req.url);
res.send("<h4><hello></h4>");
});

app.use(express.static(__dirname + "/build"));
app.use(express.urlencoded({extended :false}));
app.use(express.cookieSession({
  key: "mysite.sid",
  
SESSION_SECRET: process.env.get("SESSION_SECRET"),
  cookie: {
    maxAge: 2678400000 // 31 days
  }
}));
app.use(express.csrf());


app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, function(){
console.log("Listening on port 3306");
})

module.exports = app;