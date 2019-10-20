module managers {
    export class Collision {
        // Checking Axis-Align Bounding Box Method
        public static CheckBounds(object1: objects.GameObject, object2: objects.GameObject): void {
            // Get Object's 1 corners in relation to the world
            let ob1L: number = (object1.x - object1.halfWidth);
            let ob1R: number = (object1.x + object1.halfWidth);
            let ob1T: number = (object1.y - object1.halfHeight);
            let ob1B: number = (object1.y + object1.halfHeight);

            // Get Object's 2 corners in relation to the world
            let ob2L: number = (object2.x - object2.halfWidth) +8;
            let ob2R: number = (object2.x + object2.halfWidth) -8;
            let ob2T: number = (object2.y - object2.halfHeight)+8;
            let ob2B: number = (object2.y + object2.halfHeight)-8;

            // Creates the bounding boxes based on the mathematical points
            let bounding1: math.Bounding = new math.Bounding(ob1L, ob1T, ob1R, ob1B);
            let bounding2: math.Bounding = new math.Bounding(ob2L, ob2T, ob2R, ob2B);

            // Checks to see if it's false, ergo colliding
            if (!math.Bounding.IsBounding(bounding1, bounding2)) {
                // Check if object2's collision is false
                if (!object2.isColliding) {
                    // The switch for the name of object2 (object1 would always be the player)
                    console.log("Collide with "+object2.name);
                    switch (object2.name) {
                        case "block":
                            if (ob1L - ob2R > -5 && ob1L - ob2R <= 0) {
                                object1.x = ob1R - 13;
                            }
                            if (ob2L - ob1R > -5 && ob2L - ob1R <= 0) {
                                object1.x = ob1L + 13;
                            }
                            if (ob1T - ob2B > -5 && ob1T - ob2B <= 0) {
                                object1.y = ob1B - 13;
                            }
                            if (ob2T - ob1B > -5 && ob2T - ob1B <= 0) {
                                object1.y = ob1T + 13;
                            }
                            break;
                        case "regularFloor":
                        case "mateBat":
                            object2.Reset();
                            break;
                        case "spike":
                            object1.Reset();
                            break;
                    }
                }
            }
        }
    }
}