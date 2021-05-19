var player;

var cursors;
var gamepad;
var paddle;
var padConnected;
var pad;

var fond;
var partition;
var secondPlan;
var premierPlan;
var water;
var parallaxe;



class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }
    preload(){
        //calques parallax
        this.load.image('fond', 'assets/fond.png');
        this.load.image('second_Plan', 'assets/second_plan.png');
        this.load.image('premier_Plan', 'assets/premier_plan.png');
        this.load.image('water', 'assets/water.png');
        this.load.image('player', 'assets/player_placeholdere.png');
        this.load.image('cacheParallaxe', 'assets/cache_parallaxe.png');
        this.load.image('partition','assets/partition.png');

    }
    create(){
        
        this.cameras.main.setBounds(0, 0, 10000, 720);
        this.physics.world.setBounds(0, 0, 10000, 720);
        
        //----------------------------------------   FOND   ---------------------------------------------//
        
        fond = this.add.image(5000, 360, 'fond').setScrollFactor(0.5);
        secondPlan = this.add.image(5000, 360, 'second_Plan').setScrollFactor(0.75);
        premierPlan = this.add.image(5000, 360, 'premier_Plan').setScrollFactor(0.78);
        water = this.add.image(5000,675,'water').setScrollFactor(1);
        
        
        player = this.physics.add.sprite(150, 550, 'player').setScale(0.35);
        parallaxe = this.add.image(5000,360,'cacheParallaxe').setScrollFactor(2);
        parallaxe = this.add.image(14500,360,'cacheParallaxe').setScrollFactor(2);
        partition = this.add.image(690,600,'partition');
        this.cameras.main.startFollow(player, true);
        player.setCollideWorldBounds(true);
        
        //clavier
        cursors = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up : Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape : Phaser.Input.Keyboard.KeyCodes.ESC
        });
        
        //manette
        if (this.input.gamepad.total === 0){
            this.input.gamepad.once('connected', function (pad, button, index) {
                paddle = pad;
                padConnected = true;
            }); 
        }
        else {
            paddle = this.input.gamepad.pad1;
        }
        
        //colliders & overlaps
        //this.physics.add.collider(player, projectile, hitOnPlayer, null, this);
        //this.physics.add.overlap(swing, projectile, renvoiProjectile, null, this);
        
        cursors = this.input.keyboard.createCursorKeys();
        
        
    var crapaudPartition = this.input.keyboard.createCombo('AABXXB');
    var renardPartition = this.input.keyboard.createCombo('BBYAYA');
    var chouettePartition = this.input.keyboard.createCombo('XXYAYB');
    var cerfPartition = this.input.keyboard.createCombo('YYXBBX');
    
    //var crapaudPartition = this.input.keyboard.createCombo(['AABXXB'],{resetOnWrongKey:true});
        
    this.input.keyboard.on('keycombomatch', function (event) {

        console.log('crapaud!');

        });     
        
        
        
     this.input.keyboard.on('keycombomatch', function (event) {

        console.log('renard!');

        });          
    }
    
    
    
    
    
    
    
    
//
//  
//
    
    update(){ 
        if (cursors.right.isDown){
            player.setVelocityX(1000);    
        }
        else if (cursors.left.isDown){
            player.setVelocityX(-1000);
        }
        else if (cursors.right.isUp && cursors.left.isUp){
            player.setVelocityX(0);
        }
        if (cursors.up.isDown){
            player.setVelocityY(-1000);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(1000);
        }
        /*else if (cursors.up.isUp && cursors.down.isUp){
            player.setVelocityY(0);
        }
        else {
            player.setVelocityY(0);
            }*/
        }
    }


function attaque(x, y){
    newSwing = swing.create(player.x + x, player.y + y, 'attaque');
}