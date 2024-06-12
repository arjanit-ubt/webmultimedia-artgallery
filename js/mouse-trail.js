// Create a renderer
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true,
    antialias: true,
    powerPreference: "high-performance"
});

// Add canvas to the body and style it
document.body.appendChild(app.view);
app.view.style.position = "fixed";
app.view.style.top = "0";
app.view.style.left = "0";
app.view.style.pointerEvents = "none";
app.view.style.zIndex = "20";

// Resize handler
const handleResponsiveness = () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", handleResponsiveness);
setTimeout(handleResponsiveness, 1000);

// Create variables for history and points
const historySize = 20;
const trailWidth = 2;
const history = [];

// Populate history array
for (let i = 0; i < historySize; i++) {
    history.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
}

// Graphics object to draw lines
const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

let mousePosition = null;

// Mouse move event handler
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on("mousemove", (event) => {
    mousePosition = event.data.global;
});

// Ticker update
app.ticker.add(() => {
    if (!mousePosition) return;

    // Update history with mouse position
    history.pop();
    history.unshift({ x: mousePosition.x, y: mousePosition.y });

    // Clear graphics and draw lines between points in history
    graphics.clear();
    for (let i = 0; i < history.length - 1; i++) {
        const alpha = 1 - i / historySize; // Calculate alpha based on index
        graphics.lineStyle(trailWidth, 0xffffff, alpha); // Set line style with alpha
        graphics.moveTo(history[i].x, history[i].y);
        graphics.lineTo(history[i + 1].x, history[i + 1].y);
    }
});
