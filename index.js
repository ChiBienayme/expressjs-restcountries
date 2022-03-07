const express = require("express");
const app = express();

const countries = require("./dataCountries");

app.get("/", (req, res) => {
  
    fetch("restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(countries => countries = res.data.map((country) => {
			return country.name.common
    }))
    .catch((error) => console.log(" Error "))

  
  res.json(countriesName);
});



app.get('*', function(req, res) {
    res.send('All routes - Erreur 404');
});

// Toujours à la fin du fichier
app.listen(8000, () => {
	console.log("Server started on port: 8000"); // localhost:8000
});

