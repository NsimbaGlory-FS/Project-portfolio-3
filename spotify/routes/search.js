const router = require("express").Router();
const { Song } = require("../models/song");
const { PlayList } = require("../models/song");
const auth = require("../middleware/auth");

module.exports = router;
