javascript: function Gosling(i, g) {
    this.ratio = i, this.imageurl = g
}

function Randomize(i) {
    return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
    var g = i.height / i.width;
    return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
        init: function(i) {
            this.myGosling = i
        },
        horizontal: function() {
            return this.myGosling.filter(function(i) {
                return "horizontal" === i.ratio
            })
        },
        vertical: function() {
            return this.myGosling.filter(function(i) {
                return "vertical" === i.ratio
            })
        },
        square: function() {
            return this.myGosling.filter(function(i) {
                return "square" === i.ratio
            })
        }
    },
    myGosling = [new Gosling("horizontal", "http://natsuonna.github.io/heygirl/cutouts/shadow.png"),
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





    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/images/stripes-h1.jpg"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/images/stripes-h2.jpg"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/images/stripes-h3.jpg"),
    //new Gosling("horizontal", "http://natsuonna.github.io/heygirl/images/stripes-h4.jpg"),
    
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v1.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v2.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v3.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v4.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v5.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v6.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v7.jpg"),
    //new Gosling("vertical", "http://natsuonna.github.io/heygirl/images/stripes-v8.jpg"),
    
    //new Gosling("square", "http://natsuonna.github.io/heygirl/images/stripes-s1.jpg"),
    //new Gosling("square", "http://natsuonna.github.io/heygirl/images/stripes-s2.jpg"),
    //new Gosling("square", "http://natsuonna.github.io/heygirl/images/stripes-s3.jpg")
];

! function(i) {
    getGosling.init(myGosling);
    for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
        var l = imageRatio(g[n]),
            t = Randomize(getGosling[l]()),
            e = getGosling[l]()[t];
        g[n].src = e.imageurl
    }
}(document);