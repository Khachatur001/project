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
var LivingCreature = require('./livingCreature')
var Grass = require('./grass.js');
var Xotaker = require('./xotaker.js');
var Gishatich = require('./gishatich.js');
var Mard = require('./mard.js');
var Wizard = require('./wizard.js');

grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
wizardArr = [];

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

        io.sockets.emit("matrix", matrix)
}



