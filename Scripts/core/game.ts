import {assetManifest} from "../../Content/assetManifest.json";
// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let currentScene: objects.Scene;
    let currentState: number;
    let assetManager: createjs.LoadQueue;
    //let assetManifest: any; // Any values can be in this array.

    // Asset Management
    //let request = new XMLHttpRequest();
    //request.open("GET","./Content/assetManifest.json",false);
    //request.send();

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
        objects.Game.currentScene = currentState = config.Scene.MENU;


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
                //stage.addChild(currentScene)
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