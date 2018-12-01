class Grass extends LivingCreature {
    constructor(x, y, index) {
       super(x, y, index);
    }
    getNewDirections() {
        [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1];
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty) {
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            grassArr.push(gr)
        }
    }
}
