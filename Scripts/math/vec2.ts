module math {
    export class Vec2 extends createjs.Point{
        // Constructor
        constructor(x: number = 0, y: number = 0){
            super(x,y);
        }
        // Methods
        public static Distance(Point1: Vec2, Point2: Vec2){
            return Math.floor(
                Math.sqrt(
                    Math.pow(Point2.x - Point1.x, 2)+
                    Math.pow(Point2.y - Point1.y, 2)
                )
            );
        }
    }
}