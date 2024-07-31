export function relevant_tweet(tweetElement) {
    console.log("hello");

    // Extract username
    const usernameElement = tweetElement.querySelector('[data-testid="User-Name"] div[dir="ltr"] > span');
    const username = usernameElement ? usernameElement.textContent.trim() : "";

    // Extract handle
    const handleElement = tweetElement.querySelector('[data-testid="User-Name"] div[dir="ltr"][tabindex="-1"] > div');
    const handle = handleElement ? handleElement.textContent.trim() : "";

    // Extract text
    const textElement = tweetElement.querySelector('[data-testid="tweetText"]');
    const text = textElement ? textElement.textContent.trim() : "";

    // Extract media (images/videos)
    const mediaElements = tweetElement.querySelectorAll('[data-testid="tweetPhoto"], [data-testid="tweetVideo"]');
    const media = Array.from(mediaElements).map(element => {
        if (element.dataset.testid === "tweetPhoto") {
            const imgElement = element.querySelector('img');
            return imgElement ? imgElement.src : "image_url_not_found";
        } else if (element.dataset.testid === "tweetVideo") {
            return "video_placeholder";
        }
        return "unknown_media_type";
    });

    const tweetData = {
        username,
        handle,
        text,
        media
    };

    console.log(tweetData);
    return true;  // For now, we'll consider all tweets relevant
}