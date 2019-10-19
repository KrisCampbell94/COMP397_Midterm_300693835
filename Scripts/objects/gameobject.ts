module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public position: number[];
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;

        public isColliding: boolean;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string, pos: number[]) {
            super(assetManager.getResult(imageString));
            this.position = pos;
            this.name = imageString;
            this.Init();
        }
        // Methods
        private Init(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;

            this.regX = this.halfWidth;
            this.regY = this.halfHeight;

            this.isColliding = false;
        }
        public Start(): void { 
            console.log("Load " + this.name);
            this.x = this.position[0];
            this.y = this.position[1];
        }
        public Update(): void { }
        public Reset(): void { }
        public Control(): void { }
        public CheckBound(): void { }
    }
}