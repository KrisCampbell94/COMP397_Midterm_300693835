module scenes{
    export class GameScene extends objects.Scene{
        // Variables
        private background: objects.Background;

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start():void{
            console.log("Load Game Scene");
            this.background = new objects.Background(this.assetManager);
        }
        public Update():void{}
        public Main():void{
            this.addChild(this.background);
        }
    }
}