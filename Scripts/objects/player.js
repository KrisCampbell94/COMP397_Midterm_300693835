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
            var _this = _super.call(this, assetManager, "bat") || this;
            _this.startPosition = startPos;
            _this.boundaries = bounds;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            console.log("Load Player");
            this.x = this.startPosition[0];
            this.y = this.startPosition[1];
            this.gotHit = false;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
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
        };
        Player.prototype.CheckBound = function () {
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
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map