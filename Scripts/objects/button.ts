module objects{
    export class Button extends createjs.Bitmap{
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string, 
            x: number = 0, y: number = 0){
                super(assetManager.getResult(imageString));

                this.x = x;
                this.y = y;

                this.on("mouseover",this.mouseOver);
                this.on("mouseout",this.mouseOut);
                this.on("mousedown",this.mouseDown);
                this.on("mouseup",this.mouseUp);
        }
        // Methods
        private mouseOver():void {
            this.alpha = 0.7;
        }
        private mouseOut():void{
            this.alpha = 1.0;
        }
        private mouseDown():void{
            this.alpha = 0.3;
        }
        private mouseUp():void{
            this.alpha = 0.7;
        }
    }
}