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
            this.background = new objects.Background(this.assetManager);
            this.Main();
        };
        MenuScene.prototype.Update = function () { };
        MenuScene.prototype.Main = function () {
            this.addChild(this.background);
        };
        return MenuScene;
    }(objects.Scene));
    scenes.MenuScene = MenuScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map