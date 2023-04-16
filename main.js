var config = {
    width: 1280,
    height: 720,
    scene: [Scene2, Scene1],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}


var game = new Phaser.Game(config);