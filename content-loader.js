const script = document.createElement('script');
script.setAttribute('type', 'module');
script.src = chrome.runtime.getURL('content-script.js');
document.documentElement.appendChild(script);