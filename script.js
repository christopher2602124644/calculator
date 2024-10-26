function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Jika pengguna menekan akar kuadrat, tambahkan 'Math.sqrt(' ke tampilan
    if (value === '√') {
        display.value += 'Math.sqrt(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Mengganti '^' dengan '**' untuk eval
        let expression = display.value.replace(/\^/g, '**');

        // Menangani fungsi trigonometri dan logaritma
        expression = expression.replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin(Math.PI * $1 / 180)');
        expression = expression.replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos(Math.PI * $1 /  180)');
        expression = expression.replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan(Math.PI * $1 / 180)');

        // Menangani akar kuadrat
        expression = expression.replace(/Math\.sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');

        // Evaluasi ekspresi
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}