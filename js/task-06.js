// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const validationInputEl = document.querySelector("#validation-input");
const validationInputLength = validationInputEl.dataset.length;

validationInputEl.addEventListener("blur", onBlur);

function onBlur(event) {
    if (validationInputEl.value.length === Number(validationInputLength)) {
        validationInputEl.classList.remove("invalid");
        validationInputEl.classList.add("valid");
    } else {
        validationInputEl.classList.remove("valid");
        validationInputEl.classList.add("invalid");
    }
}