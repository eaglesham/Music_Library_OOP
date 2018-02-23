class Library {

    constructor(name, creator) {

        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }

}


class Playlist {

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

