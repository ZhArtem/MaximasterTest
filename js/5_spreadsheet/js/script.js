const table = document.querySelector(".table");
const btnAddRow = document.querySelector(".add-row");
const btnDelRow = document.querySelector(".del-row");
const btnAddCol = document.querySelector(".add-col");
const btnDelCol = document.querySelector(".del-col");
const defaultTableArr = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

function updateStorage(arr) {
    localStorage.setItem("table", JSON.stringify(arr));
}

function readStorage() {
    return JSON.parse(localStorage.getItem("table"));
}

function updateTable() {
    table.innerHTML = "";
    for (let row of tableArr) {
        let tr = document.createElement("tr");
        for (let cell of row) {
            let inp = document.createElement("input");
            inp.value = cell;
            inp.setAttribute("disabled", "disabled");
            let td = document.createElement("td");
            td.append(inp);
            tr.append(td);
        }
        table.append(tr);
    };
}

function addRow() {
    arr = [];
    for (let i = 0; i < tableArr[0].length; i++) {
        arr.push("");
    };
    tableArr.push(arr);
    updateTable();
    updateStorage(tableArr);
}

function delRow() {
    if (tableArr.length > 1) {
        let result = true;
        const lastRow = tableArr[tableArr.length - 1];
        for (cell of lastRow) {
            if (cell) {
                result = confirm("Удаление строки приведёт к потере данных. Продолжить?");
                break;
            }
        }
        if (result) {
            tableArr.pop();
            updateTable();
            updateStorage(tableArr);
        }
    } else {
        alert("Последнюю строку удалить нельзя!");
    }
}

function addCol() {
    for (let row of tableArr) {
        row.push("");
    };
    updateTable();
    updateStorage(tableArr);
}

function delCol() {
    if (tableArr[0].length > 1) {
        let result = true;
        for (let row of tableArr) {
            const lastCell = row[row.length - 1];
            if (lastCell) {
                result = confirm("Удаление столбца приведёт к потере данных. Продолжить?");
                break;
            }
        };
        if (result) {
            for (let row of tableArr) {
                row.pop();
            }
            updateTable();
            updateStorage(tableArr);
        }
    } else {
        alert("Последный столбец удалить нельзя!");
    }
}

function insertValue(evt) {
    let curCol = 0;
    let curRow = 0;
    const target = evt.target;
    if (target.nodeName === "INPUT") {
        curCol = target.parentElement.cellIndex;
        curRow = target.parentElement.parentElement.rowIndex;
    };
    target.removeAttribute("disabled");
    target.focus();
    target.addEventListener("blur", () => {
        tableArr[curRow][curCol] = target.value;
        updateStorage(tableArr);
    }, true);
};


if (!localStorage.getItem("table")) {
    updateStorage(defaultTableArr);
};
let tableArr = readStorage();
updateTable();
table.addEventListener("dblclick", function(evt) { 
    insertValue(evt)
});
table.addEventListener("touchstart", function(evt) { 
    insertValue(evt)
});
btnAddRow.addEventListener("click", addRow);
btnDelRow.addEventListener("click", delRow);
btnAddCol.addEventListener("click", addCol);
btnDelCol.addEventListener("click", delCol);
