document.addEventListener('DOMContentLoaded', function () {
    var textInput = document.getElementById('textInput');
    var countDisplay = document.getElementById('count');
    textInput.addEventListener('input', function () {
        var textLength = textInput.value.length;
        countDisplay.textContent = textLength + ' 글자';
    });
});
