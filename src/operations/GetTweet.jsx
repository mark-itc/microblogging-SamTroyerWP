export const getFromAPI = async () => {
    try {
      const request = await fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet");
      const response = await request.json();
      console.log("server response achieved!", );
      return response.tweets;
    } catch (e) {
      console.log("there was an error with loading the tweets: ", e);
    }
    getFromAPI();
  };