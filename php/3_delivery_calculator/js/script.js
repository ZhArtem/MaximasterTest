const form = document.querySelector('.form');
const message = document.querySelector(".form__message")


// form.addEventListener('submit', getPrice);
// async function getPrice(evt){
//     evt.preventDefault();
//     const city = document.getElementById('city').value;
//     const weight = document.getElementById('weight').value;
//     const url = `http://exercise.develop.maximaster.ru/service/delivery/?city=${city}&weight=${weight}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status == 'error') {
//                 message.style.color = 'red';
//             }
//             message.innerHTML = data.message;
//         })
//         .catch(er => {
//             message.style.color = 'red';
//             message.innerHTML = er.message;
//         })
// }


form.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('./php/getresponse.php', {
        method: 'POST',
        body: new FormData(form)
    });
    let result = await response.json();
    message.innerHTML = result['message'];
    if (result['status'] === 'error') {
        message.style.color = 'red'
    } else {
        message.style.color = 'black'
    }
};

