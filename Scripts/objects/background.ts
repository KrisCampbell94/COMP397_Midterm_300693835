module objects{
    export class Background extends createjs.Bitmap{
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager.getResult("background"));
            this.Start();
        }
        // Methods
        public Start(): void { }
        public Update(): void { }
        public Main(): void { }
    }
}