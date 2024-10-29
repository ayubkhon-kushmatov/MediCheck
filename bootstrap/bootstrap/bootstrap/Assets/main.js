var симптомы = ["Боль в животе (боль в животе), длительная",
    "Боль в животе (боль в животе), краткосрочная",
    "Проблемы с лодыжками",
    "Проблемы с грудью у мужчин",
    "Проблемы с грудью у женщин",
    "Боль в груди у младенцев и детей",
    "Боль в груди, острая",
    "Боль в груди, хроническая",
    "Простуда и грипп",
    "Кашель",
    "Диарея",
    "Проблемы с ушами",
    "Проблемы с дефекацией или запорами",
    "Проблемы с дефекацией или запорами у младенцев и детей",
    "Проблемы с глазами"];

window.onload = function () {
    if (window.innerWidth > 650) {
        var a1 = document.getElementById('Que');
        var a2 = document.getElementById('Cau');
        var a3 = document.getElementById('btnCau');
        a1.style.display = "block";
        a2.style.display = "block";
        a3.style.display = "none";
    }
    var select = document.getElementById("Symptomps");
    for (let i = 0; i < симптомы.length; i++) {
        var option = document.createElement('option');
        option.text = симптомы[i];
        option.value = i;
        select.add(option);
    }
    selectQue(0);
};

function handleScreenWidth(a1, a2, a3) {
    if (a1 && a1.style) {
        a1.style.display = "block";
    }
    if (window.innerWidth < 650) {
        if (a2 && a2.style) {
            a2.style.display = "none";
        }
        if (a3 && a3.style) {
            a3.style.display = "none";
        }
    } else {
        if (a2 && a2.style) {
            a2.style.display = "block";
        }
        if (a3 && a3.style) {
            a3.style.display = "none";
        }
    }
}


function selectQue(params) {
    if (window.innerWidth < 650) {
        var a1 = document.getElementById('Que');
        var a2 = document.getElementById('Cau');
        var a3 = document.getElementById('btnCau');
        a1.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
    }
    var Question = que[params];
    var listQuestion = document.getElementById('Questions');
    var possibleQue = document.getElementById('possibleQue');

    listQuestion.innerHTML = " ";
    possibleQue.innerHTML = " ";
    for (let i = 0; i < Question.length; i++) {
        var listItem = document.createElement('li');
        var ans = '<p class="font-medium">' + Question[i] + '</p><div class="form-check"><input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="' + i + '" value="yes" onclick="funPossibleCause(this.name)"><label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">Да</label></div><div class="form-check"><input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="' + i + '" value="No" onclick="funPossibleCauseNo(this.name)" ><label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">Нет</label>';

        listItem.innerHTML = ans;
        listItem.className = "px-6 py-2 border border-gray-200 w-full rounded m-1";
        listQuestion.appendChild(listItem);
    }
}

function funPossibleCause(params) {
    var possibleQue = document.getElementById('possibleQue');
    possibleQue.innerHTML = ""; // Очищаем содержимое

    var getSymptomValue = document.getElementById('Symptomps');
    var strUser = getSymptomValue.options[getSymptomValue.selectedIndex].value;

    var getQuestionValue = params;
    var Causes = causes[strUser][getQuestionValue];
    var listCause = document.createElement('li');
    var Diagnosis = "<h3 class='font-medium text-red-500'>Диагноз</h3><p>" + Causes[0] + "</p>";
    var selfCare = "<h3 class='font-medium text-green-500'>Рекомендация</h3><p>" + Causes[1] + "</p>";

    listCause.innerHTML = Diagnosis + selfCare;
    listCause.className = "px-6 py-2 border border-gray-200 w-full rounded m-1";

    possibleQue.appendChild(listCause);

    // Проверяем, существует ли элемент, прежде чем изменять его стиль
    var a1 = document.getElementById('Que');
    var a2 = document.getElementById('Cau');
    var a3 = document.getElementById('btnCau');

    if (window.innerWidth < 650) {
        if (a1) a1.style.display = "none";
        if (a2) a2.style.display = "block";
        if (a3) a3.style.display = "block";
    } else {
        if (a1) a1.style.display = "block";
        if (a2) a2.style.display = "none";
        if (a3) a3.style.display = "none";
    }
}


function funPossibleCauseNo(params) {
    var possibleQue = document.getElementById('possibleQue');

    possibleQue.innerHTML = " ";
}

function backToQue() {
    if (window.innerWidth < 650) {
        var a1 = document.getElementById('Que');
        var a2 = document.getElementById('Cau');
        var a3 = document.getElementById('btnCau');
        a1.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
    }
}
