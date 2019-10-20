module objects{
    export class Block extends objects.GameObject{
        // Constructor
        constructor(assetManager: createjs.LoadQueue, pos: number[] = [0,0]){
            super(assetManager,"block",pos);
            this.position = pos;
            this.Start();
        }
        // Methods
        public Start():void{
            super.Start();
        }
    }
}