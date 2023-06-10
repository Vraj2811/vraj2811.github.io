let htmlcode = document.getElementById('html')
let csscode = document.getElementById('css')
let jscode = document.getElementById('js')
let output = document.querySelector('.output')

const clearButton = document.querySelector('#clear-button');
const runButton = document.querySelector('#run-button');

clearButton.addEventListener('click', () => {
    htmlcode.value = "";
    csscode.value = "";
    jscode.value = "";
    output.contentDocument.body.innerHTML = "";
});

runButton.addEventListener('click', () => {
    var code = htmlcode.value + "<style>" + csscode.value + "</style>";
    output.contentDocument.body.innerHTML = code;
    output.contentWindow.eval(jscode.value);
});