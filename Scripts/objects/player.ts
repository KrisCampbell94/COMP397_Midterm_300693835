module objects {
    export class Player extends objects.GameObject {
        // Variables
        public gotHit: boolean;
        //      Holds in the x value [0] and the y value [1]
        public startPosition: number[];
        public boundaries: number[];

        // Constructor
        constructor(assetManager: createjs.LoadQueue,
            startPos: number[] = [0, 0],
            bounds: number[] = [0, 0]) {
            super(assetManager, "bat");
            this.startPosition = startPos;
            this.boundaries = bounds;
            this.Start();
        }

        // Methods
        public Start(): void {
            console.log("Load Player");
            this.x = this.startPosition[0];
            this.y = this.startPosition[1];
            this.gotHit = false;
        }
        public Update(): void {
            this.Move();
            this.CheckBound();
        }
        public Reset(): void { }
        public Move(): void {
            // Keyboard Management
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 3;
            }
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 3;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.y -= 3;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += 3;
            }

        }
        public CheckBound(): void {
            // Right Bound
            if (this.x >= this.boundaries[0] - this.halfWidth) {
                this.x = this.boundaries[0] - this.halfWidth;
            }
            // Left Bound
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            // Bottom Bound
            if (this.y >= this.boundaries[1] - this.halfHeight) {
                this.y = this.boundaries[1] - this.halfHeight;
            }
            // Top Bound
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        }
    }
}
