import "phaser";

export class SimpleScene extends Phaser.Scene {
  constructor(platform) {
    super();
  }
  preload() {
    this.load.image("invader", "assets/invader.png");
    this.load.image("platform", "assets/platform.png");
  }

  create() {
    this.add.image(200, 200, "platform").setScale(5, 5);
  }
}
