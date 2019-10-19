var math;
(function (math) {
    var Bounding = /** @class */ (function () {
        // Constructor
        function Bounding(left, top, right, bottom) {
            if (left === void 0) { left = 0; }
            if (top === void 0) { top = 0; }
            if (right === void 0) { right = 0; }
            if (bottom === void 0) { bottom = 0; }
            this.topLeftCorners = new math.Vec2(left, top);
            this.bottomRightCorners = new math.Vec2(right, bottom);
        }
        // Methods
        Bounding.IsBounding = function (object1, object2) {
            // If this returns false, there's a collision
            //      if returns true, no collision
            return (object1.topLeftCorners.x > object2.bottomRightCorners.x ||
                object2.topLeftCorners.x > object1.bottomRightCorners.x ||
                object1.topLeftCorners.y > object2.bottomRightCorners.y ||
                object2.topLeftCorners.y > object1.bottomRightCorners.y);
        };
        return Bounding;
    }());
    math.Bounding = Bounding;
})(math || (math = {}));
//# sourceMappingURL=bounding.js.map