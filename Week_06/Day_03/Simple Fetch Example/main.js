var d = new Date();
var lastYear = d.getFullYear() - 1;
var month = d.getMonth() + 1;
var day = d.getDate();
var myKey = "AIzaSyAr0fnc8B-t96isVPUByudWNPFDKJIugoc";
var request =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&publishedAfter=" +
  lastYear +
  "-" +
  month +
  "-" +
  day +
  "T00%3A00%3A00Z&q=teaser|trailer -india|game&type=video&videoCaption=any&relevanceLanguage=en&videoCategoryId=24&videoEmbeddable=true&key=" +
  myKey;

fetch(request)
  .then(function(response) {
    // the response object comes from fetch.
    // here we're converting response to json data and returning another promise
    return response.json();
  })
  // we handle that promise here. This is called promise chaining
  .then(function(data) {
    // this is where you use the data coming in
    for (let i = 0; i < data.items.length; i++) {
      let video = data.items[i];
      document.body.innerHTML += `<div><iframe width="1280"height="720" src="https://www.youtube.com/embed/${
        video.id.videoId
      }?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>`;
    }
  });
