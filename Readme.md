# Spur - Project 2 - Aurinely Lopez

## Link to Trello:
https://trello.com/b/ZiyVZorb/spur-api-spotify-app


## Description
Spur is a simple CRUD application utilizing Spotify API and later other API's to in an attempt to create a very cool music app mashup.


## Installation
Git clone or download this project and cd into via terminal.
On your terminal run npm run dev, app should be available on localhost:3000 or on https://hidden-island-51171.herokuapp.com/


## User Stories
As a user, I would like to be able to search for an artist and have this content rendered on my index page and eventually have the ability to have an audio content available. 


## Technologies Used and NPMs
1. HTML + CSS 
Display webpage structure and design on the browser


2.Javascript 
Creates the functionality of page


3.PostgreSQL 
Datebase language to create structured tables


4. Spotify API 
API used to render third party content onto app.


5.Express
Web application framework for Node.js


6.Nodemon 
Monitoring for any changes in your source and automatically restart your server.

## Pseudocode
Creating database with 2 tables (artists and favorites)
add directories in views, routes and pg-promise for database.
Create UI with HTML and CSS on the front end.
Adding crud functionality.
Tables


## Tables

artists


id	artist  name	track	album	

1	'DVS1', 'Black Russian', 'Klockworks13'

2	'Planetary Assault Systems', 'Dungeon - mixed', 'The Light Years Rework'

3	'Jonas Kopp', 'Akut - Original Mix', 'Beyond The Hypnosis');

4	'Function', 'Dissafected', 'The Light Years Rework');


favorites

id	favorites name, track, album

1	'Unbalance', 'Mad Loop', 'Unknown'

2	'Agony Forces', 'End Of Times', 'Unknown'

3	'Advances Human', 'Seance', 'Unknown'

## Sample code

function delItem() {

    let id = this.parentNode.getAttribute('data-id');
    axios.delete('/' + id);
    this.parentNode.innerHTML = '';
}
function addDel() {

    let delbuttons = document.querySelectorAll('.delete');
    for (let i = 0; i < delbuttons.length; i++) {
        delbuttons[i].addEventListener('click', delItem);
    }
}
addDel()

## Contributing

This application was created as part of General Assembly's Web Development Immersive program led by 
Instructors: Patrick Andre, Joe Keohan, Jon Zachary.
