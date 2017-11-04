
export const getCardsXHR = () => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (){
      resolve(JSON.parse(this.responseText))
    })
    xhr.open('GET', 'http://localhost:8080/api');
    xhr.send()
})

/*

export const addCardsXHR = (card) => {
  console.log('2 FE // LIB-DB XHR - CARD:', card)
return new Promise((resolve, reject) => {
// via: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
var urlEncodedData = "";
var urlEncodedDataPairs = [];
var name;

// Turn the data object into an array of URL-encoded key/value pairs.
for(name in card) {
urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(card[name]));
}

// Combine the pairs into a single string and replace all %-encoded spaces to
// the '+' character; matches the behaviour of browser form submissions.
urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

var oReq = new XMLHttpRequest();
oReq.open("POST", 'http://localhost:8080/api/cards', true);
oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
oReq.addEventListener('load', function() {
resolve(JSON.parse(this.responseText));
});
oReq.send(urlEncodedData);
});
};
*/

export const addCardsXHR = (card) => new Promise((resolve,
  reject) => {
  console.log('XHR LOG CARD', card);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log('LIB CARDS DB RESPONSE TEXT:', this.responseText)
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      resolve(this.response)
    }
  }
  xhr.open('POST', 'http://localhost:8080/api');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(card)); // stringify makes the object to JSON...
})







