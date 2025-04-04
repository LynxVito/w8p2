async function getDogImage() {
    const response = await fetch("https://random.dog/woof.json");
    console.log(response);

    const data = await response.json();
    console.log(data)

    const dogImages = document.getElementById("dog-images");
    const addImage = document.createElement("img");
    addImage.src = data.url;
    dogImages.appendChild(addImage);
}

getDogImage();