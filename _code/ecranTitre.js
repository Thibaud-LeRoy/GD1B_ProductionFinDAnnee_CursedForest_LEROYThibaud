var keys;

var bouton_jouer;
var bouton_quitter;
var surOptions = false;
var surCredits = false;

class EcranTitre extends Phaser.Scene{
    constructor(){
        super("ecranTitre");
        this.pad = null;
    }
    init(data){
    }
    
    
    preload(){   
        this.load.image('ecran_titre', '../_assets/_export/_ecranTitre/ecranTitre.png');
        this.load.image('jouer', '../_assets/_export/_ecranTitre/JOUER.png');
        this.load.image('jouer_select', '../_assets/_export/_ecranTitre/JOUER_select.png');
        this.load.image('quitter', '../_assets/_export/_ecranTitre/QUITTER.png');
        this.load.image('quitter_select', '../_assets/_export/_ecranTitre/QUITTER_select.png');
       
    }
    create(){
        this.cameras.main.zoom = 0.5;
        var fond = this.add.image(400,300,'ecran_titre').setScale(1.5);
        var boutonJouerSel = this.add.image(400,430,'jouer_select').setInteractive();
        var boutonQuitterSel = this.add.image(400,540,'quitter_select').setInteractive();
        var boutonJouer = this.add.image(400,430,'jouer').setInteractive();
        var boutonQuitter = this.add.image(400,540,'quitter').setInteractive();
          
        this.input.setDefaultCursor('url(../assets/_export/_ecranTitre/suivi_choix.png),pointer');
        
        
        
         keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up : Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape : Phaser.Input.Keyboard.KeyCodes.ESC
        });
        
         boutonJouer.on('pointerover', function(){
            boutonJouer.setAlpha(0);
        });
         boutonQuitter.on('pointerover', function(){
            boutonQuitter.setAlpha(0);
        });
        
         boutonJouer.on('pointerout', function(){
            boutonJouer.setAlpha(1);
        });
         boutonQuitter.on('pointerout', function(){
            boutonQuitter.setAlpha(1);
        });
        
        
         boutonJouer.on('pointerdown', function(){
            if (surCredits == false && surOptions == false){
                this.scene.start("sceneOne");
            }
        }, this);

         boutonQuitter.on('pointerdown', function(){
            boutonJouer.setVisible(false);
            boutonJouerSel.setVisible(false);
            boutonQuitter.setVisible(false);
            surOptions = true;
        });
        
        
        
        }
    update(){
        /*if (keys.escape.isDown){
            ecran_controles.setVisible(false);
            ecran_credits.setVisible(false);
            surOptions = false;
            surCredits = false;
        }*/
    }
}