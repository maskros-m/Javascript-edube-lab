/**
Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.

The Image function is the constructor, and getImage is the factory. 
Using the images data array from the previous task, create a new array, images1, using the Image constructor 
(don't copy the objects, but just create new ones based on the properties read).

Similarly, from images1 create a new array, images2, using getImage.

Display the contents of images2.
*/
let Image = function (title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
}
let getImage = function (title, artist, year) {
  return {title, artist, year};
}

// ------------------- From Lab 1-1
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

// --------------------- End of Lab 1-1
let array1;
for (let i = 0; i < collection.length; i++) {
  array1.push(new Image(collection[i].title, collection[i].artist, collection[i].year));
}

let array2;
for (let j = 0; j < array1.length; j++) {
  array2.push(getImage(array1[j].title, array1[j].artist, array1[j].year));
}
array2.forEach(painting => console.log(`${painting.title} (${painting.artist}, ${painting.year})`));
