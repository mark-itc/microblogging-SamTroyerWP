export async function postTweet(tweetObject) {
    const response = await fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweetObject),
    });
    if (response.status === 400) {
      console.log("there was an unexplainable error.  Try again in a moment");
    }
  }