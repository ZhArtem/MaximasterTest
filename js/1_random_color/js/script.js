const inputWidth = document.getElementById("width");
const inputHeight = document.getElementById("height");
const btn = document.querySelector(".form__button");
const rectangle = document.querySelector(".rectangle");

const changeWidth = () => {
    rectangle.style.width = `${inputWidth.value}px`;
};

const changeHeight = () => {
    rectangle.style.height = `${inputHeight.value}px`;
};

const changeColor = () => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 256);
    };
    rectangle.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

inputWidth.addEventListener("input", changeWidth);
inputHeight.addEventListener("input", changeHeight);
btn.addEventListener("click", changeColor);
