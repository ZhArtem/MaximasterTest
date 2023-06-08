const url = "http://exercise.develop.maximaster.ru/service/cpu/";
const ctx = document.getElementById("cpuChart");
const info = document.querySelector(".info");
let countAllResponse = 0;
let countErrorResponse = 0;
let lastNum = 0;


const cpuChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "График загруженности CPU, %",
            data: [],
            borderWidth: 2,
            borderColor: "crimson",
            backgroundColor: "burlywood",
            fill: true,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            }
        }
    }
});

async function sendRequest() {
    let response = await fetch(url);
    let num = await response.json();
    countAllResponse++;

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    
    if (num != 0) {
        addData(cpuChart, countAllResponse, num);
        lastNum = num;
    } else {
        addData(cpuChart, countAllResponse, lastNum);
        countErrorResponse++;
    }
    info.textContent = `Всего запросов: ${countAllResponse}. Запросов, вернувших ошибку: ${Math.round(countErrorResponse * 100 / countAllResponse)} %`;
}


let timerId = setInterval(() => sendRequest(), 5000);
setTimeout(() => {
    clearInterval(timerId); alert("Таймер остановлен. Запросы больше не отправляются");
}, 600000);