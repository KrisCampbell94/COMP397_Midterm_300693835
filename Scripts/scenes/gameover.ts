module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOver: objects.Label;
        private menuButton: objects.Button;

        private blueBat: createjs.Bitmap;
        private redBat: createjs.Bitmap;

        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start(): void {
            console.log("Load Game Over Scene");
            this.background = new objects.Background(this.assetManager);
            this.gameOver = new objects.Label(
                "CONGRATULATIONS!", "32px", "'Press Start 2P'", "#FF6F6F", 320, 200, true
            );
            this.gameOver.createShadow("#777777");

            this.blueBat = new createjs.Bitmap(this.assetManager.getResult("bat"));
            this.blueBat.x = 287;
            this.blueBat.y = 240;
            this.redBat = new createjs.Bitmap(this.assetManager.getResult("mateBat"));
            this.redBat.x = 317;
            this.redBat.y = 240;

            this.menuButton = new objects.Button(this.assetManager, "buttonMenu", 180, 290);

            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("music_gameOver");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.9;

            this.Main();
        }
        public Update(): void { }
        public Main(): void {
            // Add to Scene
            this.addChild(this.background);
            this.addChild(this.gameOver);
            this.addChild(this.blueBat);
            this.addChild(this.redBat);
            this.addChild(this.menuButton);

            this.menuButton.on("click", this.menuButtonClick);
        }

        private menuButtonClick(): void {
            objects.Game.currentScene = config.Scene.MENU;
        }
    }
}