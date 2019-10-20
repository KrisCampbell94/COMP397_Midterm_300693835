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
    var Block = /** @class */ (function (_super) {
        __extends(Block, _super);
        // Constructor
        function Block(assetManager, pos) {
            if (pos === void 0) { pos = [0, 0]; }
            var _this = _super.call(this, assetManager, "block", pos) || this;
            _this.position = pos;
            _this.Start();
            return _this;
        }
        // Methods
        Block.prototype.Start = function () {
            _super.prototype.Start.call(this);
        };
        return Block;
    }(objects.GameObject));
    objects.Block = Block;
})(objects || (objects = {}));
//# sourceMappingURL=block.js.map