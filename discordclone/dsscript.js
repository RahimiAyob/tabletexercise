const downloadbutton = document.getElementById("downloadbutton");
const discordbrowser = document.getElementById("discordbrowser");
const buttonmain = document.getElementById("buttonmain");
const delay = ms => new Promise(res => setTimeout(res, ms));
downloadbutton.onclick = changepage;
discordbrowser.onclick = browserpage;
buttonmain.onclick = mainpage;

async function changepage() {
    downloadbutton.innerHTML = "Downloading...?";
    await delay(5000);
    downloadbutton.innerHTML = "Downloaded! Lets goo!";
    await delay(1000);
    downloadbutton.innerHTML = "Redownload";

}
 function browserpage(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
 }

 function mainpage(){
    window.location.href = "/index.html";
 }
