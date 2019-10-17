module scenes{
    export class GameOverScene extends objects.Scene{
        // Variables
        private background: objects.Background;
        private gameOver: objects.Label;
        private menuButton: objects.Button;

        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start():void{
            console.log("Load Game Over Scene");
            this.background = new objects.Background(this.assetManager);
            this.gameOver = new objects.Label(
                "GAME OVER", "32px", "'Press Start 2P'", "#FF6F6F", 320, 200, true
            );
            this.gameOver.createShadow("#777777");
            this.menuButton = new objects.Button(this.assetManager, "buttonMenu",180,290);

            this.Main();
        }
        public Update():void{}
        public Main():void{
            // Add to Scene
            this.addChild(this.background);
            this.addChild(this.gameOver);
            this.addChild(this.menuButton);
            
            this.menuButton.on("click",this.menuButtonClick);
        }

        private menuButtonClick():void{
            objects.Game.currentScene = config.Scene.MENU;
        }
    }
}