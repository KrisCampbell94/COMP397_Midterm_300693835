module objects{
    export class Label extends createjs.Text{
        // Variables
        
        // Constructor
        constructor(
            text: string, fontSize: string, fontFamily: string, fontColor: string, x: number = 0, y: number = 0, isCentered: boolean = false
        ) {
            super(text,fontSize+ " "+fontFamily,fontColor);
            if(isCentered){
                this.recenterText();
            }
            this.x = x;
            this.y = y;
        }
        // Methods
        public recenterText(): void {
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
        }
        public createShadow(shadowColor: string):void{
            this.shadow = new createjs.Shadow(shadowColor,0,5,5);
        }
    }
}