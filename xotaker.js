var LivingCreature = require('./livingCreature')

module.exports = class Xotaker extends LivingCreature{
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
        var empty = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0).length)];
        this.multiply++;
        if (empty && this.multiply > 6) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY);
            xotakerArr.push(xt)
            this.multiply = 0
        }
    }
    move() {
        var empty = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0).length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }
    eat() {
        var empty = this.chooseCell(1)[ Math.floor(Math.random()*this.chooseCell(1).length)];
        if (empty) {
            this.energy += 2;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
            xotakeryKerav++;
        }
    }
    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }

        }
    }
}
