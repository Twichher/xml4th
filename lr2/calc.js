
window.onload = function() { 

    let a = '';
    let b = '';
    let expressionResult = '';
    let selectedOperation = null;
    let newOperation = false;
    
    // окно вывода результата
    const outputElement = document.getElementById("result");
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation ) {
            if (newOperation) {
                a = '';
                newOperation = false;
            }
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit;
            }
            outputElement.innerHTML = a;
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });
    
    // функция выполнения операции и обновления результата
    function performOperation() {
        if (a === '' || b === '' || !selectedOperation) return;

        let result;
        switch(selectedOperation) { 
            case 'x':
                result = (+a) * (+b);
                break;
            case '+':
                result = (+a) + (+b);
                break;
            case '-':
                result = (+a) - (+b);
                break;
            case '/':
                result = (+a) / (+b);
                break;
        }
        
        expressionResult = result.toString();
        a = expressionResult;
        b = '';
        selectedOperation = null;
        outputElement.innerHTML = a;
        console.log(a)
    }

    // установка колбек-функций для кнопок операций
    function onOperationButtonClicked(operation) {
        if (a === '') return;
        if (b !== '') performOperation();
        selectedOperation = operation;
        newOperation = true;
    }

    document.getElementById("btn_op_mult").onclick = function() { 
        onOperationButtonClicked('x');
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        onOperationButtonClicked('+');
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        onOperationButtonClicked('-');
    }
    document.getElementById("btn_op_div").onclick = function() { 
        onOperationButtonClicked('/');
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = '';
        b = '';
        selectedOperation = '';
        expressionResult = '';
        outputElement.innerHTML = 0;
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        console.log("Eauql cliked")
        console.log(a, b, selectedOperation)
        if (a === '' || b === '' || !selectedOperation)
            return;

        performOperation();
        newOperation = true; // Добавлено, чтобы можно было продолжать с новым числом после "="
    }

    // кнопка смены знака
    document.getElementById("btn_op_sign").onclick = function() { 
        if (selectedOperation) {
            if (b) {
                b = (-parseFloat(b)).toString();
                outputElement.innerHTML = b;
            }
        } else {
            if (a) {
                a = (-parseFloat(a)).toString();
                outputElement.innerHTML = a;
            }
        }
    }

    // кнопка процента
    document.getElementById("btn_op_percent").onclick = function() { 
        if (selectedOperation) {
            if (b) {
                b = (parseFloat(b) / 100).toString();
                outputElement.innerHTML = b;
            }
        } else {
            if (a) {
                a = (parseFloat(a) / 100).toString();
                outputElement.innerHTML = a;
            }
        }
    }

    // кнопка факториала
    document.getElementById("btn_op_fac").onclick = function() { 
        if (selectedOperation) {
            if (b) {
                b = factorial(parseInt(b)).toString();
                outputElement.innerHTML = b;
            }
        } else {
            if (a) {
                a = factorial(parseInt(a)).toString();
                outputElement.innerHTML = a;
            }
        }
    }

    function factorial(n) {
        if (n < 0) return 'Error';
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
};

