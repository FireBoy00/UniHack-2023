const {app, BrowserWindow, webContents} = require("electron")
const path = require("path")

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1420,
    height: 640,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })
  
  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.join(__dirname, './public/pages/home.html'))
  mainWindow.setMenu(null)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
