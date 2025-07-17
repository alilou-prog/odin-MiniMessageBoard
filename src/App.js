const path = require("path")
const express = require('express')
const app = express()

// data 
const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2, 
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
app.set("messages", messages)

// config
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

const assets_path = path.join(__dirname, "public")
app.use(express.static(assets_path))



// routing
app.get("/", (req, res) => {
    res.render("index", {messages});
})
const new_router = require('./routes/new')
app.use("/new", new_router)

const details_router = require("./routes/details")
app.use("/details", details_router)

// error handling
app.use((req, res) => {
    res.status(404).send("Page not found");
});


// Serving
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server Running. Listening on port ${PORT}`)
})
