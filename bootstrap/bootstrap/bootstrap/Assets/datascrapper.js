function main() {
    var paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);
    var textArray = [];
    for (let i = 0; i < paragraphs.length; i++) {
        textArray.push(paragraphs[i].innerText);
    }
    console.log(textArray);
}

function question() {
    var questions = document.getElementsByClassName("question");
    console.log(questions);
    var questionTextArray = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].childNodes[0]) { // Проверяем наличие childNodes[0]
            questionTextArray.push(questions[i].childNodes[0].innerText);
        }
    }
    console.log(questionTextArray);
}

function causes() {
    var outputs = document.getElementsByClassName("output");
    var resultArray = [];
    for (let i = 0; i < outputs.length; i++) {
        var causeArray = [];
        for (let j = 0; j < outputs[i].childElementCount; j++) {
            // Проверяем, что childNodes[j] существует
            if (outputs[i].childNodes[j]) {
                // Убедитесь, что вы получаете нужные элементы
                if (j === 1 || j === 5) {
                    causeArray.push(outputs[i].childNodes[j].innerText);
                }
            }
        }
        resultArray.push(causeArray);
    }
    console.log("Causes array:", resultArray);
}
