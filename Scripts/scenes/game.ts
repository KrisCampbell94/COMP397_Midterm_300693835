module scenes {
    export class GameScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player: objects.Player;
        private startPosition: number[];
        private mate: objects.Mate;

        private blocks: objects.Block[];
        private blockNum: number = 0;

        private blockButton: objects.BlockButton;

        private spikes: objects.Spike[];
        private spikeNum: number = 0;

        private tileBuild: Object = {
            1:  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            2:  [0, 0, 2, 0, 0, 1, 0, 0, 3, 3, 1, 0, 3, 3, 3, 3, 3, 3, 3, 1],
            3:  [1, 0, 1, 0, 0, 1, 0, 0, 3, 0, 1, 0, 0, 0, 3, 1, 3, 1, 3, 1],
            4:  [1, 0, 1, 3, 0, 1, 0, 0, 3, 0, 1, 0, 3, 0, 0, 1, 0, 0, 3, 1],
            5:  [0, 0, 1, 0, 0, 1, 0, 0, 3, 0, 1, 0, 3, 0, 0, 0, 0, 0, 3, 1],
            6:  [0, 1, 1, 0, 3, 1, 0, 0, 3, 0, 1, 0, 1, 3, 3, 3, 0, 3, 3, 1],
            7:  [0, 1, 1, 0, 0, 1, 0, 0, 3, 0, 1, 3, 4, 0, 0, 0, 0, 0, 3, 1],
            8:  [0, 0, 1, 3, 0, 1, 3, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
            9:  [1, 0, 1, 0, 0, 1, 3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            10: [1, 0, 1, 0, 3, 1, 3, 0, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 1, 1],
            11: [0, 0, 1, 0, 0, 1, 3, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            12: [1, 1, 1, 3, 0, 1, 3, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            13: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            14: [0, 0, 1, 0, 3, 3, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };

        private backgroundMusic: createjs.AbstractSoundInstance;


        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        // Methods
        public Start(): void {
            console.log("Load Game Scene");
            this.startPosition = [28, 445];
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager, this.startPosition, [640, 448]);

            // Blocks need to be 32px apart and moved 16px right and down
            this.blocks = new Array<objects.Block>();
            this.spikes = new Array<objects.Spike>();

            for (let col = 0; col < Object.keys(this.tileBuild).length; col++) {
                // Column == Y Axis
                let y = (col * 32) + 16;
                for (let row = 0; row < this.tileBuild[col + 1].length; row++) {
                    let x = (row * 32) + 16;
                    switch (this.tileBuild[col + 1][row]) {
                        case 1:
                            //console.log("Build Tile @",x,y);
                            this.blocks[this.blockNum] = new objects.Block(this.assetManager, [x, y]);
                            //console.log(this.blockNum);
                            this.blockNum += 1;
                            break;
                        case 2:
                            this.blockButton = new objects.BlockButton(this.assetManager, [x, y]);
                            break;
                        case 3:
                            this.spikes[this.spikeNum] = new objects.Spike(this.assetManager, [x, y]);
                            this.spikeNum += 1;
                            break;
                        case 4:
                            this.mate = new objects.Mate(this.assetManager, [x, y]);
                            break;
                    }
                }
            }

            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("music_game");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.4;

            this.Main();
        }
        public Update(): void {
            // PLAYER UPDATES
            this.player.Update();

            // Gets hit from the spike
            if (this.player.gotHit) {
                this.blocks.forEach(block => {
                    block.visible = true;
                });
                this.spikes.forEach(spike => {
                    spike.visible = true;
                });
                this.blockButton.switch = false;

                this.player.x = this.startPosition[0];
                this.player.y = this.startPosition[1];

                this.player.gotHit = false;
            }
            this.blocks.forEach(block => {
                managers.Collision.CheckBounds(this.player, block);
            });

            managers.Collision.CheckBounds(this.player,this.blockButton);
            if (this.blockButton.switch && !this.player.useEcho) {
                this.blocks.forEach(block => {
                    block.visible = false;
                });
                this.spikes.forEach(spike => {
                    spike.visible = false;
                });
            } 
            else if(this.blockButton.switch && this.player.useEcho){
                this.blocks.forEach(block => {
                    block.visible = true;
                });
                this.spikes.forEach(spike => {
                    spike.visible = true;
                });
            }

            this.spikes.forEach(spike => {
                managers.Collision.CheckBounds(this.player, spike);
            });
            // MATE UPDATES
            this.mate.Update();
            managers.Collision.CheckBounds(this.player, this.mate);
            if (this.mate.complete) {
                objects.Game.currentScene = config.Scene.GAMEOVER;
            }
        }
        public Main(): void {
            this.addChild(this.background);
            this.blocks.forEach(block => {
                this.addChild(block);
            });
            this.addChild(this.blockButton);

            this.spikes.forEach(spike => {
                this.addChild(spike);
            });
            this.addChild(this.mate);
            this.addChild(this.player);
        }
    }
}