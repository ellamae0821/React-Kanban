
export const getCardsXHR = () => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (){
      resolve(JSON.parse(this.responseText))
    })
    xhr.open('GET', 'http://localhost:8080/api');
    xhr.send()
})


export const addCardsXHR = (card) => new Promise((resolve,
  reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      resolve(this.response)
    }
  }
  xhr.open('POST', 'http://localhost:8080/api');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(card)); // stringify makes the object to JSON...
})







