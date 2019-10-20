var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager, startPos, bounds) {
            if (startPos === void 0) { startPos = [0, 0]; }
            if (bounds === void 0) { bounds = [0, 0]; }
            var _this = _super.call(this, assetManager, "bat", startPos) || this;
            _this.echoInitial = 0;
            _this.echoMax = 30;
            _this.boundaries = bounds;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.speedX = 3;
            this.speedY = 3;
            this.gotHit = false;
        };
        Player.prototype.Update = function () {
            this.Control();
            this.CheckBound();
            this.CheckEcho();
        };
        Player.prototype.Reset = function () {
            // The player gets hit, thus causing a reset
            if (!this.gotHit) {
                this.gotHit = true;
            }
        };
        Player.prototype.Control = function () {
            // Keyboard Management
            //      MOVEMENT
            //          Move Right
            if (objects.Game.keyboardManager.moveRight && !this.useEcho) {
                this.x += this.speedX;
            }
            //          Move Left
            if (objects.Game.keyboardManager.moveLeft && !this.useEcho) {
                this.x -= this.speedX;
            }
            //          Move Up
            if (objects.Game.keyboardManager.moveUp && !this.useEcho) {
                this.y -= this.speedY;
            }
            //          Move Down
            if (objects.Game.keyboardManager.moveDown && !this.useEcho) {
                this.y += this.speedY;
            }
            //      SPACE BUTTON
            if (objects.Game.keyboardManager.echoLocate && !this.useEcho) {
                // This deactivates movement
                this.useEcho = true;
            }
        };
        Player.prototype.CheckBound = function () {
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
        };
        Player.prototype.CheckEcho = function () {
            // Controls the echo timer and checks if the player uses Echo Location
            if (this.useEcho) {
                this.echoInitial++;
            }
            if (this.echoInitial > this.echoMax) {
                console.log("Echo dying out...");
                this.useEcho = false;
                this.echoInitial = 0;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map