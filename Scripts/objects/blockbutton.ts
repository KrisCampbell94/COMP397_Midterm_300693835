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
        public Reset():void{
            // Turns on the switch for the button
            if(!this.switch){
                this.switch = true;
            }   
        }
    }
}