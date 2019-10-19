module math{
    export class Bounding {
        // Variables
        public topLeftCorners: math.Vec2;
        public bottomRightCorners: math.Vec2;

        // Constructor
        constructor(left: number = 0, top: number = 0,
            right: number = 0, bottom: number = 0){
                this.topLeftCorners = new math.Vec2(left,top);
                this.bottomRightCorners = new math.Vec2(right,bottom);
        }

        // Methods
        public static IsBounding(object1: Bounding, object2: Bounding):boolean{
            // If this returns false, there's a collision
            //      if returns true, no collision
            return (
                object1.topLeftCorners.x > object2.bottomRightCorners.x ||
                object2.topLeftCorners.x > object1.bottomRightCorners.x ||
                object1.topLeftCorners.y > object2.bottomRightCorners.y ||
                object2.topLeftCorners.y > object1.bottomRightCorners.y
            );
        }
    }
}