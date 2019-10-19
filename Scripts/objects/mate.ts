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
            //console.log(this.width, this.height, this.halfWidth, this.halfHeight);
        }
        public Update(): void {
            this.CheckBound();
        }
        public CheckBound(): void {

        }
        public Reset(): void {
            if (!this.complete) {
                this.complete = true;
            }
        }
    }
}