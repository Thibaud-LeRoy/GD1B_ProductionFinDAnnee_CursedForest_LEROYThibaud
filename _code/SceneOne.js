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
var bouton_enter;
var bouton_escape;

//////////////////////   IMAGES TOUCHES /////////////////
//CRAPAUD
var crapaud1;
var crapaud2;
var crapaud3;
var crapaud4;
var crapaud5;
//RENARD
var renard1;
var renard2;
var renard3;
var renard4;
var renard5;
//CHOUETTE
var chouette1;
var chouette2;
var chouette3;
var chouette4;
var chouette5;
//CERF
var cerf1;
var cerf2;
var cerf3;
var cerf4;
var cerf5;


var partitionAffiche = false;
var partitionCrapaudAffiche = false;
var partitionRenardAffiche = false;
var partitionChouetteAffiche = false;
var partitionCerfAffiche = false;
var ecranFondPartition;

var imgCerfPartition;
var imgCrapaudPartition;
var imgChouettePartition;
var imgRenardPartition;
var imgCrapaudPartitionChoix;
var imgRenardPartitionChoix;
var imgChouettePartitionChoix;
var imgCerfPartitionChoix;



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
var accesPartition = false;
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
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //this.load.image('partition','assets/partition.png');
        this.load.image('PV','../_assets/_export/_interface/PV.png');
        this.load.image('PV_vide','../_assets/_export/_interface/PV_vide.png');
        this.load.image('enter','../_assets/_export/_interface/enter.png');
        this.load.image('escape','../_assets/_export/_interface/escape.png');
        
        this.load.image('fond_partition','../_assets/_export/_interface/fond_menu_partition.png');
        this.load.image('cerf_partition','../_assets/_export/_interface/cerf_partition.png');
        this.load.image('cerf_partition_choix','../_assets/_export/_interface/cerf_partition.png');
        
        this.load.image('crapaud_partition','../_assets/_export/_interface/crapaud_partition.png');
        this.load.image('crapaud_partition_choix','../_assets/_export/_interface/crapaud_partition.png');
        
        this.load.image('chouette_partition','../_assets/_export/_interface/chouette_partition.png');
        this.load.image('chouette_partition_choix','../_assets/_export/_interface/chouette_partition.png');
        
        this.load.image('renard_partition','../_assets/_export/_interface/renard_partition.png');
        this.load.image('renard_partition_choix','../_assets/_export/_interface/renard_partition.png');
        
        
        // BOUTONS PARTITIONS
        this.load.image('B','../_assets/_export/_interface/B.png');
        this.load.image('A','../_assets/_export/_interface/A.png');
        this.load.image('X','../_assets/_export/_interface/X.png');
        this.load.image('Y','../_assets/_export/_interface/Y.png');
        
        
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
        player = this.physics.add.sprite(150, 250, 'player').setScale(0.5);
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
        
        plante_rayon = this.add.sprite(3150,800,'plante_rayon').setRotation(-80);
        this.anims.create({
            key : 'plante_rayon_anim',
            frames: this.anims.generateFrameNumbers('plante_rayon',{start :0 , end:44}),
            frameRate: 23,
            repeat : -1
        });
        
              
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //----------------------------------------   PHYSIQUE     ---------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        boule_poison = this.physics.add.image(1810,130,'boulePoison');
        boule_poison.body.allowGravity = false;
        boule_poison.body.moves = true;
        
        
        this.tweens.add({
            targets : boule_poison,
                props : {
                    //x : {value : 800, duration : 700},
                    y : {value : 750, duration : 900},
                },
            yoyo : true,
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
        //--------------------------------------------   UI   -------------------------------------------------//
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        ecranFondPartition = this.add.image(690,360,'fond_partition').setScale(2.5).setAlpha(0.8).setVisible(false).setScrollFactor(0);
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //--------------------  PARTITION  --------------------//
        
        /////////------  CRAPAUD -------//////////////
        imgCrapaudPartition = this.add.image(-300,200,'crapaud_partition').setScale(1.5).setVisible(false).setScrollFactor(0);
        imgCrapaudPartitionChoix = this.add.image(400,100,'crapaud_partition_choix').setScale(1.5).setVisible(false).setScrollFactor(0);//CHOIX DE LA PARTITION
        crapaud1 = this.add.image(200,500,'B').setScrollFactor(0).setVisible(false);
        crapaud2 = this.add.image(300,500,'Y').setScrollFactor(0).setVisible(false);
        crapaud3 = this.add.image(400,500,'A').setScrollFactor(0).setVisible(false);
        crapaud4 = this.add.image(500,500,'Y').setScrollFactor(0).setVisible(false);
        crapaud5 = this.add.image(600,500,'A').setScrollFactor(0).setVisible(false);
       
        
        
        ////////------  RENARD -------///////////////
        imgRenardPartition = this.add.image(200,200,'renard_partition').setScale(1.5).setVisible(false).setScrollFactor(0);
        imgRenardPartitionChoix = this.add.image(400,100,'renard_partition_choix').setScale(1.5).setVisible(false).setScrollFactor(0);//CHOIX DE LA PARTITION
        renard1 =  this.add.image(200,500,'Y').setScrollFactor(0).setVisible(false);
        renard2 =  this.add.image(300,500,'X').setScrollFactor(0).setVisible(false);
        renard3 =  this.add.image(400,500,'B').setScrollFactor(0).setVisible(false);
        renard4 =  this.add.image(500,500,'B').setScrollFactor(0).setVisible(false);
        renard5 =  this.add.image(600,500,'X').setScrollFactor(0).setVisible(false);
    
        
        ////////------  CHOUETTE -------/////////////
        imgChouettePartition = this.add.image(700,200,'chouette_partition').setScale(1.5).setVisible(false).setScrollFactor(0);
        imgChouettePartitionChoix = this.add.image(400,100,'chouette_partition_choix').setScale(1.5).setVisible(false).setScrollFactor(0);//CHOIX DE LA PARTITION
        chouette1 =  this.add.image(200,500,'A').setScrollFactor(0).setVisible(false);
        chouette2 =  this.add.image(300,500,'B').setScrollFactor(0).setVisible(false);
        chouette3 =  this.add.image(400,500,'X').setScrollFactor(0).setVisible(false);
        chouette4 =  this.add.image(500,500,'X').setScrollFactor(0).setVisible(false);
        chouette5 =  this.add.image(600,500,'B').setScrollFactor(0).setVisible(false);
        
        ///////------  CERF -------/////////////
        imgCerfPartition = this.add.image(1200,200,'cerf_partition').setScale(1.5).setVisible(false).setScrollFactor(0);
        imgCerfPartitionChoix = this.add.image(400,100,'cerf_partition_choix').setScale(1.5).setVisible(false).setScrollFactor(0);//CHOIX DE LA PARTITION
        cerf1 =  this.add.image(200,500,'X').setScrollFactor(0).setVisible(false);
        cerf2 =  this.add.image(300,500,'Y').setScrollFactor(0).setVisible(false);
        cerf3 =  this.add.image(400,500,'A').setScrollFactor(0).setVisible(false);
        cerf4 =  this.add.image(500,500,'Y').setScrollFactor(0).setVisible(false);
        cerf5 =  this.add.image(600,500,'B').setScrollFactor(0).setVisible(false);
        
        
        
        
        bouton_enter = this.add.image(-500, 600,'enter').setScale(1.5);
        bouton_enter.setScrollFactor(0);
        bouton_enter.setInteractive();
        
        bouton_escape = this.add.image(-500, 600,'escape').setScale(1.5).setVisible(false);
        bouton_escape.setScrollFactor(0);
        bouton_escape.setInteractive();
        
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
        
        
        
        
        
        
      if(crapaudPartition == false && keys.B.isDown && renardPartition == false && chouettePartition == false && cerfPartition ==false && accesPartition ==true){
            crapaudPartition = true;
            this.keycombo1 = this.input.keyboard.createCombo('BYAYA'); //BBYAYA
        }                                                       
        
    if (renardPartition == false && keys.Y.isDown && crapaudPartition == false && chouettePartition == false && cerfPartition ==false && accesPartition ==true){
            renardPartition = true;
            this.keycombo2 = this.input.keyboard.createCombo('YXBBX'); 
        }
    if (chouettePartition == false && keys.A.isDown && renardPartition == false && crapaudPartition == false && cerfPartition ==false && accesPartition ==true){
            chouettePartition = true;
            this.keycombo3 = this.input.keyboard.createCombo('ABXXB'); 
        }
    if (cerfPartition == false && keys.X.isDown && renardPartition == false && chouettePartition == false && crapaudPartition ==false && accesPartition ==true){
            cerfPartition = true;
            this.keycombo4 = this.input.keyboard.createCombo('XYAYB'); 
        }
    
    
        
        
        this.input.keyboard.on('keycombomatch', function (event) {
          if (crapaudPartition == true && partitionlancee == false){
              partitionlancee = true;
              console.log('crapaud !');
              quitterPartitionCrapaud();
              setTimeout(function(){crapaudPartition = false;},10000)
              setTimeout(function(){partitionlancee = false; console.log('partition prete')},5000)
              setTimeout(function(){console.log('partition_finie')},10000)
            } 
            
            else if (renardPartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('renard !');
                quitterPartitionRenard();
                setTimeout(function(){renardPartition = false;},10000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},15000)
                setTimeout(function(){console.log('partition_finie')},15000)
            }
            
            else if (chouettePartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('chouette !');
                quitterPartitionChouette();
                setTimeout(function(){chouettePartition = false;},10000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},5000)
                setTimeout(function(){console.log('partition_finie')},5000)
            }
            
            else if (cerfPartition == true && partitionlancee == false) {
                partitionlancee = true;
                console.log('cerf !');
                quitterPartitionCerf();
                setTimeout(function(){cerfPartition = false;},10000)
                setTimeout(function(){partitionlancee = false;console.log('partition prete')},5000)
                setTimeout(function(){console.log('partition_finie')},5000)
            }
     });
        
        
