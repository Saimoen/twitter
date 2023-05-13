const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("./database");

const app = express();
const port = process.env.PORT || 3000;
const index = require("./routes");

/* Permet de définir où sont mes templates */
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "pug");

app.use(morgan("short"));

/* Permet d'aller chercher les fichiers statique */
app.use(express.static(path.join(__dirname, "public")));

/* Récupère la data sous le format JSON */
app.use(express.json());

/* Récupère la data sous d'autres formats */
app.use(express.urlencoded({ extended: true }));

/* Point d'entrée de nos routes */
app.use(index);

app.listen(port);
