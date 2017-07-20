var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */

router.get('/', db.getAllArtists); // Read All
router.patch('/:id', db.updateArtist); // Update
router.post('/', db.createArtist); // Create
router.delete('/:id', db.removeArtist); // Delete

module.exports = router;