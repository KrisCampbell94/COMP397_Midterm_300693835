// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    let currentState: number;
    let keyboardManager: managers.Keyboard;

    // Asset Management Request
    //      This tests the use of .JSON files being used in TypeScript/CreateJS games
    //      However for a failsafe, I created a config file called asset.ts
    if (window.fetch) {
        let request = new Request("./Content/assetManifest.json");
        fetch(request)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Error on the server.');
                }
            })
            .then(function (data) {
                assetManifest = data;
                console.log(assetManifest);
            }).catch(function (error) {
                console.error(error);
            });
    } else {
        assetManifest = config.Assets.getAssets;
    }

    // InIt Function
    function Init() {
        console.log("Initialization Start.");
        // Building the assetManager
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);

        // Goto Start Function
        assetManager.on("complete", Start, this);
    }
    // Start Function
    function Start() {
        console.log("Starting Application.");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Frequency of checks
        stage.enableMouseOver(20);
        // Building the framerate
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        // Global references
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.MENU;
        currentState = config.Scene.MENU;

        // Keyboard Manager
        keyboardManager = new managers.Keyboard;
        objects.Game.keyboardManager = keyboardManager;

        Main();
    }
    // Update Function
    function Update() {
        // Check state change
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        // Updates the current scene and stage
        currentScene.Update();
        stage.update();
    }

    // Main: Where the Finite State Machine is established
    function Main() {
        console.log("Game Start.");
        // Check which is the current scene
        switch (objects.Game.currentScene) {
            case config.Scene.MENU: // Start Scene
                stage.removeAllChildren();
                currentScene = new scenes.MenuScene(assetManager);
                stage.addChild(currentScene)
                break;
            case config.Scene.GAME: // Game Scene
                stage.removeAllChildren();
                currentScene = new scenes.GameScene(assetManager);
                stage.addChild(currentScene)
                break;
            case config.Scene.GAMEOVER: // Game Over Scene
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene)
                break;
        }
        currentState = objects.Game.currentScene;
        objects.Game.currentSceneObject = currentScene;
    }
    // When the window loads, start the game
    window.onload = Init;
})();