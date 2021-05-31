var player;

var keys;
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

var crapaudPartition = false;
var renardPartition = false;
var chouettePartition = false;
var cerfPartition = false;
var partitionlancee = false;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- PRELOAD --------------------------------------------------////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    preload(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   BACKGROUND   ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.image('fond', 'assets/fond.png');
        this.load.image('second_Plan', 'assets/second_plan.png');
        this.load.image('premier_Plan', 'assets/premier_plan.png');
        this.load.image('water', 'assets/water.png');
        this.load.image('cacheParallaxe', 'assets/cache_parallaxe.png');
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.image('partition','assets/partition.png');
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-------------------------------------------   PERSO   -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.image('player', 'assets/player_placeholdere.png');
        
    }
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- CREATE --------------------------------------------------/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    create(){
        
        this.cameras.main.setBounds(0, 0, 10000, 720);
        this.physics.world.setBounds(0, 0, 10000, 720);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   BACKGROUND   ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        fond = this.add.image(5000, 360, 'fond').setScrollFactor(0.5);
        secondPlan = this.add.image(5000, 360, 'second_Plan').setScrollFactor(0.75);
        premierPlan = this.add.image(5000, 360, 'premier_Plan').setScrollFactor(0.78);
        water = this.add.image(5000,675,'water').setScrollFactor(1);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-------------------------------------------   PERSO   -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        player = this.physics.add.sprite(150, 550, 'player').setScale(0.35);
        player.setCollideWorldBounds(true);
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   PARALLAXE   ----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        parallaxe = this.add.image(5000,360,'cacheParallaxe').setScrollFactor(2);
        parallaxe = this.add.image(14500,360,'cacheParallaxe').setScrollFactor(2);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //partition = this.add.image(690,600,'partition');
        this.cameras.main.startFollow(player, true);
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   CONTROLES   ----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        
        
        //CLAVIER
        keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up : Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape : Phaser.Input.Keyboard.KeyCodes.ESC,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            B: Phaser.Input.Keyboard.KeyCodes.B,
            X: Phaser.Input.Keyboard.KeyCodes.X,
            Y: Phaser.Input.Keyboard.KeyCodes.Y
        });
        
        //MANETTE
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
        
        //keys = this.input.keyboard.createCursorKeys();
        
    
    //var crapaudPartition = this.input.keyboard.createCombo(['AABXXB'],{resetOnWrongKey:true});
       
}
        
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- UPDATE --------------------------------------------------/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    update(){ 
        
      if(crapaudPartition == false && keys.A.isDown && renardPartition == false && chouettePartition == false && cerfPartition ==false){
            crapaudPartition = true;
            this.keycombo1 = this.input.keyboard.createCombo('ABXXB');
        }
        
    if (renardPartition == false && keys.B.isDown && crapaudPartition == false && chouettePartition == false && cerfPartition ==false){
            renardPartition = true;
            this.keycombo2 = this.input.keyboard.createCombo('BYAYA');
        }
    if (chouettePartition == false && keys.X.isDown && renardPartition == false && crapaudPartition == false && cerfPartition ==false){
            chouettePartition = true;
            this.keycombo3 = this.input.keyboard.createCombo('XYAYB');
        }
    if (cerfPartition == false && keys.Y.isDown && renardPartition == false && chouettePartition == false && crapaudPartition ==false){
            cerfPartition = true;
            this.keycombo4 = this.input.keyboard.createCombo('YXBBX');
        }
    
    
        this.input.keyboard.on('keycombomatch', function (event) {
          if (crapaudPartition == true && partitionlancee == false) {
              partitionlancee = true;
              console.log('crapaud !');
              setTimeout(function(){crapaudPartition = false;},2000)
              setTimeout(function(){partitionlancee = false; console.log('partition prete')},2000)
            } 
            
            else if (renardPartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('renard !');
                setTimeout(function(){renardPartition = false;},2000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},2000)
            }
            
            else if (chouettePartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('chouette !');
                setTimeout(function(){chouettePartition = false;},2000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},2000)
            }
            
            else if (cerfPartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('cerf !');
                setTimeout(function(){cerfPartition = false;},2000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},2000)   
            }
     });
        
        
        if (keys.right.isDown){
            player.setVelocityX(1000);    
        }
        else if (keys.left.isDown){
            player.setVelocityX(-1000);
        }
        else if (keys.right.isUp && keys.left.isUp){
            player.setVelocityX(0);
        }
        if (keys.up.isDown){
            player.setVelocityY(-1000);
        }
        else if (keys.down.isDown){
            player.setVelocityY(1000);
        }
    }
}


function attaque(x, y){
    newSwing = swing.create(player.x + x, player.y + y, 'attaque');
}