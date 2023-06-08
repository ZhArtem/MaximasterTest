const url = "http://exercise.develop.maximaster.ru/service/products/";
const priceFrom = document.getElementById("priceFrom");
const priceTo = document.getElementById("priceTo");
const tableBody = document.querySelector(".table__body");
const message = document.querySelector(".message");
const button = document.querySelector(".form__button");


async function getProducts() {
    let response = await fetch(url);
    let products = await response.json();
    return products;
}

async function showProducts() {
    minPrice = priceFrom.value ? Number(priceFrom.value) : 0;
    maxPrice = priceTo.value ? Number(priceTo.value) : 0;
    const products = await getProducts();
    let rows = [];
    for (let i = 0; i < products.length; i++) {
        if ((minPrice === 0) && (maxPrice === 0) || (products[i].price >= minPrice) && (products[i].price <= maxPrice)) {
            rows.push(`
                <tr>
                    <td>${i + 1}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].quantity}</td>
                    <td>${products[i].name}</td>
                    <td>${products[i].quantity * products[i].price}</td>
                </tr>
            `);
        };
    };
    if (rows.length != 0) {
        tableBody.innerHTML = rows.join("");
        message.textContent = "";
    } else {
        tableBody.innerHTML = "";
        message.textContent = "Нет данных попадающих под условие фильтра";
    }
}


showProducts();
button.addEventListener("click", showProducts);

