class Library {

    static setDefaults(name, creator) {
        Library._defaultLibrary = new Library(name, creator);
    }
    
    constructor(name, creator) {
        
        if(arguments.length === 0) {
            this.name = Library._defaultLibrary.name;
            this.creator = Library._defaultLibrary.creator;
            this.playlists = [];
            return;
        }
        
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }

}


class Playlist {

    static setDefaults(name, creator) {
        Playlist._defaultPlaylist = new Playlist(name);
    }
    
    constructor(name) {

        if(arguments.length === 0) {
            this.name = Playlist._defaultPlaylist.name;
            return;
        }
        
        this.name = name;
        this.tracks = [];

        this.overallRating = function () {
            
            if(this.tracks.length === 0) return;
            if(this.tracks.length === 1) return this.tracks[0].rating;
            let avgRating = 0;
           
            for(let track of this.tracks) {
                avgRating += track.rating;
            }
            return avgRating / this.tracks.length;
        }
        
        this.totalLength = function () {
            let totalLength = 0;
            for(let track of this.tracks) {
                totalLength += track.length;
            }
            return totalLength;
        }
    }


}

class Track {

    constructor(title, rating, length) {

        this.rating = rating;
        this.length = length;
    }

}

Library.setDefaults('Anonymous', 'Anonymous');
Playlist.setDefaults('Anonymous');

let lib = new Library(`Badass Jamzz`, `edward`);

let playlistA = new Playlist('edward');
let playlistB = new Playlist();

console.log(playlistB);

lib.playlists.push(playlistA);

let trackA = new Track('Margaritaville', 5, 154)
let trackB = new Track(`Cheeseburger In Paradise`, 2, 204)

playlistA.tracks.push(trackA);
playlistA.tracks.push(trackB);

console.log(lib);
console.log(lib.playlists[0].tracks[0]);
console.log(lib.playlists[0].totalLength());
console.log(lib.playlists[0].overallRating());