const video = document.querySelector("#videoElement");
const selfies = document.querySelector("#selfies");
const clickSelfie = document.getElementById("clickSelfie");
const selfieCanvas = document.getElementById("selfieCanvas")


if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
    });
}


clickSelfie.onclick = function () {
  const context = selfieCanvas.getContext("2d");

  const width = video.videoWidth;
  const height = video.videoHeight;

  if (width && height) {
    selfieCanvas.width = width;
    selfieCanvas.height = height;

    context.drawImage(video, 0, 0, width, height);
    const newImage = document.createElement("img");
    const downloadLink = document.createElement("a");
    newImage.src = selfieCanvas.toDataURL('image/png');
    downloadLink.href = selfieCanvas.toDataURL('image/png');
    downloadLink.innerText = "Download";
    selfies.appendChild(newImage)
    selfies.appendChild(downloadLink)
  } else{
    alert("Error!! couldn't click selfie.")
  }
}