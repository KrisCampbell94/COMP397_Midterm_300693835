module objects{
    export class Spike extends objects.GameObject{
        // Variables
        
        // Constructor
        constructor(assetManager: createjs.LoadQueue, pos: number[] = [0,0]){
            super(assetManager,"spike",pos);
            this.Start();
        }

        // Methods
        public Start():void{
            super.Start();
            //console.log(this.width, this.height, this.halfWidth, this.halfHeight);
        }
        public Update():void{
            this.CheckBound();
        }
        public CheckBound():void{

        }
    }
}