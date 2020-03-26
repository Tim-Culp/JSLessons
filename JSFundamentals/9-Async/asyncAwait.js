//grabs a dog picture from an API
async function foo() {
    try {
        let response = await fetch("https://random.dog/woof.json");
        let json = await response.json();
        if ((json.url.toLowerCase().indexOf(".mp4", 0) != -1) || (json.url.toLowerCase().indexOf(".webm", 0) != -1)) {
            console.log(json);
            console.log("Returned unsupported file. Retrying...")
            return foo();
        } else {
            return json;
        }
    } catch(err) {
        console.error(err);
    }
}

async function buildImage() {
let img = document.getElementById('image');
let json = await foo();
console.log(json);
img.src = json.url;
img.width = 400;
img.height = 400;
}

buildImage();