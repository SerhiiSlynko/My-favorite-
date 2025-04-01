// function changeFontSize(step) {
//     let body = document.body;
//     let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
//     body.style.fontSize = (currentSize + step) + 'px';
// }


function changeFontSize(value) {
    document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) + value) + 'px';
}

// function increaseFont() {
//     document.body.style.fontSize = "22px";
// }
// function resetFont() {
//     document.body.style.fontSize = "16px";
// }
// function speakText() {
//     let text = document.getElementById("description").innerText;
//     let speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "uk-UA";
//     window.speechSynthesis.speak(speech);
// }





// let fontSize = 16;
// function changeFontSize(step) {
//     fontSize += step;
//     document.body.style.fontSize = fontSize + "px";
// }
// function speakText() {
//     let text = document.body.innerText;
//     let speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "uk-UA";
//     window.speechSynthesis.speak(speech);
// }





