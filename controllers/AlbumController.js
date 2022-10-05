const AlbumModel = require("../models/AlbumModel")

async function getAlbumbs(req, res){
    try {
        const document = await AlbumModel.find().sort({isFav: -1, valoration: -1}).where({isFav:true})
        res.json(document)
    } catch (error) {
        console.log(error)        
    }
}

async function getAlbumbsById(req, res){
    try {
        const document = await AlbumModel.findById(req.params.id)
        res.json(document)
    } catch (error) {
        console.log(error)        
    }
}

async function postAlbum(req, res){
    try {
        const album = new AlbumModel({
            title: req.body.title,
            artist: req.body.artist, 
            year: req.body.year,
            isHeard: req.body.isHeard,
            isFav: req.body.isFav,
            valoration: req.body.valoration
        })
        const document = await album.save()
        res.json(document)
    } catch (error) {
        console.log(error)   
        res.status(500).json(error)            
    }
}

async function updateAlbum(req, res){
    try {
        const document = await AlbumModel.updateOne({_id: req.params.id}, req.body)
        res.json(document)
    } catch (error) {
        console.log(error) 
        res.status(500).json(error)       
    }
}

async function deleteAlbum(req, res){
    try {
        const document = await AlbumModel.deleteOne({_id: req.params.id})
        res.json(document)
    } catch (error) {
        console.log(error)        
    }
}

module.exports = {
    getAlbumbs,
    getAlbumbsById,
    postAlbum,
    updateAlbum,
    deleteAlbum
}