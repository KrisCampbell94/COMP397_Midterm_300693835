module objects {
    export class Player extends objects.GameObject {
        // Variables
        public gotHit: boolean;
        public useEcho: boolean;
        public echoInitial: number = 0;
        public echoMax: number = 30;
        //      Holds in the x value [0] and the y value [1]
        public boundaries: number[];

        // Constructor
        constructor(assetManager: createjs.LoadQueue,
            startPos: number[] = [0, 0],
            bounds: number[] = [0, 0]) {
            super(assetManager, "bat",startPos);
            this.boundaries = bounds;
            this.Start();
        }

        // Methods
        public Start(): void {
            super.Start();
            //console.log(this.width, this.height, this.halfWidth, this.halfHeight);
            this.speedX = 3;
            this.speedY = 3;
            this.gotHit = false;
        }
        public Update(): void {
            this.Control();
            this.CheckBound();
            if(this.useEcho){
                this.echoInitial++;
            }
            if(this.echoInitial > this.echoMax){
                console.log("Echo dying out...");
                this.useEcho = false;
                this.echoInitial = 0;
            }
        }
        public Reset(): void { 
            if(!this.gotHit){
                this.gotHit = true;
            }
        }
        public Control(): void {
            // Keyboard Management
            if (objects.Game.keyboardManager.moveRight && !this.useEcho) {
                this.x += this.speedX;
            }
            if (objects.Game.keyboardManager.moveLeft && !this.useEcho) {
                this.x -= this.speedX;
            }
            if (objects.Game.keyboardManager.moveUp && !this.useEcho) {
                this.y -= this.speedY;
            }
            if (objects.Game.keyboardManager.moveDown && !this.useEcho) {
                this.y += this.speedY;
            }
            if(objects.Game.keyboardManager.echoLocate && !this.useEcho){
                console.log("ECHO!!");
                this.useEcho = true;
            }

        }
        public CheckBound(): void {
            // Right Bound
            if (this.x >= (this.boundaries[0] - this.halfWidth) + 30) {
                this.x = this.halfWidth - 30;
            }
            // Left Bound
            if (this.x <= this.halfWidth - 32) {
                this.x = (this.boundaries[0] - this.halfWidth) + 32;
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
