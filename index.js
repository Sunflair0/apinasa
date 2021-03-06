require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConf = require("./server/config/passport.conf");

const albumRoutes = require("./server/routes/album.routes");
const purchasesRoutes =require("./server/routes/purchases.routes");
const testimonialsRoutes = require("./server/routes/testimonials.routes");
const clientsRoutes = require("./server/routes/clients.routes");
const venturesRoutes = require("./server/routes/ventures.routes");
const ventfavRoutes = require("./server/routes/ventfav.routes");

app.use(express.json());
passportConf(passport);
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(__dirname + "/build"));


app.use("/api/album", albumRoutes);
app.use("/api/purchases", purchasesRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/ventfav", ventfavRoutes);
app.use("/api/ventures", venturesRoutes);


app.get("/", (req, res) =>{
console.log(req.url);
res.send("<h4><hello></h4>");
});


  
app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, function(){
console.log("Listening on port 3306");
})

