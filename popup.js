document.addEventListener('DOMContentLoaded', function () {
    var textInput = document.getElementById('textInput');
    var countDisplayTotal = document.getElementById('countTotal');
    var countDisplayNoSpaces = document.getElementById('countNoSpaces');

    textInput.addEventListener('input', function () {
        var text = textInput.value;
        var textLengthTotal = text.length;
        var textLengthNoSpaces = text.replace(/\s/g, '').length; // 공백 제거 후 글자 수 계산

        countDisplayTotal.textContent = textLengthTotal + ' 글자 (공백 포함)';
        countDisplayNoSpaces.textContent = textLengthNoSpaces + ' 글자 (공백 제외)';
    });
});
