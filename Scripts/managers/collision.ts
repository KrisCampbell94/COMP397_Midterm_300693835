module managers {
    export class Collision {
        // Variable
        // Construction
        // Methods
        public static Check(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    switch (object2.name) {
                        case "block":
                            console.log(object1.name + " collided with " + object2.name);
                            return true;

                        default:
                            return false;
                    }
                }
            } else {
                return false;
            }

        }
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
                    switch (object2.name) {
                        case "block": // If the collision's name is block
                            if (ob1L - ob2R > -5 && ob1L - ob2R <= 0) {
                                //console.log("Colliding Left", ob1R + 13);
                                object1.x = ob1R - 13;
                            }
                            if (ob2L - ob1R > -5 && ob2L - ob1R <= 0) {
                                //console.log("Colliding Right", ob1L + 13);
                                object1.x = ob1L + 13;
                            }
                            if (ob1T - ob2B > -5 && ob1T - ob2B <= 0) {
                                //console.log("Colliding Bottom", ob1B - 13);
                                object1.y = ob1B - 13;
                            }
                            if (ob2T - ob1B > -5 && ob2T - ob1B <= 0) {
                                //console.log("Colliding Top", ob1T + 13);
                                object1.y = ob1T + 13;
                            }
                            break;
                        case "regularFloor":
                            console.log("Collide with button");
                            object2.Reset();
                            break;
                        case "spike":
                            console.log("Collides with spike");
                            object1.Reset();
                            break;
                        case "mateBat":
                            console.log("Collides with mate");
                            object2.Reset();
                            break;
                    }
                }
            }
            else {
                //console.log("Not colliding");
            }

        }
    }
}