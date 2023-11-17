const {app, BrowserWindow, webContents} = require("electron")
try {
  require('electron-reloader')(module);
} catch (_) {}
const path = require("path")

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })
  
  // mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.join(__dirname, './public/pages/login.html'))
  mainWindow.setMenu(null)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
