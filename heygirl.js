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
    new Gosling("horizontal", "http://natsuonna.github.io/heygirl/cutouts/shadow.png"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/cutouts/co_h2.jpg"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/cutouts/co_h3.jpg"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/cutouts/co_h4.jpg"),
    
    new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/shadow.png"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v2.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v3.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v4.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v5.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v6.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v7.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/cutouts/stripes-v8.jpg"),
    
    new Gosling("square", "http://natsuonna.github.io/heygirl/cutouts/shadow.png"),
    //new Gosling("square", "http://natsuonna.github.io/heygirl/cutouts/co_s2.jpg"),
    //new Gosling("square", "http://natsuonna.github.io/heygirl/cutouts/co_s3.jpg")
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
