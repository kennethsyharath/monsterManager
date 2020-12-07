import { IpcRenderer, ipcRenderer } from 'electron'

declare global {
    interface Window { IPCRendererHandle : IpcRenderer; }
}

window.IPCRendererHandle = ipcRenderer;