module objects{
    export class BlockButton extends objects.GameObject{
        // Variables
        public switch: boolean;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, pos: number[] = [0,0]){
            super(assetManager,"regularFloor",pos);
            this.Start();
        }
        // Methods
        public Start():void{
            super.Start();
            this.switch = false;
        }
        public Update():void{
            this.CheckBound();
        }
        public CheckBound():void {
            
        }
        public Reset():void{
            if(!this.switch){
                this.switch = true;
                console.log("SWITCH ON!");
            }   
        }
    }
}