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
    }

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

class Track {

    constructor(title, rating, length) {

        this.rating = rating;
        this.length = length;
    }

}

Library.setDefaults('Anonymous', 'Anonymous');
Playlist.setDefaults('Anonymous');
