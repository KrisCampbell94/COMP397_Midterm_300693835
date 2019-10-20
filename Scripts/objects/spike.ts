module objects{
    export class Spike extends objects.GameObject{
        // Constructor
        constructor(assetManager: createjs.LoadQueue, pos: number[] = [0,0]){
            super(assetManager,"spike",pos);
            this.Start();
        }
        // Methods
        public Start():void{
            super.Start();
        }
    }
}