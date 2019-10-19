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
    var BlockButton = /** @class */ (function (_super) {
        __extends(BlockButton, _super);
        // Constructor
        function BlockButton(assetManager, pos) {
            if (pos === void 0) { pos = [0, 0]; }
            var _this = _super.call(this, assetManager, "regularFloor", pos) || this;
            _this.Start();
            return _this;
        }
        // Methods
        BlockButton.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.switch = false;
        };
        BlockButton.prototype.Update = function () {
            this.CheckBound();
        };
        BlockButton.prototype.CheckBound = function () {
        };
        BlockButton.prototype.Reset = function () {
            if (!this.switch) {
                this.switch = true;
                console.log("SWITCH ON!");
            }
        };
        return BlockButton;
    }(objects.GameObject));
    objects.BlockButton = BlockButton;
})(objects || (objects = {}));
//# sourceMappingURL=blockbutton.js.map