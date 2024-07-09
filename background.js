// List of blocked websites
const blockedSites = [
    'instagram.com',
    'youtube.com/shorts'
  ];
  
  // Function to check if a URL is blocked
  function isBlocked(url) {
    if (!url) return false; // Return false if url is undefined or null
    return blockedSites.some(site => url.includes(site));
  }
  
  // Listen for web navigation events
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.url && isBlocked(details.url)) {
      // If the site is blocked, redirect to our block page
      chrome.tabs.update(details.tabId, {
        url: chrome.runtime.getURL('blocked.html')
      });
    }
  });
  
  // Listener for tab updates (in case the URL changes within the same tab)
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && isBlocked(changeInfo.url)) {
      chrome.tabs.update(tabId, {
        url: chrome.runtime.getURL('blocked.html')
      });
    }
  });
  
  // Add console logging for debugging
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    console.log('Navigating to:', details.url);
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('Tab updated:', changeInfo);
  });