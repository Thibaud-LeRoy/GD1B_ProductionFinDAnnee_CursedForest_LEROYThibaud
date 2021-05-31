var partition;

var crapaudPartition =false;
var renardPartition =false;
var chouettePartition =false;
var cerfPartition =false;

class Flute extends Phaser.Scene{
    constructor(){
        super("flute");
        this.pad = null;
    }
    init(data){
    }
    
preload(){
    this.load.image('partition','assets/partition.png');
}
create(){
    partition = this.add.image(690,600,'partition');
}
update(){
    if(crapaudPartition == false && cursors.A.isDown){
            crapaudPartition = true;
            this.keycombo1 = this.input.keyboard.createCombo('ABXXB');
        }
        
    if (renardPartition == false && cursors.B.isDown){
            renardPartition = true;
            this.keycombo2 = this.input.keyboard.createCombo('BYAYA');
        }
    if (chouettePartition == false && cursors.X.isDown){
            chouettePartition = true;
            this.keycombo3 = this.input.keyboard.createCombo('XYAYB');
        }
    if (cerfPartition == false && cursors.Y.isDown){
            cerfPartition = true;
            this.keycombo4 = this.input.keyboard.createCombo('YXBBX');
        }
    
    
        this.input.keyboard.on('keycombomatch', function (event) {
          if (crapaudPartition == true) {
              console.log('crapaud !');
              crapaudPartition = false;      
            } 
            else if (renardPartition == true) {
              console.log('renard !');
              renardPartition = false;
            }
            else if (chouettePartition == true) {
              console.log('chouette !');
              chouettePartition = false;
            }
            else if (cerfPartition == true) {
              console.log('cerf !');
              cerfPartition = false;
            }
        
     });
    }
}