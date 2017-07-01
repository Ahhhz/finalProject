export const POST = (url, data) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('POST', url);
    http.setRequestHeader('Content-Type', 'application/json')
    http.onload = () => {
      try {
        const jsonData = JSON.parse(http.responseText);
        resolve(jsonData);
      } catch (e) {
        reject(e);
      }
    } // onload
    http.send(JSON.stringify(data));
  });
} //POST

// const APIKEY = 'key=AIzaSyBHE9OOovbPznCiU_W3pFlsW4OjfNTmKmE';
// const PROTOCOL = 'https:';
// const APIVERSION = 'v1';
// const BASEURL = 'vision.googleapis.com';
// const QUERY = 'images:annotate?';
//
// `${PROTOCOL}${BASEURL}/${APIVERSION}/${QUERY}${APIKEY}`

export const URL ='https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBHE9OOovbPznCiU_W3pFlsW4OjfNTmKmE'
