class Library {

    static setDefaults(name, creator) {
        Library._defaultLibrary = new Library(name, creator);
    }
    
    constructor(name, creator) {

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

        this.name = name;
        this.tracks = [];

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
