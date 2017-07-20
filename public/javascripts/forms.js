
$('.input_item').on('change', function() {
//event will edit on change 
    let id = parseInt($(this).parent().attr('data-id'));
//will grab child from parent specifying particular id
    let val = $(this).val();
    console.log(id, val);
//console logging item and its value
    $(this).attr('readonly', true);
    axios.patch('/' + id, {
        name: val,
        id: id
    });
})


function delItem() {
    let id = this.parentNode.getAttribute('data-id');
    axios.delete('/' + id);
    this.parentNode.innerHTML = '';
}
function addDel() {
//grabbing delete button
    let delbuttons = document.querySelectorAll('.delete');
    for (let i = 0; i < delbuttons.length; i++) {
//onclick event listener deleting 
        delbuttons[i].addEventListener('click', delItem);
    }
}
addDel()

// $(function(){

// console.log("I am connected")
 
//  var templateSource = document.getElementById('query').innerHTML

// });

// console.log("I am connected");

//,track=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin
// Search Button

// $('#query').on('click', function(){

// let baseURL = "https://api.spotify.com/v1/search?q=";
// let baseURL2 = "&type=artist";    
// let input = $('#search').val();
// console.log(input);
// let artistName = encodeURI(input);
// console.log(artistName);

//     axios.get(
//     `${baseURL} ${artistName} ${baseURL2}`
//     )
    // .done(function(data){
    // console.log(data.artists[0]);
    // .then((res)=> {
    //     console.log('is this working?', res);
    //     let artistImage = res.data.artists.items[0].images[0].url;
    //     console.log(artistImage);
    //     db.none("INSERT INTO artists_db (name, track, album)" + 
    //         `VALUES (${artistName},track, ${artistImage});`)

    // })
    // $('#artistName').empty().append(data);
    // $('#albumTitle').empty().append(data.results[0].album_title);
        
  //  let artistImage = "href:https://api.spotify.com/v1/artists/" + data.results[0].poster_path;
    //$('#artistImage').attr('src', artistImage);

//         getArtistAlbums(data.results[0].album_ids);
//     })

//     .always(function(){
//     console.log('Run after all is done.');
// });
