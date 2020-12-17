console.log("my name is rupesh gupta");

var btnTranslate = document.querySelector("#btn-translate")

var btnReset = document.querySelector("#btn-reset")

var input = document.querySelector("#input-text");

var output = document.querySelector("#output-text")


// output.value = "";


var serverURL = "https://api.funtranslations.com/translate/valyrian.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = input.value;

    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

btnReset.addEventListener("click", () => {
    input.value = "";
    output.value = "";
});