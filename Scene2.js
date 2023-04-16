class Scene2 extends Phaser.Scene {
    constructor(){
        super("mainMenu");
    }

    preload(){
        this.load.image("menu", "assets/Menu_background.jpg");
        this.load.image("button1", "assets/Playoff.png");
        this.load.image("button1on","assets/Playon.png");
        this.load.image("button2","assets/Settingsoff.png");
        this.load.image("button2on","assets/Settingson.png");
        this.load.image("button3","assets/Exitoff.png");
        this.load.image("button3on","assets/Exiton.png");
    }


    create(){

        this.menu = this.add.image(0,0,"menu").setScale(0.5);
        this.menu.setOrigin(0,0);

    
        

      this.button =  this.add.image(650,410,"button1")
       .setScale(0.5)
       .setInteractive()
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, ()=>{
           this.add.image(650,410,"button1on").setScale(0.4)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,()=>{
           this.add.image(650,410,"button1").setScale(0.5)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>{
        this.scene.start("playGame");
       });
       this.physics.add.existing(this.button);


       this.button2 =  this.add.image(650,525,"button2")
       .setScale(0.5)
       .setInteractive()
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, ()=>{
           this.add.image(650,525,"button2on").setScale(0.4)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,()=>{
           this.add.image(650,525,"button2").setScale(0.5)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>{
       // this.scene.start("playGame");
       });
       this.physics.add.existing(this.button2);


       this.button3 =  this.add.image(650,640,"button3")
       .setScale(0.5)
       .setInteractive()
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, ()=>{
           this.add.image(650,640,"button3on").setScale(0.4)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,()=>{
           this.add.image(650,640,"button3").setScale(0.5)
       })
       .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>{
       // this.scene.start("playGame");
       });
       this.physics.add.existing(this.button3);

    }

    update(){

    }
}