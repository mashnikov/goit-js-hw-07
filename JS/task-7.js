const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function changeFontSize() {
    textRef.style.fontSize = `${fontSizeControlRef.value}px`;
    // console.dir(fontSizeControlRef.value);
    // console.dir(textRef.style.fontSize);
}

fontSizeControlRef.addEventListener('input', changeFontSize);
