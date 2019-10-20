module objects{
    export class Label extends createjs.Text{
        // Constructor
        constructor(text: string, fontSize: string, fontFamily: string, 
            fontColor: string, x: number = 0, y: number = 0, 
            isCentered: boolean = false) {
            super(text,fontSize+ " "+fontFamily,fontColor);
            this.x = x;
            this.y = y;
            if(isCentered){
                this.recenterText();
            }
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