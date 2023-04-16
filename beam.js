class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x - 16;
        var y = scene.player.y;
        var mousex = game.input.mousePointer.x;
        var mousey = game.input.mousePointer.y;

        super(scene, x , y , "beam");
        scene.add.existing(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.setScale(0.1);
      //  this.flipY = true;
        let angle=Phaser.Math.Angle.Between(x,y,mousex,mousey);         
        this.setRotation(angle+Math.PI/2);
        this.angle += 275;

    }

    update(){   //console.log('Bulllet time ');

    
        if (this.y < 32 || this.y > config.height || this.x < 32 || this.x > config.width ){
            this.destroy();
            //console.log('object destroied ');
        }
    }

}