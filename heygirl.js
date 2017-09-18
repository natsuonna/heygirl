function Gosling(ratio, imageurl) {
    this.ratio = ratio;
    this.imageurl = imageurl;
}

var getGosling = {
    init: function(myGosling) {
        this.myGosling = myGosling;
    },

    horizontal: function() {
        return this.myGosling.filter(function(myGosling) {
            return myGosling.ratio === "horizontal";
        });
    },

    vertical: function() {
        return this.myGosling.filter(function(myGosling) {
            return myGosling.ratio === "vertical";
        });
    },

    square: function() {
        return this.myGosling.filter(function(myGosling) {
            return myGosling.ratio === "square";
        });
    }
};

function Randomize(images) {
    return Math.floor(Math.random() * images.length)
}

var myGosling = [
    new Gosling("horizontal", "http://natsuonna.io/images/stripes-h1.jpg"),
    new Gosling("horizontal", "http://natsuonna.io/images/stripes-h2.jpg"),
    new Gosling("horizontal", "http://natsuonna.io/images/stripes-h3.jpg"),
    new Gosling("horizontal", "http://natsuonna.io/images/stripes-h4.jpg"),
    
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v1.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v2.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v3.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v4.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v5.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v6.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v7.jpg"),
    new Gosling("vertical", "http://natsuonna.io/images/stripes-v8.jpg"),
    
    new Gosling("square", "http://natsuonna.io/images/stripes-s1.jpg"),
    new Gosling("square", "http://natsuonna.io/images/stripes-s2.jpg"),
    new Gosling("square", "http://natsuonna.io/images/stripes-s3.jpg")
]

function imageRatio(image) {
    var proportion = image.height / image.width;

    if (proportion > 1) {
        return "vertical";
    } else if (proportion === 1) {
        return "square";
    } else if (proportion < 1) {
        return "horizontal";
    }
}

(function(document) {

    getGosling.init(myGosling);
    var images = document.getElementsByTagName('img'),
        length = images.length

    for (var i = 0; i < length; i++) {
        var ratio = imageRatio(images[i]);
        var number = Randomize(getGosling[ratio]());
        var img = getGosling[ratio]()[number];
        images[i].src = img.imageurl
    }

})(document);
