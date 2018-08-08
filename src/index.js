import Phaser from "phaser";

import { SimpleScene } from "./scenes/simple-scene";

const gameConfig = {
  width: 400,
  height: 600,
  scene: SimpleScene,
  backgroundColor: "#5E5E5E",
  type: Phaser.AUTO,
  pixelArt: true
};

new Phaser.Game(gameConfig);
