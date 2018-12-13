var LivingCreature = require('./livingCreature')

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
       super(x,y,index);
        this.multiply = 0;
        this.energy = 15;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    mult() {
        this.direction = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0) + this.chooseCell(0).le)];
        this.multiply++;
        if (empty && this.multiply > 1) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3
            var gt = new Gishatich(newX, newY);
            gishatichArr.push(gt)
            this.multiply = 0
        }
    }
    move() {
        this.direction = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0) + this.chooseCell(0).le)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
        this.direction = this.chooseCell(1)[ Math.floor(Math.random()*this.chooseCell(1) + this.chooseCell(1).le)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 1
            this.y = newY
            this.x = newX
        }
    }
    eat() {
        this.direction = this.chooseCell(2)[ Math.floor(Math.random()*this.chooseCell(2) + this.chooseCell(2).le)];
        if (empty) {
            this.energy += 4;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }

        }
    }
}