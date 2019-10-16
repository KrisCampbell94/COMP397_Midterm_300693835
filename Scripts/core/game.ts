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
    let request = new Request("./Content/assetManifest.json");
    fetch(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            assetManifest = data;
        });


    // InIt
    function Init() {
        console.log("Initialization Start.");
        // Building the assetManager
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        
        // Goto Start Function
        assetManager.on("complete", Start, this);
    }
    // Start
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
    // Update: Updates the scene, and state
    function Update() {
        // Check state change
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        stage.update();
    }

    // Main: Where the Finite State Machine is established
    function Main() {
        console.log("Game Start.");
        switch (objects.Game.currentScene) {
            case config.Scene.MENU:
                stage.removeAllChildren();
                currentScene = new scenes.MenuScene(assetManager);
                stage.addChild(currentScene)
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                //currentScene = new scene.'SceneHere'(assetManager);
                //stage.addChild(currentScene)
                break;
            case config.Scene.GAMEOVER:
                stage.removeAllChildren();
                //currentScene = new scene.'SceneHere'(assetManager);
                //stage.addChild(currentScene)
                break;
        }
        currentState = objects.Game.currentScene;
        objects.Game.currentSceneObject = currentScene;
    }

    window.onload = Init;
})();