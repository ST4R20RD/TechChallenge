const express = require("express");

const router = express.Router();

const Phone = require("../models/Phone.model.js");

router.get("/", async (req, res) => {
    try {
        const data = await Phone.find();
        res.json(data);
      } catch (error) {
        res.status(400).json({
          errorMessage: "Could not get phone list from database" + error.message,
        });
      }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Phone.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(400).json({
          errorMessage: "Could not get phone details from database" + error.message,
        });
      }
})

module.exports = router;