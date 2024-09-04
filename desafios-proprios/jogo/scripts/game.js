import Player from "./player.js";
const player = new Player();

class Game {
    constructor() {
        this.map = document.querySelector(".map");
    }

    addElement(element) {
        this.map.insertAdjacentHTML("beforeend", element);
    }
}