//////////////////////////////////////////////////////////////////////
//----------------  AFFICHAGE DU MENU DES PARTITIONS ---------------//
//////////////////////////////////////////////////////////////////////


        if (keys.enter.isDown && partitionAffiche == false){
            afficheMenuPartition();
            this.physics.pause();
        }
        
        
        if (keys.escape.isDown && partitionAffiche == true){
            quitterMenuPartition();
            quitterPartitionCrapaud();
            this.physics.resume();
        }
        
        if (partitionlancee == true){
            this.physics.resume();
        } 
        
        
        
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
        
        
        
//////////////////////////////////////////////////////////////////////
//------------  AFFICHAGE DE CHAQUE PARTITION DISTINCTE ------------//
//////////////////////////////////////////////////////////////////////
        
        
        if(keys.A.isDown && partitionAffiche == true && partitionCrapaudAffiche == false && partitionRenardAffiche == false && partitionChouetteAffiche == false && partitionCerfAffiche == false){
        partitionChouetteAffiche = true;
        quitterMenuPartition();
        affichePartitionChouette();
       }
        
        ///
        else if(keys.B.isDown && partitionAffiche == true && partitionCrapaudAffiche == false && partitionRenardAffiche == false && partitionChouetteAffiche == false && partitionCerfAffiche == false){
        partitionCrapaudAffiche = true;
        quitterMenuPartition();
        affichePartitionCrapaud();
       }
        ///
        
        else if(keys.X.isDown && partitionAffiche == true && partitionCrapaudAffiche == false && partitionRenardAffiche == false && partitionChouetteAffiche == false && partitionCerfAffiche == false){
        partitionCerfAffiche = true;
        quitterMenuPartition();
        affichePartitionCerf();
       }
        else if(keys.Y.isDown && partitionAffiche == true && partitionCrapaudAffiche == false && partitionRenardAffiche == false && partitionChouetteAffiche == false && partitionCerfAffiche == false){
        partitionRenardAffiche =true;
        quitterMenuPartition();
        affichePartitionRenard();
       } 
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////----------------------------------------------------------------------------------//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////----------------------------------------------- FONCTIONS -----------------------------------------------/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////---------------------------------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function affichePartitionCrapaud(){
    partitionCrapaudAffiche = true;
    partitionAffiche =true;
    ecranFondPartition.setVisible(true);
    imgCrapaudPartitionChoix.setVisible(true);
    accesPartition = true;
    crapaud1.setVisible(true);
    crapaud2.setVisible(true);
    crapaud3.setVisible(true);
    crapaud4.setVisible(true);
    crapaud5.setVisible(true);
    bouton_escape.setVisible(true);
    bouton_enter.setVisible(false);
}
function quitterPartitionCrapaud(){
    partitionCrapaudAffiche = false;
    partitionAffiche =false;
    ecranFondPartition.setVisible(false);
    imgCrapaudPartitionChoix.setVisible(false);
    accesPartition = false;
    crapaud1.setVisible(false);
    crapaud2.setVisible(false);
    crapaud3.setVisible(false);
    crapaud4.setVisible(false);
    crapaud5.setVisible(false);
    bouton_escape.setVisible(false);
    bouton_enter.setVisible(true);
}


