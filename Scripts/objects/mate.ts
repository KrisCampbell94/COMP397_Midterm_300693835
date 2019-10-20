module objects {
    export class Mate extends objects.GameObject {
        // Variables
        public complete: boolean;
        // Constructor
        constructor(assetManager: createjs.LoadQueue, pos: number[] = [0, 0]) {
            super(assetManager, "mateBat", pos);
            this.Start();
        }
        // Methods
        public Start(): void {
            super.Start();
            this.complete = false;
        }
        public Reset(): void {
            // If true, then the game is over, the player wins
            if (!this.complete) {
                this.complete = true;
            }
        }
    }
}