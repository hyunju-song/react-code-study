//import fetch from "node-fetch";

export const searchYouTube = ({ query, max=5, key }, callback) => {
  /*
  const params = {
    part: "snippet",
    q: query, //API 문서의 q 매개변수
    maxResults: max, //가져올 동영상의 최대 갯수
    key: key, //인증된 유튜브 API키
    type: "video"
  };
  */
  
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&maxResult=${max}&type=video&videoEmbeddable=true&`,
    {
      method: "GET"
    }
  )
    .then(resp => resp.json())
    .then(({ items }) => {
      callback(items);
    });
};
  
  /*
  let url = "https://www.googleapis.com/youtube/v3/search?";
  for (let key in params) {
    url = url + `${key}=${params[key]}&`
  }
  
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data.items))
    .catch(function (error) {
      console.log("fetch error: " + error.message);
      throw error;
    });
};
*/
