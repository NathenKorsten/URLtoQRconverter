const qrImage = document.getElementById("qrCode");
const btnConvert = document.getElementById("btnConvert");
const inputUrl = document.getElementById("url");
const instruction = document.getElementById("instruction");
const btnDownload = document.getElementById("btnDownload");

const getQRCode = (url) => {
  fetch(
    `https://image-charts.com/chart?chl=${url}&choe=UTF-8&chof=.png&chs=100x100&cht=qr`
  ).then((Response) => displayQRcode(Response.url));
};

btnConvert.addEventListener("click", () => {
  url = inputUrl.value;
  if (!url) alert("Please enter a url");
  else {
    qrImage.style.display = "block";
    instruction.style.display = "none";
    getQRCode(url);
    // console.log(url);
  }
});

const displayQRcode = (imgUrl) => {
  qrImage.src = imgUrl;
  // qrImage.classList.add("box-shadow");
};
