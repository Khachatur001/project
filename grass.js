class Grass extends LivingCreature {
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
