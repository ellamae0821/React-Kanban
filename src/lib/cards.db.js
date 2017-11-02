/*export const getCardsXHR = () => new Promise((resolve, reject) => {
  function(reqListener() {
  resolve(JSON.parse(this.responseText))
  }
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/api");
oReq.send();
});
*/


export const getCardsXHR = () => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (){
      resolve(JSON.parse(this.responseText))
    })
    xhr.open('GET', 'http://localhost:8080/api');
    xhr.send()
})



