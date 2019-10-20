module objects{
    export class Background extends createjs.Bitmap{
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager.getResult("background"));
            this.Start();
        }
        // Methods
        public Start(): void {
            console.log("Load Background");
         }
        public Update(): void { }
        public Main(): void { }
    }
}