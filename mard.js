var LivingCreature = require('./livingCreature')

module.exports = class Mard extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 0;
        this.energy = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]];
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    mult() {
        var empty = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0).length)];
        this.multiply++;
        if (empty && this.multiply > 1) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4
            var m = new Mard(newX, newY);
            mardArr.push(m)
            this.multiply = 0
            mardMult++;
        }
    }
    move() {
        var empty = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0).length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
        var empty = this.chooseCell(1)[ Math.floor(Math.random()*this.chooseCell(1).length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 1
            this.y = newY
            this.x = newX
        }
        mardMove++;
    }
    eat() {
        var empty = this.chooseCell(3)[ Math.floor(Math.random()*this.chooseCell(3).length)];
        if (empty) {
            this.energy++;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
            mardEat++;
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1);
                }
            }
            mardDie++;
        }
    }
}