var promise = require('bluebird');
//call to bluebird
var options = { promiseLib: promise };


var pgp = require('pg-promise')(options)
var connectionString = process.env.DATABASE_URL;
// var connectionString = 'postgres://localhost:5432/artists_db';
var db = pgp(connectionString);



function createArtist(req, res, next) {
//create portion of crud
console.log(req.data)
req.body.data = parseInt(req.body.data)
//requesting data from the body and parsing to return 
db.one(`insert into artists(name, track, album
       values($1, $2, $3) returning *`,
//receives artist and inserts into the database
[req.data.artist, req.data.track, req.data.album])
.then(()=>{
res.redirect('/')
//redirecting to the index page page to render onto the input
});

}
//     .catch(function (err) {
//        return next(err);
//      });
// }

function getAllArtists(req, res, next){
  db.any('select * from artists')
 //selecting any and all artists from database db
  .then(function(data){
//retrieving the data (database)
    console.log(data)
//rendering all artists onto index from artist_db 
    res.render( 'index', { title:"Spur", data: data })
    
  });
}
function removeArtist(req, res, next) {
let artistID = parseInt(req.params.id)
db.result('delete from artists where id = $1', artistID)
//delete artists from artists_db specifying artist id 
  res.json({
//sends the response to json that specified artist is no longer there 
    status: 'item deleted..'
  })
}

function updateArtist(req, res, next) {
//edit artists
console.log(req.body)
db.none('update artists set name=$1 where id=$2',
//updates artist set to the specific id in the database 
  [req.body.name, parseInt(req.params.id)])
//parsing through specific id to edit
  .then(function(){
    res.status(200)
  })
  console.log("inside updateArtist");
}

module.exports = {
  createArtist: createArtist,
  getAllArtists: getAllArtists,
  removeArtist: removeArtist,
  updateArtist: updateArtist
}
