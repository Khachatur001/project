
var n = 50, m = 50;
var side = 12;
var matrix = [];
for (var y = 0; y < m; ++y) {
    matrix.push([]);
    for (var x = 0; x < n; x += 1) {
        matrix[y].push(Math.round(Math.random() * 5))
    }
}

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var wizardArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("white");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("lightsalmon");
            }
            else if (matrix[y][x] == 5) {
                fill("BlueViolet");
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
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
}





