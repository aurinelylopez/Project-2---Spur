var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

/* GET users listing. */

var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;