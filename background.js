chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        if (tab.url.includes('instagram.com') || tab.url.includes('youtube.com/shorts') || tab.url.includes('x.com')) {
            chrome.tabs.sendMessage(tabId, { action: "checkURL" });
        }
    }
});