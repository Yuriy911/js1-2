
var x = prompt('x введите число', ''),
    n = prompt('n введите степень', '');

if (n <= 1) {
    alert('введите степень больше еденицы');
} else {
    alert( pow(x, n));
}

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }
    console.log(result);
    return result;
}



