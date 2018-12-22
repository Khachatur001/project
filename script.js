var side = 12;
var socket = io();
var n = 50
var m = 50;
var weather = "dzmer"

function setup() {
    frameRate(1000);
    createCanvas(m * side, n * side);
    background('#acacac');
}

socket.on("weather", function (data) {
    weather = data
})

function btnClick() {
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



    grassArr = [];
    xotakerArr = [];
    gishatichArr = [];
    mardArr = [];
    wizardArr = [];

     
    newMatrix = genMatrix(m, n);

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

var p = document.getElementById("restart");
p.onclick = btnClick;
socket.on("restart", btnClick)

function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("white");
            }
            else if (matrix[y][x] == 1 && weather == "garun") {
                fill("limegreen");
            }
            else if (matrix[y][x] == 1 && weather == "amar") {
                fill("green");
            }

            else if (matrix[y][x] == 1 && weather == "ashun") {
                fill("yellowgreen");
            }
            else if (matrix[y][x] == 1 && weather == "dzmer") {
                fill("darkkhaki");
            }
            else if (matrix[y][x] == 2) {
                fill("skyblue");
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
}

socket.on("matrix", drawMatrix);