const counterValueRef = document.querySelector('#value');

let counterValue = 0;

const buttonDecrementRef = document.querySelector(
    'button[data-action="decrement"]',
);
const buttonIncrementRef = document.querySelector(
    'button[data-action="increment"]',
);

function increment() {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}

buttonDecrementRef.addEventListener('click', decrement);

buttonIncrementRef.addEventListener('click', increment);
