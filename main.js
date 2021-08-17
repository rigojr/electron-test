const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

let browserWindow;
let mainWindow;

const createWindow = () => {
  browserWindow = new BrowserWindow({ width: 800, height: 500, alwaysOnTop: true, center: true, frame: true });
  browserWindow.loadFile('ui/loading.html');  
  setTimeout(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({ width: width, height: height, alwaysOnTop: true, center: true, maximizable: true });
    mainWindow.loadFile('ui/main.html');
    mainWindow.webContents.openDevTools({ mode: "detach" });
    browserWindow.close();
  }, 6000);
  browserWindow.on('close', () => {
    browserWindow = null;
  });
};

app.on('ready', () => {
  createWindow();
})