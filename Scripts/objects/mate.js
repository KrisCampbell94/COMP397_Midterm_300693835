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
    var Mate = /** @class */ (function (_super) {
        __extends(Mate, _super);
        // Constructor
        function Mate(assetManager, pos) {
            if (pos === void 0) { pos = [0, 0]; }
            var _this = _super.call(this, assetManager, "mateBat", pos) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mate.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.complete = false;
            //console.log(this.width, this.height, this.halfWidth, this.halfHeight);
        };
        Mate.prototype.Update = function () {
            this.CheckBound();
        };
        Mate.prototype.CheckBound = function () {
        };
        Mate.prototype.Reset = function () {
            if (!this.complete) {
                this.complete = true;
            }
        };
        return Mate;
    }(objects.GameObject));
    objects.Mate = Mate;
})(objects || (objects = {}));
//# sourceMappingURL=mate.js.map