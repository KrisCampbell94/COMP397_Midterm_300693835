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
    var MenuScene = /** @class */ (function (_super) {
        __extends(MenuScene, _super);
        // Constructor
        function MenuScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        MenuScene.prototype.Start = function () {
            console.log("Load Menu Scene");
            this.background = new objects.Background(this.assetManager);
            this.title = new objects.Label("THE BAT CAVE", "32px", "'Press Start 2P'", "#FFFF00", 320, 200, true);
            this.title.createShadow("#6000B0");
            this.Main();
        };
        MenuScene.prototype.Update = function () { };
        MenuScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.title);
        };
        return MenuScene;
    }(objects.Scene));
    scenes.MenuScene = MenuScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map