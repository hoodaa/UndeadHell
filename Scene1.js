// var x =game.input.mousePointer.x;
// var y =game.input.mousePointer.y;
var input;
var EnemySpawnRate = 1000; //In Milliseconds
var level = 0;
var TotalEnemyInLevel = 0;
var Enemyperwave = 4;
var playerHP = 4;
var delta;
var bIsPlayerDead = false;
var firstTime = 0;
var playerFireRate = 600;
var playerFireTimer = 0;
var summoning = false;
var summontime = 2000;

var r1;
var r2;
var r3;
var r4;
var r5;
var r6;
var r7;
var r8;
var r9;
var r10;
var r11;
var r12;
var r13;
var r15;
var r16;
var r17;
var r18;
var r20;
var r21;
var r22;
var r23;
var r24;
var r25;
var r26;
var h;
var h1;
var h2;

class Scene1 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.audio("theme", "assets/Backgroudmusic.mp3");
    this.load.audio("FireBall", "assets/Fireball.mp3");

    this.load.image("background", "assets/finall.png");
    this.load.spritesheet("player", "assets/fullsprite.png", {
      frameWidth: 600,
      frameHeight: 585,
    });
    this.load.spritesheet("summon", "assets/summon.png", {
      frameWidth: 6110/10,
      frameHeight: 7848/12,
    });

    this.load.spritesheet("summonidle", "assets/summonidle.png", {
      frameWidth: 1025/10,
      frameHeight: 439/4,
    });

    this.load.spritesheet("enemy", "assets/enemies.png", {
      frameWidth: 481,
      frameHeight: 518,
    });
    this.load.spritesheet("beam", "assets/fireball.png", {
      frameWidth: 154,
      frameHeight: 60,
    });

    this.load.spritesheet("arrow", "assets/arrow.png", {
      frameWidth: 283,
      frameHeight: 29,
    });

    this.load.spritesheet("hit", "assets/hit.png", {
      frameWidth: 93,
      frameHeight: 162,
    });

    this.load.spritesheet("Health", "assets/LoseHealth.png", {
      frameWidth: 80,
      frameHeight: 80,
    });

    this.load.spritesheet("test", "assets/red.png", {
      frameWidth: 400,
      frameHeight: 400,
    });
    this.load.spritesheet("bot", "assets/botfinall.png", {
      frameWidth: 2560,
      frameHeight: 1440,
    });
    this.load.spritesheet("botleft", "assets/leftfinal.png", {
      frameWidth: 2560,
      frameHeight: 1440,
    });
    this.load.spritesheet("botright", "assets/rightfinal.png", {
      frameWidth: 2560,
      frameHeight: 1440,
    });
    this.load.spritesheet("vert", "assets/vericalfinal.png", {
      frameWidth: 2560,
      frameHeight: 1440,
    });
    this.load.spritesheet("obst", "assets/obstfinal.png", {
      frameWidth: 2560,
      frameHeight: 1440,
    });

    this.load.image("GameOver", "assets/GameOver.png");
    this.load.image("retryoff", "assets/Retry_off.png");
    this.load.image("retryon", "assets/Retry_on.png");
    this.load.image("Menuoff", "assets/Menu_off.png");
    this.load.image("Menuon", "assets/Menu_on.png");
    this.load.image("Character_ui", "assets/Character_ui.png");
    this.load.image("Waves", "assets/Waves.png");
  }

  create() {
    var backgroundmusic = this.sound.add("theme");
    backgroundmusic.play();
    backgroundmusic.setDetune(-550);
    this.previousTime = this.getTime();

    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);
    

    r1 = this.add.rectangle(830, 85, 190, 30);
    this.physics.add.existing(r1);
    r1.body.collideWorldBounds = true;
    r1.body.setImmovable();

    r2 = this.add.rectangle(1230, 665, 200, 10);
    this.physics.add.existing(r2);
    r2.body.collideWorldBounds = true;
    r2.body.setImmovable();

    r3 = this.add.rectangle(1050, 146, 190, 10);
    this.physics.add.existing(r3);
    r3.body.collideWorldBounds = true;
    r3.body.setImmovable();

    r5 = this.add.rectangle(717, 90, 10, 100);
    this.physics.add.existing(r5);
    r5.body.collideWorldBounds = true;
    r5.body.setImmovable();

    r6 = this.add.rectangle(590, 90, 10, 100);
    this.physics.add.existing(r6);
    r6.body.collideWorldBounds = true;
    r6.body.setImmovable();

    r7 = this.add.rectangle(1180, 225, 50, 10);
    this.physics.add.existing(r7);
    r7.body.collideWorldBounds = true;
    r7.body.setImmovable();

    r8 = this.add.rectangle(1240, 600, 10, 10);
    this.physics.add.existing(r8);
    r8.body.collideWorldBounds = true;
    r8.body.setImmovable();

    r9 = this.add.rectangle(500, 85, 170, 30);
    this.physics.add.existing(r9);
    r9.body.collideWorldBounds = true;
    r9.body.setImmovable();

    r10 = this.add.rectangle(280, 153, 230, 30);
    this.physics.add.existing(r10);
    r10.body.collideWorldBounds = true;
    r10.body.setImmovable();

    r11 = this.add.rectangle(100, 213, 50, 10);
    this.physics.add.existing(r11);
    r11.body.collideWorldBounds = true;
    r11.body.setImmovable();

    r12 = this.add.rectangle(653, 134.5, 127, 10);
    this.physics.add.existing(r12);
    r12.body.collideWorldBounds = true;
    r12.body.setImmovable();

    r13 = this.add.rectangle(20, 290, 10, 100);
    this.physics.add.existing(r13);
    r13.body.collideWorldBounds = true;
    r13.body.setImmovable();

    r15 = this.add.rectangle(1245, 300, 10, 200);
    this.physics.add.existing(r15);
    r15.body.collideWorldBounds = true;
    r15.body.setImmovable();

    r16 = this.add.rectangle(1270, 475, 50, 10);
    this.physics.add.existing(r16);
    r16.body.collideWorldBounds = true;
    r16.body.setImmovable();

    r17 = this.add.rectangle(1240, 525, 10, 90);
    this.physics.add.existing(r17);
    r17.body.collideWorldBounds = true;
    r17.body.setImmovable();

    r18 = this.add.rectangle(1260, 566, 50, 10);
    this.physics.add.existing(r18);
    r18.body.collideWorldBounds = true;
    r18.body.setImmovable();

    r20 = this.add.rectangle(50, 666, 200, 10);
    this.physics.add.existing(r20);
    r20.body.collideWorldBounds = true;
    r20.body.setImmovable();

    r21 = this.add.rectangle(30, 550, 10, 300);
    this.physics.add.existing(r21);
    r21.body.collideWorldBounds = true;
    r21.body.setImmovable();

    r22 = this.add.rectangle(833, 300, 50, 10);
    this.physics.add.existing(r22);
    r22.body.collideWorldBounds = true;
    r22.body.setImmovable();

    r23 = this.add.rectangle(490, 300, 10, 10);
    this.physics.add.existing(r23);
    r23.body.collideWorldBounds = true;
    r23.body.setImmovable();

    r24 = this.add.rectangle(415, 485, 20, 10);
    this.physics.add.existing(r24);
    r24.body.collideWorldBounds = true;
    r24.body.setImmovable();

    r25 = this.add.rectangle(1000, 485, 20, 10);
    this.physics.add.existing(r25);
    r25.body.collideWorldBounds = true;
    r25.body.setImmovable();

    r26 = this.add.rectangle(940, 459, 20, 10);
    this.physics.add.existing(r26);
    r26.body.collideWorldBounds = true;
    r26.body.setImmovable();

    if (this.enemiesprojectiles)
      for (    var i = this.enemiesprojectiles.getChildren().length - 1;    i >= 0;   i-- ) {
        var item = this.enemiesprojectiles.getChildren()[i];
        console.log(item);
      }

    //this.enemy = this.physics.add.sprite(400,400,"enemy").setScale(0.1);

    this.objs = this.physics.add.sprite(650, 355, "obst").setScale(0.5, 0.42);
    this.objs.body.setSize(1, 1);

    this.test = this.physics.add
      .sprite(620, 800, "test")
      .setScale(5.5, 0.4)
      .setAlpha(0, 0, 0, 0);
    this.test.body.collideWorldBounds = true;

    this.test2 = this.physics.add
      .sprite(1270, 550, "test")
      .setScale(0.4, 0.7)
      .setAlpha(0, 0, 0, 0);
    this.test2.body.collideWorldBounds = true;

    this.test3 = this.physics.add
      .sprite(833, 240, "test")
      .setScale(0.3, 0.3)
      .setAlpha(0, 0, 0, 0);
    this.test3.body.collideWorldBounds = true;

    input = this.input;

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.add.image(800, 800, "Character_ui");
    //this.enemy = new Enemy();
    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      restart: Phaser.Input.Keyboard.KeyCodes.R,
    });

    this.anims.create({
      key: "move",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 19 }),
      frameRate: 60,
      repeat: -1,
    });

    //   this.anims.create({
    //     key: "idle",
    //     frames: this.anims.generateFrameNumbers("player", { start: 0, end: 12 }),
    //     frameRate: 10,
    //     repeat: -1,
    //   });

    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "summonidle_anim",
      frames: this.anims.generateFrameNumbers("summonidle", { start: 0, end: 38 }),
      frameRate: 60,
      repeat: -1,
    });

    this.anims.create({
      key: "summon_anim",
      frames: this.anims.generateFrameNumbers("summon", { start: 0, end: 118 }),
      frameRate: 60,
      repeat: 0,
    });

    

    this.anims.create({
      key: "heart_anim",
      frames: this.anims.generateFrameNumbers("Health", { start: 5, end: 19 }),
      frameRate: 25,
      repeat: 0,
    });
    this.anims.create({
      key: "arrow_anim",
      frames: this.anims.generateFrameNumbers("arrow"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "hit_anim",
      frames: this.anims.generateFrameNumbers("hit"),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "enemy_anim",
      frames: this.anims.generateFrameNumbers("enemy", { start: 45, end: 89 }),
      frameRate: 60,
      repeat: -1,
    });

    this.characterui = this.add.image(150, 50, "Character_ui").setScale(0.5);

    this.heart1 = this.add.sprite(115, 37, "Health").setScale(0.7);
    this.heart2 = this.add.sprite(165, 37, "Health").setScale(0.7);
    this.heart3 = this.add.sprite(215, 37, "Health").setScale(0.7);
    this.heart4 = this.add.sprite(265, 37, "Health").setScale(0.7);

    this.waveLook = this.add.image(1150, 40, "Waves").setScale(0.5);

    this.wave = this.add.text(1200, 15, "1", {
      fontFamily: "CELTICHD",
      fontSize: 48,
      color: "#E2C4BC",
    });

    this.summonidle = this.add.sprite(650,175,"summonidle").setVisible(false);
    this.summon = this.add.sprite(650,175,"summon").setScale(0.17).setVisible(false);



    

    //      this.arrowInput = this.input.keyboard.createCursorKeys();

    //console.log(AttackRange);
    //this.scene.start("playGame");
    this.SpawnTimer = 0;
    this.restartKeyDown = false;
    this.Restart();
  }

  getTime() {
    let d = new Date();
    return d.getTime();
  }

  StartNextWave() {
     summoning = true
    if (summoning == true){
      this.summon.setVisible(true);
      this.summon.play("summon_anim");
      summoning = false;
    }
    if (summoning == false){
    this.summonidle.setVisible(false);
    this.summonidle.play("summonidle_anim");
    }
    
    
    level++;
    this.TotalEnemyInLevel = Enemyperwave * level - 1;
    this.SpawnedEnemies = 0;
    this.DeadEnemies = 0;
    this.wave.setText(`${level}`);
    console.log(this.TotalEnemyInLevel);

    
  }

  update() {
    this.physics.add.overlap(this.test, this.player, this.transparent);

    if (h == true) {
      this.bot.setAlpha(0.6, 0.6, 0.6, 0.6);
      h = false;
    } else {
      this.bot.setAlpha(1, 1, 1, 1);
    }

    this.physics.add.overlap(this.test2, this.player, this.transparent2);

    if (h1 == true) {
      this.right.setAlpha(0.6, 0.6, 0.6, 0.6);
      h1 = false;
    } else {
      this.right.setAlpha(1, 1, 1, 1);
    }

    this.physics.add.overlap(this.test3, this.player, this.transparent3);

    if (h2 == true) {
      this.vert.setAlpha(0.65, 0.65, 0.65, 0.65);
      h2 = false;
    } else {
      this.vert.setAlpha(1, 1, 1, 1);
    }

    if (this.inputKeys.restart.isDown) {
      this.restartKeyDown = true;
    }

    if (this.restartKeyDown == true && this.inputKeys.restart.isUp) {
      this.Restart();
      this.restartKeyDown = false;
    }

    delta = this.getTime() - this.previousTime;

    if (bIsPlayerDead) return;
    this.previousTime = this.getTime();
    this.SpawnTimer += delta;
    var mouse = this.input.mousePointer;
    this.Movment();

    playerFireTimer += delta;
    if (mouse.isDown) {
      this.shootBeam();
    }

    if (
      this.SpawnTimer >= EnemySpawnRate &&
      this.SpawnedEnemies <= this.TotalEnemyInLevel
    ) {
      this.SpawnTimer = 0;
      this.SpawnEnemy();
      //console.log("SpawnedEnemy");
    }

    if (this.DeadEnemies >= this.TotalEnemyInLevel + 1) {
      this.StartNextWave();
    }

    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      enemy.update(this.player, this);
    }
  }

  Movment() {
    if (this.inputKeys.left.isDown) {
      this.player.setVelocityX(-200);
      this.player.flipX = true;
      this.player.anims.play("move", true);
      // console.log('left');
    } else if (this.inputKeys.right.isDown) {
      this.player.setVelocityX(200);
      this.player.flipX = false;
      this.player.anims.play("move", true);
      // console.log('right');
    }

    if (this.inputKeys.up.isDown) {
      this.player.setVelocityY(-200);
      this.player.anims.play("move", true);
      // console.log('up');
    } else if (this.inputKeys.down.isDown) {
      this.player.setVelocityY(200);
      this.player.anims.play("move", true);
      // console.log('left');
    }
    if (
      this.inputKeys.down.isUp &&
      this.inputKeys.up.isUp &&
      this.inputKeys.right.isUp &&
      this.inputKeys.left.isUp
    ) {
      this.player.setVelocityY(0);
      this.player.setVelocityX(0);
      this.player.anims.play("idle", true);
    }
  }

  shootBeam() {
    var fireBallSound = this.sound.add("FireBall");
    if (playerFireTimer >= playerFireRate) {
      var beam = new Beam(this);
      this.projectiles.add(beam);
      this.physics.moveTo(beam, input.x, input.y, 200);
      playerFireTimer = 0;
      fireBallSound.play();
      return beam;
    }
  }

  SpawnEnemy() {
    var enemy = new Enemy(this);
    this.enemies.add(enemy);
    this.SpawnedEnemies++;
    return enemy;
  }

  hitEnemy(projectile, enemy) {
    projectile.destroy();
    // this.hit.anims.play("hit_anim", true);
    enemy.destroy();
    this.DeadEnemies++;
  }
  hitWall(projectile, enemy) {
    projectile.destroy();
  }
  transparent() {
    h = true;
    return h;
  }

  transparent2() {
    h1 = true;
    return h1;
  }

  transparent3() {
    h2 = true;
    return h2;
  }

  hitPlayer(enemiesprojectiles, player) {
    playerHP--;
    if (playerHP == 3) {
      this.heart4.anims.play("heart_anim");
    } else if (playerHP == 2) {
      this.heart3.anims.play("heart_anim");
    } else if (playerHP == 1) {
      this.heart2.anims.play("heart_anim");
    } else if (playerHP == 0) {
      this.heart1.anims.play("heart_anim");
    }
    enemiesprojectiles.destroy();
    if (playerHP <= 0) {
      this.Die();
    }
  }

  Die() {
    console.log("Die");
    bIsPlayerDead = true;
    this.player.destroy();

    this.ayhaga = this.add.image(640, 300, "GameOver");

    if (this.enemies)
      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        var item = this.enemies.getChildren()[i];
        item.body.reset(item.x, item.y);
      }

    this.button = this.add
      .image(640, 525, "Menuoff")
      .setScale(0.5)
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        this.add.image(640, 525, "Menuon").setScale(0.5);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        this.add.image(640, 525, "Menuoff").setScale(0.5);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        document.location.reload(false);
      });
    this.physics.add.existing(this.button);

    //  this.button2 =  this.add.image(640,410,"retryoff")
    //  .setScale(0.5)
    //  .setInteractive()
    //  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, ()=>{
    //      this.add.image(640,410,"retryon").setScale(0.5)
    //  })
    //  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT,()=>{
    //      this.add.image(640,410,"retryoff").setScale(0.5)
    //  });
    //  this.physics.add.existing(this.button2);

    //  this.button3 = this.add.rectangle(640,410,190,30)
    //  .setInteractive()
    //  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>{
    //   this.ayhaga.setVisible(false);
    //   this.button.destroy();

    //  this.button2.setScale(0);
    //  this.button2.destroy();
    //  this.button3.destroy();
    //  this.Restart();

    // })
    //  this.physics.add.existing(this.button3);
  }

  Restart() {
    console.log("Restart");

    if (this.player) this.player.destroy();

    this.player = this.physics.add.sprite(400, 400, "player").setScale(0.1);
    this.player.setCollideWorldBounds(true);

    this.left = this.physics.add.sprite(630, 430, "botleft").setScale(0.5, 0.4);
    this.left.body.setSize(1, 1);

    this.right = this.physics.add
      .sprite(630, 430, "botright")
      .setScale(0.5, 0.4);
    this.right.body.setSize(1, 1);

    this.bot = this.physics.add.sprite(630, 445, "bot").setScale(1, 0.8);
    this.bot.body.setSize(1, 1);

    this.vert = this.physics.add.sprite(680, 355, "vert").setScale(0.43, 0.42);
    this.vert.body.setSize(1, 1);

    this.physics.add.collider(this.player, r1);
    this.physics.add.collider(this.player, r2);
    this.physics.add.collider(this.player, r3);
    this.physics.add.collider(this.player, r4);
    this.physics.add.collider(this.player, r5);
    this.physics.add.collider(this.player, r6);
    this.physics.add.collider(this.player, r7);
    this.physics.add.collider(this.player, r8);
    this.physics.add.collider(this.player, r9);
    this.physics.add.collider(this.player, r10);
    this.physics.add.collider(this.player, r11);
    this.physics.add.collider(this.player, r12);
    this.physics.add.collider(this.player, r13);
    this.physics.add.collider(this.player, r15);
    this.physics.add.collider(this.player, r16);
    this.physics.add.collider(this.player, r17);
    this.physics.add.collider(this.player, r18);
    this.physics.add.collider(this.player, r20);
    this.physics.add.collider(this.player, r21);
    this.physics.add.collider(this.player, r22);
    this.physics.add.collider(this.player, r23);
    this.physics.add.collider(this.player, r24);
    this.physics.add.collider(this.player, r25);
    this.physics.add.collider(this.player, r26);

    playerHP = 4;
    // console.log(this.enemies)
    if (firstTime != 0) {
      console.log(this.enemies.getChildren());
      console.log(this.enemies.getChildren().length);
    }

    firstTime = 1;

    if (this.projectiles)
      for (var i = this.projectiles.getChildren().length - 1; i >= 0; i--) {
        var item = this.projectiles.getChildren()[i];
        item.destroy();
      }

    if (this.enemies)
      for (var i = this.enemies.getChildren().length - 1; i >= 0; i--) {
        var item = this.enemies.getChildren()[i];
        item.destroy();
      }

    if (this.enemiesprojectiles)
      for (
        var i = this.enemiesprojectiles.getChildren().length - 1;
        i >= 0;
        i--
      ) {
        var item = this.enemiesprojectiles.getChildren()[i];
        item.destroy();
      }

    this.enemies = this.add.group();

    this.physics.add.collider(this.enemies, r1);
    this.physics.add.collider(this.enemies, r2);
    this.physics.add.collider(this.enemies, r3);
    this.physics.add.collider(this.enemies, r4);
    this.physics.add.collider(this.enemies, r5);
    this.physics.add.collider(this.enemies, r6);
    this.physics.add.collider(this.enemies, r7);
    this.physics.add.collider(this.enemies, r8);
    this.physics.add.collider(this.enemies, r9);
    this.physics.add.collider(this.enemies, r10);
    this.physics.add.collider(this.enemies, r11);
    this.physics.add.collider(this.enemies, r12);
    this.physics.add.collider(this.enemies, r13);
    this.physics.add.collider(this.enemies, r15);
    this.physics.add.collider(this.enemies, r16);
    this.physics.add.collider(this.enemies, r17);
    this.physics.add.collider(this.enemies, r18);
    this.physics.add.collider(this.enemies, r20);
    this.physics.add.collider(this.enemies, r21);
    this.physics.add.collider(this.enemies, r22);
    this.physics.add.collider(this.enemies, r23);
    this.physics.add.collider(this.enemies, r24);
    this.physics.add.collider(this.enemies, r25);
    this.physics.add.collider(this.enemies, r26);

    this.projectiles = this.add.group();
    this.enemiesprojectiles = this.add.group();

    this.physics.add.overlap(this.enemiesprojectiles, r1, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r2, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r3, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r4, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r5, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r6, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r7, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r8, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r9, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r10, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r11, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r12, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r13, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r15, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r16, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r17, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r18, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r20, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r21, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r22, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r23, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r24, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r25, this.hitWall, null, this);
    this.physics.add.overlap(this.enemiesprojectiles, r26, this.hitWall, null, this);

    this.physics.add.overlap(this.projectiles, r1, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r2, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r3, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r4, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r5, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r6, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r7, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r8, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r9, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r10, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r11, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r12, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r13, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r15, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r16, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r17, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r18, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r20, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r21, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r22, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r23, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r24, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r25, this.hitWall, null, this);
    this.physics.add.overlap(this.projectiles, r26, this.hitWall, null, this);

    this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

    this.physics.add.overlap(  this.enemiesprojectiles,   this.player,  this.hitPlayer  , null,   this  );

    bIsPlayerDead = false;
    level = 0;
    this.StartNextWave();
  }
}
