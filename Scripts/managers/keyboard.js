var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructor
        function Keyboard() {
            this.enabled = true;
            // KeyUp and KeyDown Listeners
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods
        Keyboard.prototype.onKeyDown = function (event) {
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
        };
        Keyboard.prototype.onKeyUp = function (event) {
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
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map