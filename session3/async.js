// Promise based
fetch("https://api.faketweet.com/tweets")
  .then((response) => response.json())
  .then((response) => response.tweet > 50)
  .then((response) => response.retweet > 50)
  .catch((err) => console.log(err));

// Promise with async await
const fetchTweet = async () => {
  try {
    const fetchMe = fetch("https://api.faketweet.com/tweets");
    const jsonFormat = await fetchMe();
    const tweet = await jsonFormat();
    return tweet;
  } catch (err) {
    console.log(err);
  }
};
