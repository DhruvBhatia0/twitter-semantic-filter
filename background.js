chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.sendMessage(details.tabId, {type: "urlChanged", url: details.url});
  }, {url: [{urlMatches: 'https://*.youtube.com/*'}, {urlMatches: 'https://*.instagram.com/*'}, {urlMatches: 'https://x.com/*'}]});