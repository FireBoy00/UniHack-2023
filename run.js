const {app, BrowserWindow, webContents} = require("electron")
const path = require("path")
try {
  require('electron-reloader')(module);
} catch (_) {}

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      // nodeIntegration: true, // Enable Node.js integration
      // contextIsolation: false, // Disable context isolation
      nodeIntegration: true,
      devTools: true
    }
  })
  
  // mainWindow.webContents.openDevTools()
  // mainWindow.setMenu(null)
  mainWindow.loadFile(path.join(__dirname, './public/pages/login.html'))
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
