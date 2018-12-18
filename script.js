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

socket.on("weather", function (data)
{
    weather = data
})

function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("white");
            }
            else if (matrix[y][x] == 1 && weather == "garun" ) {
                fill("limegreen");
            }
            else if (matrix[y][x] == 1 && weather == "amar" ) {
                fill("green");
            }
            
            else if (matrix[y][x] == 1 && weather == "ashun" ) {
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
    }console.log(weather);
}

socket.on("matrix", drawMatrix);