/**
You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. 
Declare an array of objects that will correspond to the following images: 
Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), 
The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), 
Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), 
Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).

Display all the images in the list in the console (full information: title, artist and date of creation).
*/

let Painting = function (title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    };

let MonaLisa = new Painting("Mona Lisa", "Leonardo da Vinci", 1503);
let lastSupper = new Painting("The Last Supper", "Leonardo da Vinci", 1495);
let starryNight = new Painting("Starry Night", "Vincent van Gogh", 1889);
let theScream = new Painting("The Scream", "Edvard Munch", 1893);
let guernica = new Painting("Guernica", "Pablo Picasso", 1937);
let theKiss = new Painting("The Kiss", "Gustav Klimt", 1907);
let gwpe = new Painting("Girl With a Pearl Earring", "Johannes Vermeer", 1665);
let birthVenus = new Painting("The Birth of Venus", "Sandro Botticelli", 1485);
let lasMeninas = new Painting("Las Meninas", "Diego Velazquez", 1656);
let creationAdam = new Painting("The Creation of Adam", "Michelangelo", 1512);

let collection = [MonaLisa, lastSupper, starryNight, theScream, guernica,
theKiss, gwpe, birthVenus, lasMeninas, creationAdam];

for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} (${collection[i].artist}, ${collection[i].year})`);
}
