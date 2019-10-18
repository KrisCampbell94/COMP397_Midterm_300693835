module scenes {
    export class GameScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player: objects.Player;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start(): void {
            console.log("Load Game Scene");
            this.background = new objects.Background(this.assetManager);

            this.player = new objects.Player(this.assetManager, [100, 100], [640, 440]);
            this.Main();
        }
        public Update(): void {
            this.player.Update();
        }
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
        }
    }
}