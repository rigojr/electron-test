const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

let browserWindow;
let mainWindow;

const createWindow = () => {
  browserWindow = new BrowserWindow({ width: 800, height: 500, alwaysOnTop: true, center: true, frame: false });
  browserWindow.loadFile('ui/loading.html');
  mainWindow = new BrowserWindow({ width: 800, height: 500, alwaysOnTop: true, enter: true, maximizable: true });
  setTimeout(() => {
    browserWindow.close();
    mainWindow.loadFile('ui/main.html');
  }, 6000);
  browserWindow.on('close', () => {
    browserWindow = null;
  });
};

app.on('ready', () => {
  createWindow();
})