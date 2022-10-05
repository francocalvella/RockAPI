const express = require('express');
const albums = require("../models/AlbumModel")
const AlbumController = require("../controllers/AlbumController")
const router = express.Router();


router.get("/", AlbumController.getAlbumbs)

router.get("/:id", AlbumController.getAlbumbsById)

router.post("/",(req, res, next)=>req.app.verifyToken(req, res, next), AlbumController.postAlbum)

router.put("/:id", (req, res, next)=>req.app.verifyToken(req, res, next), AlbumController.updateAlbum)

router.delete("/:id", (req, res, next)=>req.app.verifyToken(req, res, next), AlbumController.deleteAlbum)


module.exports = router