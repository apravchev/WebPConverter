const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const { spawn } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    minHeight: 600,
    minWidth: 800,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the Angular app after a delay
  setTimeout(() => {
    mainWindow.loadURL("http://localhost:4200");
  }, 3000); // Adjust the delay as needed

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// Start the Node.js backend
const backendProcess = spawn("node", ["../backend/server.js"], {
  cwd: __dirname,
});
backendProcess.stdout.on("data", (data) => {
  console.log(`Backend process: ${data}`);
});
backendProcess.stderr.on("data", (data) => {
  console.error(`Backend error: ${data}`);
});
