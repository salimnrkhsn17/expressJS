const express = require("express");
const aplicationRouter = require("./src/aplications/router");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {    
    res.send("Hallo Dunia");
});

// Pastikan rute ini benar
app.use('/api/v1/aplications', aplicationRouter);

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});
