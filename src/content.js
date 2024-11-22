// Create the extension container
const container = document.createElement('div');
container.id = 'recruifin-extension-root';
document.body.appendChild(container);

// Load the React app
const script = document.createElement('script');
script.src = chrome.runtime.getURL('main.js');
document.body.appendChild(script);