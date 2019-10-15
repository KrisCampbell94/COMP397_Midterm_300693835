module scenes{
    export class MenuScene extends objects.Scene{
        // Variables
        private background: objects.Background;
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(): void {
            this.background = new objects.Background(this.assetManager);

            this.Main();
         }
        public Update(): void { }
        public Main(): void {
            this.addChild(this.background);
        }
    }
}