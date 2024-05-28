const readline = require('readline');

// Создаем интерфейс для чтения данных из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для вычисления значения выражения
function solve(expression, xValue) {
    if (typeof expression !== 'string' || typeof xValue !== 'number') {
        throw new Error("Invalid input");
    }

    let safeExpression = expression.replace(/x/g, xValue);

    if (!/^[0-9+\-*/\s()]*$/.test(safeExpression)) {
        throw new Error("Invalid characters in expression");
    }

    try {
        let result = eval(safeExpression);
        return result;
    } catch (e) {
        throw new Error("Invalid expression");
    }
}

// Считываем выражение и значение переменной x с консоли
rl.question('Введите математическое выражение: ', (expression) => {
    rl.question('Введите значение переменной x: ', (xValue) => {
        try {
            // Преобразуем значение x в число
            xValue = Number(xValue);
            if (isNaN(xValue)) {
                throw new Error("x должно быть числом");
            }

            // Вычисляем и выводим результат
            const result = solve(expression, xValue);
            console.log(`Результат: ${result}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            // Закрываем интерфейс readline
            rl.close();
        }
    });
});
