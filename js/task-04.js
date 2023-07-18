// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", onClickDecr);
incrementBtnEl.addEventListener("click", onClickIncr);

function onClickDecr(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function onClickIncr(event) {
    counterValue += 1;
    value.textContent = counterValue;
}