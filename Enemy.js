// var randomX = Phaser.Math.Between(0, config.width);
//         var randomY = Phaser.Math.Between(0, config.h);
var AttackRange = new Phaser.Geom.Circle(0, 0, 150);
var EnemyFireRate = 1300;
class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    if (scene.SpawnedEnemies >= 0 && scene.SpawnedEnemies < scene.TotalEnemyInLevel / 4) {
      var randomX = Phaser.Math.Between(460, 900);
      var x = randomX;
      var randomY = Phaser.Math.Between(200, 200);
      var y = randomY;
    } else if (scene.SpawnedEnemies >= level && scene.SpawnedEnemies < (scene.TotalEnemyInLevel / 4) * 2) {
      var randomX = Phaser.Math.Between(100, 100);
      var x = randomX;
      var randomY = Phaser.Math.Between(200, 600);
      var y = randomY;
    } else if (scene.SpawnedEnemies >= level * 2 && scene.SpawnedEnemies < (scene.TotalEnemyInLevel / 4) * 3) {
      var randomX = Phaser.Math.Between(1100,1100);
      var x = randomX;
      var randomY = Phaser.Math.Between(200, 600);
      var y = randomY;
     } 
    else {
      var randomX = Phaser.Math.Between(200, 900);
      var x = randomX;
      var randomY = Phaser.Math.Between(600, 600);
      var y = randomY;
    }
   console.log(scene.TotalEnemyInLevel);
   console.log(scene.SpawnedEnemies);

    super(scene, x, y, "enemy");
    scene.add.existing(this);

    this.play("enemy_anim").setScale(0.1);
    scene.physics.world.enableBody(this);
    this.body.velocity.y = 0;
  }

  update(Player, scene) {
    this.MoveEnemy(Player, scene);
  }

  MoveEnemy(Player, scene) {
    var Playerx = Player.x;
    var Playery = Player.y;

    var distance = Math.sqrt(
      ((Playerx - this.x) * (Playerx - this.x))
      +
      (Playery - this.y) * (Playery - this.y));

    if (distance <= 250) {
      this.body.reset(this.x, this.y);
      this.shootEnemyBeam(Player, scene);
     
    }
    else {
      this.FireTimer = 0;
      scene.physics.moveTo(this, Playerx, Playery, 200);
    }
    if(Playerx > this.x){
      this.flipX = false;
    }
    else{
      this.flipX = true;
    }

  }

  shootEnemyBeam(Player, scene) {
    this.FireTimer += delta;
   // console.log(this.FireTimer);
    if (this.FireTimer >= EnemyFireRate) {
      console.log(this.FireTimer);
      this.FireTimer = 0;
      var enemyBeam = new Enemybeam(scene, this);
      scene.enemiesprojectiles.add(enemyBeam);
      
    }
    // AttackRange.x = Player.x;
    // AttackRange.y = Player.y;
    // var distance = Math.sqrt( ((this.player.x * this.player.x) - (enemy.x *enemy.x)) +((this.player.y * this.player.y) - (enemy.y * enemy.y)));
    //var distance = Phaser.Math.Distance.BetweenPoints(Player, this);
    // if (distance < AttackRange.radius) {
    //   var enemyBeam = new Enemybeam(scene);
    //   console.log("im innn", this.Enemycount);
    //   console.log(AttackRange.radius, distance);
    //   return enemyBeam;
    // }
  }
}
