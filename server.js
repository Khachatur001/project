var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

n = 50, m = 50;
function genMatrix(m, n) {
    matrix = [];
    for (var y = 0; y < m; ++y) {
        matrix.push([]);
        for (var x = 0; x < n; x += 1) {
            matrix[y].push(Math.round(Math.random() * 5))
        }
    }
    return matrix;
}
var Grass = require('./grass.js');
var Xotaker = require('./xotaker.js');
var Gishatich = require('./gishatich.js');
var Mard = require('./mard.js');
var Wizard = require('./wizard.js');
var fs = require("fs");

grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
wizardArr = [];

grassMult = 0;

xotakerMult = 0;
xotakerMove = 0;
xotakerEat = 0;
xotakerDie = 0;

gishatichMult = 0;
gishatichMove = 0;
gishatichEat = 0;
gishatichDie = 0;

mardMult = 0;
mardMove = 0;
mardEat = 0;
mardDie = 0;

wizardKaxardanq = 0;

matrix = genMatrix(m, n);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt);
        }
        else if (matrix[y][x] == 3) {
            var gh = new Gishatich(x, y)
            gishatichArr.push(gh);
        }
        else if (matrix[y][x] == 4) {
            var m = new Mard(x, y)
            mardArr.push(m);
        }
        else if (matrix[y][x] == 5) {
            var wz = new Wizard(x, y)
            wizardArr.push(wz);
        }
    }
}

weather = "dzmer"

function exanak() {
    if (weather == "dzmer") {
        weather = "garun"
    }
    else if (weather == "garun") {
        weather = "amar"
    }
    else if (weather == "amar") {
        weather = "ashun"
    }
    else if (weather == "ashun") {
        weather = "dzmer"
    }
    io.sockets.emit("weather", weather)
}

setInterval(exanak, 5000);
setInterval(drawServerayin, 1000);

function drawServerayin() {
    for (i in grassArr) {
        grassArr[i].mult();
    }
    for (i in xotakerArr) {
        xotakerArr[i].eat();
        xotakerArr[i].move();
        xotakerArr[i].mult();
        xotakerArr[i].die();

    }
    for (i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].move();
        gishatichArr[i].mult();
        gishatichArr[i].die();
    }
    for (i in mardArr) {
        mardArr[i].eat();
        mardArr[i].move();
        mardArr[i].mult();
        mardArr[i].die();
    }
    for (i in wizardArr) {
        wizardArr[i].kaxardanq();
    }
    // console.log(weather);
    io.sockets.emit("matrix", matrix);
}

var obj = { "info": [] };
function tpel() {
    var file = "statistics.json"
    obj.info.push(
        {   
             "qani angam xotery bazmacan": grassMult,
             "qani angam xotakernery bazmacan": xotakerMult, 
             "qani angam xotakernery sharjvecin": xotakerMove,
             "qani angam xotakernery keran": xotakerEat, 
             "qani angam xotakernery meran": xotakerDie, 
             "qani angam gishatichnery bazmacan": gishatichMult,
             "qani angam gishatichnery sharjvecin": gishatichMove,
             "qani angam gishatichnery keran": gishatichEat,
             "qani angam gishatichnery meran": gishatichDie,
             "qani angam mardiq bazmacan": mardMult,
             "qani angam mardiq sharjvecin": mardMove,
             "qani angam mardiq keran": mardEat,
             "qani angam mardiq meran": mardDie,
            "qani angam kaxardnery kaxardecin": wizardKaxardanq
        })
    fs.writeFileSync(file, JSON.stringify(obj))
};

setInterval(tpel, 5000);