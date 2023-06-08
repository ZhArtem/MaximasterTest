document.addEventListener("DOMContentLoaded", function() {
    const defaultLatitude = 55.76;
    const defaultLongitude = 37.64;
    
    const error = () => {
        alert("Браузер не может получить ваше местоположение");
        showMap(defaultLatitude, defaultLongitude);
    }

    const success = (position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        showMap(latitude, longitude);
    }

    if (!navigator.geolocation) {
        alert("Геолокация не поддерживается вашим браузером");
        showMap(defaultLatitude, defaultLongitude);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function showMap(latitude, longitude) {
        ymaps.ready(init);
        function init() {
            var myPlacemark;
            var myMap = new ymaps.Map("map", {
                center: [latitude, longitude],
                zoom: 15
            }, {
                balloonMaxWidth: 20,
                searchControlProvider: "yandex#search"
            });

            function showPlacemark(coords) {
                return myPlacemark = new ymaps.Placemark(coords, {
                    balloonContentBody: "<p>Координаты: " + [
                            coords[0].toPrecision(6),
                            coords[1].toPrecision(6)
                        ].join(", ") + "</p>"
                });
            }

            myMap.events.add("click", function (e) {
                var coords = e.get("coords");
                if (myPlacemark) {
                    myPlacemark.geometry.setCoordinates(coords);
                }
                else {
                    myPlacemark = showPlacemark(coords);
                    myMap.geoObjects.add(myPlacemark);
                }
            });
        }
    }

    
});

const form = document.querySelector(".form");
const email = form.querySelector('.form__input[id="email"]');
const nameInput = form.querySelector('.form__input[id="name"]');
const phone = form.querySelector('.form__input[id="phone"]');
const comment = form.querySelector('.form__input[id="comment"]');
const message = form.querySelector(".form__message");


form.addEventListener("submit", function (event) {
    successText = "Заказ оформлен!";
    event.preventDefault();
    let errorsText = checkValidation()
    if (errorsText) {
        event.preventDefault();
        message.textContent = errorsText;
        message.classList.add("error")
    } else {
        message.textContent = successText;
        message.classList.remove("error")
    }
});

function  checkValidation () {
    errors = [];
    if (nameInput.value === "") {
        errors.push("Не заполнено ФИО!");
    };
    if (phone.value === "") {
        errors.push("Не заполнен телефон!");
    } else if (/\D/.test(phone.value)) {
        errors.push("Номер телефона должен состоять из цифр!");
    };
    if (email.value.search("@") === -1) {
        errors.push("Адрес электронной почты не содержит символ @!");
    };
    if (comment.value.length > 500) {
        errors.push("Комментарий должен быть не более 500 символов!");
    };
    return errors.join(" ");
}
