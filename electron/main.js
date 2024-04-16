const { app, BrowserWindow, ipcMain } = require("electron");
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
    icon: "./app_ico.ico",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  // Load the Angular app after a delay
  mainWindow.loadFile("./loader.html");
  setTimeout(() => {
    mainWindow.loadURL("http://localhost:4200");
    mainWindow.openDevTools();
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

ipcMain.handle("close", async function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
ipcMain.handle("minimise", async function () {
  if (process.platform !== "darwin") {
    await mainWindow.minimize();
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