function affichePartitionChouette(){
    partitionChouetteAffiche = true;
    partitionAffiche =true;
    ecranFondPartition.setVisible(true);
    imgChouettePartitionChoix.setVisible(true);
    accesPartition = true;
    chouette1.setVisible(true);
    chouette2.setVisible(true);
    chouette3.setVisible(true);
    chouette4.setVisible(true);
    chouette5.setVisible(true);
    bouton_escape.setVisible(true);
    bouton_enter.setVisible(false);
}
function quitterPartitionChouette(){
    partitionChouetteAffiche = false;
    partitionAffiche =false;
    ecranFondPartition.setVisible(false);
    imgChouettePartitionChoix.setVisible(false);
    accesPartition = false;
    chouette1.setVisible(false);
    chouette2.setVisible(false);
    chouette3.setVisible(false);
    chouette4.setVisible(false);
    chouette5.setVisible(false);
    bouton_escape.setVisible(false);
    bouton_enter.setVisible(true);
}


function affichePartitionRenard(){
    partitionRenardAffiche = true;
    partitionAffiche =true;
    ecranFondPartition.setVisible(true);
    imgRenardPartitionChoix.setVisible(true);
    accesPartition = true;
    renard1.setVisible(true);
    renard2.setVisible(true);
    renard3.setVisible(true);
    renard4.setVisible(true);
    renard5.setVisible(true);
    bouton_escape.setVisible(true);
    bouton_enter.setVisible(false);
}
function quitterPartitionRenard(){
    partitionRenardAffiche = false;
    partitionAffiche =false;
    ecranFondPartition.setVisible(false);
    imgRenardPartitionChoix.setVisible(false);
    accesPartition = false;
    renard1.setVisible(false);
    renard2.setVisible(false);
    renard3.setVisible(false);
    renard4.setVisible(false);
    renard5.setVisible(false);
    bouton_escape.setVisible(false);
    bouton_enter.setVisible(true);
}


