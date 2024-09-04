export default class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.keyboard = {left: false, up: false, down: false, right: false}
        this.element = this.createElement();
    }

    createElement() {
        const player = document.createElement("div");
        player.classList.add("player");
        return player;
    }

    run() {
        
    }
}