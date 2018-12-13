var LivingCreature = require('./livingCreature')

module.exports = class Wizard extends LivingCreature {
    constructor(x, y, index) {
     super(x,y,index);
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
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    kaxardanq() {
        this.direction = this.chooseCell(4)[ Math.floor(Math.random()*this.chooseCell(4) + this.chooseCell(4).le)];
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var gr = new Grass(newX, newY);
            grassArr.push(gr);
            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1);
                }
            }
        }
    }

}
