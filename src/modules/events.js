import { setPlace } from "./state.js";

const input = document.getElementById('place-input');

export const buttonClick = document.querySelector('button').addEventListener('click', () => {
    const inputText = input.value;
    setPlace(inputText);
})