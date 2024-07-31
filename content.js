(function() {
    function checkAndBlockPage() {
        const currentURL = window.location.href;
        
        if (currentURL.includes('instagram.com') || 
            currentURL.includes('youtube.com/shorts')
        ) {
            if (!document.getElementById('semantic-ai-blocker')) {
                const blocker = document.createElement('div');
                blocker.id = 'semantic-ai-blocker';
                blocker.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: black;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    z-index: 9999;
                `;
                blocker.textContent = 'ヽ(●ﾟ´Д｀ﾟ●)ﾉﾟ Use your time in better ways';
                document.body.appendChild(blocker);
            }
        } else if (currentURL.includes('x.com')) {
            console.log('hi');
        } else {
            const blocker = document.getElementById('semantic-ai-blocker');
            if (blocker) {
                blocker.remove();
            }
        }
    }

    // Run checkAndBlockPage every 500ms
    setInterval(checkAndBlockPage, 500);

    // Initial check
    checkAndBlockPage();

    // Listen for messages from the background script (optional, for immediate response)
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.type === "urlChanged") {
            checkAndBlockPage();
        }
    });
})();