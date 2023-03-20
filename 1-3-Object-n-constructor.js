/**
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:

contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list;
clear – which removes all objects from the list.
While creating an object, use the Image constructor prepared in the earlier task.

Test the script by calling the sequence:
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
*/

let Image = function(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
}
let images = {
    list: [],
    contains(title) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === title) return true;
        }
        return false;
    },
    add(title, artist, date) {
        if (!this.contains(title)) {this.list.push(new Image(title, artist, date));}
    },
    show() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(`${this.list[i].title} (${this.list[i].artist}, ${this.list[i].year})`);
        }
    },
    clear() {
        this.list = [];
    }
};