function affichePartitionCerf(){
    partitionCerfAffiche = true;
    partitionAffiche =true;
    ecranFondPartition.setVisible(true);
    imgCerfPartitionChoix.setVisible(true);
    accesPartition = true;
    cerf1.setVisible(true);
    cerf2.setVisible(true);
    cerf3.setVisible(true);
    cerf4.setVisible(true);
    cerf5.setVisible(true);
    bouton_escape.setVisible(true);
    bouton_enter.setVisible(false);
}
function quitterPartitionCerf(){
    partitionCerfAffiche = false;
    partitionAffiche =false;
    ecranFondPartition.setVisible(false);
    imgCerfPartitionChoix.setVisible(false);
    accesPartition = false;
    cerf1.setVisible(false);
    cerf2.setVisible(false);
    cerf3.setVisible(false);
    cerf4.setVisible(false);
    cerf5.setVisible(false);
    bouton_escape.setVisible(false);
    bouton_enter.setVisible(true);
}

function afficheMenuPartition(){
    partitionAffiche = true;
    ecranFondPartition.setVisible(true);
    imgCrapaudPartition.setVisible(true);
    imgRenardPartition.setVisible(true);
    imgChouettePartition.setVisible(true);
    imgCerfPartition.setVisible(true);
    bouton_escape.setVisible(true);
    bouton_enter.setVisible(false);
}
function quitterMenuPartition(){
    partitionAffiche = false;
    ecranFondPartition.setVisible(false);
    imgCrapaudPartition.setVisible(false);
    imgRenardPartition.setVisible(false);
    imgChouettePartition.setVisible(false);
    imgCerfPartition.setVisible(false);
    bouton_escape.setVisible(false);
    bouton_enter.setVisible(true);
    imgCrapaudPartitionChoix.setVisible(false);
    imgChouettePartitionChoix.setVisible(false);
    imgRenardPartitionChoix.setVisible(false);
    imgCerfPartitionChoix.setVisible(false);
    crapaud1.setVisible(false);
    crapaud2.setVisible(false);
    crapaud3.setVisible(false);
    crapaud4.setVisible(false);
    crapaud5.setVisible(false);
    chouette1.setVisible(false);
    chouette2.setVisible(false);
    chouette3.setVisible(false);
    chouette4.setVisible(false);
    chouette5.setVisible(false);
    renard1.setVisible(false);
    renard2.setVisible(false);
    renard3.setVisible(false);
    renard4.setVisible(false);
    renard5.setVisible(false);
    cerf1.setVisible(false);
    cerf2.setVisible(false);
    cerf3.setVisible(false);
    cerf4.setVisible(false);
    cerf5.setVisible(false);
}
