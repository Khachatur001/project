var LivingCreature = require('./livingCreature')
module.exports = class Grass extends LivingCreature {
    mult() {
        this.direction = this.chooseCell(0)[ Math.floor(Math.random()*this.chooseCell(0) + this.chooseCell(0).le)];
        if (empty) {
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            grassArr.push(gr)
        }
    }
}
