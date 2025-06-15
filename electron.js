const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let serverProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.on('closed', () => {
    if (serverProcess) {
      serverProcess.kill();
    }
  });
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  if (process.env.NODE_ENV === 'production') {
    const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    serverProcess = spawn(npmCmd, ['run', 'start'], {
      cwd: __dirname,
      env: { ...process.env, PORT: '3000' },
      stdio: 'inherit'
    });
    setTimeout(createWindow, 3000);
  } else {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

