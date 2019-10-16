module scenes {
    export class MenuScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private title: objects.Label;
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(): void {
            console.log("Load Menu Scene");
            this.background = new objects.Background(this.assetManager);
            this.title = new objects.Label(
                "THE BAT CAVE", "32px", "'Press Start 2P'", "#FFFF00", 320, 200, true
            );
            this.title.createShadow("#6000B0");
            this.Main();
        }
        public Update(): void { }
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.title);
        }
    }
}