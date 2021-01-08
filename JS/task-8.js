const inputRef = document.querySelector('#controls>input');

const btnRenderRef = document.querySelector('button[data-action="render"]');

const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

let amountOfBoxes = 0;

function getAmountOfBoxes() {
    amountOfBoxes = inputRef.valueAsNumber;
}

btnRenderRef.addEventListener('click', getAmountOfBoxes);

function getBoxColor() {
    const R = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, '0');
    const G = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, '0');
    const B = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, '0');
    return `#${R}${G}${B}`;
}

function createBoxes(amount) {
    let arrOfBoxElements = [];
    for (let i = 1; i <= amount; i += 1) {
        const boxElement = document.createElement('div');
        boxElement.textContent = `div${i}`;
        boxElement.style.backgroundColor = getBoxColor();
        boxElement.style.width = `${30 + (i - 1) * 10}px`;
        boxElement.style.height = `${30 + (i - 1) * 10}px`;
        // console.log(boxElement);
        arrOfBoxElements.push(boxElement);
        // console.log(arrOfBoxElements);
    }

    boxesRef.append(...arrOfBoxElements);
}

btnRenderRef.addEventListener('click', () => {
    getAmountOfBoxes();
    createBoxes(amountOfBoxes);
});

function destroyBoxes() {
    const BoxesToDelete = document.querySelectorAll('div#boxes div');
    // console.log(BoxesToDelete);

    BoxesToDelete.forEach(item => item.remove());
}

btnDestroyRef.addEventListener('click', destroyBoxes);
