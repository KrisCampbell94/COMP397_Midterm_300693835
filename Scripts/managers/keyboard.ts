module managers {
    export class Keyboard {
        // Variables
        public moveUp: boolean;
        public moveDown: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;

        public enabled: boolean;
        public pause: boolean;

        // Constructor
        constructor() {
            this.enabled = true;
            // KeyUp and KeyDown Listeners
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        // Methods
        public onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    //console.log("Up pressed");
                    this.moveUp = true;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    //console.log("Left pressed");
                    this.moveLeft = true;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    //console.log("Down pressed");
                    this.moveDown = true;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    //console.log("Right pressed");
                    this.moveRight = true;
                    break;
            }
        }
        public onKeyUp(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
            }
        }
    }
}