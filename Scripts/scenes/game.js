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
var scenes;
(function (scenes) {
    var GameScene = /** @class */ (function (_super) {
        __extends(GameScene, _super);
        // Constructor
        function GameScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        GameScene.prototype.Start = function () {
            console.log("Load Game Scene");
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager, [100, 100], [640, 440]);
            this.Main();
        };
        GameScene.prototype.Update = function () {
            this.player.Update();
        };
        GameScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.player);
        };
        return GameScene;
    }(objects.Scene));
    scenes.GameScene = GameScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map