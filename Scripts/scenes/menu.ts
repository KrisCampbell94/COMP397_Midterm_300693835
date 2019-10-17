module scenes {
    export class MenuScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private title: objects.Label;
        private copyright: objects.Label;
        private playButton: objects.Button;
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
            this.copyright = new objects.Label(
                "© Kris Campbell - 300693835", "8px", "'Press Start 2P'", "#FFFFFF", 320,420,true
            );
            this.playButton = new objects.Button(this.assetManager,"buttonPlay",180,290);
            this.Main();
        }
        public Update(): void { }
        public Main(): void {
            // Add to Scene
            this.addChild(this.background);
            this.addChild(this.title);
            this.addChild(this.playButton);
            this.addChild(this.copyright);

            // Event
            this.playButton.on("click",this.playButtonClick);
        }

        private playButtonClick():void{
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}