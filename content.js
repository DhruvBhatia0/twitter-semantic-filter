(function() {
    const currentURL = window.location.href;

    if (currentURL.includes('instagram.com') || currentURL.includes('youtube.com/shorts')) {
        document.body.innerHTML = '<div style="background-color: black; color: white; height: 100vh; display: flex; justify-content: center; align-items: center; font-size: 24px;"> o͡͡͡╮༼ ʘ̆ ۝ ʘ̆ ༽╭o͡͡͡   Use your time in better ways</div>';
    } else if (currentURL.includes('x.com')) {
        console.log('hi');
    }
})();