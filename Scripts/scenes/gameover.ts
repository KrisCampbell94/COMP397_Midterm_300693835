module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;
        private gameOver: objects.Label;
        private menuButton: objects.Button;

        private blueBat: createjs.Bitmap;
        private redBat: createjs.Bitmap;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start(): void {
            console.log("Load Game Over Scene");
            // Create background
            this.background = new objects.Background(this.assetManager);
            // Create GameOver/Congratulations label
            this.gameOver = new objects.Label(
                "CONGRATULATIONS!", "32px", "'Press Start 2P'", "#FF6F6F", 320, 200, true
            );
            this.gameOver.createShadow("#777777");

            // Create both bats
            this.blueBat = new createjs.Bitmap(this.assetManager.getResult("bat"));
            this.blueBat.x = 287;
            this.blueBat.y = 240;
            this.redBat = new createjs.Bitmap(this.assetManager.getResult("mateBat"));
            this.redBat.x = 317;
            this.redBat.y = 240;

            // Create menu button
            this.menuButton = new objects.Button(this.assetManager, "buttonMenu", 180, 290);

            // Play proper music
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

            // Use event handler for menu button
            this.menuButton.on("click", this.menuButtonClick);
        }

        private menuButtonClick(): void {
            objects.Game.currentScene = config.Scene.MENU;
        }
    }
}