class Enemybeam extends Phaser.GameObjects.Sprite {
    constructor(scene, enemy) {
        var x = scene.player.x ;
        var y = scene.player.y;

        super(scene, enemy.x, enemy.y, "arrow");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        let angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, x, y);
        this.setRotation(angle + Math.PI / 2);
        this.angle +=275
        this.setScale(0.1);
        this.play("arrow_anim").setScale(0.14);
        console.log(this);

        scene.physics.moveTo(this, x, y, 200);
        scene.enemiesprojectiles.add(this);
    }

    update() {   //console.log('Bulllet time ');
        if (this.y < 32 || this.y > config.height || this.x < 32 || this.x > config.width) {
            this.destroy();
            //console.log('object destroied ');
        }
    }

}