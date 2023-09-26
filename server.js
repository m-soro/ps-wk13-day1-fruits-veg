const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
// IMPORT DOTENV MODULE TO CONNECT YOUR ENV FILE
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// DATA
// const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package

// REQUIRE THE FRUIT SCHEMA
const Fruit = require("./models/fruits");
// ANOTHER TEST COLLECTION IN MONGODB
const OtherFruit = require("./models/otherFruits");
// REQUIRE THE VEGETABLE SCHEMA
const Vegetable = require("./models/vegetables.js");

// MUST HAVE BODY PARSER - TO READ FROM THE FORM
app.use(express.urlencoded({ extended: false }));
// USE METHOD OVERRIDE FOR FORM TO CREATE A DELETE REQUEST
app.use(methodOverride("_method"));
// tells express to try to match requests with files in the directory called 'public'
app.use(express.static("public"));

// ADD VIEW TEMPLATE - ALWAYS ABOVE ROUTES
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

dotenv.config();

// GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

// CONNECTION ERROR/SUCCESS - OPTIONAL BUT HELPFUL
// DEFINE CALLBACK FUNCTIONS FRO VARIOUS EVENTS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

/** ----------------
 * FRUITS ROUTES
 * -----------------
 */

// ----------------
// SEED ROUTE
// ----------------
app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.create([
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ]);
    res.redirect("/fruits");
  } catch (error) {
    console.error(error);
  }
});
// ----------------
// INDEX ROUTE
// ----------------
app.get("/fruits/", async (req, res) => {
  // res.send(fruits);
  // res.render("fruits/Index", { fruits: fruits });
  try {
    const fruits = await Fruit.find();
    // Another Collection
    // const fruits = await OtherFruit.find();
    res.render("fruits/Index", { fruits: fruits });
  } catch (error) {
    console.error(error);
  }
});
// ----------------
// NEW ROUTE
// ----------------
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});
// ----------------
// DELETE
// ----------------
app.delete("/fruits/:id", async (req, res) => {
  try {
    await Fruit.findByIdAndRemove(req.params.id);
    res.redirect("/fruits"); // redirect back to fruits index
  } catch (error) {
    console.log(error);
  }
});
// ----------------
// UPDATE
// ----------------
app.put("/fruits/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
    }
    // fruits.push(req.body);
    // await OtherFruit.create(req.body);
    await Fruit.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});

// ----------------
// CREATE ROUTE
// ----------------
app.post("/fruits", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
    }
    // fruits.push(req.body);
    // await OtherFruit.create(req.body);
    await Fruit.create(req.body);
    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});

// ----------------
// EDIT ROUTE
// ----------------
app.get("/fruits/:id/edit", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Edit", { fruit: foundFruit });
  } catch (error) {
    console.log(error);
  }
});

// ----------------
// SHOW ROUTE
// ----------------
app.get("/fruits/:id", async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.id);
    res.render("fruits/Show", { fruit: fruit });
  } catch (error) {
    console.log(error);
  }
});

/** ----------------
 * VEGETABLE ROUTES
 * -----------------
 */
// ----------------
// SEED ROUTE
// ----------------
app.get("/vegetables/seed", async (req, res) => {
  try {
    await Vegetables.create([
      {
        name: "purple yam",
        color: "purple",
        readyToEat: true,
      },
      {
        name: "red bell pepper",
        color: "red",
        readyToEat: false,
      },
      {
        name: "raddish",
        color: "white",
        readyToEat: true,
      },
    ]);
    res.redirect("/vegetables");
  } catch (error) {
    console.error(error);
  }
});

// ----------------
// INDEX
// ----------------
app.get("/vegetables/", async (req, res) => {
  try {
    const vegetables = await Vegetable.find();
    res.render("vegetables/Index", { vegetables: vegetables });
  } catch (error) {
    console.log(error);
  }
});

// ----------------
// NEW ROUTE
// ----------------
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});
// ----------------
// DELETE
// ----------------
app.delete("/vegetables/:id", async (req, res) => {
  try {
    await Vegetable.findByIdAndRemove(req.params.id);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});
// ----------------
// UPDATE
// ----------------
app.put("/vegetables/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
    }
    await Vegetable.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});
// ----------------
// CREATE
// ----------------
app.post("/vegetables", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    await Vegetable.create(req.body);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});
// ----------------
// EDIT
// ----------------
app.get("/vegetables/:id/edit", async (req, res) => {
  try {
    const foundVegetable = await Vegetable.findById(req.params.id);
    res.render("vegetables/Edit", { vegetable: foundVegetable });
  } catch (error) {
    console.log(error);
  }
});
// ----------------
// SHOW ROUTE
// ----------------
app.get("vegetables/:id", async (req, res) => {
  try {
    const vegetable = await Vegetable.findById(req.params.id);
    res.render("vegetables/Show", { vegetable: vegetable });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
