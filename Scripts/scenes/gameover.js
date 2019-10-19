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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        GameOverScene.prototype.Start = function () {
            console.log("Load Game Over Scene");
            this.background = new objects.Background(this.assetManager);
            this.gameOver = new objects.Label("CONGRATULATIONS!", "32px", "'Press Start 2P'", "#FF6F6F", 320, 200, true);
            this.gameOver.createShadow("#777777");
            this.blueBat = new createjs.Bitmap(this.assetManager.getResult("bat"));
            this.blueBat.x = 287;
            this.blueBat.y = 240;
            this.redBat = new createjs.Bitmap(this.assetManager.getResult("mateBat"));
            this.redBat.x = 317;
            this.redBat.y = 240;
            this.menuButton = new objects.Button(this.assetManager, "buttonMenu", 180, 290);
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("music_gameOver");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.9;
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            // Add to Scene
            this.addChild(this.background);
            this.addChild(this.gameOver);
            this.addChild(this.blueBat);
            this.addChild(this.redBat);
            this.addChild(this.menuButton);
            this.menuButton.on("click", this.menuButtonClick);
        };
        GameOverScene.prototype.menuButtonClick = function () {
            objects.Game.currentScene = config.Scene.MENU;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map