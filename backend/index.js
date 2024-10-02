const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};
app.use(cors(corsOptions));

//usando la librería express
app.use(express.json());

//otro formato
app.use(express.urlencoded({extended : true}));


//ubicación de la base de datos
const db = require("./models");
//inicio de la base de datos
db.sequelize.sync().then(() => { //then: llamada asíncrona, obtiene la información de la base de datos en segundo plano
    console.log("database already synced")
})



//función arrow anónima ; function (req,res) {}
app.get("/", (req, res) => { //"request" y "response"
    return res.json({
        message: "Welcome to motorbikes application"
    });
});

require("./routes/moto.routes")(app);

//arrancar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`server running at port ${PORT}`)
});