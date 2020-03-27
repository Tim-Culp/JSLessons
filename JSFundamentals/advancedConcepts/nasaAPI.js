console.log("NASA")

const api_key = "ZhIBNntSTkpSwdHfiEhx8uDw4qxahaQ9FdrPlY1v";
const url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key;


fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        image = document.createElement('img');
        image.src = json.url;
        document.getElementsByTagName('body')[0].appendChild(image);
    })
    .catch(err => {
        console.error(err);
    });