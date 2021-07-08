const { app, BrowserWindow } = require('electron')

app.on("ready", ()=> {
    const win = new BrowserWindow()
    win.loadURL("https://www.dida365.com/signin").then(() =>{
        console.log("application ready")
    })
})