const actorController = require('../controllers/actor.controller');
const producerController = require('../controllers/producer.controller')
const movieController = require('../controllers/movie.controller');
const multer = require('multer')
const path = require('path');
const express = require('express');
const router = express.Router();

const imageStorage = multer.diskStorage({
    destination: 'images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

router.post('/createactor', actorController.createActor)
router.get('/actors',actorController.getAll)
router.get('/actor/:id', actorController.getById)
router.patch('/act/:id', actorController.editActor)

router.post('/createproducer', producerController.createProducer)
router.get('/producers',producerController.getAll)
router.get('/producers/:id', producerController.getById)
router.patch('/produce/:id', producerController.editProducer)

router.post('/createmovie', imageUpload.single('poster'), movieController.createMovie)
router.get('/movie',movieController.getAll)
router.get('/movie/:id', movieController.getById)
router.put('/editmovie/:id', imageUpload.single('poster'), movieController.editMovie)

router.post('/uploadImage', imageUpload.single('poster'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router;