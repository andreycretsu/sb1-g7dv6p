// Create root container for the extension
const container = document.createElement('div');
container.id = 'peopleforce-extension-root';
document.body.appendChild(container);

// Inject main script
const script = document.createElement('script');
script.src = chrome.runtime.getURL('main.js');
script.type = 'module';
document.body.appendChild(script);

// Inject styles
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.runtime.getURL('style.css');
document.head.appendChild(style);

// Listen for extension icon click
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleExtension') {
    const root = document.getElementById('peopleforce-extension-root');
    if (root) {
      root.style.display = root.style.display === 'none' ? 'block' : 'none';
    }
  }
});