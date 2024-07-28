function tweet_modifier() {
  const tweets = document.querySelectorAll('article[data-testid="tweet"]:not([data-processed])');
  
  tweets.forEach(tweet => {
      const usernameElement = tweet.querySelector('div[data-testid="User-Name"]');
      
      if (usernameElement) {
          // Find the display name (usually the first child of the username element)
          const displayNameElement = usernameElement.querySelector('div[class*="css-"] > div[class*="css-"]');
          const displayName = displayNameElement ? displayNameElement.textContent.trim() : '';

          // Find the handle (usually comes after the display name, starts with @)
          // Find the handle (usually comes after the display name, starts with @)
          const handleElement = usernameElement.querySelector('div[class*="css-"] > div[class*="css-"]:nth-child(2)');
          const handle = handleElement ? handleElement.textContent.trim() : '';
          // Get tweet text
          const tweetTextElement = tweet.querySelector('div[data-testid="tweetText"]');
          const tweetText = tweetTextElement ? tweetTextElement.textContent.trim() : '';
          
          // Get image URL
          const imageElement = tweet.querySelector('img[alt="Image"]');
          const imageUrl = imageElement ? imageElement.src : 'No image';
            
          
          console.log('Tweet Text:', tweetText);
          console.log('Image URL:', imageUrl);
          console.log('Display Name:', displayName);
          console.log('Twitter Handle:', handle);
          console.log('-------------------');

          // Mark this tweet as processed
          tweet.setAttribute('data-processed', 'true');

          // ping server with tweet data
          fetch('http://localhost:5000/', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
          .then(data => console.log("da data is: ",data))
          .catch(error => console.error('Error:', error));
      }
  });
}

// Run the function when the page loads
tweet_modifier();

// Also run the function periodically to catch any dynamically loaded tweets
setInterval(tweet_modifier, 1000);
