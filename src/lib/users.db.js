export const getUsersXHR = () => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (){
      resolve(JSON.parse(this.responseText))
    })
    xhr.open('GET', 'http://localhost:8080/api/users');
    xhr.send()
})
