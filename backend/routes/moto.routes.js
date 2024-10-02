module.exports = app => {
    const motorbikes = require("../controllers/moto.controller.js")

    var router = require("express").Router();

    router.post("/", motorbikes.create);
    router.get("/", motorbikes.findAll);
    router.get("/:id", motorbikes.findOne);
    router.put("/:id", motorbikes.update);
    router.delete("/:id", motorbikes.delete);

    app.use("/api/motorbikes",router);
}