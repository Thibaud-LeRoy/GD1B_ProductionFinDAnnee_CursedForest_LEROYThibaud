var anabla;
var ceana;
var player;
var notJumping = true;
var pv = 3;
var PDV1;
var PDV2;
var PDV3;
var PV_vide;
var invincible = false;


var keys;
var un_left;
var un_right;
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


var crapaud;
var plante_boule;
var boule_poison;
var plante_rayon;
var rayon_poison;


var crapaudPartition = false;
var renardPartition = false;
var chouettePartition = false;
var cerfPartition = false;
var partitionlancee = false;


//MUSIQUES
var theme_musique;
var son_courir;
var son_crapaud;
var son_cerf;
var son_chouette;
var son_renard;

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
        this.load.image('fond', '../_assets/_export/_decors/_level1/fond.png');
        /*this.load.image('second_Plan', '../_assets/_export/_decors/_level1/second_plan.png');
        this.load.image('premier_Plan', '../_assets/_export/_decors/_level1/premier_plan.png');
        this.load.image('water', '../_assets/_export/_decors/_level1/water.png');
        this.load.image('cacheParallaxe', '../_assets/_export/_decors/_level1/cache_parallaxe.png');*/
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //this.load.image('partition','assets/partition.png');
        this.load.image('PV','../_assets/_export/_interface/PV.png');
        this.load.image('PV_vide','../_assets/_export/_interface/PV_vide.png');
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-------------------------------------------   PERSO   -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.spritesheet('player', '../_assets/_export/_eoghann/eoghann_spritesheet.png',{ frameWidth: 244, frameHeight: 300 })
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-----------------------------------------   ENNEMIES   ----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.spritesheet('plante_boule', '../_assets/_export/_ennemies/spritesheet_planteBoule.png',{ frameWidth: 194, frameHeight: 220 })
        this.load.spritesheet('plante_rayon', '../_assets/_export/_ennemies/spritesheet_planteRayon.png',{ frameWidth: 209, frameHeight: 133 })
        this.load.spritesheet('rayonPoison', '../_assets/_export/_ennemies/rayon_poison.png',{ frameWidth: 60, frameHeight: 500 });
        this.load.image('boulePoison', '../_assets/_export/_ennemies/boule_poison.png');
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-----------------------------------------   ANIMAUX   -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        this.load.spritesheet('crapaud', '../_assets/_export/_crapaud/crapaud_spritesheet.png',{ frameWidth: 199, frameHeight: 158 })
        this.load.spritesheet('chouette', '../_assets/_export/_chouette/chouette_spritesheet.png',{ frameWidth: 172, frameHeight: 163 })
        this.load.spritesheet('renard', '../_assets/_export/_renard/renard_spritesheet.png',{ frameWidth: 196, frameHeight: 221 })
        this.load.spritesheet('cerf', '../_assets/_export/_cerf/cerf_spritesheet.png',{ frameWidth: 301, frameHeight: 319 })
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------   ANABLA CEANA   ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.spritesheet('anabla','../_assets/_export/_anabla/anabla_spritesheet.png',{ frameWidth: 192, frameHeight: 488 })
        this.load.spritesheet('ceana','../_assets/_export/_ceana/ceana_spritesheet.png',{ frameWidth: 192, frameHeight: 488 })
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-----------------------------------------   TILESET   -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.load.image('tuile_niveau1', '../_assets/_export/_tileset/sprite_props.png');
        this.load.tilemapTiledJSON('map_level1', '_levels/map_level1.json');
     
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-----------------------------------------   MUSIQUES  -----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        this.load.audio('ambiance', '../_assets/_export/_sons/musiqueAmbiance.mp3');
        this.load.audio('courir', '../_assets/_export/_sons/courir.mp3');
        this.load.audio('sonCrapaud','../_assets/_export/_sons/grenouille.mp3');
        
       
        
        
    }
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- CREATE --------------------------------------------------/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //anabla = this.add.sprite(3000,950,'anabla');
    //ceana = this.add.sprite(2500,950,'ceana');
    //anabla.flipX = true;
    
    create(){
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   MUSIQUES     ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        theme_musique = this.sound.add('ambiance',{volume:0.05});
        theme_musique.loop = true;
        theme_musique.play();
        
        son_crapaud =this.sound.add('sonCrapaud',{volume:0.7});
        son_crapaud.loop =true;
        son_crapaud.play();
        
        son_courir = this.sound.add('courir',{volume:0.1});
        
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   CAMERA       ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.cameras.main.setBounds(0, 0, 4480, 1216);
        this.cameras.main.fadeIn(3000);
        this.cameras.main.zoom = 0.4;
        this.physics.world.setBounds(0, 0, 4480, 1216);
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   BACKGROUND   ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        fond = this.add.image(600, 150, 'fond').setScrollFactor(0.5);
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-------------------------------------------   PERSOS   ----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //DROITE
        player = this.physics.add.sprite(150, 250, 'player').setScale(0.7);
        player.setCollideWorldBounds(true);
        this.anims.create({
            key : 'right',
            frames: this.anims.generateFrameNumbers('player',{start :0 , end:6}),
            frameRate: 7,
            repeat : -1
        });
        //REGARDE DROITE
         this.anims.create({
            key : 'look_right',
            frames: this.anims.generateFrameNumbers('player',{start :7 , end:7}),
            frameRate: 1,
            repeat : -1
        });
        //GAUCHE
         this.anims.create({
            key : 'left',
            frames: this.anims.generateFrameNumbers('player',{start :9 , end:15}),
            frameRate: 7,
            repeat : -1
        });
        //REGARDE GAUCHE
         this.anims.create({
            key : 'look_left',
            frames: this.anims.generateFrameNumbers('player',{start :8 , end:8}),
            frameRate: 1,
            repeat : -1
        });
        
        ////////////////////------------------------  CRAPAUD ------------------///////////////////////
        
        crapaud = this.add.sprite(4200,1070,'crapaud');
        crapaud.flipX = true;
        this.anims.create({
            key : 'crapaudAnim',
            frames: this.anims.generateFrameNumbers('crapaud',{start :0 , end:59}),
            frameRate: 30,
            repeat : -1
        });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //-----------------------------------------   ENNEMIES   ----------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        plante_boule = this.add.sprite(1830,200,'plante_boule');
        this.anims.create({
            key : 'plante_boule_anim',
            frames: this.anims.generateFrameNumbers('plante_boule',{start :0 , end:49}),
            frameRate: 25,
            repeat : -1
        });
        
        plante_rayon = this.add.sprite(3150,600,'plante_rayon').setRotation(-80);
        this.anims.create({
            key : 'plante_rayon_anim',
            frames: this.anims.generateFrameNumbers('plante_rayon',{start :0 , end:44}),
            frameRate: 23,
            repeat : -1
        });
        
        

        
        ///////////////////////////////////////////////////////////
        ////////////////////////  TILED  //////////////////////////
        ///////////////////////////////////////////////////////////
        
        const map = this.make.tilemap({
            key : 'map_level1'
        });
        const tileset = map.addTilesetImage('sprite_props','tuile_niveau1');
        const plantes = map.createLayer('plantes',tileset,0,0);
        
        const plateforme_collide = map.createLayer('plateforme_collide',tileset,0,0);
        plateforme_collide.setCollisionByExclusion(-1,true);
        this.physics.add.collider(player,plateforme_collide);
        const plateforme_traverse = map.createLayer('plateforme_traverse',tileset,0,0);
        
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   PHYSIQUE     ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        boule_poison = this.add.image(1810,130,'boulePoison');
        //boule_poison.setCollideWorldBounds(true);
        //boule_poison.body.setAllowGravity(true);
        
        /*this.tweens.add({
            targets : boule_poison,
                props : {
                    //x : {value : 800, duration : 700},
                    y : {value : 150, duration : 900},
                },
            yoyo : true,
            repeat : -1
        });*/
        
        
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //partition = this.add.image(690,600,'partition');
        this.cameras.main.startFollow(player, true);
        PV_vide = this.add.image(-500,-200,'PV_vide').setScrollFactor(0).setScale(1.5);
        PV_vide = this.add.image(-350,-200,'PV_vide').setScrollFactor(0).setScale(1.5);
        PV_vide = this.add.image(-200,-200,'PV_vide').setScrollFactor(0).setScale(1.5);
        PDV1 = this.add.image(-500,-200,'PV').setScrollFactor(0).setScale(1.5);
        PDV2 = this.add.image(-350,-200,'PV').setScrollFactor(0).setScale(1.5);
        PDV3 = this.add.image(-200,-200,'PV').setScrollFactor(0).setScale(1.5);
        
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
            enter : Phaser.Input.Keyboard.KeyCodes.ENTER,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            B: Phaser.Input.Keyboard.KeyCodes.B,
            X: Phaser.Input.Keyboard.KeyCodes.X,
            Y: Phaser.Input.Keyboard.KeyCodes.Y,
        });
        
        un_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        un_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
             
}
        
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- UPDATE --------------------------------------------------/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    update(){ 
        
        crapaud.anims.play('crapaudAnim',true);
        plante_boule.anims.play('plante_boule_anim',true);
        plante_rayon.anims.play('plante_rayon_anim',true);
        
        
 
        
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
        
        
        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////--------------------  CONTROLES ----------------------/////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        
        
        // JUMP
        if (keys.up.isDown && notJumping == true){
            notJumping = false;
            player.setVelocityY(-1000);
        }

        
        if(player.body.onFloor()){
            notJumping = true;
        }
        
        // DROITE
        if (keys.right.isDown){
            player.anims.play('right', true);
            player.setVelocityX(1000);
            son_courir.loop = true;
            son_courir.play();
            son_courir.loop =false;
        }
        
        // GAUCHE
        else if (keys.left.isDown){
            player.anims.play('left', true);
            player.setVelocityX(-1000);
            son_courir.loop = true;
            son_courir.play();
             son_courir.loop =false;
        }
        
        // REGARD A GAUCHE
        else if (Phaser.Input.Keyboard.JustUp(un_left)){
            player.setVelocityX(0);
            player.anims.play('look_left',true);
        }
        
        // REGARD A DROITE
        else if (Phaser.Input.Keyboard.JustUp(un_right)){
            player.setVelocityX(0);
            player.anims.play('look_right',true);
        }  
        
        // BLOQUE SI 2 TOUCHES APPUYEES
        else if (keys.right.isUp && keys.left.isUp){
            player.setVelocityX(0);
        }
        
        // BAS
        else if (keys.down.isDown){
            player.setVelocityY(1000);
        }
        
        
    }
}


function attaque(x, y){
    newSwing = swing.create(player.x + x, player.y + y, 'attaque');
}


function boulePoison(x,y,boule_poison){
    
    //setTimeout(function(){boule_poison.setVelocityY(50)},2000);
}