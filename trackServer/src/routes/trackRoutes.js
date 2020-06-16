const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const Router = express.Router();
Router.use(requireAuth);

Router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send(tracks);
});

Router.post("/track", async (req, res) => {
  const { name, locations} = req.body;


  if (!name || !locations) {
    return res.status(422).send({ error: "You must provide name or location" });
  }
  try {
    const track = new Track({
      name: name,
      locations: locations,
      userId: req.user._id,
    });

    await track.save();

    res.send(track);
  } catch (e) {
    res.status(422).send(e);
  }
});

module.exports = Router;
